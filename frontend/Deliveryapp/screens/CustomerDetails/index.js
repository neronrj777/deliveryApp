import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CustomerDetails() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Customer Details</Text>
      {/* Here you can display your customer details, for now, I'll leave it blank */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  header: {
    fontSize: 24,
    marginBottom: 20
  }
});
