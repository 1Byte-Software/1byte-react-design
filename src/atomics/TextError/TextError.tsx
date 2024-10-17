import { TextErrorWrapper } from './styles';
import { ITextErrorProps } from './types';

export const TextError = (props: ITextErrorProps) => {
    const { children } = props;
    return <TextErrorWrapper>{children}</TextErrorWrapper>;
};
