const map = L.map('map', {
    center: [-3.835865,-38.539748],
    zoom: 16,
    scrollWheelZoom: true
})

const legend = L.control.layers( null, null, {
    position: "topleft",
    collapsed: false
}).addTo(map)


let markers1 = [];
let markers2 = [];
let markers3 = [];
let markers4 = [];
let markers5 = [];
let markers6 = [];
let markers7 = [];
let markers8 = [];
let markers9 = [];
let markers10 = [];
let markers11 = [];
let markers12 = [];
let marker1;
let marker2;
let marker3;
let marker4;
let marker5;
let marker6;
let marker7;
let marker8;
let marker9;
let marker10;
let marker11;
let marker12;
let data1 = [];
let data2 = [];
let data3 = [];
let data4 = [];
let data5 = [];
let data6 = [];
let data7 = [];
let data8 = [];
let data9 = [];
let data10 = [];
let data11 = [];
let data12 = [];

let layer1;
let layer2;
let layer3;
let layer4;
let layer5;
let layer6;
let layer7;
let layer8;
let layer9;
let layer10;
let layer11;
let layer12;

let popupContent;



const basemapStamenTerrain = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 18,
	ext: 'png'
})
.addTo(map)
;


$.get('./data/data2018.csv', function(
    csvString) {
        data1 = Papa.parse(
            csvString, {header: true, dynamicTyping: true}).data.filter(
                function(row)  {return row.NATUREZA === "Colisão"}
            )
        data2 = Papa.parse(csvString, {header: true, dynamicTyping: true}).data.filter(
                function(row) { return row.NATUREZA === "Queda"}
            );

        data3 = Papa.parse(
            csvString, {header: true, dynamicTyping: true}).data.filter(
                function(row)  {return row.NATUREZA === "Capotamento"}
            )
        data4 = Papa.parse(csvString, {header: true, dynamicTyping: true}).data.filter(
                function(row) { return row.NATUREZA === "Engavetamento"}
            );
        data5 = Papa.parse(
            csvString, {header: true, dynamicTyping: true}).data.filter(
                function(row)  {return row.NATUREZA === "Tombamento"}
            )
        data6 = Papa.parse(csvString, {header: true, dynamicTyping: true}).data.filter(
                function(row) { return row.NATUREZA === "Colisão Lateral"}
            );
        data7 = Papa.parse(csvString, {header: true, dynamicTyping: true}).data.filter(
            function(row) { return row.NATUREZA === "Colisão Traseira"}
        );
        data8 = Papa.parse(csvString, {header: true, dynamicTyping: true}).data.filter(
            function(row) { return row.NATUREZA === "Colisão Frontal"}
        );
        data9 = Papa.parse(csvString, {header: true, dynamicTyping: true}).data.filter(
            function(row) { return row.NATUREZA === "Choque c/ Obstáculo Fixo"}
        );
        data10 = Papa.parse(csvString, {header: true, dynamicTyping: true}).data.filter(
            function(row) { return row.NATUREZA === "Atropelamento"}
        );
        data11 = Papa.parse(csvString, {header: true, dynamicTyping: true}).data.filter(
            function(row) { return row.NATUREZA === "Colisão Transversal"}
        );
        data12 = Papa.parse(csvString, {header: true, dynamicTyping: true}).data.filter(
            function(row) { return row.NATUREZA === "Atropelamento de Animal"}
        );



        console.log(data1)
        console.log(data2)

    for (var i in data1) {
        var row1 = data1[i];

                popupContent = "<div class=popup"+'<p>'
                        +'Dia: '+row1.DIA+"<p>"
                        +"Mes :"+row1.MES+"</p>"
                        +"Hora:"+row1.HORA+"</p>"
                        +'Mortos: '+row1.MORTOS+"<p>"
                        +"Feridos :"+row1.FERIDOS+"</p>"
                        +"Ilesos :"+row1.ILESOS+"</p>"
                        +"Automovel :"+row1.AUTOMOVEL+"</p>"
                        +'Onibus: '+row1.ONIBUS+"<p>"
                        +"Bicicleta :"+row1.BICICLETA+"</p>"
                        +"Caminhao :"+row1.CAMINHAO+"</p>"
                        +"Micro Onibus :"+row1.MICROONIBUS+"</p>"
                        +'Ciclo Motor: '+row1.CICLOMOTOR+"<p>"
                        +"Motocicleta :"+row1.MOTOCICLETA+"</p>"
                        +"</div>";

        marker1 = L.circleMarker([row1.LATITUDE, row1.LONGITUDE], {
            radius: 7,
            fillColor: "orange",
            color: "yellow",
            weight: 1,
            opacity: 0.8,
            fillOpacity: 0.6
        })
        .bindPopup(popupContent);

        marker1.addTo(map);

        markers1.push(marker1);

    }

    layer1 = L.layerGroup(markers1).addTo(map);
    legend.addOverlay(layer1,'Colisão <span style="font-size:20px; color: orange; opacity: .8">&#9679;</span>')


    for (var i in data2) {
        var row2 = data2[i];

                popupContent = "<div class=popup"+'<p>'
                        +'Dia: '+row2.DIA+"<p>"
                        +"Mes :"+row2.MES+"</p>"
                        +"Hora:"+row2.HORA+"</p>"
                        +'Mortos: '+row2.MORTOS+"<p>"
                        +"Feridos :"+row2.FERIDOS+"</p>"
                        +"Ilesos :"+row2.ILESOS+"</p>"
                        +"Automovel :"+row2.AUTOMOVEL+"</p>"
                        +'Onibus: '+row2.ONIBUS+"<p>"
                        +"Bicicleta :"+row2.BICICLETA+"</p>"
                        +"Caminhao :"+row2.CAMINHAO+"</p>"
                        +"Micro Onibus :"+row2.MICROONIBUS+"</p>"
                        +'Ciclo Motor: '+row2.CICLOMOTOR+"<p>"
                        +"Motocicleta :"+row2.MOTOCICLETA+"</p>"
                        +"</div>";

        marker2 = L.circleMarker([row2.LATITUDE, row2.LONGITUDE], {
            radius: 7,
            fillColor: "aqua",
            color: "blue",
            weight: 1,
            opacity: 0.8,
            fillOpacity: 0.6
        })
        .bindPopup(popupContent);

        marker2.addTo(map);

        markers2.push(marker2);
    }

    layer2 = L.layerGroup(markers2).addTo(map);
    legend.addOverlay(layer2,'Queda <span style="font-size:20px; color: aqua; opacity: .8">&#9679;</span>')

    for (var i in data3) {
        var row3 = data3[i];

                popupContent = "<div class=popup"+'<p>'
                        +'Dia: '+row3.DIA+"<p>"
                        +"Mes :"+row3.MES+"</p>"
                        +"Hora:"+row3.HORA+"</p>"
                        +'Mortos: '+row3.MORTOS+"<p>"
                        +"Feridos :"+row3.FERIDOS+"</p>"
                        +"Ilesos :"+row3.ILESOS+"</p>"
                        +"Automovel :"+row3.AUTOMOVEL+"</p>"
                        +'Onibus: '+row3.ONIBUS+"<p>"
                        +"Bicicleta :"+row3.BICICLETA+"</p>"
                        +"Caminhao :"+row3.CAMINHAO+"</p>"
                        +"Micro Onibus :"+row3.MICROONIBUS+"</p>"
                        +'Ciclo Motor: '+row3.CICLOMOTOR+"<p>"
                        +"Motocicleta :"+row3.MOTOCICLETA+"</p>"
                        +"</div>";

        marker3 = L.circleMarker([row3.LATITUDE, row3.LONGITUDE], {
            radius: 7,
            color: "red",
            weight: 1,
            opacity: 0.8,
            fillOpacity: 0.6
        })
        .bindPopup(popupContent);

        marker3.addTo(map);

        markers3.push(marker3);
    }

    layer3 = L.layerGroup(markers3).addTo(map);
    legend.addOverlay(layer3,'Capotamento <span style="font-size:20px; color: red; opacity: .8">&#9679;</span>')

    for (var i in data4) {
        var row4 = data4[i];

                popupContent = "<div class=popup"+'<p>'
                        +'Dia: '+row4.DIA+"<p>"
                        +"Mes :"+row4.MES+"</p>"
                        +"Hora:"+row4.HORA+"</p>"
                        +'Mortos: '+row4.MORTOS+"<p>"
                        +"Feridos :"+row4.FERIDOS+"</p>"
                        +"Ilesos :"+row4.ILESOS+"</p>"
                        +"Automovel :"+row4.AUTOMOVEL+"</p>"
                        +'Onibus: '+row4.ONIBUS+"<p>"
                        +"Bicicleta :"+row4.BICICLETA+"</p>"
                        +"Caminhao :"+row4.CAMINHAO+"</p>"
                        +"Micro Onibus :"+row4.MICROONIBUS+"</p>"
                        +'Ciclo Motor: '+row4.CICLOMOTOR+"<p>"
                        +"Motocicleta :"+row4.MOTOCICLETA+"</p>"
                        +"</div>";

        marker4 = L.circleMarker([row4.LATITUDE, row4.LONGITUDE], {
            radius: 7,
            color: "green",
            weight: 1,
            opacity: 0.8,
            fillOpacity: 0.6
        })
        .bindPopup(popupContent);

        marker4.addTo(map);

        markers4.push(marker4);
    }

    layer4 = L.layerGroup(markers4).addTo(map);
    legend.addOverlay(layer4,'Engavetamento<span style="font-size:20px; color: green; opacity: .8">&#9679;</span>')

    for (var i in data5) {
        var row5 = data5[i];

                popupContent = "<div class=popup"+'<p>'
                        +'Dia: '+row5.DIA+"<p>"
                        +"Mes :"+row5.MES+"</p>"
                        +"Hora:"+row5.HORA+"</p>"
                        +'Mortos: '+row5.MORTOS+"<p>"
                        +"Feridos :"+row5.FERIDOS+"</p>"
                        +"Ilesos :"+row5.ILESOS+"</p>"
                        +"Automovel :"+row5.AUTOMOVEL+"</p>"
                        +'Onibus: '+row5.ONIBUS+"<p>"
                        +"Bicicleta :"+row5.BICICLETA+"</p>"
                        +"Caminhao :"+row5.CAMINHAO+"</p>"
                        +"Micro Onibus :"+row5.MICROONIBUS+"</p>"
                        +'Ciclo Motor: '+row5.CICLOMOTOR+"<p>"
                        +"Motocicleta :"+row5.MOTOCICLETA+"</p>"
                        +"</div>";

        marker5 = L.circleMarker([row5.LATITUDE, row5.LONGITUDE], {
            radius: 7,
            color: "#ee82ee",
            weight: 1,
            opacity: 0.8,
            fillOpacity: 0.6
        })
        .bindPopup(popupContent);

        marker5.addTo(map);

        markers5.push(marker5);
    }

    layer5 = L.layerGroup(markers5).addTo(map);
    legend.addOverlay(layer5,'Tombamento<span style="font-size:20px; color: #ee82ee; opacity: .8">&#9679;</span>')

    for (var i in data6) {
        var row6 = data6[i];

                popupContent = "<div class=popup"+'<p>'
                        +'Dia: '+row6.DIA+"<p>"
                        +"Mes :"+row6.MES+"</p>"
                        +"Hora:"+row6.HORA+"</p>"
                        +'Mortos: '+row6.MORTOS+"<p>"
                        +"Feridos :"+row6.FERIDOS+"</p>"
                        +"Ilesos :"+row6.ILESOS+"</p>"
                        +"Automovel :"+row6.AUTOMOVEL+"</p>"
                        +'Onibus: '+row6.ONIBUS+"<p>"
                        +"Bicicleta :"+row6.BICICLETA+"</p>"
                        +"Caminhao :"+row6.CAMINHAO+"</p>"
                        +"Micro Onibus :"+row6.MICROONIBUS+"</p>"
                        +'Ciclo Motor: '+row6.CICLOMOTOR+"<p>"
                        +"Motocicleta :"+row6.MOTOCICLETA+"</p>"
                        +"</div>";

        marker6 = L.circleMarker([row6.LATITUDE, row6.LONGITUDE], {
            radius: 7,
            color: "#6a5acd",
            weight: 1,
            opacity: 0.8,
            fillOpacity: 0.6
        })
        .bindPopup(popupContent);

        marker6.addTo(map);

        markers6.push(marker6);
    }

    layer6 = L.layerGroup(markers6).addTo(map);
    legend.addOverlay(layer6,'Colisão Lateral<span style="font-size:20px; color: #6a5acd; opacity: .8">&#9679;</span>')

    for (var i in data7) {
        var row7 = data7[i];

                popupContent = "<div class=popup"+'<p>'
                        +'Dia: '+row7.DIA+"<p>"
                        +"Mes :"+row7.MES+"</p>"
                        +"Hora:"+row7.HORA+"</p>"
                        +'Mortos: '+row7.MORTOS+"<p>"
                        +"Feridos :"+row7.FERIDOS+"</p>"
                        +"Ilesos :"+row7.ILESOS+"</p>"
                        +"Automovel :"+row7.AUTOMOVEL+"</p>"
                        +'Onibus: '+row7.ONIBUS+"<p>"
                        +"Bicicleta :"+row7.BICICLETA+"</p>"
                        +"Caminhao :"+row7.CAMINHAO+"</p>"
                        +"Micro Onibus :"+row7.MICROONIBUS+"</p>"
                        +'Ciclo Motor: '+row7.CICLOMOTOR+"<p>"
                        +"Motocicleta :"+row7.MOTOCICLETA+"</p>"
                        +"</div>";

        marker7 = L.circleMarker([row7.LATITUDE, row7.LONGITUDE], {
            radius: 7,
            color: "#3c3c3c",
            weight: 1,
            opacity: 0.8,
            fillOpacity: 0.6
        })
        .bindPopup(popupContent);

        marker7.addTo(map);

        markers7.push(marker7);
    }

    layer7 = L.layerGroup(markers7).addTo(map);
    legend.addOverlay(layer7,'Colisão Traseira<span style="font-size:20px; color: #3c3c3c; opacity: .8">&#9679;</span>')


    for (var i in data8) {
        var row8 = data8[i];

                popupContent = "<div class=popup"+'<p>'
                        +'Dia: '+row8.DIA+"<p>"
                        +"Mes :"+row8.MES+"</p>"
                        +"Hora:"+row8.HORA+"</p>"
                        +'Mortos: '+row8.MORTOS+"<p>"
                        +"Feridos :"+row8.FERIDOS+"</p>"
                        +"Ilesos :"+row8.ILESOS+"</p>"
                        +"Automovel :"+row8.AUTOMOVEL+"</p>"
                        +'Onibus: '+row8.ONIBUS+"<p>"
                        +"Bicicleta :"+row8.BICICLETA+"</p>"
                        +"Caminhao :"+row8.CAMINHAO+"</p>"
                        +"Micro Onibus :"+row8.MICROONIBUS+"</p>"
                        +'Ciclo Motor: '+row8.CICLOMOTOR+"<p>"
                        +"Motocicleta :"+row8.MOTOCICLETA+"</p>"
                        +"</div>";

        marker8 = L.circleMarker([row8.LATITUDE, row8.LONGITUDE], {
            radius: 7,
            color: "#950047",
            weight: 1,
            opacity: 0.8,
            fillOpacity: 0.6
        })
        .bindPopup(popupContent);

        marker8.addTo(map);

        markers8.push(marker8);
    }

    layer8 = L.layerGroup(markers8).addTo(map);
    legend.addOverlay(layer8,'Colisão Frontal<span style="font-size:20px; color:#950047; opacity: .8">&#9679;</span>')


    for (var i in data9) {
        var row9 = data9[i];

        popupContent = "<div class=popup"+'<p>'
                        +'Dia: '+row9.DIA+"<p>"
                        +"Mes :"+row9.MES+"</p>"
                        +"Hora:"+row9.HORA+"</p>"
                        +'Mortos: '+row9.MORTOS+"<p>"
                        +"Feridos :"+row9.FERIDOS+"</p>"
                        +"Ilesos :"+row9.ILESOS+"</p>"
                        +"Automovel :"+row9.AUTOMOVEL+"</p>"
                        +'Onibus: '+row9.ONIBUS+"<p>"
                        +"Bicicleta :"+row9.BICICLETA+"</p>"
                        +"Caminhao :"+row9.CAMINHAO+"</p>"
                        +"Micro Onibus :"+row9.MICROONIBUS+"</p>"
                        +'Ciclo Motor: '+row9.CICLOMOTOR+"<p>"
                        +"Motocicleta :"+row9.MOTOCICLETA+"</p>"
                        +"</div>";

        marker9 = L.circleMarker([row9.LATITUDE, row9.LONGITUDE], {
            radius: 7,
            color: "#eb00ff",
            weight: 1,
            opacity: 0.8,
            fillOpacity: 0.6
        })
        .bindPopup(popupContent);

        marker9.addTo(map);

        markers9.push(marker9);
    }

    layer9 = L.layerGroup(markers9).addTo(map);
    legend.addOverlay(layer9,'Choque c/ Obstáculo Fixo<span style="font-size:20px; color:#eb00ff; opacity: .8">&#9679;</span>')


    for (var i in data10) {
        var row10 = data10[i];

                popupContent = "<div class=popup"+'<p>'
                        +'Dia: '+row10.DIA+"<p>"
                        +"Mes :"+row10.MES+"</p>"
                        +"Hora:"+row10.HORA+"</p>"
                        +'Mortos: '+row10.MORTOS+"<p>"
                        +"Feridos :"+row10.FERIDOS+"</p>"
                        +"Ilesos :"+row10.ILESOS+"</p>"
                        +"Automovel :"+row10.AUTOMOVEL+"</p>"
                        +'Onibus: '+row10.ONIBUS+"<p>"
                        +"Bicicleta :"+row10.BICICLETA+"</p>"
                        +"Caminhao :"+row10.CAMINHAO+"</p>"
                        +"Micro Onibus :"+row10.MICROONIBUS+"</p>"
                        +'Ciclo Motor: '+row10.CICLOMOTOR+"<p>"
                        +"Motocicleta :"+row10.MOTOCICLETA+"</p>"
                        +"</div>";
        marker10 = L.circleMarker([row10.LATITUDE, row10.LONGITUDE], {
            radius: 7,
            color: "#000000",
            weight: 1,
            opacity: 0.8,
            fillOpacity: 0.6
        })
        .bindPopup(popupContent);

        marker10.addTo(map);

        markers10.push(marker10);
    }

    layer10 = L.layerGroup(markers10).addTo(map);
    legend.addOverlay(layer10,'Atropelamento<span style="font-size:20px; color:#000000; opacity: .8">&#9679;</span>')

    for (var i in data11) {
        var row11 = data11[i];

                popupContent = "<div class=popup"+'<p>'
                        +'Dia: '+row11.DIA+"<p>"
                        +"Mes :"+row11.MES+"</p>"
                        +"Hora:"+row11.HORA+"</p>"
                        +'Mortos: '+row11.MORTOS+"<p>"
                        +"Feridos :"+row11.FERIDOS+"</p>"
                        +"Ilesos :"+row11.ILESOS+"</p>"
                        +"Automovel :"+row11.AUTOMOVEL+"</p>"
                        +'Onibus: '+row11.ONIBUS+"<p>"
                        +"Bicicleta :"+row11.BICICLETA+"</p>"
                        +"Caminhao :"+row11.CAMINHAO+"</p>"
                        +"Micro Onibus :"+row11.MICROONIBUS+"</p>"
                        +'Ciclo Motor: '+row11.CICLOMOTOR+"<p>"
                        +"Motocicleta :"+row11.MOTOCICLETA+"</p>"
                        +"</div>";

        marker11 = L.circleMarker([row11.LATITUDE, row11.LONGITUDE], {
            radius: 7,
            color: "#667600",
            weight: 1,
            opacity: 0.8,
            fillOpacity: 0.6
        })
        .bindPopup(popupContent);

        marker11.addTo(map);

        markers11.push(marker11);
    }

    layer11 = L.layerGroup(markers11).addTo(map);
    legend.addOverlay(layer11,'Colisão Transversal<span style="font-size:20px; color:#667600; opacity: .8">&#9679;</span>')

    for (var i in data12) {
        var row12 = data12[i];

                popupContent = "<div class=popup"+'<p>'
                        +'Dia: '+row12.DIA+"<p>"
                        +"Mes :"+row12.MES+"</p>"
                        +"Hora:"+row12.HORA+"</p>"
                        +'Mortos: '+row12.MORTOS+"<p>"
                        +"Feridos :"+row12.FERIDOS+"</p>"
                        +"Ilesos :"+row12.ILESOS+"</p>"
                        +"Automovel :"+row12.AUTOMOVEL+"</p>"
                        +'Onibus: '+row12.ONIBUS+"<p>"
                        +"Bicicleta :"+row12.BICICLETA+"</p>"
                        +"Caminhao :"+row12.CAMINHAO+"</p>"
                        +"Micro Onibus :"+row12.MICROONIBUS+"</p>"
                        +'Ciclo Motor: '+row12.CICLOMOTOR+"<p>"
                        +"Motocicleta :"+row12.MOTOCICLETA+"</p>"
                        +"</div>";
        marker12 = L.circleMarker([row12.LATITUDE, row12.LONGITUDE], {
            radius: 7,
            color: "#66e779",
            weight: 1,
            opacity: 0.8,
            fillOpacity: 0.6
        })
        .bindPopup(popupContent);

        marker12.addTo(map);

        markers12.push(marker12);
    }

    layer12 = L.layerGroup(markers12).addTo(map);
    legend.addOverlay(layer12,'Atropelamento de Animal<span style="font-size:20px; color:#66e779; opacity: .8">&#9679;</span>')



    }

    

    
    
    );


