import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {useQuery} from '@apollo/client';
import {useFocusEffect} from '@react-navigation/native';
import {NotiStatus} from '../../../types/constants';
import {GET_USER_NOTIFICATION} from '../NotifyQuery';
import EmptyAccountTab from '../../../admin_screen/accounts/generic/EmptyAccountTab';
import NotificationList from '../display/NotificationList';

type ThisProps = {
  navigation: any;
  status: NotiStatus;
  userId: string;
  tabIndex: number;
};

export default function GenericTabUserNotification(
  props: ThisProps,
): JSX.Element {
  const {data, loading, refetch} = useQuery(GET_USER_NOTIFICATION, {
    variables: {
      status: props.status,
      userId: props.userId,
    },
  });

  useFocusEffect(() => {
    refetch();
  });

  useEffect(() => {
    refetch();
  }, [props.tabIndex]);

  return (
    <>
      {data === null || data?.getAllNotificationOfUser?.length <= 0 ? (
        <EmptyAccountTab />
      ) : (
        <View style={styles.container}>
          {loading ? (
            <ActivityIndicator size={'small'} />
          ) : (
            <NotificationList
              data={
                data?.getAllNotificationOfUser
                  ? data?.getAllNotificationOfUser
                  : null
              }
              navigation={props.navigation}
              title={'All notifications'}
              refetch={refetch}
            />
          )}
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
});
