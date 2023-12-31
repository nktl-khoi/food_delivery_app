import {ActivityIndicator, View} from 'react-native';
import {SectionText} from '../../../components/texts/SectionText';
import HorizontalListFood from '../../../components/displays/HorizontalListFood';
import {useQuery} from '@apollo/client';
import {GET_RECENT_PRODUCT} from '../HomeQuery';
import React, {Suspense} from 'react';

type ThisProps = {
  navigation: any;
};

export default function RecentProducts(props: ThisProps): JSX.Element {
  const {data, loading} = useQuery(GET_RECENT_PRODUCT);

  if (!loading)
    return (
      <View>
        <SectionText>Recent</SectionText>
        <Suspense fallback={<ActivityIndicator size={'small'} />}>
          <HorizontalListFood
            data={data?.getRecentProducts}
            navigation={props.navigation}
          />
        </Suspense>
      </View>
    );
  else return <ActivityIndicator size={'large'} />;
}
