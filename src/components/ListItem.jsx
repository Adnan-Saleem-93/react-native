import { View, Text, StyleSheet } from "react-native";

const ListItem = ({ itemData }) => {
	return (
		<View style={styles.listItem}>
			<Text style={styles.listItemText}>{itemData.item.text}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	listItem: {
		backgroundColor: "#dadfeb",
		flexDirection: "row",
		borderRadius: 6,
		padding: 16,
		marginVertical: 6,
	},
	listItemText: {
		fontSize: 24,
	},
});

export default ListItem;
