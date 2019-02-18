import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Colors } from "../res/Colors";

interface MyButtonProps {
    onPress: () => void;
    label: string;
}

export class MyButton extends React.Component<MyButtonProps, {}> {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={{ height: 40, width: "100%", backgroundColor: Colors.primaryDark, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 18, color: Colors.text, fontWeight: "bold" }}>{this.props.label}</Text>
            </TouchableOpacity>
        );
    }
}