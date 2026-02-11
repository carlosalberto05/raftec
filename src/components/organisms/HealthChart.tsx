import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { LineChart } from 'react-native-wagmi-charts';
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
