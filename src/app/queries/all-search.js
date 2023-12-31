export const ALL_SEARCH_QUERY = `
query ($query: String) {
    AnimeSearch: Page {
      pageInfo {
        total
        perPage
      }
      media(search: $query, type: ANIME, sort: POPULARITY_DESC) {
        id
        title {
          english
        }
        coverImage {
          large
        }
      }
    }
    MangaSearch: Page {
      pageInfo {
        total 
        perPage
      }
      media(search: $query, type: MANGA, sort: POPULARITY_DESC) {
        id
        title {
          english
        }
        coverImage {
          large
        }
      }
    }
    CharacterSearch: Page {
      pageInfo {
        total
        perPage
      }
      characters(search: $query, sort:FAVOURITES_DESC) {
        id
        name {
          full
        }
        image {
          large
        }
      }
    }
  }
`;
