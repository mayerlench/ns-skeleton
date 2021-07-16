import * as React from "react";
import { RouteProp } from '@react-navigation/core';
import { Dialogs } from '@nativescript/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { StyleSheet } from "react-nativescript";
import { MainStackParamList } from "./NavigationParamList";
import { Square, Circle, Line } from './skeleton'

type HomeScreenProps = {
    route: RouteProp<MainStackParamList, "Home">,
    navigation: FrameNavigationProp<MainStackParamList, "Home">,
}

export function HomeScreen({ navigation }: HomeScreenProps) {
    return (
        <flexboxLayout style={styles.container}>
            <gridLayout columns="auto, auto" rows="auto">
                <Circle animate row={0} col={0} style={{ marginRight: 15 }} />
                <stackLayout orientation="vertical" width="80%" row={0} col={1}>
                    <Line horizontalAlignment="left" width="60%" animate />
                    <Line horizontalAlignment="left" width="50%" animate />
                    <Line horizontalAlignment="left" width="20%" animate />
                </stackLayout>
            </gridLayout>

            <gridLayout columns="auto, auto" rows="auto" style={styles.templateContainer}>
                <Circle animate row={0} col={0} style={{ marginRight: 15 }} />
                <stackLayout orientation="vertical" width="80%" row={0} col={1}>
                    <Line horizontalAlignment="left" width="60%" />
                    <Line horizontalAlignment="left" width="50%" />
                    <Line horizontalAlignment="left" width="20%" />
                </stackLayout>
            </gridLayout>

            <gridLayout columns="auto, auto" rows="auto" style={styles.templateContainer}>
                <Square animate row={0} col={0} style={{ marginRight: 15 }} />
                <stackLayout orientation="vertical" width="80%" row={0} col={1}>
                    <Line horizontalAlignment="left" width="60%" />
                    <Line horizontalAlignment="left" width="50%" />
                    <Line horizontalAlignment="left" width="20%" />
                </stackLayout>
            </gridLayout>

            <gridLayout columns="auto, auto" rows="auto" style={styles.templateContainer}>
                <Square animate row={0} col={0} style={{ marginRight: 15 }} />
                <stackLayout orientation="vertical" width="80%" row={0} col={1}>
                    <Line horizontalAlignment="left" width="60%" />
                    <Line horizontalAlignment="left" width="50%" />
                    <Line horizontalAlignment="left" width="20%" />
                </stackLayout>
            </gridLayout>
            <button
                style={styles.button}
                onTap={() => navigation.navigate('Secondary')}
            >
                Go to next screen
            </button>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
    },
    text: {
        textAlignment: "center",
        fontSize: 24,
        color: "black",
    },
    button: {
        fontSize: 24,
        color: "#2e6ddf",
    },
    templateContainer: {
        marginTop: 50
    }
});