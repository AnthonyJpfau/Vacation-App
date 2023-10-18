fetch('/getUsername')
  .then(res => res.text())
  .then(data => username.textContent = data);

// Create a function to load the Google Maps code
function loadGoogleMap() {
    // Create a <script> element for Google Maps API
    var script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=KEY_GOES_HERE&callback=initMap';
    script.async = true;
    script.defer = true;
  
    // Define the callback function to initialize the map
    script.onload = function () {
      initMap();
    };
  
    // Append the <script> element to the document's <head>
    document.head.appendChild(script);
  }
  
  // Create a function to initialize the map

  
  // Call the function to load Google Maps when the page is loaded
  window.onload = loadGoogleMap;

        // Replace 'YOUR_API_KEY' with your actual Google Maps API key
        const apiKey = 'KEY_GOES_HERE';

        let map;

        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: 39.8283, lng: -98.5795 }, // Center of the United States
                zoom: 4 // Initial zoom level
            });
        }

        document.getElementById('zoomButton').addEventListener('click', () => {
            const stateName = document.getElementById('stateInput').value;
            
            // Geocode the entered state name to get its coordinates
            const geocoder = new google.maps.Geocoder();
            geocoder.geocode({ address: `${stateName}, USA` }, (results, status) => {
                if (status === google.maps.GeocoderStatus.OK && results.length > 0) {
                    const stateBounds = results[0].geometry.viewport;
                    map.fitBounds(stateBounds);
                } else {
                    alert('State not found. Please enter a valid U.S. state name.');
                }
            });
        });
  
  