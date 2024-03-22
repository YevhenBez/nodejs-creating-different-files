const fs = require('fs');
const uuid = require('uuid');

// Список реальных стран
const countries = [
  'United States',
  'Canada',
  'United Kingdom',
  'Germany',
  'France',
  'Australia',
  'Italy',
  'Spain',
  'Brazil',
  'India',
  'China',
  'Japan',
  'Mexico',
  'South Africa',
  'Netherlands',
  'Sweden',
  'Norway',
  'Poland',
  'Switzerland',
];

// Список реальных marketplace
const marketplaces = [
  'Amazon',
  'eBay',
  'Walmart',
  'Alibaba',
  'Etsy',
  'Rakuten',
  'MercadoLibre',
  'Zalando',
  'Flipkart',
  'Taobao',
];

// Генерация случайного UUID
function generateUuid() {
  return uuid.v4();
}

// Создание объекта с случайными страной и marketplace
function createObject(index) {
  return {
    profileId: generateUuid(),
    country: countries[Math.floor(Math.random() * countries.length)],
    marketplace: marketplaces[Math.floor(Math.random() * marketplaces.length)],
  };
}

// Создание массива из 48 объектов
const arrayOfObjects = [];
for (let i = 1; i <= 48; i++) {
  arrayOfObjects.push(createObject(i));
}

// Запись массива в файл profiles1e0700a2-5183-4291-85cc-2065a036a683.json
fs.writeFile('profiles1e0700a2-5183-4291-85cc-2065a036a683.json', JSON.stringify(arrayOfObjects, null, 2), err => {
  if (err) throw err;
  console.log('Data written to file');
});
