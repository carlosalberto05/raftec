import { create } from 'zustand';

interface ClinicalMetric {
    value: number;
    unit: string;
    status: 'success' | 'warning' | 'danger' | 'neutral'; // mapped to MetricBadge
    timestamp: string; // ISO string
}

interface ClinicalState {
    metrics: {
        neutrophils: ClinicalMetric;
        alp: ClinicalMetric;
        platelets: ClinicalMetric;
        // can add more
    };
    updateMetric: (type: keyof ClinicalState['metrics'], data: Partial<ClinicalMetric>) => void;
    trends: { timestamp: number; value: number }[]; // For chart
}

// Initial state with dummy data for presentation
const initialStateMetric: ClinicalMetric = {
    value: 0,
    unit: '',
    status: 'neutral',
    timestamp: new Date().toISOString(),
};

export const useClinicalStore = create<ClinicalState>((set) => ({
    metrics: {
        neutrophils: { value: 1.5, unit: 'K/µL', status: 'success', timestamp: new Date().toISOString() },
        alp: { value: 450, unit: 'U/L', status: 'warning', timestamp: new Date().toISOString() },
        platelets: { value: 250, unit: 'K/µL', status: 'success', timestamp: new Date().toISOString() },
    },
    updateMetric: (type, data) =>
        set((state) => ({
            metrics: {
                ...state.metrics,
                [type]: { ...state.metrics[type], ...data },
            },
        })),
    trends: [ // Sample data for chart
        { timestamp: 1680000000, value: 3 },
        { timestamp: 1680003600, value: 4 },
        { timestamp: 1680007200, value: 5 },
        { timestamp: 1680010800, value: 6 },
        { timestamp: 1680014400, value: 7 },
    ],
}));
