import { useState } from "react";
import { View, StyleSheet, Button, TextInput } from "react-native";

const InputSection = ({ setItemsList }) => {
	const [itemValue, setItemValue] = useState("");
	const handleChange = (e) => {
		setItemValue(e);
	};
	const addItem = () => {
		setItemsList((oldList) => [
			...oldList,
			{ id: Math.random().toString(), text: itemValue },
		]);
		// setItemValue("");
	};

	return (
		<View>
			<TextInput
				placeholder="Enter item here.!"
				style={styles.input}
				value={itemValue}
				onChangeText={handleChange}
			/>
			<Button title="Add Item" onPress={addItem} />
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		padding: 16,
		borderWidth: 1,
		borderColor: "lightblue",
		marginBottom: 12,
	},
});

export default InputSection;
