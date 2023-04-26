import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.buttonView}>
				<Text>Press the button below!</Text>
				<Button title="Press me" onPress={() => alert("Button Pressed!!!")} />
			</View>

			<StatusBar style="auto" animated={true} backgroundColor="transparent" />
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
	buttonView: {
		margin: 32,
	},
});
