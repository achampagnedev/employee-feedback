import React, { ChangeEventHandler } from 'react';
import Select, { OptionsType } from 'react-select';

const SelectUI = ({
    id,
    name,
    options = undefined,
    isMulti = false,
    value = undefined,
    labelText = '',
    placeholder = '',
    disabled = false,
    noMargin = false,
    onChange = undefined,
}: {
    id: string;
    name: string;
    options: OptionsType<any>;
    isMulti?: boolean;
    value?: () => {};
    labelText?: string;
    placeholder?: string;
    disabled?: boolean;
    noMargin?: boolean;
    onChange?: ChangeEventHandler;
}) => {
    return (
        <div className={`flex items-center${!noMargin ? ' mb-6' : ''}`}>
            {labelText !== '' && (
                <label htmlFor={id} className="text-sm min-w-[100px] pr-4">
                    {labelText}
                </label>
            )}
            <Select
                id={id}
                name={name}
                options={options}
                isMulti={isMulti}
                value={value}
                disabled={disabled}
                className="text-sm flex-grow rounded-sm disabled:opacity-50 disabled:bg-off-white min-w-[200px] w-full"
                placeholder={placeholder}
                defaultValue={options[0]}
                onChange={onChange}
            />
        </div>
    );
};

export default SelectUI;
