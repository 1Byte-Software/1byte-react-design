import { forwardRef } from 'react';
import { SplitScreenTemplateStyles } from './styles';
import { RdSplitScreenTemplateComponent } from './types';
import SplitPane from './components/SplitPane';
import { Flex } from '../../atomics';

export const SplitScreenTemplate: RdSplitScreenTemplateComponent = forwardRef((props, ref) => {
    const { children, leftPanelProps, rightPanelProps, ...antdProps } = props;

    return (
        <SplitScreenTemplateStyles ref={ref} {...antdProps}>
            <Flex
                style={{
                    height: '100%',
                }}
            >
                {leftPanelProps && <SplitPane {...leftPanelProps} />}
                {rightPanelProps && <SplitPane {...rightPanelProps} />}
            </Flex>
        </SplitScreenTemplateStyles>
    );
});
