import {StyleSheet} from 'react-native';
import GenericFlatList from '../../../components/displays/generics/GenericFlatList';
import {GenericText} from '../../../components/texts/generics/GenericText';
import colors from '../../../styles/colors';

type ThisProps = {
  data: ArrayLike<any>;
};

export default function ListTagFoodDisplay(props: ThisProps): JSX.Element {
  const memorizedValue = ({item, index}: {item: any; index: number}) => (
    <GenericText key={index} style={styles.mainInfoContainer}>
      {item.title}
    </GenericText>
  );

  return (
    <GenericFlatList
      data={props.data}
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
