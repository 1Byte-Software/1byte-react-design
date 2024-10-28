import { ReactNode } from 'react';

export interface ConditionalWrapperProps<T = any> {
    condition: boolean;
    wrapper: React.ComponentType<T>;
    wrapperProps: React.ComponentProps<any>;
    children: ReactNode;
}
