import React from 'react';

const InputUI = ({
    id,
    name,
    labelText = '',
    value = '',
    placeholder = '',
    disabled = false,
    noMargin = false,
}: {
    id: string;
    name: string;
    labelText?: string;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    noMargin?: boolean;
}) => {
    return (
        <div className={`flex items-center${!noMargin ? ' mb-6' : ''}`}>
            {labelText !== '' && (
                <label htmlFor={id} className="text-sm  min-w-[100px] pr-4">
                    {labelText}
                </label>
            )}
            <textarea
                id={id}
                name={name}
                value={value}
                disabled={disabled}
                placeholder={placeholder}
                className="text-grey-night text-sm flex-grow rounded-[3px] p-2 border disabled:opacity-50 disabled:bg-off-white"
            />
        </div>
    );
};

export default InputUI;
