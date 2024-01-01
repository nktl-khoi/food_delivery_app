import {Pressable, StyleSheet, View} from 'react-native';
import {Avatar} from '@rneui/themed';
import {BigTitleText} from '../../../components/texts/BigTitleText';
import {pressableRippleConfig} from '../../../styles/pressable_config';
import {SearchBarButton} from '../../../components/buttons/SearchBarButton';
import colors from '../../../styles/colors';
import {useQuery} from '@apollo/client';
import {GET_USER_BY_FIREBASE_UID} from '../../account/AccountQuery';
import {FIREBASE_AUTH} from '../../../auth/firebaseConfig';

type ThisProps = {
  navigation: any;
};

export default function HomeHeaderDisplay(props: ThisProps): JSX.Element {
  const navigateToAccountScreen = () => {
    props.navigation.navigate('AccountScreen');
  };

  const {data} = useQuery(GET_USER_BY_FIREBASE_UID, {
    variables: {
      id: FIREBASE_AUTH.currentUser?.uid,
    },
  });

  return (
    <View>
      <View style={styles.oval}></View>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <BigTitleText style={{color: colors.white}}>Welcome</BigTitleText>
          <Pressable
            android_ripple={pressableRippleConfig}
            onPress={navigateToAccountScreen}>
            <View style={styles.avatarContainer}>
              <Avatar
                source={{
                  uri: data?.getUserByFirebaseUID?.imageUrl
                    ? data.getUserByFirebaseUID.imageUrl
                    : 'https://res.cloudinary.com/dxz5uumy7/image/upload/v1702088258/Food_data/default/png-transparent-default-avatar-thumbnail.png',
                }}
                size={48}
                rounded
              />
            </View>
          </Pressable>
        </View>
        <SearchBarButton navigation={props.navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 32,
    paddingTop: 48,
    gap: 12,
  },
  avatarContainer: {
    backgroundColor: colors.white,
    padding: 2,
    borderRadius: 90,
  },
  titleContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  oval: {
    alignSelf: 'center',
    width: '60%',
    position: 'absolute',
    height: '100%',
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    top: 0,
    transform: [{scaleX: 2}],
  },
});
