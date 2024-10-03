import { ButtonProps } from 'antd';
import { PropsWithChildren } from 'react';
import { ButtonStyles } from './styles';
import { ConfigProviderDesign } from '@/ContextProvider';

export interface IBaseButtonProps {
    isCapitalize?: boolean;
    isFull?: boolean;
}

export interface IButtonProps extends ButtonProps, PropsWithChildren {}

export const Button = ({ children, ...antdProps }: IButtonProps) => {
    return (
        <ConfigProviderDesign>
            <ButtonStyles {...antdProps}>{children}</ButtonStyles>
        </ConfigProviderDesign>
    );
};
