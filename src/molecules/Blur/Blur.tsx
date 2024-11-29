import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { BlurBody, BlurHeader, BlurTitle, BlurWrapper } from './styles';
import { RdBlurProps } from './types';

export const Blur = (props: RdBlurProps) => {
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
