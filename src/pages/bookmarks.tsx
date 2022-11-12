import { NextPage } from 'next'
import React from 'react'
import { Bookmark } from '../components/Bookmark'
import useNewsContext from '../hooks/useNewsContext'
import MainLayout from '../layout/MainLayout'

const Bookmarks: NextPage = () => {
    const { bookmarked, deleteFromBookmarked } = useNewsContext()

    return (
        <MainLayout>
            {bookmarked.length > 0 ? <>
                {
                    bookmarked.map(currBookmark => (
                        <Bookmark key={currBookmark.id} data={currBookmark} onDelete={() => deleteFromBookmarked(currBookmark.id)} />
                    ))
                }
            </> : <p className='text-center'>😔 You havent made any bookmark yet.</p>}
        </MainLayout>
    )
}

export default Bookmarks