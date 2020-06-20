const userDiego = {
  name: 'Diego',
  age: 23,
  adress: {
    city: 'San Francisco',
    state: 'CA',
  }
};

const henriqueUser = { ...userDiego, name: 'Henrique', adress: { city: 'New York', state: 'NY'} };