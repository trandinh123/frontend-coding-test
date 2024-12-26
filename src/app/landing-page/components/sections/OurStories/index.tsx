import clsx from 'clsx';
import styles from '@/styles/pages/landingPage/ourStories.module.scss';
import SlideNavigationIcon from '@public/icon/slide-navigation.svg';
import Image from 'next/image';
import Button from '@/components/Button';
import BackgroundImageCard from '@/components/BackgroundImageCard';
import BackgroundCard from '@public/images/our-stories-background.png';
import ArrowBoldLeftIcon from '@public/icon/arrow-bold-left.svg';
import ArrowBoldRightIcon from '@public/icon/arrow-bold-right.svg';

export default function OurStories() {
    return (
        <div className={clsx(styles.container, 'container')}>
            <div className={clsx(styles.header, 'text-2xl-semibold leading-8')}>
                Our Success Stories
            </div>
            <BackgroundImageCard
                imageProps={{
                    src: BackgroundCard,
                    alt: 'background',
                }}
                className={styles['image-slide']}
            >
                <div
                    className={clsx(
                        styles['image-slide__title'],
                        'text-base-normal leading-6'
                    )}
                >
                    Uliana&#39;s Story
                </div>
                <div
                    className={clsx(
                        styles['image-slide__description'],
                        'text-2xl-bold leading-7'
                    )}
                >
                    From Local to International
                </div>
                <Image
                    src={SlideNavigationIcon}
                    alt={'slide navigation'}
                    className={styles['image-slide__navigation']}
                />
                <div className={styles['arrow-container']}>
                    <div className={styles['icon-button--disabled']}>
                        <Image src={ArrowBoldLeftIcon} alt="arrow-left" />
                    </div>
                    <div className={styles['icon-button']}>
                        <Image src={ArrowBoldRightIcon} alt="arrow-right" />
                    </div>
                </div>
            </BackgroundImageCard>
            <div className={clsx(styles.cta)}>
                <Button>Apply now</Button>
                <div className={'text-sm-normal leading-5'}>
                    to Start Your Journey!
                </div>
            </div>
        </div>
    );
}
