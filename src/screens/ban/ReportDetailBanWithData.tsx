import {ScrollView, StyleSheet, View} from 'react-native';

import {ItemSectionText} from '../../components/texts/ItemSectionText';
import {GenericText} from '../../components/texts/generics/GenericText';
import {
  convertDateTo_HM_DMY,
  convertMillisecondsToDate,
} from '../../utils/dateConvert';
import AccountAndShopDisplay from '../../admin_screen/account_details/display/AccountAndShopDisplay';

type ThisProps = {
  navigation: any;
  data: any;
  refetch: any;
};

export default function ReportDetailBanWithData(props: ThisProps): JSX.Element {
  const createAt = convertDateTo_HM_DMY(
    convertMillisecondsToDate(props.data.createdAt),
  );
  const updatedAt = convertDateTo_HM_DMY(
    convertMillisecondsToDate(props.data.updatedAt),
  );
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <ItemSectionText>{props.data.title}</ItemSectionText>
        <GenericText>{props.data.message}</GenericText>
      </View>

      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <GenericText>Created at:</GenericText>
          <GenericText>{createAt}</GenericText>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <GenericText>Update at: </GenericText>
          <GenericText>{updatedAt}</GenericText>
        </View>
      </View>

      <View>
        <ItemSectionText>Report by</ItemSectionText>
        <AccountAndShopDisplay
          account={props.data.reporter}
          navigation={props.navigation}
        />
      </View>

      <View>
        <ItemSectionText>Account was reported</ItemSectionText>
        <AccountAndShopDisplay
          account={props.data.reportAccount.accountReported}
          navigation={props.navigation}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
});
