import { IRdComponentsConfig } from '../../organisms';
import { variantSelectExtend } from './types';

const useExtendVariant = (variant: variantSelectExtend) => {
    const newSelectComponentToken: IRdComponentsConfig['Select'] = {};

    switch (variant) {
        case 'outlined-transparent': {
            if (newSelectComponentToken) {
                newSelectComponentToken.selectorBg = 'transparent';
            }
        }
    }

    return newSelectComponentToken;
};

export default useExtendVariant;