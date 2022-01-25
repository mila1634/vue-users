import axios from 'axios'

export const getUsers = ({ commit }) => {
    axios.get('https://myfakeapi.com/api/users')
        .then(response => {
            const filteredData = response.data.Users.filter(r => r.department === 'Legal')
            commit('SET_USERS', filteredData)
        })
}

export const getUser = ({ commit }, userId) => {
    axios.get(`https://myfakeapi.com/api/users/${userId}`)
        .then(response => {
            commit('SET_USER', response.data.User)
        })
} 
