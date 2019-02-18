import React from "react";
import { StatusBar, StyleSheet, View, ViewStyle } from "react-native";
import { Colors } from "../res/Colors";

interface ViewBaseProps {
    style?: ViewStyle;
}

export class ViewBase extends React.Component<ViewBaseProps, {}> {
    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                <StatusBar
                    backgroundColor={Colors.primaryDark}
                    barStyle="light-content"
                />
                {this.props.children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        padding: 20,
    },
});
