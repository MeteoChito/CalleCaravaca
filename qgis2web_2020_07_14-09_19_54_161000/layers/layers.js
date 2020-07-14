var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_callesinfo_0 = new ol.format.GeoJSON();
var features_callesinfo_0 = format_callesinfo_0.readFeatures(json_callesinfo_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_callesinfo_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_callesinfo_0.addFeatures(features_callesinfo_0);var lyr_callesinfo_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_callesinfo_0, 
                style: style_callesinfo_0,
                title: '<img src="styles/legend/callesinfo_0.png" /> calles info'
            });

lyr_callesinfo_0.setVisible(true);
var layersList = [baseLayer,lyr_callesinfo_0];
lyr_callesinfo_0.set('fieldAliases', {'id': 'id', 'cmax': 'cmax', 'cmin': 'cmin', 'Long': 'Long', 'Pendi': 'Pendi', });
lyr_callesinfo_0.set('fieldImages', {'id': 'TextEdit', 'cmax': 'TextEdit', 'cmin': 'TextEdit', 'Long': 'TextEdit', 'Pendi': 'TextEdit', });
lyr_callesinfo_0.set('fieldLabels', {'id': 'no label', 'cmax': 'no label', 'cmin': 'no label', 'Long': 'no label', 'Pendi': 'no label', });
lyr_callesinfo_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});