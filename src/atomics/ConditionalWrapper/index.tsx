import { ConditionalWrapperProps } from './types';

/**
 * ConditionalWrapper is a component that conditionally wraps its children
 * inside another component based on a given condition. If the condition is `true`,
 * it renders the children inside the specified wrapper component with the provided
 * wrapper props. If the condition is `false`, it renders the children without any wrapper.
 * */
const ConditionalWrapper = (props: ConditionalWrapperProps) => {
    const { condition, wrapper: Wrapper, wrapperProps, children } = props;
    return condition ? <Wrapper {...wrapperProps}>{children}</Wrapper> : <>{children}</>;
};

export default ConditionalWrapper;
