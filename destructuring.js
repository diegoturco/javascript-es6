const company = {
  name: 'AirBnb',
  adress: {
    city: 'San Francisco',
    state: 'CA',
  }
};

const { name, adress: { city, state } } = company;

function showInfo({ name, age }) {
  return `${name} is ${age} years old.`;
}

showInfo({ name: 'Diego', age: 23 });