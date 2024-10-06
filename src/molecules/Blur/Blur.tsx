import { HTMLAttributes } from 'react';
import { BlurBody, BlurHeader, BlurTitle, BlurWrapper } from './styles';
import { ConfigProviderDesign } from '@/ConfigProviderDesign';

interface IBlurProps extends HTMLAttributes<HTMLDivElement> {
    isBlur?: boolean;
    isFull?: boolean;
    title?: string;
    isLoading?: boolean;
}

export const Blur = (props: IBlurProps) => {
    const { title, isBlur, isLoading, children, ...htmlProps } = props;

    if (!isBlur) return children;

    return (
        <ConfigProviderDesign>
            <BlurWrapper>
                {!isLoading && (
                    <BlurHeader>
                        <BlurTitle>{title}</BlurTitle>
                    </BlurHeader>
                )}

                <BlurBody {...htmlProps}>{children}</BlurBody>
            </BlurWrapper>
        </ConfigProviderDesign>
    );
};
