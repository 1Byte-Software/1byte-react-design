import styled from '@emotion/styled';

export const SelectWrapper = styled.div<{ width?: string | number }>`
    ${props => {
        return props.width && `width: ${props.width};`;
    }}

    .ant-select {
        width: 100%;
    }
`;
