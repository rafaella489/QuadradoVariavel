import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

export default function App() {
  const [lado, setLado] = useState('');
  const [area, setArea] = useState(null);

  const calcularArea = () => {
    const areaQuadrado = parseFloat(lado) * parseFloat(lado);
    setArea(areaQuadrado);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Área de Quadrado</Text>
      <TextInput
        style={styles.input}
        placeholder="Lado do quadrado"
        onChangeText={(text) => setLado(text)}
        keyboardType="numeric"
        value={lado}
      />
      <Button title="Calcular Área" onPress={calcularArea} />
      {area !== null && <Text style={styles.result}>Área do quadrado: {area}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
  },
});
