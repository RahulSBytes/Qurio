"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Input } from '../ui/input'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { formUrlQuery, removeKeyFromQuery } from '@/lib/url'


interface Props {
    imgSrc : string,
    placeholder : string,
    otherClasses: string,
    iconPosition: "left" | "right";
    route : string
}

const LocalSearch = ({imgSrc, route, placeholder,iconPosition, otherClasses}:Props) => {
const router = useRouter()
const pathname = usePathname();
    const searchParams = useSearchParams();
    const query = searchParams.get("query") || "";
    const [searchQuery, setSearchQuery] = useState(query);

    useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
        if (searchQuery) {
            const newUrl = formUrlQuery({
                params: searchParams.toString(), 
                key: "query", 
                value: searchQuery
            });
            router.push(newUrl, { scroll: false });
        } else {
            if (pathname === route) {
                const newUrl = removeKeyFromQuery({
                    params: searchParams.toString(),
                    keysToRemove: ["query"]
                });
                router.push(newUrl, { scroll: false });
            }
        }
    }, 300);

    return () => clearTimeout(delayDebounceFn); 
}, [searchQuery, pathname]);

  return (
    <div  className={`background-light800_darkgradient flex min-h-14 grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}>
        
       {iconPosition === "left" && (
        <Image
          src={imgSrc}
          alt="search"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}
        <Input type='text' placeholder={placeholder} onChange={(e)=>setSearchQuery(e.target.value)} value={searchQuery}  className="paragraph-regular no-focus placeholder text-dark400_light700 border-none shadow-none outline-hidden"/>
         {iconPosition === "right" && (
        <Image
          src={imgSrc}
          alt="search"
          width={15}
          height={15}
          className="cursor-pointer"
        />
      )}
    </div>
  )
}

export default LocalSearch