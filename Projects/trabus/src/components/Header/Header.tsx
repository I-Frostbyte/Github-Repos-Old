import { useNavigation } from "@react-navigation/native"
import React from "react"
import { Pressable, StatusBar, Text, View } from "react-native"
import AntIcon from "react-native-vector-icons/AntDesign"
import styles from "./Header.component.styles"

export default function Header(props : { title : string}){

    const navigation = useNavigation()
    return (
        <View style={styles.headerContainer}>
            <StatusBar backgroundColor={"white"} barStyle="dark-content" />
            <Pressable onPress={()=>navigation.goBack()} style={styles.iconContainer}>
                <AntIcon name="arrowleft" size={20} color={"#021526"}/>
            </Pressable>

            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{props.title}</Text>
            </View>
        </View>
    )
}