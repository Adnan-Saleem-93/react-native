import { useState } from "react";
import {
	Button,
	FlatList,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";

export default function App() {
	const [itemValue, setItemValue] = useState("");
	const [itemsList, setItemsList] = useState([]);
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
		<View style={styles.mainContainer}>
			<View style={styles.listContainer}>
				<View>
					<Text style={styles.listHeaderText}>To Do List</Text>
				</View>

				{itemsList.length ? (
					<View style={styles.itemsContainer}>
						<FlatList
							data={itemsList}
							renderItem={(itemData) => {
								return (
									<View style={styles.listItem}>
										<Text style={styles.listItemText}>
											{itemData.item.text}
										</Text>
									</View>
								);
							}}
							keyExtractor={(item) => {
								return item.id;
							}}
						/>
					</View>
				) : (
					<View style={styles.noItemsContainer}>
						<Text style={styles.noItemsText}>No items yet!</Text>
					</View>
				)}
			</View>
			<View>
				<TextInput
					placeholder="Enter item here.!"
					style={styles.input}
					value={itemValue}
					onChangeText={handleChange}
				/>
				<Button title="Add Item" onPress={addItem} />
			</View>
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
	listContainer: {
		flex: 2,
		justifyContent: "flex-start",
		alignItems: "center",
	},
	itemsContainer: {
		flex: 1,
		marginTop: 24,
		width: "100%",
		justifyContent: "flex-start",
		alignContent: "center",
	},
	noItemsContainer: {
		flex: 1,
		justifyContent: "center",
		alignContent: "center",
	},
	listItem: {
		backgroundColor: "#ffcedf",
		flexDirection: "row",
		borderRadius: 6,
		padding: 16,
		marginVertical: 6,
	},
	listItemNumber: {
		fontSize: 24,
		fontWeight: 900,
	},
	listItemText: {
		fontSize: 24,
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
		textAlign: "center",
	},
	noItemsText: {
		fontSize: 32,
		padding: 24,
		textAlign: "center",
	},
});
