import styled from '@emotion/styled';
import { Button } from 'antd';

export const ButtonStyles = styled(Button)<{
    width?: string | number;
}>`
    ${({ width }) => width && `width: ${width};`}
`;
