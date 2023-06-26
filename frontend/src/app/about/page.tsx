import { About } from '@/components/About';

import styles from './page.module.scss';

export const metadata = {
    title: 'О нас | ШРИ React',
    description: 'ШРИ React Задание',
};

export default function AboutPage() {
    return (
        <main className={styles.main}>
            <About />
        </main>
    );
}
