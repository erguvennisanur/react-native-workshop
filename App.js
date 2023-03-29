import { SafeAreaView, Text, StyleSheet, View } from 'react-native';
import Providers from './src/contexts/Providers';
import Router from './src/routers/Router'; 
import HomeScreens from './src/screens/HomeScreens';

export default function App() {
  return(
    <Providers>
      <Router/>
    </Providers>
  )
}


