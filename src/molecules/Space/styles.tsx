import styled from '@emotion/styled';
import { Space } from 'antd';
import { RdSpaceProps } from './types';

export const SpaceStyles = styled(Space, {
    shouldForwardProp: prop => {
        const propsNotForward = ['block'];

        // If prop is not in the propsNotForward array, then forward it.
        return !propsNotForward.includes(prop);
    },
})<Pick<RdSpaceProps, 'block'>>`
    ${({ block }) => {
        return block && 'width: 100%';
    }};
`;
