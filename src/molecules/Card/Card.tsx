import clsx from 'clsx';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { CardStyles } from './styles';
import { RdCardProps } from './types';

export const Card = ({ className, variant = 'default', ...antdProps }: RdCardProps) => {
    const variantClass: Record<NonNullable<RdCardProps['variant']>, string> = {
        compact: 'rd-card-variant-compact',
        default: '',
    };

    return (
        <ConfigProviderDesign>
            <CardStyles className={clsx(className, variantClass[variant])} {...antdProps} />
        </ConfigProviderDesign>
    );
};
