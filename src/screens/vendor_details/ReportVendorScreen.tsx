import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import {ItemTitleText} from '../../components/texts/ItemTitleText';
import {useState} from 'react';
import GenericBasicInfoEditItem from '../account/generics/GenericBasicInfoEditItem';
import SaveCancelButton from '../account/display/SaveCancelButton';
import {ErrorMessageText} from '../../components/texts/ErrorMessageText';
import {useMutation, useQuery} from '@apollo/client';
import {CREATE_REPORT_ACCOUNT} from './VendorDetailsQuery';
import {CreateReportInputType} from '../../types/ItemType';
import Snackbar from 'react-native-snackbar';
import {FIREBASE_AUTH} from '../../auth/firebaseConfig';
import {GET_USER_BY_FIREBASE_UID} from '../account/AccountQuery';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function ReportVendorScreen(props: ThisProps): JSX.Element {
  const {data, loading} = useQuery(GET_USER_BY_FIREBASE_UID, {
    variables: {
      id: FIREBASE_AUTH.currentUser?.uid,
    },
  });

  if (loading) return <ActivityIndicator size={'small'} />;
  return (
    <ReportVendorWithData
      navigation={props.navigation}
      accountReportedId={props.route.params.accountReportedId}
      reporterId={data?.getUserByFirebaseUID?.account?.id}
    />
  );
}

type ReportWithDataProps = {
  navigation: any;
  accountReportedId: string;
  reporterId: string;
};

function ReportVendorWithData(props: ReportWithDataProps): JSX.Element {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [isDisplayError, setDisplayError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [createReport, {loading, data, error}] = useMutation(
    CREATE_REPORT_ACCOUNT,
  );

  const reportAction = async () => {
    if (title === '' || title === null || message === '' || message === null) {
      setErrorMessage('Fields cannot be empty!');
      setDisplayError(true);
      return;
    }

    if (props.accountReportedId === props.reporterId) {
      setErrorMessage('You cannot report yourself!');
      setDisplayError(true);
      return;
    }

    setDisplayError(false);
    let input: CreateReportInputType = {
      title: title,
      message: message,
      accountReportedId: props.accountReportedId,
      reporterId: props.reporterId,
    };
    await createReport({
      variables: {
        reportInput: input,
      },
    }).then(() => {
      Snackbar.show({text: 'Your report created success'});
      props.navigation.goBack();
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <ItemTitleText>Title</ItemTitleText>
        <GenericBasicInfoEditItem
          label={'Title'}
          placeHolder={'Enter your title'}
          value={title}
          onChangedText={setTitle}
          iconName={'drive-file-rename-outline'}
          iconType={'material'}
        />
      </View>

      <View>
        <ItemTitleText>Message</ItemTitleText>
        <GenericBasicInfoEditItem
          label={'Message'}
          placeHolder={'Enter your message'}
          value={message}
          onChangedText={setMessage}
          iconName={'drive-file-rename-outline'}
          iconType={'material'}
        />
      </View>

      {isDisplayError ? (
        <ErrorMessageText>{errorMessage}</ErrorMessageText>
      ) : (
        <View></View>
      )}

      {loading ? (
        <ActivityIndicator size={'small'} />
      ) : (
        <SaveCancelButton
          navigation={props.navigation}
          onPressSave={reportAction}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
});
