import colors from '../../styles/colors';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ShopCategoryScreen from './ShopCategoryScreen';
import AddProductShopScreen from './AddProductShopScreen';
import AddSubCategoryScreen from './AddSubCategoryScreen';
import FoodDetailsScreen from '../../screens/food_details/FoodDetailsScreen';
import EditProductScreen from '../shop_food_details/EditProductScreen';
import AddProductTagScreen from '../shop_food_details/AddProductTagScreen';
import AddProductSizeScreen from '../shop_food_details/AddProductSizeScreen';
import AllFoodInShopGridDisplay from '../../screens/vendor_details/AllFoodInShopGridDisplay';
import ReviewFoodScreen from '../../screens/food_details/ReviewFoodScreen';
import ReportVendorScreen from '../../screens/vendor_details/ReportVendorScreen';
import EditIngredientsScreen from '../shop_food_details/EditIngredientsScreen';
import AddIngredientsScreen from '../shop_food_details/AddIngredientsScreen';

type AccountStackParams = {
  ShopCategoryScreen: undefined;
  AddProductShopScreen: undefined;
  AddSubCategoryScreen: undefined;
  FoodDetailsScreen: undefined;
  EditProductScreen: undefined;
  AddProductSizeScreen: undefined;
  AddProductTagScreen: undefined;
  AddIngredientsScreen: undefined;
  EditIngredientsScreen: undefined;
  VendorFoodDetails: undefined;
  ReviewFoodScreen: undefined;
  ReportVendorScreen: undefined;
};

const CategoriesNavigators = createNativeStackNavigator<AccountStackParams>();

export default function ShopCategoryStacks(): JSX.Element {
  return (
    <CategoriesNavigators.Navigator
      initialRouteName="ShopCategoryScreen"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colors.white,
        },
      }}>
      <CategoriesNavigators.Screen
        name="ShopCategoryScreen"
        component={ShopCategoryScreen}
        options={{headerTransparent: true, headerShown: true, headerTitle: ''}}
      />
      <CategoriesNavigators.Screen
        name="AddProductShopScreen"
        component={AddProductShopScreen}
        options={{headerShown: true, title: 'Add product'}}
      />
      <CategoriesNavigators.Screen
        name="AddSubCategoryScreen"
        component={AddSubCategoryScreen}
        options={{headerShown: true, title: 'Add subcategory'}}
      />
      <CategoriesNavigators.Screen
        name="FoodDetailsScreen"
        component={FoodDetailsScreen}
        options={{headerTransparent: true, headerShown: true, headerTitle: ''}}
      />
      <CategoriesNavigators.Screen
        name="EditProductScreen"
        component={EditProductScreen}
        options={{headerShown: true, title: 'Edit product'}}
      />
      <CategoriesNavigators.Screen
        name="AddProductSizeScreen"
        component={AddProductSizeScreen}
        options={{headerShown: true, title: 'Add product size'}}
      />
      <CategoriesNavigators.Screen
        name="AddIngredientsScreen"
        component={AddIngredientsScreen}
        options={{headerShown: true, title: 'Add ingredients'}}
      />
      <CategoriesNavigators.Screen
        name="EditIngredientsScreen"
        component={EditIngredientsScreen}
        options={{headerShown: true, title: 'Edit ingredients'}}
      />
      <CategoriesNavigators.Screen
        name="AddProductTagScreen"
        component={AddProductTagScreen}
        options={{headerShown: true, title: 'Add product tag'}}
      />
      <CategoriesNavigators.Screen
        name="VendorFoodDetails"
        component={AllFoodInShopGridDisplay}
        options={{headerShown: true, title: 'All products'}}
      />
      <CategoriesNavigators.Screen
        name="ReviewFoodScreen"
        component={ReviewFoodScreen}
        options={{headerShown: true, title: 'List reviews'}}
      />
      <CategoriesNavigators.Screen
        name="ReportVendorScreen"
        component={ReportVendorScreen}
        options={{headerShown: true, title: 'Report user'}}
      />
    </CategoriesNavigators.Navigator>
  );
}
