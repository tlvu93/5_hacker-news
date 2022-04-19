const BASE_URL = 'http://hn.algolia.com/api/v1';

/**
 * Class to access the Hacker News API
 */
export default class Api {
  /**
   * Search API with a full-text query
   * @param {String} searchStr
   * @return {Response}
   */
  static async search(searchStr) {
    const searchUrl = `${BASE_URL}/search?query=${searchStr}`;
    const response = await fetch(searchUrl);

    return response;
  }
}
