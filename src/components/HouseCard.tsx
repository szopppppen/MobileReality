import React from "react";
import { Text, View, ViewStyle } from "react-native";
import { HouseModel } from "../model/HouseModel";
import { Colors } from "../res/Colors";
import { TouchableCard } from "./TouchableCard";

interface HouseCardProps extends React.Props<any> {
    style?: ViewStyle;
    house: HouseModel;
}

export class HouseCard extends React.Component<HouseCardProps, {}> {
    render() {
        return (
            <TouchableCard onPress={() => {            }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <View style={{ maxWidth: "50%" }}>
                        <Text numberOfLines={1} style={{ fontSize: 18, fontWeight: "bold", color: Colors.primaryText }}>{this.props.house.owner}</Text>
                        <Text numberOfLines={1} style={{ fontSize: 12, color: Colors.textSecondary }}>{this.props.house.address}</Text>
                    </View>
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: Colors.primaryDark, maxWidth: "50%" }}>{this.props.house.price}</Text>
                </View>
            </TouchableCard>
        );
    }
}