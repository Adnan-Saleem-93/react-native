import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
	const [itemValue, setItemValue] = useState("");
	const [itemsList, setItemsList] = useState([]);
	const handleChange = (e) => {
		setItemValue(e);
	};
	const addItem = () => {
		setItemsList([...itemsList, itemValue]);
		setItemValue("");
	};
	return (
		<View style={styles.mainContainer}>
			<View style={styles.listContainer}>
				<View>
					<Text style={styles.listHeaderText}>Things to do</Text>
				</View>

				{itemsList.length ? (
					<View style={styles.itemsContainer}>
						{itemsList.map((item, index) => {
							return (
								<View key={index} style={styles.listItem}>
									<Text style={styles.listItemNumber}>{index + 1}</Text>
									<Text style={styles.listItemText}>.{item}</Text>
								</View>
							);
						})}
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
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
	},
	listContainer: {
		flex: 2,
		justifyContent: "flex-start",
		alignItems: "center",
	},
	itemsContainer: {
		flex: 1,
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
		flexDirection: "row",
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
		fontSize: 20,
		padding: 24,
		textAlign: "center",
	},
});
