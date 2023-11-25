import React, { useState, useEffect } from 'react';

export const People = () => {
  const [peopleData, setPeopleData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // New state for loading indicator

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then((response) => response.json())
      .then((data) => {
        setPeopleData(data.results);
        setIsLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        setIsLoading(false); // Handle error and set loading to false
      });
  }, []);

  return (
    <div className="people">
      {isLoading ? ( // Show loading message if isLoading is true
        <h1>Loading...</h1>
      ) : (
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
      )}
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
