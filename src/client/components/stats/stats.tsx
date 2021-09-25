import React from 'react';
import { YMaps, Map, Circle } from 'react-yandex-maps';
import './stats.css';
import Select from 'react-select';

export function Stats() {
  const [localities, setLocalities] = React.useState([]);

  const [filter, setFilter] = React.useState<any>();

  const [currentLocality, setCurrentLocality] = React.useState<any>(undefined);

  const rating = ['#40eb34', '#ebe234', '#eb3434'];

  React.useEffect(() => {
    fetch('http://localhost:5000/localities')
      .then((res) => {
        res.json().then((res) => {
          setLocalities(res);
        });
      })
      .catch(console.error);
  }, [filter]);

  return (
    <>
      <div className="title">
        <div>
          <h1>Статистика по регионам Удмуртия</h1>
        </div>
        {/* <div className="filter-select">
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
        </div> */}
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
                  currentLocality?.lat || 56.85364272620877,
                  currentLocality?.lon || 53.232705410079454,
                ],
              }}
            >
              {localities.map((locality) => (
                <Circle
                  key={locality.id}
                  geometry={[[locality.lat, locality.lon], 3000]}
                  options={{
                    fillColor: rating[locality.unemployedScore - 1],
                    strokeWidth: 0,
                    opacity: 0.5,
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
            <span>Население: {currentLocality?.populationCount}</span>
            <table className="table">
              <thead>
                <th>Показатель</th>
                <th>Значение</th>
                <th>Балл</th>
              </thead>
              <tbody>
                <tr>
                  {currentLocality?.population?.populationCount}
                  {/* {JSON.stringify(currentLocality)} */}
                  <td>Безработица</td>
                  <td>{currentLocality.unemployedCount}</td>
                  <td>{currentLocality.unemployedScore}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
