import {ActivityIndicator, View} from 'react-native';
import {SectionText} from '../../../components/texts/SectionText';
import HorizontalListFood from '../../../components/displays/HorizontalListFood';
import {useQuery} from '@apollo/client';
import {GET_POPULAR_PRODUCT} from '../HomeQuery';
import {Suspense} from 'react';

type ThisProps = {
  navigation: any;
};

export default function PopularProducts(props: ThisProps): JSX.Element {
  const {data, loading} = useQuery(GET_POPULAR_PRODUCT);

  if (!loading)
    return (
      <View>
        <SectionText>Popular</SectionText>
        <Suspense fallback={<ActivityIndicator size={'small'} />}>
          <HorizontalListFood
            data={data?.getPopularProducts}
            navigation={props.navigation}
          />
        </Suspense>
      </View>
    );
  else return <ActivityIndicator size={'large'} />;
}
