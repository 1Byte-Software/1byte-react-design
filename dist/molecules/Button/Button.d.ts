import { ButtonProps } from 'antd';
import { PropsWithChildren } from 'react';
export interface IBaseButtonProps {
    isCapitalize?: boolean;
    isFull?: boolean;
}
export interface IButtonProps extends ButtonProps, PropsWithChildren {
}
export declare const Button: ({ children, ...antdProps }: IButtonProps) => import("react/jsx-runtime").JSX.Element;
