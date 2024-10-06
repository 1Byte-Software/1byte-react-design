import { PropsWithChildren } from 'react';
import { TextErrorWrapper } from './styles';

export interface ITextErrorProps extends PropsWithChildren {}

export const TextError = (props: ITextErrorProps) => {
    const { children } = props;
    return <TextErrorWrapper>{children}</TextErrorWrapper>;
};
