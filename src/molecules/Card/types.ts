import { Card, GetProps } from 'antd';
import { ComponentToken as CardComponentTokenAntd } from 'antd/es/card/style';

//#region Define props
type CardProps = GetProps<typeof Card>;
//#endregion

//#region Custom component token
type CardComponentTokenExtend = {};
//#endregion

//#region Custom props
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
    variant?: 'default' | 'compact';
};
//#endregion

//#region export type
export type RdCardProps = CardProps & CardPropsExtend;

export type RdCardComponentToken = CardComponentTokenAntd & CardComponentTokenExtend;
//#endregion
