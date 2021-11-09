import React from 'react';
import { View } from 'react-native';
import { SplashScreen } from './src/screens/SplashScreen';
import { Login } from './src/screens/Login';
import { SignUp } from './src/screens/SignUp';
import { GettingStarted } from './src/screens/GettingStarted';
import { ChooseTopic } from './src/screens/ChooseTopic';
import { Reminders } from './src/screens/Reminders';
import { Home } from './src/screens/Home';
import { CourseDetails } from './src/screens/CourseDetails';
import { Meditate } from './src/screens/Meditate';
import { Music } from './src/screens/Music';
import linking from './src/linking';


const App = () => {
  return (
    <>
      <CourseDetails />
    </>
  );
};

export default App;
