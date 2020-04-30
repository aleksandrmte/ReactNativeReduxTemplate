import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    imageStyle: {

    },
    avatarStyle: {
        marginTop: 50,
        marginBottom: 10
    },
    listItemTitle: {
        fontSize: 16,
        fontFamily: "PF_DinDisplay_Pro",
        lineHeight: 22
    },
    sideMenuStyle: {
        margin: 0,
        width: width * 0.75 // SideMenu width
    },
    hamburgerStyle: {
        position: "absolute",
        flexDirection: 'row',
        justifyContent: 'flex-end',
        right: 4,
        marginRight: 4,
        marginTop: 4,
        zIndex: 999
    },
    nameStyle: {
        fontSize: 18,
        fontFamily: "PF_DinDisplay_Pro",
        lineHeight: 33
    },
    avatarWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 40
    }
})

export default styles;