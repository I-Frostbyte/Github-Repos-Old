import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    square: {
        width: 20,
        height: 20,
        margin: 2,
        backgroundColor: '#CCCCCC',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius : 2,
    },
    mainContainer : {
        paddingHorizontal : 10,
        backgroundColor : "white",
        flex : 1
    },
    buswindscreenContainer : {
        width : "100%",
        height: 150,
        
    },
    buswindscreenStyle : {
        width : "100%",
        height : "100%"
    }, 
    headerStyles : {
        flexDirection : "row",
        justifyContent: "space-around",
        marginBottom : 14,
    },
    headerBox : {
        flexDirection : "row",
        alignItems : "center",
        gap: 5
    },
    sitsSubMainContainer : {
        width: "100%",
        flexDirection: "row",
        gap: 70,
    },
    sitContainer : {
        flexDirection : "row", 
        width : "50%", 
        flexWrap : "wrap",
        gap: 8, 
    },
    sitContainerRight : {
        flexDirection : "row", 
        width : "60%", 
        flexWrap : "wrap",
        gap: 8
    },
    rightTop : {
        marginBottom: "auto"
    },
    bottomSits : {
        flexDirection : "row",
        gap: 14,
        marginTop : 7
    },
    btnMainContainer : {
        marginTop : 44,
        justifyContent : "flex-end",
        alignItems : "center",
        flexDirection : "row",
        gap: 20,
    },
    btnContainer : {
        width: 80,
        height : 35,
        borderRadius : 100,
        backgroundColor : "#02385A",
        justifyContent : "center",
        alignItems : "center"
    },
    btnText : {
        color : "white",
        fontSize : 16,
        fontWeight : "800"
    },
    textStyles : {
        fontSize: 16, 
        fontWeight : "800",
        color : "#021526"
    },
    ModalExitMainContainer : {
        height : "40%",
    },
    ModalSubMainContainer : {
        height : "60%",
        backgroundColor : "white",
        borderTopRightRadius : 25,
        borderTopLeftRadius: 25
    },
    ModalTopMainContainer : {
        padding : 20
    },
    ModalHeaderContainer : {
        flexDirection : "row",
        gap : 10,
        alignItems : "center",
        marginBottom : 20
    },
    detailsMainContainer : {
        flexDirection : "row",
        justifyContent : "space-between"
    },
    destinationText : {
        fontSize : 20,
        fontWeight : "900",
        color : "#021526",
        letterSpacing : 1.3
    },
    detailStaticText : {
        fontSize: 18,
        fontWeight: "400",
        color : "#021526",
        textAlign : "center",
    },
    detailUserText : {
        fontSize: 20,
        fontWeight: "600",
        color : "#021526"
    },
    detailMainBox : {
        justifyContent : "center",
        alignItems : "center"
    },
    detailsBox : {
        borderRightWidth : 1,
        borderLeftWidth : 1,
        paddingHorizontal :20,
        borderColor : "#ccc"
    },
    idCardStyles : {
        marginVertical : 25,
    },
    luggagesStyles : {
        fontSize : 18,
        fontWeight : "700",
        color : "#021526",
    }, 
    totalPriceContainer : {
        marginTop : 14
    },
    totalPriceHeaderText : {
        fontSize : 18,
        fontWeight : "600",
        color : "#021526"
    },
    totalPriceText : {
        fontSize : 32,
        fontWeight : "800",
        color : "#02385A"
    },
    payBtn : {
        backgroundColor : "#02385A",
        height : 70,
        justifyContent : "center",
        alignItems: "center"
    },
    payBtnText : {
        fontSize : 20,
        color : "white",
        fontWeight : "400"
    }
})

export default styles