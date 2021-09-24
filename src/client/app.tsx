import React from 'react';
import {YMaps, Map, Circle} from 'react-yandex-maps';

export const App = () => (
  <div>
    <h1>Тепловая карта</h1>

    <YMaps>
      <Map
        width={1360}
        height={768}
        state={{
          zoom: 9,
          center: [55.76, 37.64],
          // controls: ['zoomControl'],
        }}
      >

          <Circle
              geometry={[[55.76, 37.6], 1000]}
              options={{
                  draggable: true,
                  fillColor: '#DB709377',
                  strokeColor: '#990066',
                  strokeOpacity: 0.8,
                  strokeWidth: 5,
              }}
              onClick={() => {
                  console.log('here')
              }}
          />


      </Map>
    </YMaps>
  </div>
);
