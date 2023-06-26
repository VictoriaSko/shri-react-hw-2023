import React, { FunctionComponent } from 'react';

import Link from 'next/link';

import { CartCounter } from '../CartCounter';
import { CartIcon } from '@/icons/CartIcon';
import { IconColors } from '@/common/const/colors';

import styles from './index.module.scss';

export const Cart: FunctionComponent = () => {
    return (
        <div className={styles.container}>
            <CartCounter />
            <Link href='/cart'>
                <CartIcon fill={IconColors.White} className={styles.icon} />
            </Link>
        </div>
    );
};
