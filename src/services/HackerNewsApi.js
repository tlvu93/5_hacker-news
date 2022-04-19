const BASE_URL = 'http://hn.algolia.com/api/v1'
export default class Api {

    static async search(searchStr) {
        const searchUrl = `${BASE_URL}/search?query=${searchStr}`
        const response = await fetch(searchUrl)

        return response;
    }
}