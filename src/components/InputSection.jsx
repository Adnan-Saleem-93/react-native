import { useState } from "react";
import { View, StyleSheet, TextInput, Modal, Image } from "react-native";
import CustomButton from "./Form/Button";
import { colors } from "../utils/colors";
import PageHeader from "./PageHeader";

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
			<View style={styles.pageHeader}>
				<PageHeader text="Add New Item" />
			</View>

			<View style={styles.imageContainer}>
				<Image
					style={styles.image}
					source={require("../../assets/add-new.jpg")}
				/>
			</View>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Enter item here.!"
					style={{
						...styles.input,
						borderColor: isError ? "red" : "lightgrey",
					}}
					value={itemValue}
					onChangeText={handleChange}
				/>
				<CustomButton text="Add" onPressEvent={addItem} />
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
	pageHeader: {
		flex: 1,
		marginTop: 8,
	},
	imageContainer: {
		justifyContent: "flex-end",
		alignItems: "center",
		flex: 3,
	},
	inputContainer: {
		marginTop: 16,
		padding: 16,
		justifyContent: "center",
		flex: 3,
	},
	image: {
		width: 350,
		height: "100%",
		resizeMode: "cover",
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
