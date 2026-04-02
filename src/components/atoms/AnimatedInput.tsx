import React, { useState } from 'react';
import { View, TextInput, Text, Animated, StyleSheet } from 'react-native';
import { MotiView } from 'moti';
import { cn } from '../../utils/cn';

interface AnimatedInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  error?: string;
  icon?: React.ReactNode;
}

export const AnimatedInput: React.FC<AnimatedInputProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  error,
  icon
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <MotiView 
        from={{ opacity: 0, translateX: -10 }}
        animate={{ opacity: 1, translateX: 0 }}
        className="mb-6"
    >
      <Text className={cn(
        "text-xs font-bold uppercase tracking-widest mb-1.5 ml-1",
        isFocused ? "text-primary" : "text-gray-400"
      )}>
        {label}
      </Text>
      
      <View className={cn(
        "flex-row items-center bg-white/60 border rounded-2xl px-4 py-3.5",
        isFocused ? "border-primary shadow-sm" : "border-white/40",
        error ? "border-red-500" : ""
      )}>
        {icon && <View className="mr-3">{icon}</View>}
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#9CA3AF"
          secureTextEntry={secureTextEntry}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="flex-1 text-gray-800 font-sans text-base"
        />
      </View>
      
      {error && (
        <MotiView from={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
          <Text className="text-red-500 text-[10px] mt-1.5 ml-1 font-bold uppercase">{error}</Text>
        </MotiView>
      )}
    </MotiView>
  );
};
