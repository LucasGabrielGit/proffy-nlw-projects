import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TeacherList from "../pages/TeacherList";
import Favorites from "../pages/Favorites";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const { Screen, Navigator } = createBottomTabNavigator();

const StudyTabs = () => (
  <Navigator
    tabBarOptions={{
      style: {
        elevation: 0,
        shadowOpacity: 0,
        height: 64,
      },

      tabStyle: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
      },

      iconStyle: {
        flex: 0,
        width: 20,
        height: 20,
      },

      labelStyle: {
        fontFamily: "Archivo_700Bold",
        fontSize: 12,
        marginLeft: 20,
      },
      inactiveBackgroundColor: "#fafafc",
      activeBackgroundColor: "#ebebf5",
      inactiveTintColor: "#c1b6cc",
      activeTintColor: "#32264d",
    }}
  >
    <Screen
      name="TeacherList"
      component={TeacherList}
      options={{
        tabBarLabel: "Proffys",
        tabBarIcon: ({ color, size, focused }) => {
          return (
            <Ionicons
              name="ios-easel"
              color={focused ? "#8257e5" : color}
              size={size}
            />
          );
        },
      }}
    />
    <Screen
      name="Favorites"
      component={Favorites}
      options={{
        tabBarLabel: "Favoritos",
        tabBarIcon: ({ color, size, focused }) => {
          return (
            <Ionicons
              name="md-heart-outline"
              color={focused ? "#f51d0a" : color}
              size={size}
            />
          );
        },
      }}
    />
  </Navigator>
);

export default StudyTabs;
