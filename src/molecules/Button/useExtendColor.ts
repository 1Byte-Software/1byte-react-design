import { config, IRdComponentsConfig } from '../..';
import { colorButtonExtend } from './types';

export const useExtendColor = (color: colorButtonExtend) => {
    const newComponentsButton: IRdComponentsConfig['Button'] = {};

    switch (color) {
        case 'second':
            if (newComponentsButton) {
                newComponentsButton.colorPrimary = config.designToken.colorSecondary;
                newComponentsButton.algorithm = true;
            }
    }

    return newComponentsButton;
};
