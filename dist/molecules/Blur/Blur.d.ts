import { HTMLAttributes } from 'react';
interface IBlurProps extends HTMLAttributes<HTMLDivElement> {
    isBlur?: boolean;
    isFull?: boolean;
    title?: string;
    isLoading?: boolean;
}
export declare const Blur: (props: IBlurProps) => string | number | boolean | import("react/jsx-runtime").JSX.Element | Iterable<import("react").ReactNode> | null | undefined;
export {};
