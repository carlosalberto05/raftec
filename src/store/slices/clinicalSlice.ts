import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface ClinicalMetric {
    value: number;
    unit: string;
    status: 'success' | 'warning' | 'danger' | 'neutral';
    timestamp: string;
}

export interface ClinicalMetrics {
    neutrophils: ClinicalMetric;
    alp: ClinicalMetric;
    platelets: ClinicalMetric;
}

export interface ClinicalState {
    metrics: ClinicalMetrics;
    trends: { timestamp: number; value: number }[];
}

const initialState: ClinicalState = {
    metrics: {
        neutrophils: {
            value: 1.5,
            unit: 'K/µL',
            status: 'success',
            timestamp: new Date().toISOString(),
        },
        alp: {
            value: 450,
            unit: 'U/L',
            status: 'warning',
            timestamp: new Date().toISOString(),
        },
        platelets: {
            value: 250,
            unit: 'K/µL',
            status: 'success',
            timestamp: new Date().toISOString(),
        },
    },
    trends: [
        { timestamp: 1680000000, value: 3 },
        { timestamp: 1680003600, value: 4 },
        { timestamp: 1680007200, value: 5 },
        { timestamp: 1680010800, value: 6 },
        { timestamp: 1680014400, value: 7 },
    ],
};

const clinicalSlice = createSlice({
    name: 'clinical',
    initialState,
    reducers: {
        updateMetric: (
            state,
            action: PayloadAction<{ type: keyof ClinicalMetrics; data: Partial<ClinicalMetric> }>
        ) => {
            const { type, data } = action.payload;
            state.metrics[type] = { ...state.metrics[type], ...data };
        },
    },
});

export const { updateMetric } = clinicalSlice.actions;
export default clinicalSlice.reducer;
