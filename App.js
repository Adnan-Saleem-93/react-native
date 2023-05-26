import { useState } from "react";
import { StyleSheet, View } from "react-native";
import ToDoList from "./src/components/ToDoList";
import InputSection from "./src/components/InputSection";

export default function App() {
	const [itemsList, setItemsList] = useState([]);

	return (
		<View style={styles.mainContainer}>
			<ToDoList itemsList={itemsList} />
			<InputSection setItemsList={setItemsList} />
		</View>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		paddingVertical: 48,
		paddingHorizontal: 24,
		display: "flex",
		height: "100%",
	},
});
