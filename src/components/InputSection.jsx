import { useState } from "react";
import { View, StyleSheet, TextInput, Modal } from "react-native";
import CustomButton from "./Form/Button";
import { colors } from "../utils/colors";

const InputSection = ({ setItemsList, setIsModalVisible, isModalVisible }) => {
	const [itemValue, setItemValue] = useState("");
	const [isError, setIsError] = useState(false);
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
			setIsModalVisible(false);
		} else {
			setIsError(true);
		}
	};

	return (
		<Modal visible={isModalVisible} animationType="slide">
			<View style={styles.modalContainer}>
				<TextInput
					placeholder="Enter item here.!"
					style={{
						...styles.input,
						borderColor: isError ? "red" : "lightgrey",
					}}
					value={itemValue}
					onChangeText={handleChange}
				/>
				<CustomButton text="Add Item" onPressEvent={addItem} />
				<CustomButton
					text="Cancel"
					onPressEvent={() => {
						setIsModalVisible(false);
						setIsError(false);
					}}
					btnColor={colors.default}
					btnTextColor={colors.dark}
				/>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	modalContainer: {
		padding: 16,
		justifyContent: "center",
		flex: 1,
	},
	input: {
		padding: 16,
		borderWidth: 1,
		borderColor: "lightblue",
		marginBottom: 4,
		marginTop: 8,
		borderRadius: 6,
		fontSize: 18,
	},
});

export default InputSection;
