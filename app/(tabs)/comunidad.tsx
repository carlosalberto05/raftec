import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from '@expo/vector-icons/FontAwesome';

// Mock data
const HELPS = [
    {
        id: '1',
        title: 'Pasear a Toby',
        time: 'Hoy, 18:00 - 19:00',
        description: 'Toby necesita un paseo de 20 min por el parque cercano. Es un perro muy tranquilo y amigable.',
        category: 'Mascotas',
        urgent: true,
        image: { uri: 'https://images.unsplash.com/photo-1517423568366-eb58fb780410?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' }
    },
    {
        id: '2',
        title: 'Traer cena familiar',
        time: 'Mañana, 20:00',
        description: 'Sopa caliente o algo ligero para una familia de 4. Estamos en el hospital acompañando a Luis.',
        category: 'Comida',
        urgent: false,
        image: { uri: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' }
    },
];

export default function CommunityScreen() {
    return (
        <SafeAreaView className="flex-1 bg-background" edges={['top']}>
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }} className="p-4">

                {/* Header */}
                <View className="mb-6">
                    <Text className="text-3xl font-bold text-gray-900 mb-2">Tablero de Ayuda</Text>
                    <Text className="text-gray-600">Unidos por el bienestar de nuestros pequeños.</Text>
                </View>

                {/* Categories */}
                <View className="flex-row mb-6 overflow-hidden">
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {['Todos', 'Mascotas', 'Comida', 'Transporte'].map((cat, index) => (
                            <TouchableOpacity
                                key={cat}
                                className={`px-4 py-2 rounded-full mr-2 ${index === 0 ? 'bg-primary' : 'bg-gray-100'}`}
                            >
                                <Text className={`font-bold ${index === 0 ? 'text-white' : 'text-gray-600'}`}>{cat}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                {/* List */}
                {HELPS.map((item) => (
                    <View key={item.id} className="mb-6 bg-white rounded-xl shadow-sm overflow-hidden">
                        <View className="h-48 relative">
                            <Image source={item.image} className="w-full h-full object-cover" />
                            {item.urgent && (
                                <View className="absolute top-4 left-4 bg-red-500 px-3 py-1 rounded-full">
                                    <Text className="text-white text-xs font-bold uppercase">Urgente</Text>
                                </View>
                            )}
                        </View>

                        <View className="p-4">
                            <View className="flex-row justify-between items-start mb-2">
                                <Text className="text-xl font-bold text-gray-900 flex-1 mr-2">{item.title}</Text>
                                <View className="bg-orange-100 p-2 rounded-full">
                                    <FontAwesome name={item.category === 'Mascotas' ? 'paw' : 'cutlery'} size={16} color="#F27438" />
                                </View>
                            </View>

                            <View className="flex-row items-center mb-3">
                                <FontAwesome name="clock-o" size={14} color="#666" />
                                <Text className="text-sm text-gray-500 ml-2">{item.time}</Text>
                            </View>

                            <Text className="text-gray-600 text-sm mb-4 leading-5">{item.description}</Text>

                            <View className="flex-row items-center justify-between mt-2">
                                <View className="flex-row -space-x-2">
                                    {/* Avatars of helpers */}
                                    {[1, 2].map(i => (
                                        <View key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-300 items-center justify-center overflow-hidden">
                                            <FontAwesome name="user" size={12} color="#fff" />
                                        </View>
                                    ))}
                                    <View className="w-8 h-8 rounded-full border-2 border-white bg-primary items-center justify-center">
                                        <Text className="text-white text-xs font-bold">+2</Text>
                                    </View>
                                </View>

                                <TouchableOpacity className="bg-primary px-6 py-2 rounded-full shadow-md active:opacity-90">
                                    <Text className="text-white font-bold">Apoyar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                ))}

                <TouchableOpacity className="mt-4 flex-row justify-center items-center bg-white p-4 rounded-full border border-primary border-dashed">
                    <FontAwesome name="plus" size={16} color="#F27438" />
                    <Text className="text-primary font-bold ml-2">Solicitar Ayuda</Text>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    );
}
