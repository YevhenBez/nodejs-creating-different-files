const fs = require('fs');
const uuid = require('uuid');

// Массив ID
const ids = [
  'bef5682a-cf1f-489c-8c19-7657a481a656',
  '179a814a-697f-4f2e-a0e4-2e908e373850',
  'bfcdf7fb-8178-48e6-938f-f6b5925dc022',
  '921e11ab-758d-40c1-83c4-f55648af231d',
  'a4d13574-d88a-49e3-a2dd-3ab470835423',
  '95046141-d79f-432d-a107-5d49dc5f11a0',
  'ac405992-a9f6-4588-8572-e9044b36e211',
  '77040e39-ccb2-4d48-83ef-551bd1f60965',
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
    return `${dateString} line 2/${lineNumber}`;
  };
}

// Создание и запись массивов в файлы
ids.forEach((id, index) => {
  const generateDate = generateRandomDate(index + 1); // Начинать нумерацию с числа, указанного во втором аргументе

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
