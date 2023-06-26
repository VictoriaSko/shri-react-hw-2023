'use client';

import React, { FunctionComponent, useState } from 'react';

import { CloseIcon } from '@/icons/CloseIcon';

import { IconColors } from '@/common/const/colors';
import { useDispatch } from 'react-redux';
import { cartActions } from '@/lib/redux/features/cart';

import { DeleteProductDialog } from '../DeleteProductDialog';

import styles from './index.module.scss';

type Props = {
    id: string;
};

export const DeleteProductButton: FunctionComponent<Props> = ({ id }) => {
    const dispatch = useDispatch();
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleDeleteProduct = () => {
        dispatch(cartActions.delete(id));
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    const handleOpenDialog = () => {
        setIsDialogOpen(true);
    };

    return (
        <>
            <button className={styles.container} onClick={handleOpenDialog}>
                <CloseIcon className={styles.icon} fill={IconColors.Black} />
            </button>
            <DeleteProductDialog
                isOpen={isDialogOpen}
                onClose={handleCloseDialog}
                onDelete={handleDeleteProduct}
            />
        </>
    );
};
