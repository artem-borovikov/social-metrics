import React from 'react';
import { YMaps, Map, Circle } from 'react-yandex-maps';
import './stats.css';
import Select from 'react-select';

export function Stats() {
  const [localities, setLocalities] = React.useState([
    {
      id: 1,
      name: 'Ижевск',
      shortName: 'г',
      population: 1200000,
      lat: 56.11,
      lon: 54.12,
      rating: 15,
    },
  ]);

  const [filter, setFilter] = React.useState<any>();

  enum Rating {
    red = '#eb3434',
    yellow = '#ebe234',
    green = '#40eb34',
  }

  const [currentLocality, setCurrentLocality] = React.useState<any>(undefined);

  return (
    <>
      <div className="title">
        <div>
          <h1>Статистика по регионам</h1>
        </div>
        <div className="filter-select">
          <Select
            value={
              filter
                ? {
                    value: filter.id,
                    label: filter.name,
                  }
                : null
            }
            placeholder="Выберите фильтр"
            onChange={(value) => {
              setFilter({
                id: value.value,
                name: value.label,
              });
            }}
            options={[
              {
                value: 'filter1',
                label: 'Фильтр 1',
              },
              {
                value: 'filter2',
                label: 'Фильтр 2',
              },
              {
                value: 'filter3',
                label: 'Фильтр 3',
              },
              {
                value: 'filter4',
                label: 'Фильтр 4',
              },
            ]}
          />
        </div>
      </div>

      <div className="container">
        <div className="map">
          <YMaps>
            <Map
              width={800}
              height={768}
              state={{
                zoom: 9,
                center: [
                  currentLocality?.lat || 55,
                  currentLocality?.lon || 55,
                ],
                // controls: ['zoomControl'],
              }}
            >
              {localities.map((locality) => (
                <Circle
                  geometry={[[locality.lat, locality.lon], 1000]}
                  options={{
                    fillColor: Rating.green,
                    strokeColor: Rating.green,
                    strokeWidth: 5,
                  }}
                  onClick={() => {
                    setCurrentLocality(locality);
                  }}
                />
              ))}
            </Map>
          </YMaps>
        </div>

        {currentLocality && (
          <div className="stats">
            <h2>
              {currentLocality.shortName} {currentLocality.name}{' '}
              {/* <Link to="/list">
                <Button use="primary">Оказать адресную поддержку </Button>
              </Link> */}
            </h2>

            <table className="table">
              <thead>
                <th>Показатель</th>
                <th>Абсолютное значение</th>
                <th>Балл</th>
              </thead>
              <tbody>
                <tr>
                  <td>Безработица</td>
                  <td>12500 чел</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Многодетные семьи</td>
                  <td>12500 чел</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Безработица</td>
                  <td>12500 чел</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Безработица</td>
                  <td>12500 чел</td>
                  <td>1</td>
                </tr>
                <tr></tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
