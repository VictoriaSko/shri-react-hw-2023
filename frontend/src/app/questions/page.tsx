import { Questions } from '@/components/Questions';

import styles from './page.module.scss';

export const metadata = {
    title: 'Вопросы-ответы | ШРИ React',
    description: 'ШРИ React Задание',
};

export default function QusetionPage() {
    return (
        <main className={styles.main}>
            <Questions />
        </main>
    );
}
