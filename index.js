function updateMap() {
    fetch("https://www.trackcorona.live/api/countries")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp.data);
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;
                country = element.location;
                cases = element.confirmed;
                if (cases > 150000) {
                    color = "rgb(140, 39, 39)"
                }
                else if (cases > 85000) {
                    color = "rgb(255, 18, 18)"
                }
                else if (cases > 40000) {
                    color = "rgb(252, 169, 101)"
                }
                else if (cases > 20000) {
                    color = "rgb(255, 223, 13)"
                }
                else if (cases > 5000) {
                    color = "rgb(195, 255, 13)"
                }
                else {
                    color = "rgb(182, 186, 185)"
                }


                const marker = new mapboxgl.Marker({ draggable: false, color: color })
                const minPop = new mapboxgl.Popup({closeOnClick:true})
                minPop.setText(`The Infected persons in ${country} are ${cases}`)
                marker.setPopup(minPop)
                
                //({
                //     draggable: false,
                //     color: color
                // })
                marker.setLngLat([longitude, latitude])
                marker.addTo(map);


            });



        })
}
let interval = 2000;
setInterval(updateMap, interval)

// if (cases > 150000) {
//     color = "rgb(140, 39, 39)"
// }
// else if(cases>85000){
//     color="rgb(255, 18, 18)"
// }
// else if(cases>40000){
//     color="rgb(252, 169, 101)"
// }
// else if(cases>20000){
//     color="rgb(255, 223, 13)"
// }
// else if(cases>5000){
//     color="rgb(13, 215, 255)"
// }
