import React from "react";
import { View, Image, Text } from "react-native";

import styles from "./styles";

const TeacherItem = () => (
  <View style={styles.container}>
    <View style={styles.profile}>
      <Image
        style={styles.avatar}
        source={{
          uri: "https://github.con/LucasGabrielGit.png",
        }}
      />

      <View style={styles.profileInfo}>
        <Text style={styles.name}>Lucas Gabriel</Text>
        <Text style={styles.subject}>Física</Text>
      </View>
    </View>
  </View>
);
export default TeacherItem;
