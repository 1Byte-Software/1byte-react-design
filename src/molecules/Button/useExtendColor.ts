import { config } from '../..';
import { RdComponentsConfig } from '../../utils/types';
import { ColorButtonExtendProp } from './types';

export const useExtendColor = (color: ColorButtonExtendProp) => {
    const newComponentsButton: RdComponentsConfig['Button'] = {};

    switch (color) {
        case 'second':
            if (newComponentsButton) {
                newComponentsButton.colorPrimary = config.designToken.colorSecondary;
                newComponentsButton.algorithm = true;
            }
    }

    return newComponentsButton;
};
