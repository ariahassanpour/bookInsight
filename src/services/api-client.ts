import axios,{CanceledError} from 'axios'
export default axios.create({
    baseURL: 'https://openlibrary.org',
})
export {CanceledError}