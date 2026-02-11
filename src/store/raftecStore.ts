import { create } from 'zustand';

interface RaftecState {
    name: string;
    setName: (name: string) => void;
    level: number;
    setLevel: (level: number) => void;
    energyPoints: number; // For progress bar / gamification
    addEnergy: (points: number) => void;
    avatarUrl: string | null;
    setAvatarUrl: (url: string) => void;
}

export const useRaftecStore = create<RaftecState>((set) => ({
    name: 'Leo',
    setName: (name) => set({ name }),
    level: 5,
    setLevel: (level) => set({ level }),
    energyPoints: 150,
    addEnergy: (points) => set((state) => ({ energyPoints: state.energyPoints + points })),
    avatarUrl: null,
    setAvatarUrl: (avatarUrl) => set({ avatarUrl }),
}));
