import React from 'react';
import { View, Text, Dimensions, Platform } from 'react-native';
import { cn } from '../../utils/cn';

const { width } = Dimensions.get('window');

interface HealthDataPoint {
    timestamp: number;
    value: number;
}

interface HealthChartProps {
    data: HealthDataPoint[];
    label: string;
    unit?: string;
    color?: string;
    className?: string; // Optional styling
}

export const HealthChart: React.FC<HealthChartProps> = ({
    data,
    label,
    unit = '',
    color = '#F27438', // primary color
    className
}) => {
    // `react-native-wagmi-charts` currently has a web bundling issue in some setups
    // (Metro "Cannot access 'getDomain' before initialization"). We avoid importing it on web.
    if (Platform.OS === 'web') {
        return (
            <View className={cn("p-4 bg-white rounded-xl shadow-sm my-4", className)}>
                <View className="flex-row justify-between items-center mb-4">
                    <Text className="text-lg font-bold text-gray-800">{label}</Text>
                    <Text className="text-sm font-medium text-gray-500">{unit}</Text>
                </View>

                <View className="h-[200px] rounded-lg bg-orange-50 items-center justify-center px-4">
                    <Text className="text-sm text-gray-600 text-center">
                        El gráfico interactivo no está disponible en web por ahora.
                    </Text>
                </View>

                <View className="mt-2 flex-row justify-between">
                    <Text className="text-xs text-gray-400">Inicio</Text>
                    <Text className="text-xs text-gray-400">Actual</Text>
                </View>
            </View>
        );
    }

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { LineChart } = require('react-native-wagmi-charts') as typeof import('react-native-wagmi-charts');

    return (
        <View className={cn("p-4 bg-white rounded-xl shadow-sm my-4", className)}>
            <View className="flex-row justify-between items-center mb-4">
                <Text className="text-lg font-bold text-gray-800">{label}</Text>
                <Text className="text-sm font-medium text-gray-500">{unit}</Text>
            </View>

            <LineChart.Provider data={data}>
                <LineChart height={200} width={width - 64}>
                    {/* width adjustments for padding */}
                    <LineChart.Path color={color}>
                        <LineChart.Gradient color={color} />
                    </LineChart.Path>
                    <LineChart.CursorCrosshair color={color} />
                </LineChart>
            </LineChart.Provider>

            {/* Simple legend or current value display could go here */}
            <View className="mt-2 flex-row justify-between">
                <Text className="text-xs text-gray-400">Inicio</Text>
                <Text className="text-xs text-gray-400">Actual</Text>
            </View>
        </View>
    );
};
