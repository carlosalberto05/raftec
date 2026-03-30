import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppSelector } from '../../src/store/hooks';
import { GuerreroCard } from '../../src/components/molecules/GuerreroCard';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function HomeScreen() {
  const name = useAppSelector((s) => s.raftec.name);
  const level = useAppSelector((s) => s.raftec.level);
  const energyPoints = useAppSelector((s) => s.raftec.energyPoints);

  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top']}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }} className="px-4 pt-4">

        {/* Header */}
        <View className="flex-row justify-between items-center mb-6">
          <View className="w-10 h-10 bg-orange-100 rounded-full items-center justify-center">
            <FontAwesome name="shield" size={20} color="#F27438" />
          </View>
          <Text className="text-xl font-bold text-gray-800">Dashboard del Guerrero</Text>
          <View className="w-10 h-10 bg-orange-100 rounded-full items-center justify-center">
            <FontAwesome name="cog" size={20} color="#F27438" />
          </View>
        </View>

        {/* Hero / Avatar Section */}
        <View className="items-center mb-8">
          <View className="relative">
            <View className="w-32 h-32 rounded-full border-4 border-white shadow-lg bg-gray-200 items-center justify-center overflow-hidden">
              {/* Avatar Image Placeholder */}
              <FontAwesome name="user" size={60} color="#ccc" />
            </View>
            <View className="absolute -bottom-3 self-center bg-primary px-3 py-1 rounded-full">
              <Text className="text-white font-bold text-xs">Nivel {level}</Text>
            </View>
          </View>
          <Text className="text-3xl font-bold text-gray-900 mt-5">¡Hola, {name}!</Text>
          <View className="flex-row items-center mt-2">
            <FontAwesome name="bolt" size={16} color="#F27438" />
            <Text className="text-primary font-bold ml-1 text-lg">{energyPoints} Puntos de Energía</Text>
          </View>
          <Text className="text-gray-500 italic mt-2 text-center px-8">"Cada paso cuenta, pequeño gran guerrero"</Text>
        </View>

        {/* Mission Card (Simulated with GuerreroCard logic or custom) */}
        {/* Using GuerreroCard as requested "Molecule: GuerreroCard" but maybe primarily for Angel tab? 
            Prompt says "Molecule: GuerreroCard (con imagen desenfocada para privacidad y barra de progreso)". Note: The image in "Angel" tab has blurred kids.
            
            Here, "Misión del día" card looks different in the screenshot (drawings, active tag).
            I'll use a custom View for Mission here, and use GuerreroCard in Angel tab as it fits the description better (privacy/fundraising). 
        */}

        <View className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <View className="flex-row justify-between mb-4">
            <View className="bg-primary px-2 py-1 rounded-md self-start">
              <Text className="text-white text-xs font-bold uppercase">Activo</Text>
            </View>
          </View>
          <Text className="text-orange-500 text-xs font-bold uppercase mb-1">Misión del día</Text>
          <Text className="text-2xl font-bold text-gray-900 mb-2">Dibuja tu alegría</Text>
          <Text className="text-gray-600 mb-4">Dibuja algo que te haya hecho sonreír hoy. Puede ser un helado, un amigo o tu juguete favorito.</Text>

          <TouchableOpacity className="flex-row items-center bg-primary py-3 rounded-full justify-center shadow-md active:opacity-90">
            <FontAwesome name="star" size={16} color="white" style={{ marginRight: 8 }} />
            <Text className="text-white font-bold text-lg">Completar Misión</Text>
          </TouchableOpacity>
        </View>

        {/* Mood Tracker */}
        <Text className="text-xl font-bold text-gray-900 mb-4">¿Cómo te sientes hoy?</Text>
        <View className="flex-row justify-between mb-8">
          {/* Mood Buttons */}
          {['smile-o', 'meh-o', 'frown-o'].map((icon, idx) => (
            <TouchableOpacity key={idx} className="items-center bg-white p-4 rounded-full w-24 h-24 justify-center shadow-sm">
              <FontAwesome name={icon as any} size={32} color="#F27438" />
              <Text className="text-xs font-bold text-gray-700 mt-2 uppercase">{idx === 0 ? 'Genial' : idx === 1 ? 'Regular' : 'Cansado'}</Text>
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
