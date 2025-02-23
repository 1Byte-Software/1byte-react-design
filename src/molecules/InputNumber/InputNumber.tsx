import { InputNumberStyled } from './styles';
import { RdInputNumberComponent, RdInputNumberProps } from './types';

export const InputNumber: RdInputNumberComponent = (props: RdInputNumberProps) => {
    return <InputNumberStyled {...props} />;
};
