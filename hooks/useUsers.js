import { useState, useEffect } from 'react'
import { fetchGetAllUsers } from '@lib/users/fetchGetAllUsers'

const sortUsers = (users, searchQuery, sortOrder) => {
    if (!searchQuery && sortOrder !== 'desc') {
        return users
    }

    const filtered = users.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.username.toLowerCase().includes(searchQuery.toLowerCase())
    )

    if (sortOrder === 'asc') {
        filtered.sort((a, b) => a.username.localeCompare(b.username))
    } else if (sortOrder === 'desc') {
        filtered.sort((a, b) => b.username.localeCompare(a.username))
    }

    return filtered
}

const useUsers = () => {
    const [users, setUsers] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [sortOrder, setSortOrder] = useState('ask')
    const [filteredUsers, setFilteredUsers] = useState([])

    useEffect(() => {
        fetchGetAllUsers('').then((data) => setUsers(data))
    }, [])

    useEffect(() => {
        const filtered = sortUsers(users, searchQuery, sortOrder)

        const debaunce = setTimeout(() => setFilteredUsers(filtered), 300)

        return () => clearTimeout(debaunce)
    }, [searchQuery, sortOrder, users])

    return {
        users,
        filteredUsers,
        searchQuery,
        setSearchQuery,
        sortOrder,
        setSortOrder
    }
}

export default useUsers
