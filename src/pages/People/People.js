import React, { useState, useEffect } from 'react';

export const People = () => {
  const [peopleData, setPeopleData] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then((response) => response.json())
      .then((data) => {
        setPeopleData(data.results);
      })
      .catch((error) => {
        return <h1>No data found</h1>
      });
  }, []);

  return (
    <div className="people">
      <table className="people-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Birth Year</th>
            <th>Mass</th>
            <th>Height</th>
          </tr>
        </thead>
        <tbody>
          {peopleData.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.birth_year}</td>
              <td>{person.mass}</td>
              <td>{person.height}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export const PeopleOne = () => {
  return (
    <div className='people'>
      <h1>People1</h1>
    </div>
  );
};

export const PeopleTwo = () => {
  return (
    <div className='people'>
      <h1>People2</h1>
    </div>
  );
};
