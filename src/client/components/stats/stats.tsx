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
                value: 'bornOutOfWedlockScore',
                label: 'Рожденные вне брака',
              },
              {
                value: 'deathsScore',
                label: 'Смерти',
              },
              {
                value: 'disabledScore',
                label: 'Инвалиды',
              },
              {
                value: 'divorcedScore',
                label: 'Разводы',
              },
              {
                value: 'largeFamiliesScore',
                label: 'Многодетные семьи',
              },
              {
                value: 'poorLargeFamiliesScore',
                label: 'Многодетные семьи (низкий доход)',
              },
              {
                value: 'singleParentFamiliesScore',
                label: 'Неполные семьи',
              },
              {
                value: 'unemployedScore',
                label: 'Безработные',
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
                  currentLocality?.lat || 56.85364272620877,
                  currentLocality?.lon || 53.232705410079454,
                ],
              }}
            >
              {localities.map((locality) => {
                const scoreType = filter
                  ? locality[filter.id] - 1
                  : locality.unemployedScore - 1;

                console.log(scoreType);

                return (
                  <Circle
                    key={locality.id}
                    geometry={[[locality.lat, locality.lon], 3000]}
                    options={{
                      fillColor: rating[scoreType],
                      strokeWidth: 0,
                      opacity: 0.6,
                    }}
                    onClick={() => {
                      setCurrentLocality(locality);
                    }}
                  />
                );
              })}
            </Map>
          </YMaps>
        </div>

        {currentLocality && (
          <div className="stats">
            <h2>
              {currentLocality.shortName} {currentLocality.name}{' '}
            </h2>
            <span className="subtitle">
              Население: {currentLocality?.populationCount?.toLocaleString()}{' '}
              чел
            </span>
            <table className="table">
              <thead>
                <th>Показатель на {new Date().toLocaleDateString()}</th>
                <th>Значение</th>
              </thead>
              <tbody>
                <tr>
                  <td>Безработные</td>
                  <td>{currentLocality.unemployedCount}</td>
                </tr>
                <tr>
                  <td>Рожденные дети</td>
                  <td>{currentLocality.childrenCount}</td>
                </tr>
                <tr>
                  <td>Кол-во разводов</td>
                  <td>{currentLocality.divorcesCount}</td>
                </tr>
                <tr>
                  <td>Кол-во семей</td>
                  <td>{currentLocality.familiesCount}</td>
                </tr>
                <tr>
                  <td>Кол-во детей, рожденных вне брака</td>
                  <td>{currentLocality.bornOutOfWedlockCount}</td>
                </tr>
                <tr>
                  <td>Кол-во смертей</td>
                  <td>{currentLocality.deathsCount}</td>
                </tr>
                <tr>
                  <td>Кол-во инвалидов</td>
                  <td>{currentLocality.disabledCount}</td>
                </tr>
                <tr>
                  <td>Кол-во многодетных семей</td>
                  <td>{currentLocality.largeFamiliesCount}</td>
                </tr>
                <tr>
                  <td>Кол-во многодетных семей с доходом ниже МРОТ</td>
                  <td>{currentLocality.poorLargeFamiliesCount}</td>
                </tr>
                <tr>
                  <td>Кол-во неполных семей</td>
                  <td>{currentLocality.singleParentFamiliesCount}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
