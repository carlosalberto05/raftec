import { useAppSelector } from '../store/hooks';

export function useHealthAlerts() {
    const metrics = useAppSelector((state) => state.clinical.metrics);
    const alerts: { type: 'warning' | 'danger'; message: string }[] = [];

    Object.entries(metrics).forEach(([key, metric]) => {
        if (metric.status === 'danger') {
            alerts.push({
                type: 'danger',
                message: `¡Alerta crítica en ${key}! Valor fuera de rango seguro.`
            });
        } else if (metric.status === 'warning') {
            alerts.push({
                type: 'warning',
                message: `Atención requerida en ${key}. Monitorear de cerca.`
            });
        }
    });

    return alerts;
}
