import { unit as unitAntd } from '@ant-design/cssinjs';

export const unit = (num: string | number): string => {
    const result = unitAntd(num);

    return result;
};
