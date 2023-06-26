import { Cart } from '@/components/Cart';

import styles from './page.module.scss';

export const metadata = {
    title: 'Корзина | ШРИ React',
    description: 'ШРИ React Задание',
};

export default function QusetionPage() {
    return (
        <main className={styles.main}>
            <Cart />
        </main>
    );
}
