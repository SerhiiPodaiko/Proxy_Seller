'use client'

import styles from './Users.module.scss'
import useUsers from '@hooks/useUsers'
import { Search, Sort } from '@components/index'
import User from './User'
import Preloader from '@ui/Preloader/Preloader'
import Alert from '@ui/Alert/Alert'

const Users = () => {
    const { users, filteredUsers, searchQuery, setSearchQuery, sortOrder, setSortOrder } = useUsers()

    if (users.length === 0) return <Preloader />

    return (
        <section className={styles.users}>
            <header>
                <div className='container d-flex flex-column flex-md-row align-items-md-center align-items-start justify-content-between'>
                    <h4 className={styles.title}>Users: {filteredUsers.length}</h4>
                    <div className='d-flex flex-column flex-sm-row align-self-stretch align-self-md-start align-items-center gap-2'>
                        <Sort sortOrder={sortOrder} setSortOrder={setSortOrder} />
                        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                    </div>
                </div>
            </header>
            <div className='container pt-3'>
                <div className='row'>
                    { filteredUsers.length === 0 && searchQuery ?
                        <Alert>No users found!</Alert> :
                        filteredUsers?.map(user => <User key={user.id} user={user} /> )}
                </div>
            </div>
        </section>
    )
}

export default Users