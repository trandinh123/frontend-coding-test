import ArrowRightIcon from '@public/icon/arrow-right.svg';
import Image from 'next/image';
import styles from '@/styles/pages/landingPage/modelList.module.scss';
import clsx from 'clsx';
import Button from '@/components/Button';

export default function ModelList() {
    const models = [
        {
            name: 'SIMON D.',
            image: '/images/models/simon.png',
            location: 'Dubai',
        },
        {
            name: 'CHRISTINE V.',
            image: '/images/models/christine.png',
            location: 'Burj Khalifa',
        },
        {
            name: 'DARON M.',
            image: '/images/models/daron.png',
            location: 'Dubai',
        },
        {
            name: 'VERONICA BR.',
            image: '/images/models/veronica.png',
            location: 'Dubai',
        },
        {
            name: 'MAIHUN D.',
            image: '/images/models/maihun.png',
            location: 'Dubai',
        },
    ];

    return (
        <div className={clsx(styles.container, 'container')}>
            <div className={styles.header}>
                <div
                    className={clsx(
                        styles['header__title'],
                        'text-2xl-semibold leading-8'
                    )}
                >
                    Meet our models
                </div>
                <Button className={styles['view-all-button']}>
                    <span>View all</span>
                    <Image src={ArrowRightIcon} alt={'arrow-right'} />
                </Button>
            </div>
            <div className={styles['list-container']}>
                {models.map((model) => (
                    <div key={model.name} className={styles['list-item']}>
                        <Image
                            src={model.image}
                            alt={model.name}
                            sizes={'100vw'}
                            width={287}
                            height={360}
                        />
                        <div>
                            <div className={'text-base-semibold leading-6'}>
                                {model.name}
                            </div>
                            <div
                                className={clsx(
                                    'text-xs-normal leading-4',
                                    styles['list-item__location']
                                )}
                            >
                                {model.location}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
