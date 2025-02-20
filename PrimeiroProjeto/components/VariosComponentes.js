import { Text } from "react-native";
import estilo from "./Estilo";

export default function PrimeiroComponente() {
    return (
        <Text style={estilo.textoPadrao}> Primeiro Componente </Text>
    )
}

export function SegundoComponente() {
    return (
        <Text>Segundo Componente</Text>
    )
}
