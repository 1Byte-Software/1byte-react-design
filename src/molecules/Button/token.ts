import { ComponentToken as ButtonComponentTokenAntd } from 'antd/es/button/style';
import { prepareComponentToken } from 'antd/es/button/style/token';
import type { AliasToken } from 'antd/es/theme/interface';
import {
    ButtonComponentTokenExtend,
    config,
    RdAliasToken,
    RdComponentTokenMap,
    RdGetDefaultToken,
    RdGetDefaultTokenFn,
} from '../..';

export const rdPrepareComponentToken: RdGetDefaultToken<'Button'> = aliasToken => {
    // ⚠️ DO NOT modify this block.
    // This is the original token fetched from Ant Design. Altering it may break default styling.
    const componentToken = (
        prepareComponentToken as RdGetDefaultTokenFn<RdComponentTokenMap, AliasToken, 'Button'>
    )({ ...(aliasToken as Required<AliasToken>) }) as ButtonComponentTokenAntd;

    // ✅ You can safely extend or override Button tokens below.
    // Add any custom token values to `extendComponentToken`.
    const extendComponentToken: ButtonComponentTokenExtend = {};

    return {
        ...componentToken,
        ...extendComponentToken,
    };
};

if (config.componentToken?.Button) {
    config.componentToken.Button = rdPrepareComponentToken(config.designToken as RdAliasToken);
}
