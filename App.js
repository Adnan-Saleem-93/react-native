import { useState } from "react";
import { StyleSheet, View } from "react-native";
import ToDoList from "./src/components/ToDoList";
import InputSection from "./src/components/InputSection";

export default function App() {
	const [itemsList, setItemsList] = useState([]);

	return (
		<View style={styles.mainContainer}>
			<ToDoList itemsList={itemsList} setItemsList={setItemsList} />
			<InputSection setItemsList={setItemsList} />
		</View>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		paddingTop: 48,
		paddingBottom: 16,
		paddingHorizontal: 24,
		display: "flex",
		height: "100%",
	},
});
