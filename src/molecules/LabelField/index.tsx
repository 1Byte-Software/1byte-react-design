import { Flex } from 'antd';
import { PropsWithChildren } from 'react';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { Label, LabelDescription, LabelFieldWrapper } from './styles';
import { ILabelFieldProps } from './types';

export const LabelField = (props: ILabelFieldProps & PropsWithChildren) => {
    const {
        text,
        axis = 'vertical',
        description,
        htmlFor,
        isColon = true,
        required,
        widthControl,
        children,
    } = props;

    return (
        <ConfigProviderDesign>
            <LabelFieldWrapper
                wrap={false}
                gap={6}
                vertical={axis === 'vertical'}
                style={{
                    width: '100%',
                }}
                align={axis === 'vertical' ? 'start' : 'center'}
                justify={axis === 'vertical' ? 'start' : 'space-between'}
                className="rd-label-field__wrapper"
            >
                <Flex className={'rd-label-field__content'} vertical>
                    <Label htmlFor={htmlFor}>
                        {text || '\u00A0'}
                        {required && <sup>*</sup>}
                        {text && isColon && ': '}
                    </Label>
                    <LabelDescription htmlFor={htmlFor}>{description}</LabelDescription>
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
