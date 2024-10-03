import { Flex } from 'antd';
import { PropsWithChildren } from 'react';
import { Label, LabelDescription, LabelFieldWrapper } from './style';
import { TAxis } from '@/models';
import { ConfigProviderDesign } from '@/ContextProvider';

export interface ILabelField {
    /** Only use when you want a space for the label and the label is empty. */
    isLabel?: boolean;
    /** Text label. */
    label?: string;
    /** Label axis used to determine whether the label is displayed vertically or horizontally. */
    labelAxis?: TAxis;
    /** Description for the label. */
    labelDescription?: string;
    /** Indicates if a colon should be appended to the label. */
    isColon?: boolean;
    /** Indicates if the field is required. */
    required?: boolean;
    /** Specifies the width of the field. */
    widthField?: string | number;
    /** Specifies the id of the element the label is bound to. */
    htmlFor?: string;
}

export const LabelField = (props: ILabelField & PropsWithChildren) => {
    const {
        isLabel = false,
        label,
        labelAxis = 'vertical',
        labelDescription,
        htmlFor,
        isColon = true,
        required,
        widthField,
        children,
    } = props;

    if (!label && !labelDescription && !isLabel) return children;

    return (
        <ConfigProviderDesign>
            <LabelFieldWrapper>
                <Flex
                    wrap={false}
                    gap={6}
                    vertical={labelAxis === 'vertical'}
                    style={{
                        width: '100%',
                    }}
                    align={labelAxis === 'vertical' ? 'start' : 'center'}
                    justify={labelAxis === 'vertical' ? 'start' : 'space-between'}
                >
                    <Flex vertical>
                        <Label htmlFor={htmlFor}>
                            {label || '\u00A0'}
                            {required && <sup>*</sup>}
                            {label && isColon && ': '}
                        </Label>
                        <LabelDescription htmlFor={htmlFor}>{labelDescription}</LabelDescription>
                    </Flex>
                    <Flex
                        style={{
                            width: widthField || '100%',
                        }}
                        vertical
                    >
                        {children}
                    </Flex>
                </Flex>
            </LabelFieldWrapper>
        </ConfigProviderDesign>
    );
};
