import axios,{CanceledError} from 'axios'
export default axios.create({
    headers: {
        'Access-Control-Allow-Origin': '*'
    },
    // baseURL: 'https://openlibrary.org',
    //TODO: change back to openlibrary after completion of development!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    baseURL: 'https://cors-anywhere.herokuapp.com/https://openlibrary.org',
})
export {CanceledError}