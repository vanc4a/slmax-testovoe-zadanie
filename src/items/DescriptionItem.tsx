import React, {useContext} from 'react';
import {View} from 'react-native';
import {Text, Divider} from '@react-native-material/core';
import {Styles} from '../styles';
import {Theme} from '../App';

const DescriptionItem = ({
  description,
  date,
}: {
  description: string;
  date: string;
}) => {
  const theme = useContext(Theme);
  return (
    <View>
      <Text
        style={Styles.noteDateText}
        variant={'subtitle2'}
        color={theme.descriptionText}>
        {date}
      </Text>
      <Text
        style={Styles.discriptionText}
        variant={'subtitle1'}
        color={theme.descriptionText}>
        {description}
      </Text>
      <Divider color={theme.devider} />
    </View>
  );
};

export default DescriptionItem;
