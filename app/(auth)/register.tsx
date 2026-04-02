import React from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MotiView } from 'moti';
import { ArrowLeft, User, Mail, Lock, ShieldCheck } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { useAppDispatch, useAppSelector } from '../../src/store/hooks';
import { registerRequest } from '../../src/store/slices/authSlice';
import { MeshBackground } from '../../src/components/atoms/MeshBackground';
import { AnimatedInput } from '../../src/components/atoms/AnimatedInput';

const registerSchema = z.object({
  name: z.string().min(2, 'Nombre muy corto'),
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Mínimo 6 caracteres'),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"],
});

type RegisterForm = z.infer<typeof registerSchema>;

export default function RegisterScreen() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.auth);

  const { control, handleSubmit, formState: { errors } } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
    defaultValues: { name: '', email: '', password: '', confirmPassword: '' }
  });

  const onRegister = (data: RegisterForm) => {
    dispatch(registerRequest({
      name: data.name,
      email: data.email,
      password: data.password
    }));
  };

  React.useEffect(() => {
    if (error) {
       Alert.alert('Error', error);
    }
  }, [error]);

  return (
    <View className="flex-1">
      <MeshBackground />
      <SafeAreaView className="flex-1">
        <KeyboardAvoidingView 
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
          className="flex-1"
        >
          <ScrollView 
            contentContainerStyle={{ flexGrow: 1, padding: 24 }}
            showsVerticalScrollIndicator={false}
          >
            <TouchableOpacity onPress={() => router.back()} className="mb-6 w-10 h-10 bg-white/60 rounded-full items-center justify-center border border-white/40">
              <ArrowLeft size={24} color="#F27438" />
            </TouchableOpacity>

            <MotiView
              from={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              className="mb-10"
            >
              <Text className="text-5xl font-hero text-gray-900 tracking-normal text-left">Únete a la Legion</Text>
              <Text className="text-gray-400 font-sans mt-3 text-left uppercase tracking-widest text-xs">Crea tu identidad de Guerrero</Text>
            </MotiView>

            <View className="mb-8">
              <Controller
                control={control}
                name="name"
                render={({ field: { onChange, value } }) => (
                  <AnimatedInput
                    label="Tu nombre de Guerrero"
                    placeholder="Leo, El Valiente"
                    value={value}
                    onChangeText={onChange}
                    error={errors.name?.message}
                    icon={<User size={20} color="#F27438" />}
                  />
                )}
              />

              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, value } }) => (
                  <AnimatedInput
                    label="Email"
                    placeholder="ejemplo@raftec.com"
                    value={value}
                    onChangeText={onChange}
                    error={errors.email?.message}
                    icon={<Mail size={20} color="#F27438" />}
                  />
                )}
              />

              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, value } }) => (
                  <AnimatedInput
                    label="Contraseña"
                    placeholder="••••••••"
                    secureTextEntry
                    value={value}
                    onChangeText={onChange}
                    error={errors.password?.message}
                    icon={<Lock size={20} color="#F27438" />}
                  />
                )}
              />

              <Controller
                control={control}
                name="confirmPassword"
                render={({ field: { onChange, value } }) => (
                  <AnimatedInput
                    label="Confirmar Contraseña"
                    placeholder="••••••••"
                    secureTextEntry
                    value={value}
                    onChangeText={onChange}
                    error={errors.confirmPassword?.message}
                    icon={<ShieldCheck size={20} color="#F27438" />}
                  />
                )}
              />
            </View>

            <TouchableOpacity 
              onPress={handleSubmit(onRegister)}
              disabled={isLoading}
              className={`bg-primary h-16 rounded-card items-center justify-center shadow-xl ${isLoading ? 'opacity-70' : 'active:scale-[0.98]'}`}
            >
              <Text className="text-white font-bold text-xl font-sans">{isLoading ? 'Cargando...' : 'Convertirme en Guerrero'}</Text>
            </TouchableOpacity>

            <View className="mt-8 mb-10 flex-row justify-center">
              <Text className="text-gray-400 font-sans mr-2">¿Ya tienes armadura?</Text>
              <TouchableOpacity onPress={() => router.push('/login')}>
                <Text className="text-primary font-bold font-sans">Inicia Sesión</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}
