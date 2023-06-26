import { createContext, useState, useCallback } from 'react';
import { Title } from '../Title';
import { Group } from '../Group';
import { Item } from '../Item';

type MenuContext = {
    activeGroup: string | null;
    setActiveGroup: (id: string) => void;
};

const initialState = {
    activeGroup: null,
    setActiveGroup: () => {},
};

export const MenuContext = createContext<MenuContext>(initialState);

export const MenuAccordion = ({
    children,
}: {
    children: string | JSX.Element | JSX.Element[];
}) => {
    const [activeGroup, setActiveGroup] = useState<string | null>(null);

    const handleSetActiveGroup = useCallback(
        (id: string) => {
            if (id === activeGroup) {
                setActiveGroup(null);
            } else {
                setActiveGroup(id);
            }
        },
        [activeGroup]
    );

    return (
        <MenuContext.Provider
            value={{ activeGroup, setActiveGroup: handleSetActiveGroup }}
        >
            {children}
        </MenuContext.Provider>
    );
};

MenuAccordion.Title = Title;
MenuAccordion.Group = Group;
MenuAccordion.Item = Item;
