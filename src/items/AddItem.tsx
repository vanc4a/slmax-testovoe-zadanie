import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import {interval, Styles} from '../styles';
import {Divider, IconButton} from '@react-native-material/core';
import Arrow from 'react-native-vector-icons/AntDesign';
import Note from '../models/Note';

const AddItem = ({createItem}: {createItem: Function}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addItem = () => {
    createItem(new Note(title, description));
    setTitle('');
    setDescription('');
  };

  return (
    <View style={[Styles.itemContainer, {paddingHorizontal: interval}]}>
      <TextInput
        placeholder="Название"
        value={title}
        onChangeText={event => setTitle(event)}
      />
      <Divider />
      <View style={Styles.addItemInputsContainer}>
        <TextInput
          placeholder={'Текст описание'}
          value={description}
          onChangeText={event => setDescription(event)}
        />
        <IconButton
          disabled={title.length < 1 || description.length < 1}
          onPress={() => addItem()}
          style={Styles.addItemIconButton}
          icon={<Arrow name="right" />}
        />
      </View>
    </View>
  );
};

export default AddItem;
