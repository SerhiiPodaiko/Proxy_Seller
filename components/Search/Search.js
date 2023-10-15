import cn from 'classnames'

import styles from './Search.module.scss'

const Search = ({ searchQuery, setSearchQuery }) => {
    return (
        <section>
            <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={cn('p-2', styles.searchInput)}
                placeholder='Seacrh username or name'
            />
        </section>
    )
}

export default Search
