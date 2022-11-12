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
    const [bookmarked, setBookmarked] = React.useState<iNews[]>([])

    const addToBookmarked = (news: iNews) => {
        const isAlreadyBookmarked = !bookmarked.find(item => item.id === news.id)
        if (isAlreadyBookmarked) {
            setBookmarked(state => ([...state, news]))
        }
        else {
            deleteFromBookmarked(news.id)
        }

    }

    const deleteFromBookmarked = (newsId: string) => {
        setBookmarked(state => state.filter(n => n.id !== newsId))
    }

    return (
        <NewsContext.Provider value={{ bookmarked, addToBookmarked, deleteFromBookmarked }} >
            {children}
        </NewsContext.Provider>
    )
}

export default NewsProvider