function updateMap() {
  fetch("./data.json")
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      // Work with JSON data here
      res.data.forEach((element) => {
        longitude = element.longitude;
        latitude = element.latitude;
        sick = element.sick;

        cases = element.infected;
        if (cases > 200) {
          color = "red";
        } else {
          color = "black";
        }

        var popup = new mapboxgl.Popup().setText(sick).addTo(map);

        new mapboxgl.Marker({
          color: color,
        })
          .setLngLat([longitude, latitude])
          .addTo(map)
          .setPopup(popup);

      });
    });
}
updateMap();
