import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>First React Native Project!</Text>
			<StatusBar style="auto" animated={true} backgroundColor="red" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "lightblue",
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		color: "purple",
		fontSize: 28,
		fontWeight: 800,
	},
});
