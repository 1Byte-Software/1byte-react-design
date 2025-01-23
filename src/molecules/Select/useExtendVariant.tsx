import { RdComponentsConfig } from '../../utils/types';
import { variantSelectExtend } from './types';

const useExtendVariant = (variant: variantSelectExtend) => {
    const newSelectComponentToken: RdComponentsConfig['Select'] = {};

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
