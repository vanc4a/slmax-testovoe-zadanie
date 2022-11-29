import React, {useState, createContext} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Header from './components/Header';
import NotesList from './components/NotesList';
import {Switch} from 'react-native-switch';
import Icon from 'react-native-vector-icons/Entypo';
import {interval, themes} from './styles';
export const Theme = createContext(themes.light);

const App = () => {
  const [theme, setTheme] = useState(false);

  return (
    <Theme.Provider value={theme ? themes.dark : themes.light}>
      <SafeAreaView
        style={{
          backgroundColor: theme
            ? themes.dark.background
            : themes.light.background,
          flex: 1,
        }}>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={
            theme ? themes.dark.statusBar : themes.light.statusBar
          }
        />
        <Header />
        <Switch
          containerStyle={{
            marginBottom: interval,
            alignSelf: 'flex-end',
            marginRight: interval,
          }}
          inActiveText={<Icon name="moon" />}
          activeText={<Icon name="light-up" />}
          value={theme}
          onValueChange={value => setTheme(value)}
          backgroundInactive={'#006266'}
          backgroundActive={'#8c7ae6'}
          disabled={false}
          innerCircleStyle={{alignItems: 'center', justifyContent: 'center'}}
          circleSize={interval * 1.5}
          switchLeftPx={5}
          switchRightPx={5}
          renderInsideCircle={() =>
            theme ? <Icon name="moon" /> : <Icon name="light-up" />
          }
        />
        <NotesList theme={theme} />
      </SafeAreaView>
    </Theme.Provider>
  );
};

export default App;
