import React from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MotiView } from 'moti';
import { ArrowRight, Mail, Lock } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { useAppDispatch, useAppSelector } from '../../src/store/hooks';
import { loginRequest } from '../../src/store/slices/authSlice';
import { MeshBackground } from '../../src/components/atoms/MeshBackground';
import { AnimatedInput } from '../../src/components/atoms/AnimatedInput';

const loginSchema = z.object({
  email: z.string().email('Email inválido').min(1, 'El email es requerido'),
  password: z.string().min(6, 'Mínimo 6 caracteres').max(20),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function LoginScreen() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.auth);

  const { control, handleSubmit, formState: { errors } } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' }
  });

  const onLogin = (data: LoginForm) => {
    dispatch(loginRequest(data));
  };

  // Watch for errors to show alerts (Best practice: show in UI or via Alert)
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
            contentContainerStyle={{ flexGrow: 1, padding: 24, justifyContent: 'center' }}
            showsVerticalScrollIndicator={false}
          >
            <MotiView
              from={{ opacity: 0, translateY: 30 }}
              animate={{ opacity: 1, translateY: 0 }}
              className="items-center mb-12"
            >
              <Text className="text-5xl font-hero text-gray-900 tracking-normal text-center">¡Bienvenido de Nuevo!</Text>
              <Text className="text-gray-400 font-sans mt-3 text-center uppercase tracking-widest text-xs">Regresa a tu aventura, Guerrero</Text>
            </MotiView>

            <View className="mb-10">
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
            </View>

            <MotiView
               from={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 200 }}
            >
              <TouchableOpacity 
                onPress={handleSubmit(onLogin)}
                disabled={isLoading}
                className={`bg-primary h-16 rounded-card flex-row items-center justify-center shadow-xl ${isLoading ? 'opacity-70' : 'active:scale-[0.98]'}`}
              >
                <Text className="text-white font-bold text-xl font-sans mr-3">{isLoading ? 'Cargando...' : 'Iniciar Aventura'}</Text>
                <ArrowRight size={22} color="white" />
              </TouchableOpacity>
            </MotiView>

            <MotiView 
                from={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 400 }}
                className="mt-8 flex-row justify-center"
            >
              <Text className="text-gray-400 font-sans mr-2">¿Nuevo por aquí?</Text>
              <TouchableOpacity onPress={() => router.push('/register')}>
                <Text className="text-primary font-bold font-sans">Regístrate</Text>
              </TouchableOpacity>
            </MotiView>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}
