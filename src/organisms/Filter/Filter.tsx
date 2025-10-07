import { useMemo, useState } from 'react';
import { FilterBody } from './components/Body';
import { FilterFooter } from './components/Footer';
import { FilterHeader } from './components/Header';
import { filterWrapperFunc } from './styles';
import { RdFilterProps } from './types';

export const Filter = <T extends Record<string, any>>(props: RdFilterProps<T>) => {
    const { value, headerProps, footerProps, localization, onChange } = props;
    const { footer: footerLocalization, header: headerLocalization } = localization || {};
    const [isOpenAdvancedFilter, setIsOpenAdvancedFilter] = useState<boolean>(false);

    const FilterWrapper = useMemo(() => {
        return filterWrapperFunc();
    }, [filterWrapperFunc]);

    return (
        <FilterWrapper header={headerProps}>
            {headerProps && <FilterHeader localization={headerLocalization} {...headerProps} />}
            {isOpenAdvancedFilter && <FilterBody />}
            {footerProps && (
                <FilterFooter<T>
                    localization={footerLocalization}
                    filterValue={value}
                    onChangeFilterValue={onChange}
                    {...footerProps}
                />
            )}
        </FilterWrapper>
    );
};
