import styled from '@emotion/styled';
import { Button } from 'antd';
import { RdButtonProps } from './types';

export const ButtonStyles = styled(Button)<RdButtonProps>`
    ${({ width }) => width && `width: ${width};`}

    ${({ align }) => align && `justify-content: ${align};`}
`;
