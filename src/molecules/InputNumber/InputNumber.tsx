import { forwardRef } from 'react';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { InputNumberStyled } from './styles';
import { RdInputNumberProps } from './types';

export const InputNumber = forwardRef(
    (props: RdInputNumberProps, ref: RdInputNumberProps['ref']) => {
        const { ...antdProps } = props;
        return (
            <ConfigProviderDesign>
                <InputNumberStyled ref={ref} {...antdProps} />
            </ConfigProviderDesign>
        );
    }
);
