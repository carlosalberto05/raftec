# Raftec App Initialization

## Setup Instructions

1.  **Dependencies**: Core stack includes:
    - `expo`, `expo-router`
    - `nativewind`, `tailwindcss`
    - `@reduxjs/toolkit`, `react-redux`, `redux-saga`
    - `react-native-wagmi-charts`, `react-native-svg`, `react-native-reanimated`
    - `clsx`, `tailwind-merge`
    - **Dev / testing**: `jest`, `jest-expo`, `@types/jest`, `react-test-renderer`

2.  **Configuration**:
    - `tailwind.config.js` is set up with your custom colors (Terracota #F27438, etc.).
    - `babel.config.js` includes the NativeWind and Reanimated plugins.
    - `app.d.ts` includes NativeWind types.
    - `jest.config.js` uses the `jest-expo` preset for unit tests.

3.  **Project Structure**:
    - `app/(tabs)`: Main tabs (Inicio, Ángel, Clínico, Comunidad).
    - `src/components`: Atomic Design structure (atoms, molecules, organisms).
    - `src/store`: Redux store (`store.ts`), `ReduxProvider`, typed hooks (`hooks.ts`), slices (`slices/raftecSlice`, `slices/clinicalSlice`), sagas (`sagas/rootSaga.ts`).
    - `src/hooks`: Custom hooks such as `useHealthAlerts`.

4.  **Running the App**:
    - Run `npm start` or `npx expo start`.
    - Press `i` for iOS simulator or `a` for Android emulator.

5.  **Tests & types**:
    - `npm test` — Jest (e.g. component snapshots under `components/__tests__`, slice tests under `src/store/__tests__`).
    - `npm run typecheck` — `tsc --noEmit`.

## Key Files Created

- **Navigation**: `app/_layout.tsx` (includes `ReduxProvider`), `app/(tabs)/_layout.tsx`
- **State**: `src/store/store.ts`, `src/store/slices/*.ts`, `src/store/sagas/rootSaga.ts`
- **Components**:
    - `MetricBadge` (Atom)
    - `GuerreroCard` (Molecule)
    - `HealthChart` (Organism)
    
## Next Steps

- Replace placeholder images in `src/components/molecules/GuerreroCard.tsx` and screens with real assets.
- Connect `services/` to your backend API.
- Wire clinical charts to real data via Redux actions and, when needed, sagas that fetch from your API.
- Extend `rootSaga` with `takeEvery` / `takeLatest` for async flows (refresh metrics, sync, etc.).
