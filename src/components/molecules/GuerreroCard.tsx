import React from 'react';
import { View, Text, Image, ImageSourcePropType, TouchableOpacity } from 'react-native';
import { cn } from '../../utils/cn';

interface GuerreroCardProps {
    name: string;
    level: number;
    currentEnergy: number;
    maxEnergy: number;
    imageSource: ImageSourcePropType;
    onPress?: () => void;
    className?: string; // Container classes
}

export const GuerreroCard: React.FC<GuerreroCardProps> = ({
    name,
    level,
    currentEnergy,
    maxEnergy,
    imageSource,
    onPress,
    className
}) => {
    const progress = Math.min((currentEnergy / maxEnergy) * 100, 100);

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={onPress}
            className={cn("bg-white rounded-xl shadow-lg overflow-hidden m-2", className)} // rounded-xl matches 24px per tailwind config
        >
            <View className="h-40 w-full relative">
                <Image
                    source={imageSource}
                    className="w-full h-full object-cover"
                    blurRadius={10} // Desenfoque para privacidad
                />
                <View className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full">
                    <Text className="text-xs font-bold text-primary">Nivel {level}</Text>
                </View>
            </View>

            <View className="p-4 bg-surface">
                <Text className="text-lg font-bold text-gray-900 mb-2">{name}</Text>

                <View className="flex-row justify-between mb-1">
                    <Text className="text-xs text-gray-500 font-medium">Energía</Text>
                    <Text className="text-xs text-primary font-bold">{currentEnergy}/{maxEnergy} PTS</Text>
                </View>

                <View className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <View
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${progress}%` }}
                    />
                </View>
            </View>
        </TouchableOpacity>
    );
};
