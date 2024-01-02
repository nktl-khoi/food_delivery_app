import {StyleSheet} from 'react-native';
import {useCallback} from 'react';
import GenericFlatList from '../../components/displays/generics/GenericFlatList';
import {ItemTitleText} from '../../components/texts/ItemTitleText';
import ItemReportWithData from '../../admin_screen/account_details/display/ItemReportWithData';

type ThisProps = {
  data: ArrayLike<any>;
  navigation: any;
  title: string;
};

export default function ReportListBan(props: ThisProps): JSX.Element {
  const onPressItem = (item: any) => {
    props.navigation.navigate('ReportDetailBanScreen', {
      reportDetailId: item.id,
    });
  };
  const memorizedValue = useCallback(
    ({item, index}: {item: any; index: number}) => (
      <ItemReportWithData
        key={index}
        data={item}
        isMark={false}
        onPressItem={() => onPressItem(item)}
      />
    ),
    [props.data],
  );

  return (
    <GenericFlatList
      data={props.data}
      renderItem={memorizedValue}
      contentContainerStyle={styles.container}
      ListHeaderComponent={<ItemTitleText>{props.title}</ItemTitleText>}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
});
