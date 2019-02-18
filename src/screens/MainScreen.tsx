import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { ComponentBase } from "resub";
import { HouseCard } from "../components/HouseCard";
import { ViewBase } from "../components/ViewBase";
import { HouseModel } from "../model/HouseModel";
import { HousesStore } from "../model/HousesStore";
import { Colors } from "../res/Colors";

interface MainScreenState {
    houses: HouseModel[];
}

interface MainScreenProps extends React.Props<any> {
}

export class MainScreen extends ComponentBase<MainScreenProps, MainScreenState> {
    static navigationOptions = ({ navigation }) => ({
        title: "Available houses",
        headerRight: (
            <TouchableOpacity style={{ width: 40, height: 30 }} onPress={() => navigation.navigate("AddScreen")}>
                <Text style={{ color: Colors.text }}>Add</Text>
            </TouchableOpacity>
        )
    })

    protected _buildState() {
        return {
            houses: HousesStore.getInstance().getHouses(),
        };
    }

    constructor(props) {
        super(props);
        this.state = {
            houses: [],
        };
        HousesStore.getInstance().loadData();
    }

    render() {
        return (
            <ViewBase>
                <FlatList
                    data={this.state.houses}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                    ListEmptyComponent={this.renderEmpty}
                    ListFooterComponent={<View style={{ height: 70 }} />}
                />
            </ViewBase>
        );
    }

    private keyExtractor(item: HouseModel): string {
        return item.id;
    }

    private renderEmpty = () => {
        return (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 18, color: Colors.primaryText }}>No houses available.</Text>
            </View>
        );
    }

    private renderItem({ item }): JSX.Element {
        return (<HouseCard house={item} />);
    }
}
