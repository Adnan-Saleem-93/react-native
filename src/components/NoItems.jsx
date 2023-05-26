import { StyleSheet, Text, View } from "react-native";

const NoItems = ({ text = "" }) => {
	return (
		<View style={styles.noItemsContainer}>
			<Text style={styles.noItemsText}>{text}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	noItemsContainer: {
		flex: 1,
		justifyContent: "center",
		alignContent: "center",
	},
	noItemsText: {
		fontSize: 32,
		padding: 24,
		textAlign: "center",
	},
});

export default NoItems;
