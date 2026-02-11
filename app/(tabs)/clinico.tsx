import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useClinicalStore } from '../../src/store/clinicalStore';
import { MetricBadge } from '../../src/components/atoms/MetricBadge';
import { HealthChart } from '../../src/components/organisms/HealthChart';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function ClinicalScreen() {
    const { metrics, trends } = useClinicalStore();

    return (
        <SafeAreaView className="flex-1 bg-background" edges={['top']}>
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }} className="p-4">

                {/* Header */}
                <View className="mb-6 bg-orange-50 p-4 rounded-xl flex-row items-center">
                    <View className="w-12 h-12 bg-white rounded-full items-center justify-center mr-4">
                        <FontAwesome name="user-md" size={24} color="#F27438" />
                    </View>
                    <View>
                        <Text className="text-sm font-bold text-primary uppercase">Paciente</Text>
                        <Text className="text-xl font-bold text-gray-900">Mateo Rodríguez</Text>
                    </View>
                    <View className="ml-auto">
                        <FontAwesome name="info-circle" size={20} color="#9CA3AF" />
                    </View>
                </View>

                {/* Vital Signs / Metrics Grid */}
                <View className="flex-row flex-wrap justify-between -mx-2 mb-6">
                    <View className="w-1/2 px-2 mb-4">
                        <View className="bg-white p-4 rounded-xl shadow-sm h-32 justify-between">
                            <Text className="text-sm font-bold text-gray-500 uppercase">Neutrófilos</Text>
                            <Text className="text-3xl font-bold text-gray-900">{metrics.neutrophils.value}</Text>
                            <MetricBadge
                                status={metrics.neutrophils.status}
                                value="Normal"
                                className="self-start"
                            />
                        </View>
                    </View>
                    <View className="w-1/2 px-2 mb-4">
                        <View className="bg-white p-4 rounded-xl shadow-sm h-32 justify-between">
                            <Text className="text-sm font-bold text-gray-500 uppercase">ALP</Text>
                            <Text className="text-3xl font-bold text-gray-900">{metrics.alp.value}</Text>
                            <MetricBadge
                                status={metrics.alp.status}
                                value="U/L"
                                className="self-start"
                            />
                        </View>
                    </View>

                    <View className="w-1/2 px-2 mb-4">
                        <View className="bg-white p-4 rounded-xl shadow-sm h-32 justify-between">
                            <Text className="text-sm font-bold text-gray-500 uppercase">Plaquetas</Text>
                            <Text className="text-3xl font-bold text-gray-900">{metrics.platelets.value}</Text>
                            <MetricBadge
                                status={metrics.platelets.status}
                                value="OK"
                            />
                        </View>
                    </View>
                </View>

                {/* Chart Section */}
                <HealthChart
                    data={trends}
                    label="Evolución (Neutrófilos)"
                    unit="/uL"
                    color="#F27438"
                />

                {/* Latest Records */}
                <View className="mt-6">
                    <View className="flex-row justify-between mb-4 items-center">
                        <Text className="text-xl font-bold text-gray-900">Últimos Registros</Text>
                        <TouchableOpacity>
                            <Text className="text-primary font-bold">Ver todos</Text>
                        </TouchableOpacity>
                    </View>

                    {[1, 2].map((i) => (
                        <TouchableOpacity key={i} className="flex-row items-center bg-white p-4 rounded-xl shadow-sm mb-3">
                            <View className="w-10 h-10 bg-orange-100 rounded-full items-center justify-center mr-4">
                                <FontAwesome name="file-text-o" size={20} color="#F27438" />
                            </View>
                            <View className="flex-1">
                                <Text className="font-bold text-gray-900">Registro Completo</Text>
                                <Text className="text-sm text-gray-500">Hoy, 09:45 AM</Text>
                            </View>
                            <FontAwesome name="chevron-right" size={16} color="#ccc" />
                        </TouchableOpacity>
                    ))}
                </View>

                <TouchableOpacity className="bg-primary mt-6 py-4 rounded-full items-center shadow-lg active:opacity-90">
                    <Text className="text-white font-bold text-lg">+ Nuevo Registro</Text>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    );
}
