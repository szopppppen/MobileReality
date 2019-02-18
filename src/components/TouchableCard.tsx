import React from "react";
import { TouchableOpacity, ViewStyle } from "react-native";
import { Colors } from "../res/Colors";

interface TouchableCardProps {
    style?: ViewStyle;
    onPress: () => void;
}

export class TouchableCard extends React.Component<TouchableCardProps, {}> {
    render() {
        return (
            <TouchableOpacity style={[this.styleContainer(), this.props.style]}
                onPress={this.props.onPress}>
                {this.props.children}
            </TouchableOpacity>
        );
    }

    private styleContainer() {
        return {
            padding: 10,
            margin: 7,
            elevation: 5,
            backgroundColor: Colors.white,
        };
    }
}
