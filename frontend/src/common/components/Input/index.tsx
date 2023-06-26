import React, { ChangeEventHandler, forwardRef } from 'react';
import classNames from 'classnames';

import styles from './index.module.scss';

type InputProps = {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    icon?: string | JSX.Element | JSX.Element[];
    label?: string | JSX.Element | JSX.Element[];
    placeholder: string;
    readOnly?: boolean;
    isFocused?: boolean;
    disabled?: boolean;
    onClickContainer?: () => void;
    onClickLabel?: () => void;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
    {
        value,
        onChange,
        icon,
        label,
        placeholder,
        readOnly,
        isFocused,
        disabled,
        onClickContainer,
        onClickLabel,
    },
    ref
) {
    return (
        <div className={styles.container}>
            {label && (
                <div className={styles.labelContainer} onClick={onClickLabel}>
                    {label}
                </div>
            )}
            <div className={styles.inputContainer} onClick={onClickContainer}>
                <input
                    ref={ref}
                    className={classNames(styles.input, {
                        [styles.readOnly]: readOnly,
                        [styles.isFocused]: isFocused,
                    })}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    readOnly={readOnly}
                    disabled={disabled}
                />
                {icon && <div className={styles.iconContainer}>{icon}</div>}
            </div>
        </div>
    );
});
