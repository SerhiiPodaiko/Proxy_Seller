import Link from 'next/link'
import cn from 'classnames'

import styles from './Users.module.scss'
import { PAGE_SLUGS } from '@constants/pages'

const User = ({ user }) => {
    return (
        <div key={user.id} className={'col-lg-4 col-xxl-3 col-md-6 col-12 col my-2 ml-1 mr-1'}>
            <div className={cn('p-3 rounded', styles.column)}>
                <p className={styles.fullName}>
                    <span><strong>First name:</strong> {user.name}</span>
                    <span><strong>Last name:</strong> {user.username}</span>
                </p>
                <p className='d-flex flex-column'>
                    <span className={styles.emailTitle}>Email:</span>
                    <span className={styles.email}>{user.email}</span>
                </p>
                <div className='d-flex align-items-center justify-content-between'>
                    <Link href={`${PAGE_SLUGS.user}/${user.id}/posts`} className='btn btn-outline-primary'>
                        Posts
                    </Link>
                    <Link href={`${PAGE_SLUGS.user}/${user.id}/albums`} className='btn btn-outline-primary'>
                        Albums
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default User