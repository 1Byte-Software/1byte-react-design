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
    const componentToken = (
        prepareComponentToken as RdGetDefaultTokenFn<RdComponentTokenMap, AliasToken, 'Button'>
    )({ ...(aliasToken as Required<AliasToken>) }) as ButtonComponentTokenAntd;

    const extendComponentToken: ButtonComponentTokenExtend = {};

    return {
        ...componentToken,
        ...extendComponentToken,
    };
};

if (config.componentToken?.Button) {
    config.componentToken.Button = rdPrepareComponentToken(config.designToken as RdAliasToken);
}
