import React from 'react';
import { Camera, Trash } from 'phosphor-react-native';
import {
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { styles } from './styles';
import { theme } from '../../theme';

interface Props {
  screenshot: string | null;
  onTakeShoot: () => void;
  onRemoveShoot: () => void;
}

export function ScreenshotButton({ screenshot, onTakeShoot, onRemoveShoot }: Props){
  return (
    <TouchableOpacity 
      onPress={ screenshot ? onRemoveShoot : onTakeShoot}
      style={styles.container}
    >
      {
        screenshot 
        ?
        <View>
          <Image 
            style={styles.image}
            source={{uri: screenshot}} 
          />
          <Trash
            size={22}
            color={theme.colors.text_secondary}
            weight="fill"
            style={styles.removeIcon}
          />
        </View>
        :
        <Camera
        size={24}
        color={theme.colors.text_primary}
        weight="bold"
      />
      }
    </TouchableOpacity>
  );
}