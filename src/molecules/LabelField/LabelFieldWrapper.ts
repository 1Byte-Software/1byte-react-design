import React from 'react';
import { LabelField } from '.';
import { RdLabelFieldProps } from './types';

const LabelFieldWrapper = (labelFieldProps: RdLabelFieldProps | false) => {
    return labelFieldProps ? LabelField : React.Fragment;
};

export default LabelFieldWrapper;
