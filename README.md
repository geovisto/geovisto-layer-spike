# Geovisto Spikelayer Tool

Tool which provides the map layer functionality for [Geovisto core library](https://github.com/geovisto/geovisto).

This repository is a snapshot of Geoviosto `tools/layers/spike` derived from the development repository: [geovisto/geovisto-map](https://github.com/geovisto/geovisto-map).

## Usage

![image](https://user-images.githubusercontent.com/44326793/212473424-e256d4d2-295c-4935-be65-b216fe57c3d1.png)

```js
import { GeovistoSpikeLayerTool } from 'geovisto-layer-spike';
import 'geovisto-layer-spike/dist/index.css';


// create instance of map with given props
const map = Geovisto.createMap({
  // ...
  tools?: Geovisto.createMapToolsManager([
    // instances of Geovisto tools (extensions) which will be directly used in the map
    // ...
    GeovistoSpikeLayerTool.createTool({
      id: "geovisto-tool-layer-spike"
    }),
  ])
});

// rendering of the map
map.draw(Geovisto.getMapConfigManagerFactory().default({
  // initial settings of the map can be overriden by the map config - JSON structure providing user settings
  // ...
  tools?: [
    // config of Geovisto tools (extensions) used in the map
    // ...
    {
      "type": "geovisto-tool-layer-spike",
      "id": "geovisto-tool-layer-spike",
      "enabled": true,
      "layerName": "Spike layer",
      // mapping of data domains to data dimensions
      "data": {
        "latitude": "lat", // latitude in degrees
        "longitude": "long", // longitude in degrees
        "category": "data.category", // category dimension
        "value": "data.value", // value dimension
        "aggregation": "sum", // [sum, count]
        "color": "#e32400" // color of spikes
      }
    },
    // ...
  ]
}));
```

## Instalation

`npm install --save geovisto-layer-spike`

Peer dependencies:

`npm install --save geovisto leaflet`

## Authors and Contributors

Author: [Petr Kašpar](https://github.com/xkaspa40), [Vladimír Korenčik](https://github.com/froztt)

Contributors: [Jiři Hynek](https://github.com/jirka)

## License

[MIT](https://github.com/geovisto/geovisto-layer-spike/blob/master/LICENSE)

### Keywords

[gis](https://www.npmjs.com/search?q=keywords:gis) [map](https://www.npmjs.com/search?q=keywords:map) [geovisto](https://www.npmjs.com/search?q=keywords:geovisto) [leaflet](https://www.npmjs.com/search?q=keywords:leaflet) [spatial-data](https://www.npmjs.com/search?q=keywords:spatial-data) [visualization](https://www.npmjs.com/search?q=keywords:visualization) [spike](https://www.npmjs.com/search?q=keywords:spike)
