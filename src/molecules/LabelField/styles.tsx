import styled from '@emotion/styled';
import { Flex } from 'antd';
import { config } from '../..';

export const LabelFieldWrapper = styled(Flex)``;

export const Label = styled.label`
    color: ${config.designToken.colorText};
    sup {
        color: ${config.designToken.colorError};
    }
`;

export const LabelDescription = styled.label`
    font-style: italic;
`;
