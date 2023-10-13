'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import cn from 'classnames'

import styles from './Sidebar.module.scss'
import { PAGE_SLUGS } from '@constants/pages'
import HomeSvg from '@public/icons/home.svg'
import PostsSvg from '@public/icons/posts.svg'
import SettingsSvg from '@public/icons/settings.svg'
import MenuSvg from '@public/icons/menu.svg'
import AlbumsSvg from '@public/icons/albums.svg'

const sidebarLinks = [
    { title: 'Home', path: PAGE_SLUGS.home, icon: <HomeSvg /> },
    { title: 'Posts', path: PAGE_SLUGS.posts, icon: <PostsSvg /> },
    { title: 'Albums', path: PAGE_SLUGS.albums, icon: <AlbumsSvg /> },
    { title: 'Settings', path: PAGE_SLUGS.settings, icon: <SettingsSvg /> }
]

const Sidebar = () => {
    const [showSideBar, setShowSideBar] = useState(true)
    const location = usePathname()

    const toggleSidebar = () => {
        if (!showSideBar) {
            document.querySelector('body').classList.add('disabled')
        } else {
            document.querySelector('body').classList.remove('disabled')
        }

        setShowSideBar(prevState => !prevState)
    }

    return (
        <nav className={cn(styles.sidebar, showSideBar ? styles.sidebar : styles.sidebarHide)}>
            <MenuSvg onClick={toggleSidebar} className={styles.sidebarMenu} />
            {
                sidebarLinks?.map(link => (
                    <Link key={link.title} href={link.path} className={cn(styles.sidebarLink, location === link.path ? styles.sidebarLinkActive : '')}>
                        {link.icon}
                        <span>{link.title}</span>
                    </Link>
                ))
            }
        </nav>
    )
}

export default Sidebar