import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StarRating = ({ rating, setRating }) => {
  return (
    <View style={styles.container}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Text
          key={star}
          style={[styles.star, { color: rating >= star ? 'gold' : 'gray' }]}
          onPress={() => setRating(star)}
        >
          ★
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  star: {
    fontSize: 30,
    marginRight: 5,
  },
});

export default StarRating;