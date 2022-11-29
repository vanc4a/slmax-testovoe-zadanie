import React, {useState} from 'react';
import {View} from 'react-native';
import {ListItem, IconButton} from '@react-native-material/core';
import Arrow from 'react-native-vector-icons/AntDesign';
import Delete from 'react-native-vector-icons/Entypo';
import {interval, Styles} from '../styles';
import Note from '../models/Note';
import GestureRecognizer from 'react-native-swipe-gestures';
import DescriptionItem from './DescriptionItem';

const NoteItem = ({item, removeItem}: {item: Note; removeItem: Function}) => {
  const [isActive, setActive] = useState(false);
  const [timer, setTimer] = useState(false);
  const [onDelete, setDelete] = useState(false);

  const deleteEvent = () => {
    setTimer(true);
    setTimeout(() => removeItem(item.id), 5000);
  };

  return (
    <GestureRecognizer onSwipeLeft={() => setDelete(true)}>
      <View style={{marginBottom: interval / 2}}>
        <View style={[Styles.itemContainer, {padding: 2}]}>
          <ListItem
            title={item.title}
            onPress={() => {
              setDelete(false);
              setTimer(false);
              setActive(!isActive);
            }}
            trailing={
              onDelete ? (
                <IconButton
                  style={Styles.removeButton}
                  onPress={() =>
                    timer ? (setDelete(false), setTimer(false)) : deleteEvent()
                  }
                  icon={
                    <Delete color={'white'} name={timer ? 'ccw' : 'trash'} />
                  }
                />
              ) : (
                <Arrow name={isActive ? 'up' : 'down'} />
              )
            }
          />
        </View>
        {isActive && !onDelete ? (
          <DescriptionItem date={item.date} description={item.description} />
        ) : null}
      </View>
    </GestureRecognizer>
  );
};

export default NoteItem;