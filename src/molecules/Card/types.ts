import { CardProps } from 'antd';

type RdCardPropsExtend = {
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

export type RdCardProps = CardProps & RdCardPropsExtend;
