import axios from 'axios'

const baseUrl = "http://localhost:3001"

export async function login(user, setUser){
    try{
        const response = await axios({
            url: `${baseUrl}/login`,
            method: 'POST',
            data: user
        })
        setUser({username: '', pass: ''})
        return response
    }catch(error){
        console.log(error)
        setUser({username: '', pass: ''})
    }
}