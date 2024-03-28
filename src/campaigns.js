const fs = require('fs');
const uuid = require('uuid');

// Генерация случайного UUID
function generateUuid() {
  return uuid.v4();
}

// Генерация случайной даты в формате "YYYY-MM-DD"
function generateRandomDate() {
  const start = new Date(2022, 0, 1);
  const end = new Date();
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().split('T')[0];
}

// Создание массива из 48 объектов
const arrayOfObjects = [];
for (let i = 0; i < 48; i++) {
  arrayOfObjects.push({
    campaignId: generateUuid(),
    clicks: Math.floor(Math.random() * 1000), // Генерация случайного количества кликов
    cost: parseFloat((Math.random() * 100).toFixed(2)), // Генерация случайной стоимости с округлением до двух знаков после запятой
    date: generateRandomDate(), // Генерация случайной даты
  });
}

// Запись массива в файл в формате JSON
fs.writeFile('campaignsb7ab935a-2feb-4d84-a457-52a4ac04d3b5.json', JSON.stringify(arrayOfObjects, null, 2), err => {
  if (err) throw err;
  console.log('Data written to file');
});