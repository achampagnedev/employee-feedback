import React, { ChangeEventHandler } from 'react';

const InputUI = ({
    id,
    name,
    type = 'text',
    labelText = '',
    value = '',
    placeholder = '',
    disabled = false,
    noMargin = false,
    onChange = undefined,
}: {
    id: string;
    name: string;
    type?: string;
    labelText?: string;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    noMargin?: boolean;
    onChange?: ChangeEventHandler;
}) => {
    return (
        <div className={`flex items-center${!noMargin ? ' mb-6' : ''}`}>
            {labelText !== '' && (
                <label htmlFor={id} className="text-sm  min-w-[100px] pr-4">
                    {labelText}
                </label>
            )}
            <input
                id={id}
                type={type}
                name={name}
                value={value}
                disabled={disabled}
                placeholder={placeholder}
                className="text-grey-night text-sm flex-grow rounded-[3px] p-2 border disabled:opacity-50 disabled:bg-off-white"
                onChange={onChange}
            />
        </div>
    );
};

export default InputUI;
