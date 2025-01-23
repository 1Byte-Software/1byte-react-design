import { Button as ButtonAntd } from 'antd';
import { RdButtonGroupProps } from './types';

export const ButtonGroupInternal = (props: RdButtonGroupProps) => {
    return <ButtonAntd.Group {...props} />;
};
