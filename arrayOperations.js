const users = [
  { name: 'Diego', age: 23, company: 'Facebook' },
  { name: 'Henrique', age: 15, company: 'Facebook' },
  { name: 'Turco', age: 30, company: 'AirBnb' },
];

const ages = users.map(item => item.age);
console.log(ages);

const facebookUsersOverEigtheenYearsOld = users.filter(item => item.company === 'Facebook' && item.age > 18);
console.log(facebookUsersOverEigtheenYearsOld);

const facebookUser = users.find(item => item.company === 'Google');
console.log(facebookUser);

const usersOverFiftyYearsOld = users.filter(item => (item.age * 2) <= 50);
console.log(usersOverFiftyYearsOld);