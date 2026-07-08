import React from "react";
import { TouchableOpacity } from "react-native";
import { Box, Pressable, Text } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons"

type Props = {
    bgColor: string;
    iconName: string;
    onPress?: (e?: any) => any;
    cardText: string;
};

const IconCard: React.FC<Props> = ({
    bgColor = "primary.500",
    iconName = "notifications",
    onPress = () => {},
    cardText = "Icon Card",
}) => {
    return (
        <TouchableOpacity onPress={onPress} style={{alignItems: "center", width: '21%'}}>
            <Box borderRadius="2xl" alignItems="center" pt="3" width="90%" h="40%" backgroundColor={bgColor}>
                <Ionicons name={iconName} size={30} color="#d3d3d3" />
            </Box>
            <Text color="gray.500" fontWeight="bold" my="2">
                {cardText}
            </Text>
        </TouchableOpacity>
    )
};

export default IconCard