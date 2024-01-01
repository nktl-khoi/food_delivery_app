import {Pressable, StyleSheet} from 'react-native';
import {Avatar} from '@rneui/themed';

type ThisProps = {
  avatarUri: string;
  onPressImage?: () => void;
};

export default function ProductAvatarDisplay(props: ThisProps): JSX.Element {
  return (
    <Pressable style={styles.avatar} onPress={props.onPressImage}>
      <Avatar
        source={{
          uri: props.avatarUri
            ? props.avatarUri
            : 'https://res.cloudinary.com/dxz5uumy7/image/upload/v1702088164/Food_data/default/istockphoto-1354776457-612x612.jpg',
        }}
        size={150}
        rounded
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  avatar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
});
