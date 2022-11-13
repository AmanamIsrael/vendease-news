import React, { SetStateAction } from "react"
import { iNews } from "../types"

export const NewsContext = React.createContext<NewsContextProps>({} as NewsContextProps)
NewsContext.displayName = 'NewsContext'

export interface NewsContextProps {
    bookmarked: iNews[]
    addToBookmarked: (news: iNews) => void;
    deleteFromBookmarked: (newsId: string) => void;
}

interface NewsProviderProps {
    children: React.ReactNode
}

const NewsProvider: React.FC<NewsProviderProps> = ({ children }) => {
    let fromLocalStorage = null
    if (typeof window !== 'undefined') {
        fromLocalStorage = localStorage.getItem('__bookmarks')
    }
    const parsed: iNews[] | null = fromLocalStorage ? JSON.parse(fromLocalStorage) : null

    const [bookmarked, setBookmarked] = React.useState<iNews[]>(() => parsed ? parsed : [])

    const addToBookmarked = (news: iNews) => {
        const isNotAlreadyBookmarked = !bookmarked.find(item => item.id === news.id)
        if (isNotAlreadyBookmarked) {
            const update = [...bookmarked, news]
            setBookmarked(update)
            localStorage.setItem('__bookmarks', JSON.stringify(update))
        }
        else {
            deleteFromBookmarked(news.id)
        }

    }

    const deleteFromBookmarked = (newsId: string) => {
        const update = bookmarked.filter(n => n.id !== newsId)
        setBookmarked(update)
        localStorage.setItem('__bookmarks', JSON.stringify(update))
    }

    return (
        <NewsContext.Provider value={{ bookmarked, addToBookmarked, deleteFromBookmarked }} >
            {children}
        </NewsContext.Provider>
    )
}

export default NewsProvider