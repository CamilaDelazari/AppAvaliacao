import React, { useState } from 'react';
import { View, Text, TextInput, Button, Rating } from 'react-native';
import { Appbar, Card, Paragraph } from 'react-native-paper';

const ReviewScreen = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    console.log('Avaliação:', rating);
    console.log('Feedback:', feedback);
    alert('Obrigado pelo seu feedback!');
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Avaliações" />
      </Appbar.Header>

      <Card>
        <Card.Content>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Avalie o Tatuador</Text>
          <Text style={{ marginVertical: 10 }}>Escolha uma nota de 1 a 5</Text>
          
          <View style={{ flexDirection: 'row', marginBottom: 15 }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Text
                key={star}
                style={{
                  fontSize: 30,
                  color: rating >= star ? 'gold' : 'gray',
                  marginRight: 5,
                }}
                onPress={() => setRating(star)}
              >
                ★
              </Text>
            ))}
          </View>

          <Text style={{ marginVertical: 10 }}>Deixe seu feedback:</Text>
          <TextInput
            style={{
              height: 100,
              borderColor: 'gray',
              borderWidth: 1,
              padding: 10,
              borderRadius: 5,
              textAlignVertical: 'top',
            }}
            multiline
            placeholder="Escreva aqui..."
            value={feedback}
            onChangeText={setFeedback}
          />

          <Button title="Enviar Avaliação" onPress={handleSubmit} />
        </Card.Content>
      </Card>
    </View>
  );
};

export default ReviewScreen;
