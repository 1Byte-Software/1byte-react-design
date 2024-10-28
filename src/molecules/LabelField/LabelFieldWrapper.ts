import React from 'react';
import { LabelField } from '.';
import { ILabelFieldProps } from './types';

const LabelFieldWrapper = (labelFieldProps: ILabelFieldProps | false) => {
    return labelFieldProps ? LabelField : React.Fragment;
};

export default LabelFieldWrapper;
