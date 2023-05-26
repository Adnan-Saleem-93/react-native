import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../utils/colors";

const CustomButton = ({
	text = "",
	onPressEvent,
	btnColor = colors.primary,
	btnTextColor = colors.light,
}) => {
	return (
		<Pressable onPress={onPressEvent} android_ripple={{ color: "lightgrey" }}>
			<View style={{ ...styles.buttonBox, backgroundColor: btnColor }}>
				<Text style={{ ...styles.buttonText, color: btnTextColor }}>
					{text}
				</Text>
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	buttonBox: {
		backgroundColor: colors.primary,
		flexDirection: "row",
		borderRadius: 6,
		padding: 16,
		marginVertical: 6,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonText: {
		color: "#fff",
		fontSize: 18,
	},
});

export default CustomButton;
