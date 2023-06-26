'use client';

import React, { FunctionComponent, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { CloseIcon } from '@/icons/CloseIcon';
import { IconColors } from '@/common/const/colors';

import styles from './index.module.scss';

type Props = {
    isOpen: boolean;
    onClose: () => void;
    title: string | JSX.Element | JSX.Element[];
    children: string | JSX.Element | JSX.Element[];
};

export const Dialog: FunctionComponent<Props> = ({
    isOpen,
    onClose,
    title,
    children,
}) => {
    const dialogRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'scroll';
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
            document.body.style.overflow = 'scroll';
        };
    }, [isOpen]);

    const handleClickOutside = (event: MouseEvent) => {
        if (event.target) {
            const target = event.target as Node;

            if (!dialogRef?.current?.contains(target)) {
                onClose();
            }
        }
    };

    return typeof document !== 'undefined' && document && isOpen ? (
        <>
            {createPortal(
                <div className={styles.dialogBackground} ref={dialogRef} />,
                document.body
            )}
            {createPortal(
                <div className={styles.container} ref={dialogRef}>
                    <div className={styles.titleContainer}>
                        <div className={styles.title}>{title}</div>
                        <button
                            className={styles.closeButton}
                            onClick={onClose}
                        >
                            <CloseIcon
                                className={styles.icon}
                                fill={IconColors.Black}
                            />
                        </button>
                    </div>
                    <div className={styles.childrenContainer}>{children}</div>
                </div>,
                document.body
            )}
        </>
    ) : null;
};
