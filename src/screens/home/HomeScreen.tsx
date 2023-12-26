import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {SectionText} from '../../components/texts/SectionText';
import HomeHeaderDisplay from './display/HomeHeaderDisplay';
import VerticalListFood from '../../components/displays/VerticalListFood';
import {useQuery} from '@apollo/client';
import React from 'react';
import {GET_ALL_PRODUCT} from './HomeQuery';
import PopularProducts from './display/PopularProducts';
import RecentProducts from './display/RecentProducts';
import {useFocusEffect} from '@react-navigation/native';

type ThisProps = {
  navigation: any;
  route: any;
};

export default function HomeScreen(props: ThisProps): JSX.Element {
  const {data, loading, refetch} = useQuery(GET_ALL_PRODUCT);

  useFocusEffect(() => {
    refetch();
  });

  if (!loading) {
    return (
      <VerticalListFood
        data={data?.getAllProducts}
        navigation={props.navigation}
        contentContainerStyle={styles.mainContainer}
        listHeaderComponent={
          <View style={styles.headingContainer}>
            <HomeHeaderDisplay navigation={props.navigation} />

            <RecentProducts navigation={props.navigation} />

            <PopularProducts navigation={props.navigation} />

            {/* <View>
   
              <SectionText>Favorite</SectionText>
              <HorizontalListFood
                data={popularFastFoodList}
                navigation={props.navigation}
              />
            </View>

            <View>
            
              <SectionText>Order Again</SectionText>
              <HorizontalListFood
                data={popularFastFoodList}
                navigation={props.navigation}
              />
            </View> */}
            <SectionText>Discovery</SectionText>
          </View>
        }
      />
    );
  } else return <ActivityIndicator size={'large'} />;
}

const styles = StyleSheet.create({
  mainContainer: {
    gap: 12,
    paddingBottom: 32,
    paddingHorizontal: 20,
  },
  headingContainer: {
    gap: 12,
  },
});
