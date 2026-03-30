import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface RaftecState {
    name: string;
    level: number;
    energyPoints: number;
    avatarUrl: string | null;
}

const initialState: RaftecState = {
    name: 'Leo',
    level: 5,
    energyPoints: 150,
    avatarUrl: null,
};

const raftecSlice = createSlice({
    name: 'raftec',
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        setLevel: (state, action: PayloadAction<number>) => {
            state.level = action.payload;
        },
        addEnergy: (state, action: PayloadAction<number>) => {
            state.energyPoints += action.payload;
        },
        setAvatarUrl: (state, action: PayloadAction<string | null>) => {
            state.avatarUrl = action.payload;
        },
    },
});

export const { setName, setLevel, addEnergy, setAvatarUrl } = raftecSlice.actions;
export default raftecSlice.reducer;
