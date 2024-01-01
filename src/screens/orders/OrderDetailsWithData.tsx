import {ScrollView, StyleSheet, View} from 'react-native';
import ItemOrder from './display/ItemOrder';
import {PriceText} from '../../components/texts/PriceText';
import {ItemTitleText} from '../../components/texts/ItemTitleText';
import {
  convertDateTo_HM_DMY,
  convertMillisecondsToDate,
} from '../../utils/dateConvert';
import colors from '../../styles/colors';
import {GenericText} from '../../components/texts/generics/GenericText';
import ButtonCancelOrder from './display/ButtonCancelOrder';
import {OrderStatus, UserRole} from '../../types/constants';
import StatusDisplay from '../cart/tabs/on_going/StatusDisplay';
import AvatarDisplay from '../account/display/AvatarDisplay';
import ShopAvatarDisplay from '../../shop_screens/display/ShopAvatarDisplay';
import ButtonAcceptOrder from './display/ButtonAcceptOrder';
import ButtonCompleteOrder from './display/ButtonCompleteOrder';

type ThisProps = {
  navigation: any;
  data: any;
};

export default function OrderDetailsWithData(props: ThisProps): JSX.Element {
  const orderId = props.data.id;
  const deliveryAddress = props.data.deliveryAddress;
  const commentary = props.data.commentary;
  const totalCost = props.data.totalCost;
  const status = props.data.status;
  const avatarUri = props.data.user.imageUrl;
  const userEmail = props.data.user.account.email;
  const userName = props.data.user.name;
  const phoneNumber = props.data.user.phoneNumber;
  const loginAs =
    props.data.productSize.product.productSubcategory.productCategory.shop.user
      .loginAs;

  const shopAvatarUri =
    props.data.productSize.product.productSubcategory.productCategory.shop
      .imageUri;
  const shopName =
    props.data.productSize.product.productSubcategory.productCategory.shop
      .shopName;
  const shopPhone =
    props.data.productSize.product.productSubcategory.productCategory.shop
      .shopPhoneNumber;

  const deliveryTime = convertMillisecondsToDate(props.data.deliveredAt);
  const deliveryString = convertDateTo_HM_DMY(deliveryTime);

  const createAtTime = convertMillisecondsToDate(props.data.createdAt);
  const createAtString = convertDateTo_HM_DMY(createAtTime);

  const updateAtTime = convertMillisecondsToDate(props.data.updatedAt);
  const updateAtString = convertDateTo_HM_DMY(updateAtTime);

  console.log('LOGIN AS: ', loginAs);
  const onPressReport = () => {
    props.navigation.navigate('ReportVendorScreen', {
      accountReportedId: props.data.user.account.id,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <ItemTitleText>Shop</ItemTitleText>
        <ShopAvatarDisplay
          avatarUri={shopAvatarUri}
          shopName={shopName}
          shopPhoneNumber={shopPhone}
        />
      </View>

      <View>
        <ItemTitleText>Customer</ItemTitleText>
        <View style={styles.customer}>
          {loginAs !== UserRole.SHOP_OWNER && (
            <AvatarDisplay
              avatarUri={avatarUri}
              name={userName}
              email={userEmail}
            />
          )}

          {loginAs === UserRole.SHOP_OWNER && (
            <AvatarDisplay
              avatarUri={avatarUri}
              name={userName}
              email={userEmail}
              onPressReport={onPressReport}
              canReport
            />
          )}

          <View>
            <ItemTitleText>Phone number</ItemTitleText>
            <GenericText style={styles.text}>{phoneNumber}</GenericText>
          </View>
        </View>
      </View>

      <View>
        <ItemTitleText>Address</ItemTitleText>
        <GenericText style={styles.text}>{deliveryAddress}</GenericText>
      </View>

      <View>
        <ItemTitleText>Status </ItemTitleText>
        <StatusDisplay isHorizontal status={status} />
      </View>

      <View>
        <ItemTitleText>Order create at</ItemTitleText>
        <GenericText style={styles.text}>{createAtString}</GenericText>
      </View>

      <View>
        <ItemTitleText>Order update at</ItemTitleText>
        <GenericText style={styles.text}>{updateAtString}</GenericText>
      </View>

      <View>
        <ItemTitleText>Delivery time</ItemTitleText>
        <GenericText style={styles.text}>{deliveryString}</GenericText>
      </View>

      <View>
        <ItemTitleText>Note</ItemTitleText>
        <GenericText style={styles.text}>{commentary}</GenericText>
      </View>

      <View>
        <ItemTitleText>Product</ItemTitleText>
        <ItemOrder
          id={orderId}
          imageUri={props.data.productSize.product.imageUri}
          foodName={props.data.productSize.product.title}
          size={props.data.productSize.title}
          priceValue={props.data.productSize.fullPrice}
          amount={props.data.count}
        />
      </View>

      <View style={{flexDirection: 'row'}}>
        <ItemTitleText>Total: </ItemTitleText>
        <PriceText priceValue={totalCost}></PriceText>
      </View>

      {loginAs === UserRole.SHOP_OWNER && status === OrderStatus.PENDING && (
        <ButtonAcceptOrder orderId={orderId} navigation={props.navigation} />
      )}

      {loginAs === UserRole.SHOP_OWNER && status === OrderStatus.ON_THE_WAY && (
        <ButtonCompleteOrder orderId={orderId} navigation={props.navigation} />
      )}

      {status === OrderStatus.PENDING && (
        <ButtonCancelOrder navigation={props.navigation} orderId={orderId} />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    gap: 20,
  },
  text: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    color: colors.darkGrey,
  },
  status: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  customer: {
    paddingHorizontal: 12,
    backgroundColor: colors.lightGrey,
    borderRadius: 20,
  },
});
