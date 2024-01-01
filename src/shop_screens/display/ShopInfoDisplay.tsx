import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {SectionText} from '../../components/texts/SectionText';
import {GenericText} from '../../components/texts/generics/GenericText';
import {useQuery} from '@apollo/client';
import {GET_SHOP_BY_ID} from '../../screens/vendor_details/VendorDetailsQuery';
import ShopAvatarDisplay from './ShopAvatarDisplay';
import {OnPressItem} from '../../types/GenericType';

type ThisProps = {
  id: string;
  canReport?: boolean;
  onPressReport?: OnPressItem;
  navigation?: any;
};

export default function ShopInfoDisplay(props: ThisProps): JSX.Element {
  const {data, loading} = useQuery(GET_SHOP_BY_ID, {
    variables: {
      getShopById: props.id,
    },
  });

  const onPressReport = () => {
    props.navigation.navigate('ReportVendorScreen', {
      accountReportedId: data?.getShopById?.user?.account?.id,
    });
  };

  if (loading) return <ActivityIndicator size={'small'} />;
  return (
    <View style={styles.container}>
      <ShopAvatarDisplay
        avatarUri={data?.getShopById?.imageUri}
        shopName={data?.getShopById?.shopName}
        shopPhoneNumber={data?.getShopById?.shopPhoneNumber}
        canReport={props.canReport}
        onPressReport={onPressReport}
      />

      <View>
        <SectionText>Address</SectionText>
        <GenericText>{data?.getShopById?.shopAddress}</GenericText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
  imageAndName: {
    flexDirection: 'row',
    gap: 20,
  },
  button: {
    paddingVertical: 12,
  },
});
