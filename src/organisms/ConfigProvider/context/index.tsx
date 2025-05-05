import React from 'react';
import { defaultIconPrefixCls, defaultPrefixCls } from './constants';
import { RdConfigConsumerProps } from './types';
import { defaultGetPrefixCls } from './helper';

export const ConfigContext = React.createContext<RdConfigConsumerProps>({
    // We provide a default function for Context without provider
    getPrefixCls: defaultGetPrefixCls,
    iconPrefixCls: defaultIconPrefixCls,
});
