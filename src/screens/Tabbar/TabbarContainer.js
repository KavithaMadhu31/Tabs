import * as React from 'react';
import { View, Dimensions } from 'react-native';
import {SceneMap } from 'react-native-tab-view';
import colors from '../../theme/colors';
import styles from './styles';
import TabbarComponent from './TabbarComponent';
const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: colors.primaryColor }]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: colors.secondaryColor }]} />
);
const ThirdRoute = () => (
  <View style={[styles.scene, { backgroundColor: colors.primaryColor }]} />
);

const FourthRoute = () => (
  <View style={[styles.scene, { backgroundColor: colors.secondaryColor}]} />
);

const initialLayout = { width: Dimensions.get('window').width };

export default function TabbarContainer() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'tab1' },
    { key: 'second', title: 'tab2' },
    { key: 'third', title: 'tab3' },
    { key: 'four', title: 'tab4' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    four: FourthRoute,
  });

  return (
   <TabbarComponent 
   renderScene={renderScene}
    initialLayout={initialLayout} 
    index={index} 
    routes={routes} 
    setIndex={setIndex}/>
  );
}

