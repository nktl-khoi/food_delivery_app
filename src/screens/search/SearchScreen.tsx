import {Input} from '@rneui/themed';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {SectionText} from '../../components/texts/SectionText';
import ListTagFoodDisplay from '../food_details/display/ListTagFoodDisplay';
import VerticalListFood from '../../components/displays/VerticalListFood';
import HeaderSearchTextInput from '../../components/inputs/HeaderSearchTextInput';
import {Suspense, useState} from 'react';
import {useQuery} from '@apollo/client';
import {SEARCH_PRODUCT} from './SearchQuery';

type ThisProps = {
  navigation: any;
};

export default function SearchScreen(props: ThisProps): JSX.Element {
  const [searchText, setSearchText] = useState('');
  const [isFilter, setFilter] = useState(false);

  const {data, loading, refetch} = useQuery(SEARCH_PRODUCT, {
    variables: {
      text: searchText,
    },
  });

  const goBack = () => {
    props.navigation.goBack();
  };

  return (
    <Suspense fallback={<ActivityIndicator size={'large'} />}>
      <VerticalListFood
        data={data?.searchProduct}
        navigation={props.navigation}
        contentContainerStyle={styles.container}
        listHeaderComponent={
          <View style={styles.head}>
            <HeaderSearchTextInput
              value={searchText}
              onChangeText={setSearchText}
              onPressBack={() => goBack()}
              onPressSearch={() => {}}
              isFilter={isFilter}
              setFilter={setFilter}
            />

            {isFilter && (
              <View>
                <SectionText>Popular tag</SectionText>
                <ListTagFoodDisplay />
              </View>
            )}

            {isFilter && (
              <View>
                <SectionText>Price range</SectionText>
                <View style={styles.minMaxContainer}>
                  <Input
                    keyboardType="numeric"
                    containerStyle={styles.input}
                    placeholder="Min price"></Input>
                  <Input
                    keyboardType="numeric"
                    containerStyle={styles.input}
                    placeholder="Max price"></Input>
                </View>
              </View>
            )}

            <SectionText>Result</SectionText>
          </View>
        }
      />
    </Suspense>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    gap: 12,
  },
  head: {
    gap: 20,
    paddingTop: 20,
  },
  minMaxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  input: {
    flex: 1,
  },
});
