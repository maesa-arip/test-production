import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';

export default function Input({
    type = 'text',
    className,
    isFocused,
    ...props
}) {
    const input = useRef();

    useEffect(() => {
        // if (isFocused) {
        //     input.current.focus();
        // }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
            {...props}
                type={type}
                className={ clsx('border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm',className)}
            />
        </div>
    );
}
