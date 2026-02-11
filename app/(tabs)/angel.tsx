import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'; // Removed unused Image import or used below
import { SafeAreaView } from 'react-native-safe-area-context';
import { GuerreroCard } from '../../src/components/molecules/GuerreroCard';

// Dummy data
const GUERREROS = [
    {
        id: '1',
        name: 'Guerrero Mateo',
        level: 12,
        currentEnergy: 3250, // "65% Recaudado" simulation
        maxEnergy: 5000,
        imageSource: { uri: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
    },
    {
        id: '2',
        name: 'Guerrera Sofía',
        level: 8,
        currentEnergy: 960, // "30% Recaudado" simulation
        maxEnergy: 3200,
        imageSource: { uri: 'https://images.unsplash.com/photo-1544168190-79c11e66b380?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
    },
];

export default function AngelScreen() {
    return (
        <SafeAreaView className="flex-1 bg-background" edges={['top']}>
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }} className="p-4">

                {/* Header */}
                <View className="mb-6">
                    <Text className="text-3xl font-bold text-gray-900 mb-2">Apoya a nuestros Guerreros</Text>
                    <Text className="text-gray-600 leading-5">Brindamos esperanza y cuidados paliativos a niños valientes. Tu ayuda transforma vidas hoy.</Text>
                </View>

                {/* Filters */}
                <View className="flex-row mb-6 overflow-hidden">
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {['Todos', 'Urgentes', 'Tratamientos', 'Sueños'].map((filter, index) => (
                            <TouchableOpacity
                                key={filter}
                                className={`px-4 py-2 rounded-full mr-2 ${index === 0 ? 'bg-primary' : 'bg-orange-100'}`}
                            >
                                <Text className={`font-bold ${index === 0 ? 'text-white' : 'text-primary'}`}>{filter}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                {/* List */}
                {GUERREROS.map((guerrero) => (
                    <View key={guerrero.id} className="mb-6 bg-white rounded-xl shadow-sm p-4">
                        {/* Guerrero Card - Using molecule */}
                        <GuerreroCard
                            name={guerrero.name}
                            level={guerrero.level} // Using level or can adapt for donation goal
                            currentEnergy={guerrero.currentEnergy}
                            maxEnergy={guerrero.maxEnergy}
                            imageSource={guerrero.imageSource}
                        />
                        <TouchableOpacity className="bg-primary py-3 mt-4 rounded-full items-center">
                            <Text className="text-white font-bold text-base">Donar ahora</Text>
                        </TouchableOpacity>
                    </View>
                ))}

                {/* Footer Disclaimer */}
                <View className="mt-8 bg-orange-50 p-6 rounded-2xl items-center">
                    <Text className="text-center text-gray-800 text-sm italic">
                        "Las identidades de nuestros niños son protegidas con fines de privacidad. El 100% de las donaciones se destina directamente a sus tratamientos y cuidados."
                    </Text>
                    <TouchableOpacity className="mt-2">
                        <Text className="text-primary underline text-sm font-bold">Ver transparencia</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}
