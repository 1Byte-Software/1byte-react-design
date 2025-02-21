import clsx from 'clsx';
import { GridCard } from './Grid';
import { MetaCard } from './Meta';
import { CardStyles } from './styles';
import { RdCardCompoundedComponent, RdCardProps } from './types';

export const CardInternal = ({ className, variant = 'default', ...antdProps }: RdCardProps) => {
    const variantClass: Record<NonNullable<RdCardProps['variant']>, string> = {
        compact: 'rd-card-variant-compact',
        default: '',
    };

    return <CardStyles className={clsx(className, variantClass[variant])} {...antdProps} />;
};

export const Card = CardInternal as RdCardCompoundedComponent;

Card.Grid = GridCard;
Card.Meta = MetaCard;
