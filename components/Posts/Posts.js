'use client'
import { useState } from 'react'
import Link from 'next/link'

import Post from './Post'
import { PAGE_SLUGS } from '@constants/pages'
import Preloader from '@ui/Preloader/Preloader'
import Button from '@ui/Button/Button'

const Posts = ({ posts }) => {
    const [currentPosts, setCurrentPosts] = useState(10)
    const [loadedPosts, setLoadedPosts] = useState(posts.slice(0, 10))

    if (!posts) return <Preloader />

    const handleLoadPosts = () => {
        const nextPosts = posts.slice(currentPosts, currentPosts + 10)

        if (nextPosts.length === 0) return

        setLoadedPosts([...loadedPosts, ...nextPosts])
        setCurrentPosts(currentPosts + 10)
    }

    return (
        <section>
            <header className='d-flex align-items-center justify-content-between'>
                <Link href={PAGE_SLUGS.home} className='btn btn-outline-primary'>
                    Back
                </Link>
                <h4>All Posts: {loadedPosts.length}</h4>
            </header>
            <div className='pt-3 px-2 px-md-0 conteiner d-flex flex-column gap-2'>
                { loadedPosts?.map(post => <Post key={post.id} post={post} />)}
            </div>
            {
                currentPosts < posts.length && (
                    <div className='mt-2 d-flex justify-content-center'>
                        <Button className='btn btn-primary' onClick={handleLoadPosts}>
                            Load More
                        </Button>
                    </div>
                )
            }
        </section>
    )
}

export default Posts