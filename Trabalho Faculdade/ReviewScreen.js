import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/firestore';
import StarRating from './StarRating'; // Novo componente para estrelas

const ReviewScreen = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async () => {
    if (rating === 0 || feedback.trim() === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos!');
      return;
    }

    try {
      const reviewsRef = firebase.firestore().collection('avaliacoes');
      await reviewsRef.add({
        rating: rating,
        feedback: feedback,
        tatuadorId: 'tatuador_1',
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });

      Alert.alert('Obrigado pelo seu feedback!');
      setRating(0);
      setFeedback('');
    } catch (error) {
      console.error('Erro ao enviar avaliação: ', error);
      Alert.alert('Erro', 'Houve um erro ao enviar sua avaliação. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Avalie o Tatuador</Text>
      <StarRating rating={rating} setRating={setRating} />
      <Text style={styles.feedbackLabel}>Deixe seu feedback:</Text>
      <TextInput
        style={styles.textInput}
        multiline
        placeholder="Escreva aqui..."
        value={feedback}
        onChangeText={setFeedback}
      />
      <Button title="Enviar Avaliação" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  feedbackLabel: {
    marginVertical: 10,
  },
  textInput: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    textAlignVertical: 'top',
  },
});

export default ReviewScreen;