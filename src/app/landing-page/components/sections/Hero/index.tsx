import styles from '@/styles/pages/landingPage/hero.module.scss';
import clsx from 'clsx';
import Button from '@/components/Button';
import BackgroundImageCard from '@/components/BackgroundImageCard';
import BackgroundImage from '@public/images/hero-large-background.png';

export default function Hero() {
    return (
        <div className={clsx(styles.container)}>
            <BackgroundImageCard
                imageProps={{
                    src: BackgroundImage,
                    alt: 'background',
                }}
                className={styles.card}
            >
                <div className={clsx(styles.content)}>
                    <div
                        className={clsx(styles.title, 'text-xl-bold leading-6')}
                    >
                        Unlock your Modeling potential
                    </div>
                    <div
                        className={clsx(
                            styles.description,
                            'text-xs-normal leading-4'
                        )}
                    >
                        Discover endless opportunities, connect with top
                        agencies, and showcase your talent
                    </div>
                    <Button className={styles['apply-button']}>
                        Apply now
                    </Button>
                </div>
            </BackgroundImageCard>
        </div>
    );
}
