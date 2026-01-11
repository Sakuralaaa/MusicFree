import { useI18N } from "@/core/i18n";
import { ROUTE_PATH, useNavigate } from "@/core/router";
import rpx from "@/utils/rpx";
import React from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ActionButton from "../ActionButton";
import useColors from "@/hooks/useColors";

export default function Operations() {
    const navigate = useNavigate();
    const { t } = useI18N();
    const colors = useColors();


    const actionButtons = [
        {
            iconName: "fire",
            title: t("home.recommendSheet"),
            action() {
                navigate(ROUTE_PATH.RECOMMEND_SHEETS);
            },
        },
        {
            iconName: "trophy",
            title: t("home.topList"),
            action() {
                navigate(ROUTE_PATH.TOP_LIST);
            },
        },
        {
            iconName: "clock-outline",
            title: t("home.playHistory"),
            action() {
                navigate(ROUTE_PATH.HISTORY);
            },
        },
        {
            iconName: "folder-music-outline",
            title: t("home.localMusic"),
            action() {
                navigate(ROUTE_PATH.LOCAL);
            },
        },
    ] as const;

    return (
        <View style={[styles.container, { borderRightColor: colors.divider }]}>
            <ScrollView 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {actionButtons.map((action, index) => (
                    <ActionButton
                        style={[
                            styles.actionButtonStyle,
                            index > 0 ? styles.actionMarginTop : null,
                        ]}
                        key={action.title}
                        {...action}
                    />
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: rpx(220),
        flexGrow: 0,
        flexShrink: 0,
        paddingHorizontal: rpx(20),
        paddingVertical: rpx(24),
        borderRightWidth: 1,
    },
    scrollContent: {
        alignItems: "stretch",
    },
    actionButtonStyle: {
        width: "100%",
        height: rpx(150),
        borderRadius: rpx(12),
    },
    actionMarginTop: {
        marginTop: rpx(16),
    },
});
