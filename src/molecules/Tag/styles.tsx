import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Tag } from 'antd';
import { getAliasToken, getComponentToken, unit } from '../../utils';
import { RdTagProps } from './types';
import { Flex } from '../../atomics';

export const TagStyled = styled(Tag, {
    label: 'rd-tag-emotion',
})<Pick<RdTagProps, 'type'>>`
    ${({ type }) => {
        switch (type) {
            case 'text':
                return css`
                    background-color: inherit;
                    border: none;
                    padding-inline: unset;
                    margin-inline-end: unset;
                `;
            default:
                return css``;
        }
    }}
`;
export const TagCheckableStyled = styled(Tag.CheckableTag)``;

export const TagGroupStyled = styled.div`
    display: flex;
    column-gap: ${unit(getAliasToken('Tag', 'paddingXS') ?? 0)};
    flex-wrap: wrap;
`;
