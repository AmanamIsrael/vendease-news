import React from 'react'
import IconBookmark from '../icons/IconBookmark'

export const News: React.FC = () => {
    return (
        <div className='p-4 bg-grey h-[200px] w-full grid grid-cols-[1fr_2fr] gap-2 relative'>
            <div className='w-full h-full bg-green'></div>
            <div className='flex flex-col space-y-2'>
                <div className='h-max'>
                    <p>As FTX sinks, other crypto exchanges are showing their coins</p>
                    <p className='text-xs uppercase text-green'>Mitchell Clark</p>
                </div>
                <p className='text-sm font-light'>Crypto.com, Binance, and Coinbase are among the cryptocurrency exchanges trying to prove to customers that their funds are safe following the collapse of FTX.
                </p>
            </div>
            <button type='button' className='absolute right-0 grid place-content-center bottom-0 bg-[#000000] w-[35px] h-[35px]'>
                <IconBookmark />
            </button>
        </div>
    )
}
