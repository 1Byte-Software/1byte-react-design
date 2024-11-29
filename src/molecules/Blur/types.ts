import { HTMLAttributes } from 'react';

type RdBlurPropsExtend = {
    isBlur?: boolean;
    isFull?: boolean;
    title?: string;
    isLoading?: boolean;
};

export type RdBlurProps = HTMLAttributes<HTMLDivElement> & RdBlurPropsExtend;
