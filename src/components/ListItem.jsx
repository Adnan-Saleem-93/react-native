import { View, Text, StyleSheet } from "react-native";

const ListItem = ({ text, id, setItemsList }) => {
	const deleteItems = () => {
		setItemsList((oldList) => {
			return oldList.filter((item) => item.id !== id);
		});
	};

	return (
		<View style={styles.listItem}>
			<Text style={styles.listItemText}>{text}</Text>
			<Text onPress={deleteItems} style={styles.deleteBtnText}>
				Delete
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	listItem: {
		backgroundColor: "#ededed",
		flexDirection: "row",
		borderRadius: 6,
		borderColor: "#c2c3ed",
		borderWidth: 1,
		padding: 16,
		marginVertical: 6,
		justifyContent: "space-between",
		alignItems: "center",
	},
	listItemText: {
		fontSize: 24,
		maxWidth: "80%",
	},
	deleteBtnText: {
		fontSize: 16,
		color: "red",
		fontWeight: 700,
	},
});

export default ListItem;
