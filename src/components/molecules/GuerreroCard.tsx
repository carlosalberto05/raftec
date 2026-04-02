import React from 'react';
import { View, Text, Image, ImageSourcePropType, TouchableOpacity } from 'react-native';
import { MotiView } from 'moti';
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
        <MotiView
            from={{ opacity: 0, scale: 0.9, translateY: 20 }}
            animate={{ opacity: 1, scale: 1, translateY: 0 }}
            transition={{ type: 'timing', duration: 500 }}
        >
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={onPress}
                className={cn("bg-white rounded-card shadow-lg overflow-hidden m-2 border-[0.5px] border-white/20", className)}
            >
                <View className="h-40 w-full relative">
                    <Image
                        source={imageSource}
                        className="w-full h-full object-cover"
                        blurRadius={15} 
                    />
                    <View className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full shadow-sm">
                        <Text className="text-[10px] font-hero text-primary uppercase">Nivel {level}</Text>
                    </View>
                </View>

                <View className="p-4 bg-surface/80">
                    <Text className="text-xl font-bold text-gray-900 mb-2">{name}</Text>

                    <View className="flex-row justify-between mb-1.5">
                        <Text className="text-[10px] text-gray-500 font-sans uppercase tracking-widest">Energía</Text>
                        <Text className="text-[10px] text-primary font-bold">{currentEnergy}/{maxEnergy} PTS</Text>
                    </View>

                    <View className="h-2.5 w-full bg-gray-100/50 rounded-full overflow-hidden">
                        <MotiView
                            from={{ width: '0%' }}
                            animate={{ width: `${progress}%` }}
                            transition={{ type: 'spring', delay: 300 }}
                            className="h-full bg-primary rounded-full shadow-lg"
                        />
                    </View>
                </View>
            </TouchableOpacity>
        </MotiView>
    );
};
