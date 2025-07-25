// // Initialize map
// Initialize map centered on India
const map = L.map('map').setView([23.6102, 85.2799], 5);

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Custom marker icon
const customIcon = L.icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/2776/2776067.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -30]
});

// Predefined markers
const cities = [
  { name: "Patna", lat: 25.5941, lon: 85.1376 },
  { name: "Delhi", lat: 28.6139, lon: 77.2090 },
  { name: "Ranchi", lat: 23.3441, lon: 85.3096 }
];

cities.forEach(city => {
  L.marker([city.lat, city.lon], { icon: customIcon })
    .addTo(map)
    .bindPopup(`<b>${city.name}</b>`)
    .openPopup();
});

// Geocoding Search (Nominatim)
function geocode() {
  const place = document.getElementById('search').value.trim();
  if (!place) return alert("Please enter a place.");

  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(place)}`)
    .then(response => response.json())
    .then(data => {
      if (data.length === 0) return alert("Place not found.");

      const lat = parseFloat(data[0].lat);
      const lon = parseFloat(data[0].lon);

      map.setView([lat, lon], 12);
      L.marker([lat, lon], { icon: customIcon })
        .addTo(map)
        .bindPopup(`<b>${place}</b>`)
        .openPopup();
    })
    .catch(() => alert("Error fetching location."));
}


