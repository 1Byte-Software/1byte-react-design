import { Flex } from 'antd';
import { PropsWithChildren } from 'react';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { Label, LabelDescription, LabelFieldWrapper } from './styles';
import { ILabelFieldProps } from './types';

export const LabelField = (props: ILabelFieldProps & PropsWithChildren) => {
    const {
        label,
        labelAxis = 'vertical',
        labelDescription,
        htmlFor,
        isColon = true,
        required,
        widthControl,
        children,
    } = props;

    if (!label && !labelDescription) return children;

    return (
        <ConfigProviderDesign>
            <LabelFieldWrapper
                wrap={false}
                gap={6}
                vertical={labelAxis === 'vertical'}
                style={{
                    width: '100%',
                }}
                align={labelAxis === 'vertical' ? 'start' : 'center'}
                justify={labelAxis === 'vertical' ? 'start' : 'space-between'}
                className="rd-label-field__wrapper"
            >
                <Flex className={'rd-label-field__content'} vertical>
                    <Label htmlFor={htmlFor}>
                        {label || '\u00A0'}
                        {required && <sup>*</sup>}
                        {label && isColon && ': '}
                    </Label>
                    <LabelDescription htmlFor={htmlFor}>{labelDescription}</LabelDescription>
                </Flex>
                <Flex
                    className={'rd-label-field-control'}
                    style={{
                        width: widthControl,
                    }}
                    vertical
                >
                    {children}
                </Flex>
            </LabelFieldWrapper>
        </ConfigProviderDesign>
    );
};
