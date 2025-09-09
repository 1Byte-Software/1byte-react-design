import clsx from 'clsx';
import { GridCard } from './Grid';
import { MetaCard } from './Meta';
import { CardStyles } from './styles';
import { RdCardCompoundedComponent, RdCardProps } from './types';

export const CardInternal: React.FC<RdCardProps> = ({
    className,
    variant = 'default',
    ...antdProps
}) => {
    const variantClass: Record<NonNullable<RdCardProps['variant']>, string> = {
        compact: 'rd-card-variant-compact',
        default: 'rd-card-variant-default',
        borderless: 'rd-card-variant-borderless',
        outlined: 'rd-card-variant-outlined',
    };

    return <CardStyles className={clsx(className, variantClass[variant])} {...antdProps} />;
};

export const Card = CardInternal as RdCardCompoundedComponent;

Card.Grid = GridCard;
Card.Meta = MetaCard;
