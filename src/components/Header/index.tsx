import styles from '@/styles/pages/landingPage/header.module.scss';
import Image from 'next/image';
import ChevronLeftIcon from '@public/icon/chevron-left.svg';
import MenuIcon from '@public/icon/menu.svg';
import Logo from '@public/images/weltenters-logo-with-name.svg';
import Select from '@/components/Select';
import Button from '@/components/Button';

export default function Header() {
    return (
        <div className={styles.container}>
            <Image
                src={ChevronLeftIcon}
                alt="chevron-left"
                className={styles.icon}
            />
            <Image src={Logo} alt="logo" />
            <Image src={MenuIcon} alt="menu" className={styles.icon} />
            <div className={styles['sub-menu']}>
                <div className={'text-sm-semibold leading-5'}>Home</div>
                <Select value={'For Models'} />
                <Select value={'For Clients'} />
            </div>
            <Button>Start your model career</Button>
        </div>
    );
}
