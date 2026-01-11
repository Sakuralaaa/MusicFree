import React from "react";
import globalStyle from "@/constants/globalStyle";
import Operations from "./operations";
import { StyleSheet, View } from "react-native";
import Sheets from "../homeBody/sheets";
import useColors from "@/hooks/useColors";
import rpx from "@/utils/rpx";

export default function HomeBodyHorizontal() {
    const colors = useColors();
    
    return (
        <View style={[globalStyle.rowfwflex1, { backgroundColor: colors.pageBackground }]}>
            <Operations />
            <View style={styles.sheetsContainer}>
                <Sheets />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    sheetsContainer: {
        flex: 1,
        paddingTop: rpx(16),
    },
});
