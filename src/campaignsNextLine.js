const fs = require('fs');
const uuid = require('uuid');

// Массив ID
const ids = [
  '4b6d1841-9904-4027-86a2-fc4175c26a6d',
  '70e2172c-ba08-45fa-a60b-5d16d902f1ee',
  'b703451b-4538-4394-be73-c5a002443813',
  '646865c6-df55-410f-8b38-ead51feed34c',
  '85d84262-a7b3-4f9d-8d73-fc73c11ec8bf',
  'f3aac566-f216-4300-8a03-e1d316034c78',
  'a2929bb1-3c00-48f0-94be-7e6d62080a6c',
];

// Генерация случайного UUID
function generateUuid() {
  return uuid.v4();
}

// Генерация случайной даты в формате "YYYY-MM-DD"
function generateRandomDate(lineNumber) {
  return function () {
    const start = new Date(2022, 0, 1);
    const end = new Date();
    const dateString = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    )
      .toISOString()
      .split('T')[0];
    return `${dateString} line ${lineNumber}`;
  };
}

// Создание и запись массивов в файлы
ids.forEach((id, index) => {
  const generateDate = generateRandomDate(index + 2); // Начинать нумерацию с числа, указанного во втором аргументе

  const arrayOfObjects = [];
  for (let i = 0; i < 48; i++) {
    arrayOfObjects.push({
      campaignId: generateUuid(),
      clicks: Math.floor(Math.random() * 1000), // Генерация случайного количества кликов
      cost: parseFloat((Math.random() * 100).toFixed(2)), // Генерация случайной стоимости с округлением до двух знаков после запятой
      date: generateDate(), // Генерация случайной даты с номером строки
    });
  }

  // Запись массива в файл в формате JSON
  fs.writeFile(
    `campaigns${id}.json`,
    JSON.stringify(arrayOfObjects, null, 2),
    err => {
      if (err) throw err;
      console.log(`Data written to campaigns${id}.json`);
    }
  );
});
