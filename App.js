import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
	const [itemValue, setItemValue] = useState("");
	const [itemsList, setItemsList] = useState([]);
	const handleChange = (e) => {
		setItemValue(e?.target?.value);
	};
	const addItem = () => {
		setItemsList([...itemsList, itemValue]);
	};
	return (
		<View style={styles.mainContainer}>
			<View>
				<TextInput
					placeholder="Enter item here.!"
					style={styles.input}
					value={itemValue}
				/>
				<Button title="Add Item" onPress={addItem} />
			</View>
			<View style={styles.listContainer}>
				<Text style={styles.listHeaderText}>Things to do </Text>

				{itemsList.length ? (
					itemsList.map((item, index) => {
						return (
							<>
								<Text>{index + 1}</Text>.<Text>{item}</Text>
							</>
						);
					})
				) : (
					<Text style={styles.noItemsText}>No items yet!</Text>
				)}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		paddingVertical: 48,
		paddingHorizontal: 24,
		flex: 1,
		flexDirection: "column-reverse",
		justifyContent: "space-between",
	},
	listContainer: {
		marginBottom: 12,
	},
	input: {
		padding: 16,
		borderWidth: 1,
		borderColor: "lightblue",
		marginBottom: 12,
	},
	listHeaderText: {
		color: "rgba(0,0,170,0.7)",
		fontSize: 32,
		fontWeight: 800,
		alignSelf: "center",
	},
	noItemsText: {
		fontSize: 20,
		padding: 24,
		textAlign: "center",
	},
});
