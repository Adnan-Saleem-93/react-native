import { useState } from "react";
import { View, StyleSheet, Button, TextInput } from "react-native";
import CustomButton from "./Form/Button";

const InputSection = ({ setItemsList }) => {
	const [itemValue, setItemValue] = useState("");
	const handleChange = (e) => {
		setItemValue(e);
	};
	const addItem = () => {
		if (itemValue) {
			setItemsList((oldList) => [
				...oldList,
				{ id: Math.random().toString(), text: itemValue },
			]);
			setItemValue("");
		}
	};

	return (
		<View>
			<TextInput
				placeholder="Enter item here.!"
				style={styles.input}
				value={itemValue}
				onChangeText={handleChange}
			/>
			<CustomButton text="Add Item" onAdd={addItem} />
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		padding: 16,
		borderWidth: 1,
		borderColor: "lightblue",
		marginBottom: 4,
		marginTop: 8,
	},
});

export default InputSection;
