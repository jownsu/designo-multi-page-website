document.addEventListener("DOMContentLoaded", () => {

    let map_canada = L.map("map_canada").setView([63, -100], 4);
    let map_australia = L.map("map_australia").setView([-26.4390917, 133.281323], 4);
    let map_uk = L.map("map_uk").setView([55.3781, -3.4433], 6);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap"
    }).addTo(map_canada);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap"
    }).addTo(map_australia);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap"
    }).addTo(map_uk);

})