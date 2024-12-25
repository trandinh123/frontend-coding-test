import styles from '@/styles/pages/landingPage/footer.module.scss';
import Link from 'next/link';
import clsx from 'clsx';
import LogoOnly from '@public/images/weltenters-logo-only.svg';
import Image from 'next/image';
import Button from '@/components/Button';
import InstagramIcon from '@public/icon/instagram.svg';
import YoutubeIcon from '@public/icon/youtube.svg';
import TiktokIcon from '@public/icon/tiktok.svg';
import Select from '@/components/Select';

export default function Footer() {
    const appNavigation = [
        {
            title: 'FOR MODELS',
            link: [
                {
                    title: 'Apply Now',
                },
                {
                    title: 'FAQs for Applicants',
                },
            ],
        },
        {
            title: 'FOR CLIENTS',
            link: [
                {
                    title: 'Hire a Model',
                },
                {
                    title: 'Success Stories',
                },
            ],
        },
    ];
    const socialLinks = [
        {
            icon: InstagramIcon,
            alt: 'Instagram',
        },
        {
            icon: YoutubeIcon,
            alt: 'Youtube',
        },
        {
            icon: TiktokIcon,
            alt: 'Tiktok',
        },
    ];

    return (
        <>
            <div className={styles.container}>
                {appNavigation.map((item) => (
                    <div key={item.title} className={styles['app-navigation']}>
                        <div
                            className={clsx(
                                styles['app-navigation__title'],
                                'text-sm-bold leading-5'
                            )}
                        >
                            {item.title}
                        </div>
                        <div className={clsx(styles['link-container'])}>
                            {item.link.map((link) => (
                                <Link key={link.title} href="#">
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
                <div className={styles['page-navigation']}>
                    <div className={styles['page-navigation__logo']}>
                        <picture>
                            <source
                                srcSet="/images/weltenters-logo-with-name.svg"
                                media="(min-width: 1440px)"
                            />
                            <Image src={LogoOnly} alt="Logo" />
                        </picture>
                        <div className={'text-sm-bold leading-5'}>
                            WELTENTERS FZ LLC
                        </div>
                    </div>
                    <div className={styles['link-container']}>
                        <Link href="#">Contact Us</Link>
                        <Link href="#">Privacy Policy</Link>
                    </div>
                    <Button>Sign in</Button>
                </div>
                <div className={styles['social-links-and-language-setting']}>
                    <div
                        className={clsx(
                            styles['app-navigation__title'],
                            'text-sm-bold leading-5'
                        )}
                    >
                        Social
                    </div>
                    <div className={styles['social-links']}>
                        {socialLinks.map((link) => (
                            <Link href="#" key={link.alt}>
                                <Image src={link.icon} alt={link.alt} />
                            </Link>
                        ))}
                    </div>
                    <Select value={'English'} />
                </div>
            </div>
            <div className={styles['copyright']}>
                <Image src={LogoOnly} alt={'logo'} />
                <div className={styles['copyright__text']}>
                    Copyright © 2024 - All right reserved
                </div>
                <div className={styles['language-setting']}>English</div>
            </div>
        </>
    );
}
