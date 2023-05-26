import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "./ListItem";
import PageHeader from "./PageHeader";
import NoItems from "./NoItems";

const ToDoList = ({ itemsList = [], setItemsList }) => {
	return (
		<View style={styles.listContainer}>
			<PageHeader text="To Do List" />

			{itemsList.length ? (
				<View style={styles.itemsContainer}>
					<FlatList
						data={itemsList}
						renderItem={(itemData) => {
							return (
								<ListItem
									text={itemData.item.text}
									id={itemData.item.id}
									setItemsList={setItemsList}
								/>
							);
						}}
						keyExtractor={(item) => {
							return item.id;
						}}
					/>
				</View>
			) : (
				<NoItems text="No items yet!" />
			)}
		</View>
	);
};

const styles = StyleSheet.create({
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
});

export default ToDoList;
