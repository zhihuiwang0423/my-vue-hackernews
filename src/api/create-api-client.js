import Axios from 'axios'

export function createAPI ({ config, version }) {
    return {
        // url: 'https://hacker-news.firebaseio.com/v0/'
        url: '/api/',
        '$get': function (url) {
            return Axios.get(url).then(res => Promise.resolve(res.data))
        }
    }
}
