import { config, RdComponentsConfig } from '../..';
import { colorButtonExtend } from './types';

export const useExtendColor = (color: colorButtonExtend) => {
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
