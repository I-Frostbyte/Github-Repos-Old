import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './Grid_1.component.styles';

const Grid_input = (props : {text : string, onPress : ()=>void }) => {
    const [isChecked, setIsChecked] = useState<boolean>(false)
    const changeChecked = () => {
        setIsChecked(prevState => !prevState)
        props.onPress();
    }
    return (
        <Pressable onPress={changeChecked}>
            <View>
                {/** Left Sits  */}
                <View>
                    {
                        isChecked?
                        <View style={[styles.square, styles.checked]}>
                            <Text style={styles.checked}>{props.text}</Text>
                        </View>
                        :
                        <View style={styles.square}>
                            <Text style={styles.text}>{props.text}</Text>
                        </View>
                    }
                    
                    
                </View>
            </View>
        </Pressable>
    )
}

export default Grid_input;