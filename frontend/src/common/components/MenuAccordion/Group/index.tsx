import React, { useCallback, useContext, useMemo } from 'react';

import { ArrowIcon } from '@/icons/ArrowIcon';
import { MenuContext } from '../Context';

import classNames from 'classnames';

import styles from './index.module.scss';
import { IconColors } from '@/common/const/colors';

export const Group = ({
    id,
    title,
    children,
}: {
    children: string | JSX.Element | JSX.Element[];
    title: string;
    id: string;
}) => {
    const { activeGroup, setActiveGroup } = useContext(MenuContext);

    const isCurrentTabActive = useMemo(
        () => activeGroup === id,
        [activeGroup, id]
    );

    const handleSetActiveGroup = useCallback(
        () => setActiveGroup(id),
        [id, setActiveGroup]
    );

    return (
        <div className={styles.container} onClick={handleSetActiveGroup}>
            <div className={styles.titleContainer}>
                <h2 className={styles.title}>{title}</h2>
                <div
                    className={classNames(styles.iconContainer, {
                        [styles.isActive]: isCurrentTabActive,
                    })}
                >
                    <ArrowIcon
                        className={styles.arrowIcon}
                        fill={IconColors.Black}
                    />
                </div>
            </div>
            {isCurrentTabActive ? (
                <div className={styles.childrenContainer}>{children}</div>
            ) : null}
        </div>
    );
};
