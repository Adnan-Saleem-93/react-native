import { Pressable, StyleSheet, Text, View } from "react-native";

const CustomButton = ({ text = "", onAdd }) => {
	return (
		<Pressable onPress={onAdd} android_ripple={{ color: "lightgrey" }}>
			<View style={styles.listItem}>
				<Text style={styles.listItemText}>{text}</Text>
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	listItem: {
		backgroundColor: "#3366ff",
		flexDirection: "row",
		borderRadius: 6,
		padding: 16,
		marginVertical: 6,
		justifyContent: "center",
		alignItems: "center",
	},
	listItemText: {
		color: "#fff",
		fontSize: 18,
	},
});

export default CustomButton;
