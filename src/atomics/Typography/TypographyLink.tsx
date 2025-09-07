import { forwardRef } from 'react';
import { Skeleton } from '../../molecules';
import { TypographyLinkStyles } from './styles';
import { RdTypographyLinkProps } from './types';
import { getHeight } from './TypographyLink.helper';

export const TypographyLink = forwardRef(
    (props: RdTypographyLinkProps, ref: RdTypographyLinkProps['ref']) => {
        const { loading, ...antdProps } = props;

        if (loading) {
            return (
                <Skeleton.Input
                    active
                    style={{
                        height: getHeight(),
                    }}
                />
            );
        }

        return <TypographyLinkStyles ref={ref} {...antdProps} />;
    }
);
