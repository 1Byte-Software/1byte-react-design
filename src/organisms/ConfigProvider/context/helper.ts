import { defaultPrefixCls } from './constants';

export const defaultGetPrefixCls = (suffixCls?: string, customizePrefixCls?: string) => {
    if (customizePrefixCls) {
        return customizePrefixCls;
    }
    return suffixCls ? `${defaultPrefixCls}-${suffixCls}` : defaultPrefixCls;
};
