import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MotiView } from 'moti';
import { Heart, Info, ArrowRight } from 'lucide-react-native';
import { GuerreroCard } from '../../src/components/molecules/GuerreroCard';
import { MeshBackground } from '../../src/components/atoms/MeshBackground';
import { GlassCard } from '../../src/components/atoms/GlassCard';

// Dummy data
const GUERREROS = [
    {
        id: '1',
        name: 'Guerrero Mateo',
        level: 12,
        currentEnergy: 3250, 
        maxEnergy: 5000,
        imageSource: { uri: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80' },
    },
    {
        id: '2',
        name: 'Guerrera Sofía',
        level: 8,
        currentEnergy: 960, 
        maxEnergy: 3200,
        imageSource: { uri: 'https://images.unsplash.com/photo-1544168190-79c11e66b380?auto=format&fit=crop&w=800&q=80' },
    },
];

export default function AngelScreen() {
    return (
        <View className="flex-1">
            <MeshBackground />
            <SafeAreaView className="flex-1" edges={['top']}>
                <ScrollView contentContainerStyle={{ paddingBottom: 120 }} className="p-4">

                    {/* Header */}
                    <MotiView 
                        from={{ opacity: 0, translateY: -20 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        className="mb-8"
                    >
                        <View className="flex-row items-center mb-2">
                           <Heart size={24} color="#F27438" fill="#F27438" />
                           <Text className="text-primary font-bold ml-2 uppercase tracking-widest text-[10px]">Apoyo Directo</Text>
                        </View>
                        <Text className="text-4xl font-hero text-gray-900 mb-3 tracking-normal">Guerreros del Alma</Text>
                        <Text className="text-gray-500 font-sans leading-5 text-sm">
                            Tu ayuda transforma vidas reales de niños valientes que enfrentan grandes desafíos.
                        </Text>
                    </MotiView>

                    {/* Filters with animation */}
                    <View className="flex-row mb-8">
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {['Todos', 'Urgentes', 'Tratamientos', 'Sueños'].map((filter, index) => (
                                <MotiView
                                    key={filter}
                                    from={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 200 + (index * 100) }}
                                >
                                    <TouchableOpacity
                                        className={`px-6 py-2.5 rounded-full mr-3 shadow-sm border border-white/20 ${index === 0 ? 'bg-primary' : 'bg-white/60'}`}
                                    >
                                        <Text className={`font-bold text-[12px] font-sans ${index === 0 ? 'text-white' : 'text-primary'}`}>{filter}</Text>
                                    </TouchableOpacity>
                                </MotiView>
                            ))}
                        </ScrollView>
                    </View>

                    {/* List */}
                    {GUERREROS.map((guerrero, index) => (
                        <MotiView 
                            key={guerrero.id} 
                            from={{ opacity: 0, translateX: -50 }}
                            animate={{ opacity: 1, translateX: 0 }}
                            transition={{ delay: 500 + (index * 200) }}
                            className="mb-8"
                        >
                            <GlassCard className="p-0">
                                <GuerreroCard
                                    name={guerrero.name}
                                    level={guerrero.level} 
                                    currentEnergy={guerrero.currentEnergy}
                                    maxEnergy={guerrero.maxEnergy}
                                    imageSource={guerrero.imageSource}
                                    className="m-0 bg-transparent shadow-none"
                                />
                                <View className="px-4 pb-4 bg-white/40">
                                    <TouchableOpacity className="bg-primary py-4 rounded-card items-center shadow-lg active:scale-95 transition-all flex-row justify-center">
                                        <Text className="text-white font-bold text-lg font-sans mr-2">Apoyar con Amor</Text>
                                        <ArrowRight size={20} color="white" />
                                    </TouchableOpacity>
                                </View>
                            </GlassCard>
                        </MotiView>
                    ))}

                    {/* Footer Disclaimer with Glassmorphism */}
                    <MotiView
                        from={{ opacity: 0, translateY: 30 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ delay: 1000 }}
                    >
                        <GlassCard className="mt-4 bg-primary/5 border-primary/20">
                            <View className="flex-row items-center mb-3">
                                <Info size={18} color="#F27438" />
                                <Text className="text-primary font-bold ml-2 text-xs uppercase tracking-widest">Privacidad y Transparencia</Text>
                            </View>
                            <Text className="text-gray-600 text-sm font-sans italic leading-5">
                                "Las identidades de nuestros guerreros están protegidas. El 100% de tu aporte llega directamente a su cuidado."
                            </Text>
                            <TouchableOpacity className="mt-4 self-center border-b border-primary/40">
                                <Text className="text-primary text-xs font-bold font-sans">Leer política de transparencia</Text>
                            </TouchableOpacity>
                        </GlassCard>
                    </MotiView>

                </ScrollView>
            </SafeAreaView>
        </View>
    );
}
