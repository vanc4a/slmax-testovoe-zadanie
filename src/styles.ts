import {StyleSheet, Dimensions} from 'react-native';

export const {width, height} = Dimensions.get('window');
export const interval = width / 20;
export const Styles = StyleSheet.create({
  itemContainer: {
    borderWidth: interval / 25,
    borderRadius: interval / 3,
    borderColor: '#95a5a6',
  },
  addItemIconButton: {
    position: 'absolute',
    alignSelf: 'flex-end',
  },
  addItemInputsContainer: {
    justifyContent: 'center',
  },
  noteFlatListContainer: {
    height: height / 1.8,
    marginBottom: interval,
  },
  notesContainer: {
    marginHorizontal: interval,
  },
  discriptionText: {
    alignSelf: 'center',
    padding: interval,
  },
  noteDateText: {
    alignSelf: 'flex-end',
  },
  removeButton: {
    backgroundColor: '#e74c3c',
    borderRadius: 0,
  },
});

export const themes = {
  light: {
    foregroundHeader: '#006266',
    backgroundHeader: '#00cec9',
    background: 'white',
    statusBar: '#006266',
    noteContainer: 'white',
    addItemText: '#8395a7',
    devider: '#8395a7',
    arrow: 'black',
    descriptionText: '#8395a7',
  },
  dark: {
    foregroundHeader: '#8c7ae6',
    backgroundHeader: '#5f27cd',
    background: 'black',
    statusBar: '#8c7ae6',
    noteContainer: '#222f3e',
    addItemText: 'white',
    devider: '#c8d6e5',
    arrow: 'white',
    descriptionText: '#c8d6e5',
  },
};
