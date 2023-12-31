export const SEARCH = `
query ($query: String) {
  AnimeSearch: Page {
    media(search: $query, type: ANIME) {
      id
      title {
        userPreferred
      }
      coverImage {
        large
      }
    }
  }
  MangaSearch: Page {
    media(search: $query, type: MANGA) {
      id
      title {
        userPreferred
      }
      coverImage {
        large
      }
    }
  }
  UserSearch: Page {
    users(search: $query) {
      id
      name
      avatar {
        large
      }
    }
  }
  CharacterSearch: Page {
    characters(search: $query) {
      id
      name {
        first
        last
      }
      image {
        large
      }
    }
  }
  StaffSearch: Page {
    staff(search: $query) {
      id
      name {
        first
        last
      }
      image {
        large
      }
    }
  }
  StudioSearch: Page {
    studios(search: $query) {
      id
      name
    }
  }
  ForumSearch: Page {
    threads (search: $query) {
      id
      title
    }
  }
}
`;