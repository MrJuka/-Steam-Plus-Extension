let allListings = [];

function fetchMarketListings(start) {
  fetch(`https://steamcommunity.com/market/search/render/?query=&start=${start}&count=100`)
    .then(response => response.json())
    .then(data => {
      allListings = allListings.concat(data.results);
      if (data.total_count > start + 100) {
        fetchMarketListings(start + 100); // Fetch next page
      } else {
        browser.storage.local.set({ listings: allListings });
      }
    })
    .catch(error => console.error('Error fetching listings:', error));
}

fetchMarketListings(0);
