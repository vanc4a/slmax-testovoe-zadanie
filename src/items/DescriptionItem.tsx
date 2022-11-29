import React from 'react';
import {View} from 'react-native';
import {Text, Divider} from '@react-native-material/core';
import {Styles} from '../styles';

const DescriptionItem = ({
  description,
  date,
}: {
  description: string;
  date: string;
}) => {
  return (
    <View>
      <Text style={Styles.noteDateText} variant={'subtitle2'} color={'#95a5a6'}>
        {date}
      </Text>
      <Text style={Styles.discriptionText} variant={'subtitle1'}>
        {description}
      </Text>
      <Divider />
    </View>
  );
};

export default DescriptionItem;
