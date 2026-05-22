import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface Props {
  imgUrl: string;
  title: string;
  href?: string;
  textStyles?: string;
  imgStyles?: string;
  isAuthor?: boolean;
  name?: string;
  value : number | string;
  alt: string;
}


function Matrix({ imgUrl, title, href, value, textStyles, imgStyles, isAuthor , alt}: Props) {

  const metricContent = <>
  <Image src={imgUrl} width={16} height={16} alt={alt} className={`rounded-full object-contain ${imgStyles}`} />
  <p className={`${textStyles} flex items-center gap-1`}> {value}</p>
  <span className={`small-regular line-clamp-1 ${isAuthor?"max-sm:hidden" : ""}`}>{title}</span>
  </>

  return (
    href ? <Link href={href} className='flex-center gap-1'>{metricContent}</Link> : metricContent);
}

export default Matrix