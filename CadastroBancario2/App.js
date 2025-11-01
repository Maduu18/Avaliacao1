import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  Switch,
  StyleSheet,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";

export default function App() {
  // Estados para cada campo
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [sexo, setSexo] = useState("");
  const [limite, setLimite] = useState(1000);
  const [estudante, setEstudante] = useState(false);

  const validarFormulario = () => {
    if (!nome || !idade || !sexo) {
      Alert.alert("Erro", "Por favor, preencha todos os campos obrigatórios!");
      return;
    }

    // Exibe os dados cadastrados
    Alert.alert(
      "Cadastro realizado com sucesso!",
      `Nome: ${nome}\nIdade: ${idade}\nSexo: ${sexo}\nLimite: R$ ${limite.toFixed(
        2
      )}\nEstudante: ${estudante ? "Sim" : "Não"}`
    );

    // Limpa os campos após o envio
    setNome("");
    setIdade("");
    setSexo("");
    setLimite(1000);
    setEstudante(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro Bancário</Text>

      {/* Campo Nome */}
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      {/* Campo Idade */}
      <Text style={styles.label}>Idade:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        value={idade}
        onChangeText={setIdade}
        keyboardType="numeric"
      />

      {/* Campo Sexo */}
      <Text style={styles.label}>Sexo:</Text>
      <Picker
        selectedValue={sexo}
        onValueChange={(valor) => setSexo(valor)}
        style={styles.picker}
      >
        <Picker.Item label="Selecione..." value="" />
        <Picker.Item label="Masculino" value="Masculino" />
        <Picker.Item label="Feminino" value="Feminino" />
      </Picker>

      {/* Limite */}
      <Text style={styles.label}>
        Limite inicial: R$ {limite.toFixed(2)}
      </Text>
      <Slider
        style={{ width: "100%", height: 40 }}
        minimumValue={100}
        maximumValue={5000}
        step={100}
        value={limite}
        onValueChange={(valor) => setLimite(valor)}
        minimumTrackTintColor="#007bff"
        maximumTrackTintColor="#aaa"
        thumbTintColor="#007bff"
      />

      {/* Estudante */}
      <View style={styles.switchContainer}>
        <Text style={styles.label}>É estudante?</Text>
        <Switch
          value={estudante}
          onValueChange={setEstudante}
          thumbColor={estudante ? "#007bff" : "#ccc"}
        />
      </View>

      {/* Botão */}
      <Button title="Cadastrar" onPress={validarFormulario} color="#007bff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    padding: 20,
    justifyContent: "center",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#007bff",
  },
  label: {
    fontSize: 16,
    marginTop: 10,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    marginTop: 5,
    backgroundColor: "#fff",
  },
  picker: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginTop: 5,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 15,
  },
});
