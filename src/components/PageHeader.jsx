import { StyleSheet, View, Text } from "react-native";
import { colors } from "../utils/colors";

const PageHeader = ({ text = "" }) => {
	return (
		<View>
			<Text style={styles.listHeaderText}>{text}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	listHeaderText: {
		color: colors.primary,
		fontSize: 32,
		fontWeight: 800,
		textAlign: "center",
	},
});

export default PageHeader;
