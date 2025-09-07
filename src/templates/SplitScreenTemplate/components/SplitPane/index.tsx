import { forwardRef } from 'react';
import { SplitPaneWrapper } from './styles';
import { RdSplitScreenTemplateSplitPaneComponent } from './types';

const SplitPane: RdSplitScreenTemplateSplitPaneComponent = forwardRef((props, ref) => {
    const { children, render, ...restProps } = props;

    if (render) {
        return render({ children, ...restProps });
    }

    return (
        <SplitPaneWrapper ref={ref} {...restProps}>
            {children}
        </SplitPaneWrapper>
    );
});

export default SplitPane;
