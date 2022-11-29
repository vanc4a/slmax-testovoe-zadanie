import React, {useContext, useState} from 'react';
import {FlatList, View} from 'react-native';
import AddItem from '../items/AddItem';
import NoteItem from '../items/NoteItem';
import Note from '../models/Note';
import {Styles} from '../styles';
import {Theme} from '../App';

const NotesList = () => {
  const [notes, setNotes] = useState<Note[]>([
    new Note('123232', 'fsfsfdsfsd'),
  ]);

  const theme = useContext(Theme);

  const removeItem = (id: string) => {
    let tmp = notes.filter(note => note.id !== id);
    setNotes(tmp);
  };

  const createItem = (item: Note) => {
    setNotes([...notes, item]);
  };

  return (
    <View style={Styles.notesContainer}>
      <FlatList
        style={[Styles.noteFlatListContainer]}
        renderItem={({item}) => (
          <NoteItem item={item} removeItem={removeItem} />
        )}
        data={notes}
      />
      <AddItem createItem={createItem} />
    </View>
  );
};

export default NotesList;
