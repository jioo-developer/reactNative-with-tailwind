import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface CustomInputProps {
  label: string;
}

const CustomInput = ({ label }: CustomInputProps) => {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
  },
});

export default CustomInput;
