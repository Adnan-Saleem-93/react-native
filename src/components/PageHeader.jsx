import { StyleSheet, View, Text } from "react-native";

const PageHeader = ({ text = "" }) => {
	return (
		<View>
			<Text style={styles.listHeaderText}>{text}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	listHeaderText: {
		color: "rgba(0,0,170,0.7)",
		fontSize: 32,
		fontWeight: 800,
		textAlign: "center",
	},
});

export default PageHeader;
