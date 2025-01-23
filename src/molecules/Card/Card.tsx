import clsx from 'clsx';
import { CardStyles } from './styles';
import { RdCardProps } from './types';

export const Card = ({ className, variant = 'default', ...antdProps }: RdCardProps) => {
    const variantClass: Record<NonNullable<RdCardProps['variant']>, string> = {
        compact: 'rd-card-variant-compact',
        default: '',
    };

    return <CardStyles className={clsx(className, variantClass[variant])} {...antdProps} />;
};
