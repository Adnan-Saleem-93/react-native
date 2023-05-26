import { View, Text, StyleSheet, Pressable } from "react-native";

const ListItem = ({ text, id, setItemsList }) => {
	const deleteItems = () => {
		setItemsList((oldList) => {
			return oldList.filter((item) => item.id !== id);
		});
	};

	return (
		<View style={styles.listItem}>
			<Text style={styles.listItemText}>{text}</Text>
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
	},
	deleteBtnText: {
		fontSize: 12,
		color: "red",
		fontWeight: 700,
	},
});

export default ListItem;
