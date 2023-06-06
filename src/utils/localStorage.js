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

export function getFavoritesCount() {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || []
  return favorites.length
}

export function watchCartCount(callback) {
  let cartCount = getCartCount()

  setInterval(() => {
    const newCartCount = getCartCount()

    if (newCartCount !== cartCount) {
      cartCount = newCartCount
      callback(cartCount)
    }
  }, 1000)
}

export function getCartCount() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || []
  return cartItems.length
}
