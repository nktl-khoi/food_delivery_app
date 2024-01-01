import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {GET_ACCOUNT_BY_ID} from '../../../accounts/AccountListQuery';
import {useQuery} from '@apollo/client';
import AvatarUserInfoDisplay from '../../display/AvatarUserInfoDisplay';
import AvatarShopInfoDisplay from '../../display/AvatarShopInfoDisplay';
import {SectionText} from '../../../../components/texts/SectionText';
import BanButtonDialog from '../../display/BanButtonDialog';
import {AccountStatus} from '../../../../types/constants';
import {GenericText} from '../../../../components/texts/generics/GenericText';
import colors from '../../../../styles/colors';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function AccountInfoTab(props: ThisProps): JSX.Element {
  const accountId = props.route.params.accountId;

  const {data, loading, refetch} = useQuery(GET_ACCOUNT_BY_ID, {
    variables: {
      id: accountId,
    },
  });

  useFocusEffect(() => {
    refetch();
  });

  if (loading) {
    return <ActivityIndicator size={'small'} />;
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <SectionText>User info</SectionText>
        <AvatarUserInfoDisplay
          data={data?.getAccountById?.user}
          email={data?.getAccountById?.email}
        />
      </View>

      {data?.getAccountById?.user?.shop !== null && (
        <View>
          <SectionText>Owner this shop</SectionText>
          <AvatarShopInfoDisplay data={data?.getAccountById?.user?.shop} />
        </View>
      )}

      {data?.getAccountById?.status !== AccountStatus.BANNED && (
        <BanButtonDialog
          refetch={refetch}
          status={AccountStatus.BANNED}
          accountId={accountId}
          successText={'This account has been banned'}
          titleTextButton={'Are you sure ban this account'}
          titleButton={'BAN'}
          color={colors.red}
        />
      )}

      {data?.getAccountById?.status === AccountStatus.BANNED && (
        <BanButtonDialog
          refetch={refetch}
          status={AccountStatus.NONE}
          accountId={accountId}
          successText={'This account has been unbanned'}
          titleTextButton={'Are you sure unbanned this account'}
          titleButton={'UNBANNED'}
          color={colors.darkGrey}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    gap: 24,
  },
  info: {},
});
