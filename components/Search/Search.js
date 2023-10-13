import PropTypes from 'prop-types'
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

Search.propTypes = {
    searchQuery: PropTypes.string.isRequired,
    setSearchQuery: PropTypes.func.isRequired,
}