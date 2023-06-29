import axios from 'axios'

export const backend_endpoint = 'https://qtify-backend-labs.crio.do';
export const fetchTopAlbums = async()=>{
    try{
const response = await axios.get(`${backend_endpoint}/albums/top`)
return response.data
    }catch(error){
        alert('error occured', error)
    }
}



export const fetchNewAlbums = async()=>{
    try{
        const response = await axios.get(`${backend_endpoint}/albums/new`)
        return response.data
            }catch(error){
                alert('error occured', error)
            }
}
