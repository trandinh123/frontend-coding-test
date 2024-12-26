import styles from '@/styles/pages/landingPage/contactCard.module.scss';
import ContactUsBackground from '@public/images/contact-card-background.png';
import clsx from 'clsx';
import Button from '@/components/Button';
import BackgroundImageCard from '@/components/BackgroundImageCard';

export default function ContactUs() {
    return (
        <div className={clsx(styles.container, 'container')}>
            <BackgroundImageCard
                className={styles.card}
                imageProps={{ src: ContactUsBackground, alt: 'background' }}
            >
                <div
                    className={clsx(
                        styles['card__title'],
                        'text-2xl-semibold leading-8'
                    )}
                >
                    Looking for Models?
                </div>
                <div
                    className={clsx(
                        styles['card__description'],
                        'text-xs-normal leading-4'
                    )}
                >
                    Find the Perfect Model for Your Brand
                </div>
                <Button>Contact Our Team</Button>
            </BackgroundImageCard>
        </div>
    );
}
