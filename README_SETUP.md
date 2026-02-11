# Raftec App Initialization

## Setup Instructions

1.  **Dependencies**: I have already installed the necessary dependencies:
    - `expo`, `expo-router`
    - `nativewind`, `tailwindcss`
    - `zustand`
    - `react-native-wagmi-charts`, `react-native-svg`, `react-native-reanimated`
    - `clsx`, `tailwind-merge`

2.  **Configuration**:
    - `tailwind.config.js` is set up with your custom colors (Terracota #F27438, etc.).
    - `babel.config.js` includes the NativeWind and Reanimated plugins.
    - `app.d.ts` includes NativeWind types.

3.  **Project Structure**:
    - `app/(tabs)`: Contains your main tabs (Inicio, Ángel, Clínico, Comunidad).
    - `src/components`: Atomic Design structure (atoms, molecules, organisms).
    - `src/store`: Zustand stores (`useRaftecStore`, `useClinicalStore`).
    - `src/hooks`: Custom hooks like `useHealthAlerts`.

4.  **Running the App**:
    - Run `npm start` or `npx expo start`.
    - Press `i` for iOS simulator or `a` for Android emulator.

## Key Files Created

- **Navigation**: `app/_layout.tsx`, `app/(tabs)/_layout.tsx`
- **Stores**: `src/store/raftecStore.ts`, `src/store/clinicalStore.ts`
- **Components**:
    - `MetricBadge` (Atom)
    - `GuerreroCard` (Molecule)
    - `HealthChart` (Organism)
    
## Next Steps

- Replace placeholder images in `src/components/molecules/GuerreroCard.tsx` and screens with real assets.
- Connect `services/` to your backend API.
- Customize the charts with real data in `useClinicalStore`.
