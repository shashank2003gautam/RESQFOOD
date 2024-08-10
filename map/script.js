let map, searchBox;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });

  searchBox = new google.maps.places.SearchBox(document.getElementById("find-location"));

  searchBox.addListener("places_changed", function () {
    const places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Handle the found places as needed
    console.log("Found places:", places);
  });
}

document.getElementById("find-location").addEventListener("click", function () {
  console.log("Button clicked");
});
