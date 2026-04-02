import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { BlurView } from 'expo-blur';
import { cn } from '../../utils/cn';

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    intensity?: number;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
    children, 
    className, 
    intensity = 40 
}) => {
    // BlurView is better on iOS, on Android we use a semi-transparent view as fallback or less intensity
    return (
        <View className={cn("overflow-hidden rounded-card border-[0.5px] border-white/40 shadow-sm", className)}>
            <BlurView
                intensity={Platform.OS === 'ios' ? intensity : 20}
                tint="light"
                style={StyleSheet.absoluteFill}
            />
            <View className="bg-white/40 p-4">
                {children}
            </View>
        </View>
    );
};
