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
    const additionalText = 'line 2'; // Текст из "line 2"
  const country = countries[Math.floor(Math.random() * countries.length)]; // Выбираем случайную страну из списка
  const countryWithAdditionalText = `${country} ${additionalText}`; // Объединяем текст из "line 2" с названием страны

  return {
    profileId: generateUuid(),
    country: countryWithAdditionalText,
    marketplace: marketplaces[Math.floor(Math.random() * marketplaces.length)],
  };
}

// Создание массива из 48 объектов
const arrayOfObjects = [];
for (let i = 1; i <= 48; i++) {
  arrayOfObjects.push(createObject(i));
}

// Запись массива в файл profilesa30f821b-4d25-4ff0-abdd-e340b3f0dd2b.json
fs.writeFile('profilesa30f821b-4d25-4ff0-abdd-e340b3f0dd2b.json', JSON.stringify(arrayOfObjects, null, 2), err => {
  if (err) throw err;
  console.log('Data written to file');
});
