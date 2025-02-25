import { RdSelectProps } from './types';

export const handleSelectVariant = (variant: RdSelectProps['variant']) => {
    switch (variant) {
        case 'borderless':
            return 'borderless';
        case 'outlined-transparent':
            return 'outlined-transparent';
        default:
            return 'default';
    }
};
