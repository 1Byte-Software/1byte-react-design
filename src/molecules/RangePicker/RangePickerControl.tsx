// import { LabelField, TextError } from '@/designs';
// import { IControlField } from '@/models/interfaces/form';
// import { DatePicker } from 'antd';
// import { RangePickerProps } from 'antd/es/date-picker';
// import { useController } from 'react-hook-form';
// import { IRangePickerProps } from './RangePicker';
// import { RangePickerWrapper } from './styles';
// import { NoUndefinedRangeValueType } from 'node_modules/rc-pi';
// import { Dayjs } from 'dayjs';

// const { RangePicker: AntdRangePicker } = DatePicker;

// export interface IRangePickerControlProps extends Omit<IRangePickerProps, 'name'>, IControlField {
//     names: [string, string];
// }

// export const RangePickerControl = ({
//     names,
//     control,

//     // ILabelField props
//     required,
//     label,
//     labelAxis = 'vertical',
//     isColon = true,
//     labelDescription,
//     widthField,

//     ...antdProps
// }: IRangePickerControlProps) => {
//     const [startName, endName] = names;

//     const {
//         field: {
//             value: startDateValue,
//             onChange: onStartDateChange,
//             onBlur: onStartDateBlur,
//             ref: startRef,
//         },
//         fieldState: { invalid: startInvalid, error: startError },
//     } = useController({
//         name: startName,
//         control,
//     });

//     const {
//         field: {
//             value: endDateValue,
//             onChange: onEndDateChange,
//             onBlur: onEndDateBlur,
//             ref: endRef,
//         },
//         fieldState: { invalid: endInvalid, error: endError },
//     } = useController({
//         name: endName,
//         control,
//     });

//     const handleChange = (dates: NoUndefinedRangeValueType<Dayjs> | null) => {
//         if (dates) {
//             onStartDateChange(dates[0]);
//             onEndDateChange(dates[1]);
//         } else {
//             onStartDateChange(null);
//             onEndDateChange(null);
//         }
//     };

//     return (
//         <RangePickerWrapper>
//             <LabelField
//                 label={label}
//                 labelAxis={labelAxis}
//                 required={required}
//                 isColon={isColon}
//                 labelDescription={labelDescription}
//                 widthField={widthField}
//             >
//                 <AntdRangePicker
//                     {...(antdProps as RangePickerProps)}
//                     value={[startDateValue, endDateValue]}
//                     onChange={handleChange}
//                     onBlur={() => {
//                         onStartDateBlur();
//                         onEndDateBlur();
//                     }}
//                     ref={node => {
//                         startRef(node);
//                         endRef(node);
//                     }}
//                 />
//             </LabelField>
//             {(startInvalid || endInvalid) && (
//                 <TextError>{startError?.message || endError?.message}</TextError>
//             )}
//         </RangePickerWrapper>
//     );
// };
