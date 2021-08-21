'use strict';

const people = require('./lib/people');
// write your code here

const board = document.querySelector('.dashboard');

for (const person of people) {
  const row = document.createElement('tr');
  const name = document.createElement('td');

  name.textContent = person.name;

  const gender = document.createElement('td');

  gender.textContent = person.sex;

  const born = document.createElement('td');

  born.textContent = person.born;

  const died = document.createElement('td');

  died.textContent = person.died;

  const age = document.createElement('td');

  age.textContent = person.died - person.born;

  const century = document.createElement('td');

  century.textContent = Math.ceil(person.died / 100);
  row.append(name, gender, born, died, age, century);
  board.append(row);
}
