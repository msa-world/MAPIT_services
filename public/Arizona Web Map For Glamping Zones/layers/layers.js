var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Arizona_Boundary_1 = new ol.format.GeoJSON();
var features_Arizona_Boundary_1 = format_Arizona_Boundary_1.readFeatures(json_Arizona_Boundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arizona_Boundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arizona_Boundary_1.addFeatures(features_Arizona_Boundary_1);
var lyr_Arizona_Boundary_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Arizona_Boundary_1, 
                style: style_Arizona_Boundary_1,
                interactive: false,
                title: '<img src="styles/legend/Arizona_Boundary_1.png" /> Arizona_Boundary'
            });
var format_Arizona_Zones_2 = new ol.format.GeoJSON();
var features_Arizona_Zones_2 = format_Arizona_Zones_2.readFeatures(json_Arizona_Zones_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arizona_Zones_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arizona_Zones_2.addFeatures(features_Arizona_Zones_2);
var lyr_Arizona_Zones_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Arizona_Zones_2, 
                style: style_Arizona_Zones_2,
                interactive: false,
                title: '<img src="styles/legend/Arizona_Zones_2.png" /> Arizona_Zones'
            });
var format_Allowed_3 = new ol.format.GeoJSON();
var features_Allowed_3 = format_Allowed_3.readFeatures(json_Allowed_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Allowed_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Allowed_3.addFeatures(features_Allowed_3);
var lyr_Allowed_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Allowed_3, 
                style: style_Allowed_3,
                interactive: true,
                title: '<img src="styles/legend/Allowed_3.png" /> Allowed'
            });
var format_Not_Allowed_4 = new ol.format.GeoJSON();
var features_Not_Allowed_4 = format_Not_Allowed_4.readFeatures(json_Not_Allowed_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Not_Allowed_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Not_Allowed_4.addFeatures(features_Not_Allowed_4);
var lyr_Not_Allowed_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Not_Allowed_4, 
                style: style_Not_Allowed_4,
                interactive: true,
                title: '<img src="styles/legend/Not_Allowed_4.png" /> Not_Allowed'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Arizona_Boundary_1.setVisible(true);lyr_Arizona_Zones_2.setVisible(true);lyr_Allowed_3.setVisible(true);lyr_Not_Allowed_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Arizona_Boundary_1,lyr_Arizona_Zones_2,lyr_Allowed_3,lyr_Not_Allowed_4];
lyr_Arizona_Boundary_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', });
lyr_Arizona_Zones_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REC_SITE_C': 'REC_SITE_C', 'REC_SITE_I': 'REC_SITE_I', 'REV_DATE': 'REV_DATE', 'DATA_SOURC': 'DATA_SOURC', 'ACCURACY': 'ACCURACY', 'TYPE': 'TYPE', 'NAME': 'NAME', 'DATA_SOU_1': 'DATA_SOU_1', 'METHOD': 'METHOD', 'CFF': 'CFF', 'FOREST': 'FOREST', 'PUB_DATE': 'PUB_DATE', 'CRC': 'CRC', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Permet': 'Permet', 'Permit': 'Permit', });
lyr_Allowed_3.set('fieldAliases', {'Name': 'Name', 'Remarks': 'Remarks', });
lyr_Not_Allowed_4.set('fieldAliases', {'Name': 'Name', 'Remarks': 'Remarks', });
lyr_Arizona_Boundary_1.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', });
lyr_Arizona_Zones_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'REC_SITE_C': 'TextEdit', 'REC_SITE_I': 'TextEdit', 'REV_DATE': 'DateTime', 'DATA_SOURC': 'TextEdit', 'ACCURACY': 'TextEdit', 'TYPE': 'TextEdit', 'NAME': 'TextEdit', 'DATA_SOU_1': 'TextEdit', 'METHOD': 'TextEdit', 'CFF': 'TextEdit', 'FOREST': 'TextEdit', 'PUB_DATE': 'DateTime', 'CRC': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Permet': 'TextEdit', 'Permit': 'TextEdit', });
lyr_Allowed_3.set('fieldImages', {'Name': 'TextEdit', 'Remarks': 'TextEdit', });
lyr_Not_Allowed_4.set('fieldImages', {'Name': 'TextEdit', 'Remarks': 'TextEdit', });
lyr_Arizona_Boundary_1.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'NL_NAME_1': 'no label', 'VARNAME_1': 'no label', });
lyr_Arizona_Zones_2.set('fieldLabels', {'OBJECTID': 'no label', 'REC_SITE_C': 'no label', 'REC_SITE_I': 'no label', 'REV_DATE': 'no label', 'DATA_SOURC': 'no label', 'ACCURACY': 'no label', 'TYPE': 'no label', 'NAME': 'no label', 'DATA_SOU_1': 'no label', 'METHOD': 'no label', 'CFF': 'no label', 'FOREST': 'no label', 'PUB_DATE': 'no label', 'CRC': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Permet': 'no label', 'Permit': 'no label', });
lyr_Allowed_3.set('fieldLabels', {'Name': 'inline label', 'Remarks': 'inline label', });
lyr_Not_Allowed_4.set('fieldLabels', {'Name': 'inline label', 'Remarks': 'inline label', });
lyr_Not_Allowed_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});