import React from 'react';
import { View, Text } from 'react-native';
import { cn } from '../../utils/cn';

export type MetricStatus = 'success' | 'warning' | 'danger' | 'neutral';

interface MetricBadgeProps {
    status: MetricStatus;
    value: string | number;
    label?: string;
    className?: string; // Additional container classes
}

const statusStyles = {
    success: { container: 'bg-green-100 border-green-200', dot: 'bg-green-500', text: 'text-green-800' },
    warning: { container: 'bg-yellow-100 border-yellow-200', dot: 'bg-yellow-500', text: 'text-yellow-800' },
    danger: { container: 'bg-red-100 border-red-200', dot: 'bg-red-500', text: 'text-red-800' },
    neutral: { container: 'bg-gray-100 border-gray-200', dot: 'bg-gray-400', text: 'text-gray-800' },
};

export const MetricBadge: React.FC<MetricBadgeProps> = ({ status = 'neutral', value, label, className }) => {
    const styles = statusStyles[status];

    return (
        <View className={cn("flex-row items-center self-start px-3 py-1.5 rounded-full border", styles.container, className)}>
            <View className={cn("w-2 h-2 rounded-full mr-2", styles.dot)} />
            <Text className={cn("text-xs font-bold", styles.text)}>
                {label ? `${label} ` : ''}{value}
            </Text>
        </View>
    );
};
