import React from 'react';
import { TabView } from 'react-native-tab-view';
export default function TabbarComponent(props){
    const {index, routes,renderScene,initialLayout,setIndex} = props;
    return(
        <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    )
};