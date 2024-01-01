import {Button, ButtonProps, Dialog} from '@rneui/themed';

import {useState} from 'react';
import {View} from 'react-native';

import {ItemSubtitleText} from '../texts/ItemSubtitleText';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

type ThisProps = {
  onPressOk: () => void;
  bigTitleText: string;
  titleText: string;
} & ButtonProps;

export default function ConfirmDialog(props: ThisProps): JSX.Element {
  const [visible, setVisible] = useState(false);

  const deleteAction = () => {
    setVisible(false);
    props.onPressOk();
  };
  return (
    <View>
      <Button
        buttonStyle={[
          {backgroundColor: 'transparent', marginBottom: 4},
          props.buttonStyle,
        ]}
        onPress={() => setVisible(true)}
        icon={props.icon}
        title={props.title}
        titleStyle={props.titleStyle}
      />

      <Dialog isVisible={visible} onBackdropPress={() => setVisible(false)}>
        <Dialog.Title
          title={props.bigTitleText}
          titleStyle={{color: colors.red}}
        />
        <ItemSubtitleText style={{fontSize: 16}}>
          {props.titleText}
        </ItemSubtitleText>
        <Dialog.Actions>
          <Dialog.Button
            title="YES"
            onPress={deleteAction}
            titleStyle={{color: colors.primary, fontFamily: fonts.POPPINS_BOLD}}
          />
          <Dialog.Button
            title="NO"
            titleStyle={{color: colors.primary, fontFamily: fonts.POPPINS_BOLD}}
            onPress={() => setVisible(false)}
          />
        </Dialog.Actions>
      </Dialog>
    </View>
  );
}
