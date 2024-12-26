import styles from '@/styles/pages/landingPage/whyChooseUs.module.scss';
import Image from 'next/image';
import Logo from '@public/images/weltenters-logo-with-name.svg';
import CheckboxIcon from '@public/icon/checkbox.svg';

export default function WhyChooseUs() {
    const reasons = [
        'Access global opportunities',
        'Join a supportive and professional team',
        'Get featured in high-profile events and campaigns',
    ];

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <div className={'text-2xl-semibold leading-8'}>Why Choose</div>
                <Image src={Logo} alt="logo" />
            </div>
            {reasons.map((reason) => (
                <div key={reason} className={styles['reason-item']}>
                    <Image src={CheckboxIcon} alt={'checkbox'} />
                    <div className={'text-base-normal leading-6'}>{reason}</div>
                </div>
            ))}
        </div>
    );
}
