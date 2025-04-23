import { forwardRef } from 'react';
import { TypographyParagraphStyles } from './styles';
import { RdTypographyParagraphProps } from './types';
import { Skeleton } from '../../molecules';

export const TypographyParagraph = forwardRef(
    (props: RdTypographyParagraphProps, ref: RdTypographyParagraphProps['ref']) => {
        const { loading, ...antdProps } = props;

        if (loading) return <Skeleton active />;

        return <TypographyParagraphStyles ref={ref} {...antdProps} />;
    }
);
