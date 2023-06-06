export function watchFavoritesCount(callback) {
  let favoritesCount = getFavoritesCount()

  setInterval(() => {
    const newFavoritesCount = getFavoritesCount()

    if (newFavoritesCount !== favoritesCount) {
      favoritesCount = newFavoritesCount
      callback(favoritesCount)
    }
  }, 1000)
}

function getFavoritesCount() {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || []
  return favorites.length
}
