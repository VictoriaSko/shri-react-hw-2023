'use client';

import React, { FunctionComponent, useState } from 'react';

import { DecrementButton } from './DecrementButton';
import { Count } from './Count';
import { IncrementButton } from './IncrementButton';

import { DeleteProductDialog } from '../DeleteProductDialog';
import { useDispatch } from 'react-redux';
import { cartActions } from '@/lib/redux/features/cart';

import styles from './index.module.scss';

type ProductProps = {
    id: string;
    withDeleteDialog?: boolean;
};

export const ProductCounter: FunctionComponent<ProductProps> = ({
    id,
    withDeleteDialog,
}) => {
    const dispatch = useDispatch();
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleCloseDialog = () => setIsDialogOpen(false);

    const handleOpenDialog = () => setIsDialogOpen(true);

    const handleDelete = () => dispatch(cartActions.decrement(id));

    return (
        <div className={styles.container}>
            <DecrementButton
                id={id}
                onDelete={handleOpenDialog}
                withDeleteDialog={withDeleteDialog}
            />
            <Count id={id} />
            <IncrementButton id={id} />
            {withDeleteDialog && (
                <DeleteProductDialog
                    isOpen={isDialogOpen}
                    onClose={handleCloseDialog}
                    onDelete={handleDelete}
                />
            )}
        </div>
    );
};
