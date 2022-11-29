import React, {useContext, useState} from 'react';
import {View, TextInput} from 'react-native';
import {interval, Styles} from '../styles';
import {Divider, IconButton} from '@react-native-material/core';
import Arrow from 'react-native-vector-icons/AntDesign';
import Note from '../models/Note';
import {Theme} from '../App';

const AddItem = ({createItem}: {createItem: Function}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const theme = useContext(Theme);

  const addItem = () => {
    createItem(new Note(title, description));
    setTitle('');
    setDescription('');
  };

  return (
    <View style={[Styles.itemContainer, {paddingHorizontal: interval}]}>
      <TextInput
        placeholderTextColor={theme.addItemText}
        placeholder="Название"
        value={title}
        onChangeText={event => setTitle(event)}
      />
      <Divider color={theme.devider} />
      <View style={Styles.addItemInputsContainer}>
        <TextInput
          placeholderTextColor={theme.addItemText}
          placeholder={'Текст описание'}
          value={description}
          onChangeText={event => setDescription(event)}
        />
        <IconButton
          disabled={title.length < 1 || description.length < 1}
          onPress={() => addItem()}
          style={Styles.addItemIconButton}
          icon={<Arrow name="right" color={theme.arrow} />}
        />
      </View>
    </View>
  );
};

export default AddItem;
