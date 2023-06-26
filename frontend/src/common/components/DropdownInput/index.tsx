'use client';

import React, {
    FunctionComponent,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';

import { Input } from '../Input';
import { ArrowIcon } from '@/icons/ArrowIcon';

import styles from './index.module.scss';

type DropdownInputProps = {
    value: string;
    label: string;
    placeholder: string;
    onSelect: (newValue: any) => void;
    items: { id: string; name: string }[];
    disabled?: boolean;
};

export const DropdownInput: FunctionComponent<DropdownInputProps> = ({
    value,
    onSelect,
    label,
    placeholder,
    items,
    disabled,
}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.addEventListener('scroll', closeDropdown);
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('scroll', closeDropdown);
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen((prevState: boolean) => !prevState);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (event.target) {
            const target = event.target as Node;

            if (!containerRef?.current?.contains(target)) {
                setIsDropdownOpen(false);
            }
        }
    };

    const list = useMemo(
        () =>
            items.map((item) => (
                <div
                    className={styles.itemContainer}
                    key={item.id}
                    onClick={() => {
                        onSelect(item);
                        setIsDropdownOpen(false);
                    }}
                >
                    {item.name}
                </div>
            )),
        [items, onSelect]
    );

    const dropdownStyle = useMemo(() => {
        if (!isDropdownOpen || !inputRef?.current) return;

        const {
            top = 0,
            width = 0,
            left = 0,
        } = inputRef.current.getBoundingClientRect() || {};

        return {
            '--top': `${top + window.scrollY + 46}px`,
            '--width': `${width + 2}px`,
            '--left': `${left}px`,
        } as React.CSSProperties;
    }, [isDropdownOpen]);

    return (
        <div className={styles.container} ref={containerRef}>
            <Input
                ref={inputRef}
                readOnly
                label={label}
                value={value}
                placeholder={placeholder}
                onChange={() => {}}
                isFocused={isDropdownOpen}
                onClickContainer={toggleDropdown}
                onClickLabel={closeDropdown}
                disabled={disabled}
                icon={
                    <ArrowIcon
                        className={classNames(styles.icon, {
                            [styles.isOpen]: isDropdownOpen,
                        })}
                    />
                }
            />
            {typeof document !== 'undefined' && document
                ? createPortal(
                      items?.length > 0 && isDropdownOpen ? (
                          <div
                              className={styles.itemsContainer}
                              style={dropdownStyle}
                          >
                              {list}
                          </div>
                      ) : null,
                      document.body
                  )
                : null}
        </div>
    );
};
