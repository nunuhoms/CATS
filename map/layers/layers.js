var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Tendes_1 = new ol.format.GeoJSON();
var features_Tendes_1 = format_Tendes_1.readFeatures(json_Tendes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tendes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tendes_1.addFeatures(features_Tendes_1);
var lyr_Tendes_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tendes_1, 
                style: style_Tendes_1,
                interactive: true,
                title: '<img src="styles/legend/Tendes_1.png" /> Tendes'
            });
var format_Veterinaris_2 = new ol.format.GeoJSON();
var features_Veterinaris_2 = format_Veterinaris_2.readFeatures(json_Veterinaris_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Veterinaris_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Veterinaris_2.addFeatures(features_Veterinaris_2);
var lyr_Veterinaris_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Veterinaris_2, 
                style: style_Veterinaris_2,
                interactive: true,
                title: '<img src="styles/legend/Veterinaris_2.png" /> Veterinaris'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Tendes_1.setVisible(true);lyr_Veterinaris_2.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Tendes_1,lyr_Veterinaris_2];
lyr_Tendes_1.set('fieldAliases', {'Nom': 'Nom', 'Qualif.': 'Qualif.', });
lyr_Veterinaris_2.set('fieldAliases', {'nom': 'nom', 'Qualif': 'Qualif', });
lyr_Tendes_1.set('fieldImages', {'Nom': 'TextEdit', 'Qualif.': '', });
lyr_Veterinaris_2.set('fieldImages', {'nom': 'TextEdit', 'Qualif': '', });
lyr_Tendes_1.set('fieldLabels', {'Nom': 'inline label', 'Qualif.': 'inline label', });
lyr_Veterinaris_2.set('fieldLabels', {'nom': 'inline label', 'Qualif': 'inline label', });
lyr_Veterinaris_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});