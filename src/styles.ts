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
    height: height / 1.7,
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
