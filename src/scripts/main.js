'use strict';

const people = require('./lib/people');
// write your code here

const board = document.querySelector('.dashboard');

for (const i of people) {
  const row = document.createElement('tr');
  const name = document.createElement('th');

  name.textContent = i.name;
  row.append(name);

  const gender = document.createElement('th');

  gender.textContent = i.sex;
  row.append(gender);

  const born = document.createElement('th');

  born.textContent = i.born;
  row.append(born);

  const died = document.createElement('th');

  died.textContent = i.died;
  row.append(died);

  const age = document.createElement('th');

  age.textContent = i.died - i.born;
  row.append(age);

  const century = document.createElement('th');

  century.textContent = Math.ceil(i.died / 100);
  row.append(century);
  board.append(row);
}
