import React from 'react'
import { iNews } from '../../types'
import IconBookmark from '../icons/IconBookmark'
import IconDelete from '../icons/IconDelete'

interface iNewsComponentProps {
    data: iNews,
    onBookMark: (id: string) => void
    isbookmarked: boolean
    onDelete?: (id: string) => void
}

export const News: React.FC<iNewsComponentProps> = ({ data, onBookMark, isbookmarked, onDelete }) => {
    return (
        <div className='p-4 mb-[16px] bg-grey h-[200px] w-full grid grid-cols-[1fr_2fr] gap-2 relative'>
            <div className='w-full h-full bg-green'></div>
            <div className='flex flex-col space-y-2'>
                <div className='h-max'>
                    <p>{data.title}</p>
                    <p className='text-xs uppercase text-green'>{data.author}</p>
                </div>
                <p className='text-sm font-light'>{data.description}
                </p>
            </div>
            {
                onDelete ? <button type='button' onClick={() => onDelete(data.id)} className='absolute right-0 grid place-content-center bottom-0 bg-[#000000] w-[35px] h-[35px]'>
                    <IconDelete />
                </button> :
                    <button type='button' onClick={() => onBookMark(data.id)} className='absolute right-0 grid place-content-center bottom-0 bg-[#000000] w-[35px] h-[35px]'>
                        <IconBookmark isBookmarked={isbookmarked} />
                    </button>
            }

        </div>
    )
}
