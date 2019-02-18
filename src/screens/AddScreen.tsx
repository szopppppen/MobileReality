import React from "react";
import { ViewBase } from "../components/ViewBase";
import { View, TextInput, Text, Alert } from "react-native";
import { Colors } from "../res/Colors";
import { MyButton } from "../components/Button";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { HousesStore } from "../model/HousesStore";
import { HouseModel } from "../model/HouseModel";

interface AddScreenState {
    address: string;
    owner: string;
    price: string;
    area: string;
}

export class AddScreen extends React.Component<{navigation: any}, AddScreenState> {
    static navigationOptions = () => ({
        title: "Add house",
    })

    constructor(props) {
        super(props);
        this.state = {
            address: "",
            owner: "",
            price: "",
            area: "",
        };
    }

    render() {
        return (
            <ViewBase>
                <KeyboardAwareScrollView
                    style={{ elevation: 5, padding: 10, marginBottom: 10, }}
                    keyboardShouldPersistTaps={"always"}
                    showsVerticalScrollIndicator={false}>
                    {this.renderTextInput("Owner", "Enter owner's name", this.state.owner, "owner")}
                    {this.renderTextInput("Address", "Enter address of the house", this.state.address, "address")}
                    {this.renderTextInput("Price", "Enter price of the house", this.state.price, "price")}
                    {this.renderTextInput("Area", "Enter house's area", this.state.area, "area")}
                </KeyboardAwareScrollView>
                {this.renderButton()}
            </ViewBase>
        );
    }

    private renderTextInput(label: string, placeholder: string, value: string, key: string) {
        return (
            <View style={{ marginVertical: 20 }}>
                <Text style={{ color: Colors.primaryText, fontSize: 14 }}>{label}</Text>
                <TextInput
                    style={{
                        width: "100%",
                        paddingTop: 0,
                        paddingBottom: 3,
                        fontSize: 14,
                        color: Colors.primaryText
                    }}
                    underlineColorAndroid={Colors.devider}
                    placeholder={placeholder}
                    placeholderTextColor={Colors.textSecondary}
                    value={value}
                    onChangeText={(text) => {
                        this.setState({ [key]: text });
                    }}
                />
            </View>
        );
    }

    private renderButton() {
        return (
            <MyButton label={"Add"} onPress={this.onButtonPressed} />
        );
    }

    private onButtonPressed = () => {
        if (this.checkForEmptyFileds()) {
            Alert.alert("Error", "Fileds cannot be empty", [{ text: "OK" }]);
            return;
        }

        if (!/^[0-9]+$/i.test(this.state.area)) {
            Alert.alert("Error", "Area needs to be a number", [{ text: "OK" }]);
            return;
        }
        HousesStore.getInstance().addHouse(
            new HouseModel("", this.state.address, this.state.owner, this.state.price, this.state.area))
            .then(() => {
                this.props.navigation.goBack();
            });
    }

    private checkForEmptyFileds = (): boolean => {
        let x = false;
        if (this.state.owner.length == 0) x = true;
        if (this.state.price.length == 0) x = true;
        if (this.state.address.length == 0) x = true;
        if (this.state.area.length == 0) x = true;

        return x;
    }
}
