import {StyleSheet} from 'react-native';
import GenericFlatList from '../../../components/displays/generics/GenericFlatList';
import {GenericText} from '../../../components/texts/generics/GenericText';
import colors from '../../../styles/colors';
import {useQuery} from '@apollo/client';
import {GET_ALL_TAGS} from '../../search/SearchQuery';

type ThisProps = {};

export default function ListAllTagDisplay(props: ThisProps): JSX.Element {
  const {data, loading} = useQuery(GET_ALL_TAGS);

  const memorizedValue = ({item, index}: {item: any; index: number}) => (
    <GenericText key={index} style={styles.mainInfoContainer}>
      {item.title}
    </GenericText>
  );

  return (
    <GenericFlatList
      data={data?.getAllTags}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
      renderItem={memorizedValue}
    />
  );
}

const styles = StyleSheet.create({
  mainInfoContainer: {
    backgroundColor: colors.third,
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 12,
    color: colors.darkBlack,
  },
  contentContainer: {gap: 12},
});
