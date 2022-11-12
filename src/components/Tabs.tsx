import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import { News } from './News'


const Tabs: React.FC = () => {

    const path = useRouter().pathname

    return (
        <nav className="w-[255px] flex bg-grey text-grey2 h-[36px]">
            <Link className={`${path === "/" ? 'border-b-green text-green h-full' : ''} border-b-2  w-[127.25px] flex justify-center items-center text-center h-full ui-selected:ring-none`} href="/" >News</Link>
            <Link className={`${path === "/bookmarks" ? 'border-b-green text-green h-full' : ''}  border-b-2 w-[127.25px] flex justify-center items-center text-center h-full ui-selected:ring-none`} href="/bookmarks" >Bookmarks</Link>
        </nav>
    )
}

export default Tabs