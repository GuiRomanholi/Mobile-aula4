import { Text, View } from "react-native";

export default function Somar({ pNumero, sNumero }) {
    return (
        <View>
            <Text>Primeiro número: {pNumero}</Text>
            <Text>Segundo número: {sNumero}</Text>
            <Text>Soma dos Numero: {pNumero + sNumero}</Text>
        </View>
    )
}