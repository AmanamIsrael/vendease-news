import React, { useEffect, useState } from 'react'
import Apis from '../api/api'
import { News } from '../components/News'
import Spinner from '../components/Spinner'
import useNewsContext from '../hooks/useNewsContext'
import MainLayout from '../layout/MainLayout'
import { iNews } from '../types'
import { useErrorHandler } from 'react-error-boundary'




const Home = () => {
  const [allNews, setAllNews] = useState<iNews[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const handleError = useErrorHandler()

  useEffect(() => {
    const getAllNews = async () => {
      setIsLoading(true);
      try {
        const news = await Apis.getAllNews();
        const newNews = news.articles.map((n: iNews, idx: number) => { return { ...n, id: idx.toString() } })
        setAllNews(newNews)
        setIsLoading(false)
      }
      catch (e) {
        setIsLoading(false)
        handleError(e)
      }
    }

    getAllNews()

  }, [handleError])


  const { addToBookmarked, bookmarked } = useNewsContext()

  const isBookmarked = (id: string) => bookmarked.find(news => news.id === id) ? true : false



  return (
    <MainLayout>

      <div className='w-full'>
        {
          isLoading ?
            <div className='flex justify-center'>
              <Spinner />
            </div>
            : <>
              {
                allNews.map(currNews => (
                  <News key={currNews?.id} isbookmarked={isBookmarked(currNews.id)} data={currNews} onBookMark={() => addToBookmarked(currNews)} />
                ))
              }
            </>
        }

      </div>

    </MainLayout>
  )
}

export default Home