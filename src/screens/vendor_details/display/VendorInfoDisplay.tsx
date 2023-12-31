import {Avatar} from '@rneui/themed';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {SectionText} from '../../../components/texts/SectionText';
import {GenericText} from '../../../components/texts/generics/GenericText';
import {useQuery} from '@apollo/client';
import {GET_SHOP_BY_ID} from '../VendorDetailsQuery';

type ThisProps = {
  id: string;
};

export default function VendorInfoDisplay(props: ThisProps): JSX.Element {
  const {data, loading} = useQuery(GET_SHOP_BY_ID, {
    variables: {
      getShopById: props.id,
    },
  });

  if (loading) return <ActivityIndicator size={'small'} />;
  return (
    <View style={styles.container}>
      <View style={styles.imageAndName}>
        <Avatar
          source={{uri: data.getShopById.imageUri}}
          size={90}
          avatarStyle={{borderRadius: 12}}
        />
        <View style={{flex: 1}}>
          <SectionText>{data.getShopById.shopName}</SectionText>
          <GenericText>Hotline: {data.getShopById.shopPhoneNumber}</GenericText>
        </View>
      </View>

      <View>
        <SectionText>Address</SectionText>
        <GenericText>{data.getShopById.shopAddress}</GenericText>
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
