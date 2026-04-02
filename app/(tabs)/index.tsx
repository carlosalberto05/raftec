import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MotiView } from 'moti';
import { Settings, Zap, Star, Smile, Meh, Frown, LogOut } from 'lucide-react-native';
import { useAppSelector, useAppDispatch } from '../../src/store/hooks';
import { logout } from '../../src/store/slices/authSlice';
import { MeshBackground } from '../../src/components/atoms/MeshBackground';
import { GlassCard } from '../../src/components/atoms/GlassCard';

export default function HomeScreen() {
  const dispatch = useAppDispatch();
  const { name, level, energyPoints } = useAppSelector((state) => state.raftec);
  const user = useAppSelector((state) => state.auth.user);

  const displayName = user?.name || name;

  return (
    <View className="flex-1">
      <MeshBackground />
      <SafeAreaView className="flex-1" edges={['top']}>
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }} className="px-4 pt-4">

          {/* Header */}
          <MotiView 
            from={{ opacity: 0, translateY: -20 }}
            animate={{ opacity: 1, translateY: 0 }}
            className="flex-row justify-between items-center mb-6"
          >
            <TouchableOpacity 
              onPress={() => dispatch(logout())}
              className="w-12 h-12 bg-white/60 rounded-full items-center justify-center border border-white/40"
            >
              <LogOut size={24} color="#F27438" />
            </TouchableOpacity>
            <Text className="text-lg font-bold text-gray-800 font-sans tracking-tight">Dashboard del Guerrero</Text>
            <TouchableOpacity className="w-12 h-12 bg-white/60 rounded-full items-center justify-center border border-white/40">
              <Settings size={24} color="#F27438" />
            </TouchableOpacity>
          </MotiView>

          {/* Hero / Avatar Section */}
          <View className="items-center mb-10">
            <MotiView 
              from={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', delay: 100 }}
              className="relative"
            >
              {/* Outer Halo */}
              <MotiView
                from={{ scale: 1, opacity: 0.3 }}
                animate={{ scale: 1.15, opacity: 0 }}
                transition={{ loop: true, type: 'timing', duration: 2000, repeatReverse: false }}
                className="absolute inset-0 bg-primary/30 rounded-full"
              />
              
              <View className="w-36 h-36 rounded-full border-4 border-white shadow-2xl bg-white items-center justify-center overflow-hidden">
                <Image 
                  source={{ uri: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lucky' }} 
                  className="w-full h-full"
                />
              </View>
              
              <View className="absolute -bottom-2 self-center bg-primary px-4 py-1.5 rounded-full shadow-lg border-2 border-white">
                <Text className="text-white font-hero text-[10px] uppercase tracking-widest">Nivel {user?.level || level}</Text>
              </View>
            </MotiView>

            <MotiView
              from={{ opacity: 0, translateY: 10 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ delay: 300 }}
              className="items-center"
            >
              <Text className="text-4xl font-hero text-gray-900 mt-6 tracking-normal">¡Hola, {displayName}!</Text>
              <View className="flex-row items-center mt-3 bg-white/50 px-4 py-2 rounded-full border border-white/20">
                <Zap size={18} color="#F27438" fill="#F27438" />
                <Text className="text-primary font-bold ml-2 text-lg font-sans">{user?.energyPoints || energyPoints} Energía</Text>
              </View>
              <Text className="text-gray-400 italic mt-4 text-center px-8 font-sans">"Cada paso cuenta, pequeño gran guerrero"</Text>
            </MotiView>
          </View>

          {/* Mission Card with Glassmorphism */}
          <MotiView
            from={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 500 }}
          >
            <GlassCard className="mb-8">
                <View className="flex-row justify-between mb-4">
                  <View className="bg-primary/20 border border-primary/30 px-3 py-1 rounded-full">
                    <Text className="text-primary text-[10px] font-bold uppercase tracking-widest">Activo</Text>
                  </View>
                </View>
                <Text className="text-orange-600 text-xs font-bold uppercase mb-1 font-sans">Misión del día</Text>
                <Text className="text-2xl font-bold text-gray-900 mb-2 font-sans tracking-tight">Dibuja tu alegría</Text>
                <Text className="text-gray-500 mb-6 font-sans leading-5">Dibuja algo que te haya hecho sonreír hoy. Un helado, un amigo o tu juguete favorito.</Text>

                <TouchableOpacity className="flex-row items-center bg-primary py-4 rounded-card justify-center shadow-lg active:scale-95 transition-all">
                  <Star size={20} color="white" fill="white" style={{ marginRight: 10 }} />
                  <Text className="text-white font-bold text-lg font-sans">Completar Misión</Text>
                </TouchableOpacity>
            </GlassCard>
          </MotiView>

          {/* Mood Tracker */}
          <Text className="text-xl font-bold text-gray-900 mb-6 font-sans px-2">¿Cómo te sientes hoy?</Text>
          <View className="flex-row justify-between mb-8 px-2">
            {[
              { icon: Smile, label: 'Genial', delay: 600 },
              { icon: Meh, label: 'Regular', delay: 700 },
              { icon: Frown, label: 'Cansado', delay: 800 }
            ].map((mood, idx) => (
              <MotiView
                key={idx}
                from={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: mood.delay, type: 'spring' }}
              >
                <TouchableOpacity className="items-center bg-white rounded-card w-[100px] h-[100px] justify-center shadow-md border border-gray-50">
                  <mood.icon size={36} color="#F27438" strokeWidth={2.5} />
                  <Text className="text-[10px] font-bold text-gray-400 mt-2 uppercase tracking-widest">{mood.label}</Text>
                </TouchableOpacity>
              </MotiView>
            ))}
          </View>

        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
