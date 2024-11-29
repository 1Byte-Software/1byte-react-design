import styled from '@emotion/styled';
import { Space } from 'antd';
import { RdSpaceProps } from './types';

export const SpaceStyles = styled(Space)<Pick<RdSpaceProps, 'block'>>`
    ${({ block }) => block && 'width: 100%'};
`;
