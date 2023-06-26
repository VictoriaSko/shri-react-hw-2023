import React, { useMemo } from 'react';

import { MenuAccordion } from './Context';

import styles from './index.module.scss';

type Group = {
    id: string;
    title: string;
    description: string[];
};

export default function CompoundComponent({
    title,
    groups,
}: {
    title: string;
    groups: Group[];
}) {
    const groupsElements = useMemo(() => {
        return groups.map((group: Group) => (
            <MenuAccordion.Group
                key={group.id}
                id={group.id}
                title={group.title}
            >
                {group.description.map((description: string) => (
                    <MenuAccordion.Item
                        key={description}
                        description={description}
                    />
                ))}
            </MenuAccordion.Group>
        ));
    }, [groups]);

    return (
        <div className={styles.container}>
            <MenuAccordion>
                <MenuAccordion.Title title={title} />
                <div className={styles.groupsContainer}>{groupsElements}</div>
            </MenuAccordion>
        </div>
    );
}
