import React from 'react'
import { News } from '../components/News'
import useNewsContext from '../hooks/useNewsContext'
import MainLayout from '../layout/MainLayout'
import { iNews } from '../types'

const allNews: iNews[] = [{ id: "1", author: "Amanam Israel", title: 'my first bookmark', description: "this is the description" }, { id: "2", author: "Amanam Israel", title: 'my second bookmark', description: "this is second the description" }]

const Home = () => {

  const { addToBookmarked, bookmarked } = useNewsContext()

  const isBookmarked = (id: string) => bookmarked.find(news => news.id === id) ? true : false

  return (
    <MainLayout>
      <div className='w-full'>
        {
          allNews.map(currNews => (
            <News key={currNews.id} isbookmarked={isBookmarked(currNews.id)} data={currNews} onBookMark={() => addToBookmarked(currNews)} />
          ))
        }
      </div>
    </MainLayout>
  )
}

export default Home