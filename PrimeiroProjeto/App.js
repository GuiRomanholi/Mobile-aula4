import React from "react";
import { Text, View } from "react-native";
import estilo from "./components/Estilo";
import Somar from "./components/Soma";
import PrimeiroComponente, { SegundoComponente } from "./components/VariosComponentes";

export default function App() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.textoPadrao}>Aula 04 - Mobile</Text>
      <PrimeiroComponente />
      <SegundoComponente />
      <Somar pNumero={10} sNumero={15} />
    </View>
  )
}