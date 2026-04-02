import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Svg, { Rect, Defs, LinearGradient, Stop } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

export const MeshBackground = () => {
    return (
        <View style={StyleSheet.absoluteFill} className="bg-background">
            <Svg height="100%" width="100%" style={StyleSheet.absoluteFill}>
                <Defs>
                    <LinearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <Stop offset="0%" stopColor="#FFF9F5" stopOpacity="1" />
                        <Stop offset="50%" stopColor="#FFEDE0" stopOpacity="1" />
                        <Stop offset="100%" stopColor="#FFF9F5" stopOpacity="1" />
                    </LinearGradient>
                    <LinearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
                        <Stop offset="0%" stopColor="#F27438" stopOpacity="0.05" />
                        <Stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                    </LinearGradient>
                </Defs>
                <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad1)" />
                <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad2)" />
            </Svg>
        </View>
    );
};
