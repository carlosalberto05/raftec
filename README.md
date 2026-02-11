# Raftec App 🧡

![Banner Raftec](https://via.placeholder.com/1200x400/F27438/FFFFFF?text=Raftec+-+Unidos+por+los+Guerreros)

> **"Cada paso cuenta, pequeño gran guerrero."**

---

## 🙏 Dedicatoria

Esta aplicación está dedicada con todo mi corazón a la memoria de **Rafael Antonio Rodríguez Alberto**, mi valiente sobrino que luchó incansablemente contra el cáncer (Osteosarcoma). 

Su coraje, su sonrisa y su fuerza inquebrantable son la inspiración detrás de cada línea de código en este proyecto. **Raftec** nace para honrar su legado y para servir como un faro de esperanza y apoyo para todos los niños y niñas que hoy libran esta misma batalla.

A todos los pequeños guerreros: **No están solos.**

---

## 📱 ¿Qué es Raftec?

**Raftec** es una aplicación móvil diseñada para transformar la experiencia de hospitalización y tratamiento de niños con cáncer. No es solo una herramienta médica, es un ecosistema de apoyo emocional, gamificación y comunidad.

### Propósito Principal
Brindar una plataforma integral que combine el seguimiento clínico vital con un entorno lúdico que motive a los niños, mientras facilita la solidaridad y el apoyo entre familias.

---

## ✨ Características Principales

### 🎮 Dashboard del Guerrero (Gamificación)
Transformamos el tratamiento en una misión.
- **Niveles y Energía**: Los niños ganan puntos y suben de nivel al completar tratamientos y misiones diarias.
- **Misiones Diarias**: Actividades lúdicas ("Dibuja tu alegría", "Hidratación") para mantener el ánimo alto.
- **Seguimiento Emocional**: Un registro simple de cómo se siente el guerrero cada día.

### 👼 Módulo Ángel (Donaciones y Apoyo)
Conectamos corazones solidarios con necesidades reales.
- **Perfiles de Guerreros**: Historias reales (protegiendo la identidad) para generar empatía.
- **Micro-donaciones**: Apoyo directo para tratamientos urgentes y sueños.
- **Transparencia Total**: Visualización clara del progreso de recaudación.

### 🏥 Panel Clínico (Salud)
Herramientas poderosas para cuidadores y médicos.
- **Métricas Vitales**: Seguimiento de Neutrófilos, PLA, ALP con alertas visuales (Semáforo de colores).
- **Gráficos de Tendencia**: Visualización clara de la evolución del paciente.
- **Registro Histórico**: Bitácora digital de todos los eventos médicos.

### 🤝 Tablero de Ayuda (Comunidad)
La unión hace la fuerza.
- **Red de Apoyo Mutuo**: Las familias pueden solicitar o brindar ayuda práctica (pasear mascotas, comida, transporte).
- **Categorización**: Filtros rápidos para encontrar u ofrecer ayuda donde más se necesita.

---

## 🛠️ Stack Tecnológico

La aplicación ha sido construida siguiendo los más altos estándares de arquitectura móvil moderna (Senior Mobile Architecture):

- **Framework**: [Expo SDK 50+](https://expo.dev/) con **Expo Router** (Navegación basada en archivos).
- **Lenguaje**: **TypeScript** Estricto para máxima seguridad y escalabilidad.
- **Estilos**: **NativeWind (Tailwind CSS)**. Diseño "Atomic Design" con un sistema de tokens visuales cálidos (Terracota/Melocotón).
- **Estado Global**: **Zustand**. Gestión de estado ligera, rápida y modular (`raftecStore`, `clinicalStore`).
- **Visualización de Datos**: **React Native Wagmi Charts** para gráficos médicos hermosos y performantes de 60fps.
- **Arquitectura**: **Atomic Design** (`/src/components/atoms`, `molecules`, `organisms`).

---

## 🚀 Instalación y Uso

Sigue estos pasos para correr el proyecto localmente:

1.  **Clonar el repositorio**:
    ```bash
    git clone https://github.com/tu-usuario/raftec-app.git
    cd raftec-app
    ```

2.  **Instalar dependencias**:
    ```bash
    npm install
    ```

3.  **Iniciar la aplicación**:
    ```bash
    npx expo start -c
    ```

4.  **Ejecutar**:
    - Escanea el código QR con la app **Expo Go** en tu dispositivo Android o iOS.
    - O presiona `i` para abrir el simulador de iOS / `a` para el emulador de Android.

---

## 🎨 Diseño y UI

El diseño de Raftec prioriza la **calidez y la empatía**.
- **Paleta de Colores**:
  - Primary: `#F27438` (Naranja Cálido)
  - Background: `#FFF9F5` (Crema Suave)
  - Surface: `#FFFFFF` (Blanco Puro)
- **Tipografía**: Moderna, legible y amigable.
- **Formas**: Bordes redondeados (`borderRadius: 24`) en todos los contenedores para "suavizar" la experiencia visual.

---

> Hecho con ❤️ y 🍊 por [Tu Nombre / Familia Alberto Lira] en honor a **Rafa**.
