'use client';

import { FunctionComponent } from 'react';
import { Dialog } from '../Dialog';

import styles from './index.module.scss';

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onDelete: () => void;
};

export const DeleteProductDialog: FunctionComponent<Props> = ({
    isOpen,
    onClose,
    onDelete,
}) => {
    return (
        <Dialog title={'Удаление билета'} isOpen={isOpen} onClose={onClose}>
            <div className={styles.dialogContent}>
                <span className={styles.text}>
                    Вы уверены, что хотите удалить билет?
                </span>
                <div className={styles.buttonsContainer}>
                    <button className={styles.acceptButton} onClick={onDelete}>
                        Да
                    </button>
                    <button className={styles.declineButton} onClick={onClose}>
                        Нет
                    </button>
                </div>
            </div>
        </Dialog>
    );
};
