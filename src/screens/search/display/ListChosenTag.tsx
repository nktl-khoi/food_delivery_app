import {useQuery} from '@apollo/client';
import ListChosenDisplay from '../../../components/displays/ListChosenDisplay';
import React from 'react';
import {GET_ALL_TAGS} from '../SearchQuery';
import {ActivityIndicator} from 'react-native';

type ThisProps = {
  chosen: string;
  setChosen: (item: string) => void;
};

export default function ListChosenTag(props: ThisProps): JSX.Element {
  const {data, loading} = useQuery(GET_ALL_TAGS);

  const onPressItem = (item: any, index: number) => {
    props.setChosen(item.title);
  };

  if (loading) return <ActivityIndicator size={'small'} />;
  return (
    <ListChosenDisplay
      data={data?.getAllTags}
      chosen={props.chosen}
      setChosen={props.setChosen}
      onPressItem={onPressItem}
    />
  );
}
