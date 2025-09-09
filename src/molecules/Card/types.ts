import { Card, GetProps } from 'antd';
import { ComponentToken as CardComponentTokenAntd } from 'antd/es/card/style';
import { CardInternal } from './Card';
import { GridCard } from './Grid';
import { MetaCard } from './Meta';

//#region Define Ant Design types
type CardPropsAntd = GetProps<typeof Card>;
type GridCardPropsAntd = GetProps<typeof Card.Grid>;
type MetaCardPropsAntd = GetProps<typeof Card.Meta>;
//#endregion

//#region Define extended component tokens
type CardComponentTokenExtend = {};
//#endregion

//#region Define extended types
type CardPropsExtend = {
    /**
     * @description
     * Defines the visual style of the entire card component.
     *
     * - `"default"`: The card will use the standard styling provided by Ant Design.
     * - `"compact"`: Applies a specialized style to the card, including a narrower header and a layout resembling compact designs such as Google Forms.
     *
     * This property allows you to customize the appearance of the card to match specific design requirements.
     */
    variant?: 'default' | 'compact' | CardPropsAntd['variant'];
};

type GridCardPropsExtend = {};
type MetaCardPropsExtend = {};
//#endregion

//#region Export types
export type RdCardProps = Omit<CardPropsAntd, 'variant'> & CardPropsExtend;
export type RdGridCardProps = GridCardPropsAntd & GridCardPropsExtend;
export type RdMetaCardProps = MetaCardPropsAntd & MetaCardPropsExtend;

export type RdCardComponentToken = CardComponentTokenAntd & CardComponentTokenExtend;
//#endregion

//#region Define component types
export type RdCardInternalComponent = React.ForwardRefExoticComponent<
    RdCardProps & React.RefAttributes<HTMLDivElement>
>;
export type RdGridCardComponent = React.FC<RdGridCardProps>;
export type RdMetaCardComponent = React.FC<RdMetaCardProps>;

export type RdCardCompoundedComponent = typeof CardInternal & {
    Grid: typeof GridCard;
    Meta: typeof MetaCard;
};
//#endregion
