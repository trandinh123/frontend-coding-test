import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

export default function Button({
    children,
    className,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button {...props} className={clsx('button', className)}>
            {children}
        </button>
    );
}
