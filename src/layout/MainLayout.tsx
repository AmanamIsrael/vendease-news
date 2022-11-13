import { useRouter } from "next/router"
import Tabs from "../components/Tabs"

interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const title = useRouter().pathname === '/' ? 'News feed' : 'Bookmarks'
    return (
        <>
            <section className='h-screen pt-[32px]'>
                <p className='leading-44.78 text-4xl text-green mb-[32px] capitalise text-center'>{title}</p>
                <div className='grid gap-[32px] justify-items-center md:w-[600px] w-[350px] mx-auto'>
                    <Tabs />
                    <main className="w-full">
                        {children}
                    </main>
                </div>

            </section>

        </>

    )
}

export default MainLayout