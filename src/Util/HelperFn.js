export function filteredData(appState, selected, query) {
  let filteredProducts = appState;

  const filteredItems = appState?.filter(({ brandName }) =>
    brandName.toLowerCase().includes(query?.toLowerCase())
  );
  if (query) {
    filteredProducts = filteredItems;
  }

  if (selected) {
    filteredProducts = filteredProducts.filter(
      ({ colour, brandName, price, name }) =>
        brandName.includes(selected) ||
        colour === selected ||
        price.current.value <= selected ||
        name === selected
    );
  }
  return filteredProducts;
}

export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
