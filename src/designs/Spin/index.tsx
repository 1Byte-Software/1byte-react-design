import { Spin as SpinAntd, SpinProps } from 'antd';
import { PropsWithChildren } from 'react';
import { SpinWrapper } from './styles';

interface ISpinnerProps extends PropsWithChildren, SpinProps {
    isFull?: boolean;
}

export const Spin = ({ children, isFull = false, ...antdProps }: ISpinnerProps) => {
    return (
        <SpinWrapper isFull={isFull}>
            <SpinAntd {...antdProps}>{children}</SpinAntd>
        </SpinWrapper>
    );
};
