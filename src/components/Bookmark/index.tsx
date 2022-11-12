import Image from 'next/image'
import React from 'react'
import { iNews } from '../../types'
import IconDelete from '../icons/IconDelete'

interface iBookmarkComponentProps {
    data: iNews,
    onDelete: (id: string) => void
}

export const Bookmark: React.FC<iBookmarkComponentProps> = ({ data, onDelete }) => {
    return (
        <div className='p-4 mb-[16px] bg-grey h-[200px] w-full gap-2 relative'>
            {/* <div className='w-full h-full'>
                <Image src={data.urlToImage || ""} alt="news thumbnail" width={186.66} height={168} />
            </div> */}
            {/* Most Images are not loading correctly and this ruins the experience */}
            <div className='flex flex-col space-y-2'>
                <div className='h-max'>
                    <p>{data.title}</p>
                    <p className='text-xs uppercase text-green'>{data.author || "Author"}</p>
                </div>
                <p className='text-sm font-light'>{data.description}
                </p>
            </div>
            <button type='button' onClick={() => onDelete(data.id)} className='absolute right-0 grid place-content-center bottom-0 bg-[#000000] w-[35px] h-[35px]'>
                <IconDelete />
            </button>
        </div>
    )
}