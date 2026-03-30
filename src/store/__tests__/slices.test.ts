import clinicalReducer, { updateMetric } from '../slices/clinicalSlice';
import raftecReducer, { addEnergy, setName } from '../slices/raftecSlice';

describe('raftecSlice', () => {
    it('addEnergy sums points on top of initial energy', () => {
        const next = raftecReducer(undefined, addEnergy(25));
        expect(next.energyPoints).toBe(175);
    });

    it('setName updates the warrior display name', () => {
        const next = raftecReducer(undefined, setName('Mateo'));
        expect(next.name).toBe('Mateo');
    });
});

describe('clinicalSlice', () => {
    it('updateMetric merges partial fields', () => {
        const next = clinicalReducer(
            undefined,
            updateMetric({ type: 'alp', data: { value: 320, status: 'success' } })
        );
        expect(next.metrics.alp.value).toBe(320);
        expect(next.metrics.alp.status).toBe('success');
        expect(next.metrics.alp.unit).toBe('U/L');
    });
});
