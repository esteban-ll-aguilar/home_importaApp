let map;

        function initMap() {
            const styledMapType = new google.maps.StyledMapType(
                [
                    {
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#DCDCDC" // Rojo para la tierra
                            }
                        ]
                    },
                    {
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#ffffff" // Texto blanco
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "color": "#e74c3c" // Borde de texto rojo
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#000000" // Rojo para la tierra
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "2F4F4F" // Azul para el agua
                            }
                        ]
                    }
                ],
                { name: 'Mapa Estilizado' }
            );

            map = new google.maps.Map(document.getElementById("map"), {
                center: { lat: 0, lng: 0 }, // Centro del mapa (latitud y longitud)
                zoom: 2, // Nivel de zoom inicial
                mapTypeControlOptions: {
                    mapTypeIds: ['styled_map']
                }
            });

            map.mapTypes.set('styled_map', styledMapType);
            map.setMapTypeId('styled_map');

            // Marcadores para China, Estados Unidos, Colombia y Ecuador
            addMarker({ lat: 35.8617, lng: 104.1954 }, "China", "red"); // Marcador rojo
            addMarker({ lat: 37.0902, lng: -95.7129 }, "Estados Unidos", "blue"); // Marcador azul
            addMarker({ lat: 4.5709, lng: -74.2973 }, "Colombia", "green"); // Marcador verde
            addMarker({ lat: -1.8312, lng: -78.1834 }, "Ecuador", "yellow"); // Marcador amarillo
        }

        function addMarker(location, title, color) {
            let marker = new google.maps.Marker({
                position: location,
                map,
                title: title,
                icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 8,
                    fillColor: color,
                    fillOpacity: 1,
                    strokeColor: 'white',
                    strokeWeight: 3,
                }
            });
        }