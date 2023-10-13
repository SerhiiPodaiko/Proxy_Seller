import PropTypes from 'prop-types'

const Sort = ({ sortOrder, setSortOrder }) => {
    return (
        <select
            className='form-select'
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            aria-label='Default select example'>
            <option value='asc'>ASC (username)</option>
            <option value='desc'>DESC (username)</option>
        </select>
    )
}

export default Sort

Sort.propTypes = {
    sortOrder: PropTypes.string.isRequired,
    setSortOrder: PropTypes.func.isRequired,
}