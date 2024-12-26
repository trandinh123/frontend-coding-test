import { HTMLAttributes } from 'react';
import clsx from 'clsx';
import Image, { ImageProps } from 'next/image';

interface BackgroundImageCardProps extends HTMLAttributes<HTMLDivElement> {
    imageProps: ImageProps;
}

export default function BackgroundImageCard({
    children,
    className,
    imageProps,
    ...props
}: BackgroundImageCardProps) {
    return (
        <div {...props} className={clsx('bg-img-card__container', className)}>
            <Image {...imageProps} className={'bg-img-card__img'} />
            {children}
        </div>
    );
}
