const BASE_URL = 'http://hn.algolia.com/api/v1';

/**
 * Class to access the Hacker News API
 */
export default class Api {
  /**
   * API search function sorted by relevance, then points, then number of comments
   * Parameters:
   *  -query 	          full-text query
   *  -tags             tags=	filter on a specific tag. Available tags:
   *  -numericFilters   filter on a specific numerical condition (<, <=, =, > or >=).
   *  -page             page number
   * https://hn.algolia.com/api
   * example: http://hn.algolia.com/api/v1/search?query=bar&tags=comment
   * @param {String} queryStr
   * @param {String} tags
   * @param {String} numericFilters
   * @param {Int} page
   *
   * @return {Response}
   */
  static async search({queryStr, tags, numericFilters, page}) {
    return await fetch(
      [
        `${BASE_URL}/search?`,
        queryStr && `query=${queryStr}`,
        tags && `tags=${tags}`,
        numericFilters && `numericFilters=${numericFilters}`,
        page && `page=${page}`,
      ].join(''),
    );
  }

  /**
   * Uses the search function to retrieve popular articles
   * The definition of popular is the following default value:
   *  - minPoints > 500
   *  - created_at_i > 1 week in seconds
   *    - "Date.now() / 1000" gets the current Date in seconds
   *    - 1 week = 604800 Seconds
   *
   * @param {Int} minPoints
   * @param {Float} lastDateInSeconds
   */
  static async getPopularArticles(
    minPoints = 500,
    lastDateInSeconds = Date.now() / 1000 - 604800,
  ) {
    return this.search({
      numericFilters: `points>${minPoints},created_at_i>${lastDateInSeconds}`,
    });
  }
}
