import { getComponentToken } from '../../utils';
import { DEFAULT_DESIGN_TOKEN } from './constants';

export const getBorderInlineEndStyle = () => {
    const widthBorderInlineEnd =
        getComponentToken('DashboardTemplate', 'widthBorderInlineEnd') ??
        DEFAULT_DESIGN_TOKEN.WIDTH_BORDER_INLINE_END;
    const colorBorderInlineEnd =
        getComponentToken('DashboardTemplate', 'colorBorderInlineEnd') ??
        DEFAULT_DESIGN_TOKEN.COLOR_BORDER_INLINE_END;

    return `${widthBorderInlineEnd}px solid ${colorBorderInlineEnd}`;
};

export const getColorBgHeaderSiderStyle = () => {
    const bgColorHeaderSider =
        getComponentToken('DashboardTemplate', 'colorBgHeaderSider') ??
        getComponentToken('Layout', 'headerBg');

    return bgColorHeaderSider;
};
