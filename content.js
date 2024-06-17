browser.storage.local.get('listings').then(result => {
  let listings = result.listings || [];
  let listingsDiv = document.getElementById('listings');
  listings.forEach(item => {
    let listing = document.createElement('div');
    listing.className = 'listing';
    listing.innerHTML = `
      <img src="${item.asset.image}" alt="${item.name}">
      <p>${item.name}</p>
      <p>Price: ${item.sell_price_text}</p>
    `;
    listingsDiv.appendChild(listing);
  });
}).catch(error => console.error('Error retrieving listings from storage:', error));
