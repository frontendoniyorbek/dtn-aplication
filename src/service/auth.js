import axios from "./api"

const AuthService = {
    async userRegister(user) {
        const response = await axios.post('/user', {user})
        return response
    },
    async userLogin() {
        // const response = await axios.post('/user')
    },
    async getUser() {},
}

export default AuthService