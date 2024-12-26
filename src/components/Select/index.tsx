import Image from 'next/image';
import ChervonDown from '@public/icon/chevron-down.svg';

export default function Select({ value }: { value: string }) {
    return (
        <div className={'select'}>
            <div className={'text-sm-semibold leading-4'}>{value}</div>
            <Image src={ChervonDown} alt={'chervon-down'} />
        </div>
    );
}
