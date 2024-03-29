const fs = require('fs');

let customers = [
  {
    "id": "1e0700a2-5183-4291-85cc-2065a036a683",
    "name": "Jane Cooper",
    "company": "Microsoft",
    "phone": "(225) 555-0118",
    "email": "jane@microsoft.com",
    "country": "United States",
    "status": "Active"
  },
  {
    "id": "a30f821b-4d25-4ff0-abdd-e340b3f0dd2b",
    "name": "Floyd Miles",
    "company": "Yahoo",
    "phone": "(205) 555-0100",
    "email": "floyd@yahoo.com",
    "country": "Kiribati",
    "status": "Inactive"
  },
  {
    "id": "44dca67a-8e5a-4798-bf8e-b15efd4e1abd",
    "name": "Ronald Richards",
    "company": "Adobe",
    "phone": "(302) 555-0107",
    "email": "ronald@adobe.com",
    "country": "Israel",
    "status": "Inactive"
  },
  {
    "id": "ea8ed3dc-2b68-4a53-905a-53ecb0adef33",
    "name": "Marvin McKinney",
    "company": "Tesla",
    "phone": "(252) 555-0126",
    "email": "marvin@tesla.com",
    "country": "Iran",
    "status": "Active"
  },
  {
    "id": "ea76146a-0b00-4b80-bc02-a8c822176712",
    "name": "Jerome Bell",
    "company": "Google",
    "phone": "(629) 555-0129",
    "email": "jerome@google.com",
    "country": "Réunion",
    "status": "Active"
  },
  {
    "id": "63ca02f9-d637-46b5-9237-f3b24425e029",
    "name": "Kathryn Murphy",
    "company": "Microsoft",
    "phone": "(406) 555-0120",
    "email": "kathryn@microsoft.com",
    "country": "Curaçao",
    "status": "Active"
  },
  {
    "id": "ed0263e8-59a5-4bf1-87e0-2bb88e53dc34",
    "name": "Jacob Jones",
    "company": "Yahoo",
    "phone": "(208) 555-0112",
    "email": "jacob@yahoo.com",
    "country": "Brazil",
    "status": "Active"
  },
  {
    "id": "6013bad0-750c-4691-8bc2-d8f2b43969c4",
    "name": "Kristin Watson",
    "company": "Facebook",
    "phone": "(704) 555-0127",
    "email": "kristin@facebook.com",
    "country": "Åland Islands",
    "status": "Inactive"
  },
  {
    "id": "252c7be4-8b06-4fa7-8d42-61fb835b70d5",
    "name": "Turned1 the page",
    "company": "Facebook",
    "phone": "(704) 555-0128",
    "email": "turned@facebook.com",
    "country": "Next page",
    "status": "Inactive"
  },
  {
    "id": "252c7be4-8b06-4fa7-8d42-61fb835b70d6",
    "name": "Turned2 the page",
    "company": "Yahoo",
    "phone": "(704) 555-0129",
    "email": "turned@yahoo.com",
    "country": "Next page",
    "status": "Inactive"
  },
  {
    "id": "252c7be4-8b06-4fa7-8d42-61fb835b70d7",
    "name": "Turned3 the page",
    "company": "Facebook",
    "phone": "(704) 555-0130",
    "email": "turned@facebook.com",
    "country": "Next page",
    "status": "Inactive"
  },
  {
    "id": "e311f9a8-84a0-4b49-b6ce-89500f4f9493",
    "name": "Turned4 the page",
    "company": "Facebook",
    "phone": "(704) 555-0130",
    "email": "turned@facebook.com",
    "country": "Next page",
    "status": "Inactive"
  },
  {
    "id": "a6b739e4-b789-470d-baf7-d0321e639f07",
    "name": "Turned5 the page",
    "company": "Facebook",
    "phone": "(704) 555-0130",
    "email": "turned@facebook.com",
    "country": "Next page",
    "status": "Inactive"
  },
  {
    "id": "d439c456-e97c-4e81-87fd-eac45f3e99f3",
    "name": "Turned6 the page",
    "company": "Facebook",
    "phone": "(704) 555-0130",
    "email": "turned@facebook.com",
    "country": "Next page",
    "status": "Inactive"
  },
  {
    "id": "cbafb9bc-39e2-44be-ad2f-cc3c24e6a32d",
    "name": "Turned7 the page",
    "company": "Facebook",
    "phone": "(704) 555-0130",
    "email": "turned@facebook.com",
    "country": "Next page",
    "status": "Inactive"
  },
  {
    "id": "2b982bf5-c0de-4f23-b4f3-cb1a64fc9260",
    "name": "Turned8 the page",
    "company": "Facebook",
    "phone": "(704) 555-0130",
    "email": "turned@facebook.com",
    "country": "Next page",
    "status": "Inactive"
  },
  {
    "id": "56d756e9-35b9-466a-93c7-0456e0855637",
    "name": "Turned1 the page1",
    "company": "Facebook",
    "phone": "(704) 555-0128",
    "email": "turned@facebook.com",
    "country": "Next page",
    "status": "Active"
  },
  {
    "id": "00d03cd5-67fc-4ab6-9a57-097e39b29977",
    "name": "Turned2 the page1",
    "company": "Yahoo",
    "phone": "(704) 555-0129",
    "email": "turned@yahoo.com",
    "country": "Next page",
    "status": "Active"
  },
  {
    "id": "852b428f-2559-4f68-8e41-89ab5333e63f",
    "name": "Turned3 the page1",
    "company": "Facebook",
    "phone": "(704) 555-0130",
    "email": "turned@facebook.com",
    "country": "Next page",
    "status": "Active"
  },
  {
    "id": "59a3deed-1e57-49bb-8611-77f33a342280",
    "name": "Turned4 the page1",
    "company": "Facebook",
    "phone": "(704) 555-0130",
    "email": "turned@facebook.com",
    "country": "Next page",
    "status": "Inactive"
  },
  {
    "id": "c9c133f3-f1fb-4968-a634-0b328960fe1b",
    "name": "Turned5 the page1",
    "company": "Facebook",
    "phone": "(704) 555-0130",
    "email": "turned@facebook.com",
    "country": "Next page",
    "status": "Inactive"
  },
  {
    "id": "ebe99ecc-0f68-465e-8fe5-7e2f1f8a2fbb",
    "name": "Turned6 the page1",
    "company": "Facebook",
    "phone": "(704) 555-0130",
    "email": "turned@facebook.com",
    "country": "Next page",
    "status": "Inactive"
  },
  {
    "id": "470f7804-1c45-4167-8ab5-69c849810d9f",
    "name": "Turned7 the page1",
    "company": "Facebook",
    "phone": "(704) 555-0130",
    "email": "turned@facebook.com",
    "country": "Next page",
    "status": "Inactive"
  },
  {
    "id": "c0a71098-e3ba-4748-9b29-c3eb48b8ff92",
    "name": "Turned8 the page1",
    "company": "Facebook",
    "phone": "(704) 555-0130",
    "email": "turned@facebook.com",
    "country": "Next page",
    "status": "Inactive"
  },
  {
    "id": "0cbe6d08-0c3c-4895-b5ee-29df0d03d713",
    "name": "Turned1 the page2",
    "company": "Facebook",
    "phone": "(704) 555-0128",
    "email": "turned@facebook.com",
    "country": "Next page",
    "status": "Inactive"
  },
  {
    "id": "ebd8f30b-9109-4bc8-97e5-dc972a8e9b82",
    "name": "Turned2 the page2",
    "company": "Yahoo",
    "phone": "(704) 555-0129",
    "email": "turned@yahoo.com",
    "country": "Next page",
    "status": "Inactive"
  },
  {
    "id": "eef8b736-4eb8-415a-80d7-da1f956b6de4",
    "name": "Turned3 the page2",
    "company": "Facebook",
    "phone": "(704) 555-0130",
    "email": "turned@facebook.com",
    "country": "Next page",
    "status": "Active"
  },
  {
    "id": "f1b97464-4d76-43ac-89a4-60acc24f7617",
    "name": "Turned4 the page2",
    "company": "Facebook",
    "phone": "(704) 555-0130",
    "email": "turned@facebook.com",
    "country": "Next page",
    "status": "Active"
  },
  {
    "id": "79b94b82-b8c3-4888-9817-317fa48ddf5b",
    "name": "Turned5 the page2",
    "company": "Facebook",
    "phone": "(704) 555-0130",
    "email": "turned@facebook.com",
    "country": "Next page",
    "status": "Active"
  },
  {
    "id": "53083438-9762-4128-9e97-6a883323b0ca",
    "name": "Turned6 the page2",
    "company": "Facebook",
    "phone": "(704) 555-0130",
    "email": "turned@facebook.com",
    "country": "Next page",
    "status": "Active"
  },
  {
    "id": "6932858b-d80b-455f-add9-2da36142a891",
    "name": "Turned7 the page2",
    "company": "Facebook",
    "phone": "(704) 555-0130",
    "email": "turned@facebook.com",
    "country": "Next page",
    "status": "Active"
  },
  {
    "id": "251cca1e-51a5-4383-b3d7-7f8fb6187371",
    "name": "Turned8 the page2",
    "company": "Facebook",
    "phone": "(704) 555-0130",
    "email": "turned@facebook.com",
    "country": "Next page",
    "status": "Inactive"
  },
  {
    "id": "22bc9721-4da3-4f6d-bf49-463b97e4caa5",
    "name": "Turned1 the page3",
    "company": "Facebook",
    "phone": "(704) 555-0128",
    "email": "turned@facebook.com",
    "country": "Next page",
    "status": "Active"
  },
  {
    "id": "11ed1781-66a6-420f-aa7b-35f2b45dc4ed",
    "name": "Turned2 the page3",
    "company": "Yahoo",
    "phone": "(704) 555-0129",
    "email": "turned@yahoo.com",
    "country": "Next page",
    "status": "Inactive"
  },
  {
    "id": "dc829e95-3f38-4820-937a-9bd7124041ea",
    "name": "Turned3 the page3",
    "company": "Facebook",
    "phone": "(704) 555-0130",
    "email": "turned@facebook.com",
    "country": "Next page",
    "status": "Active"
  },
  {
    "id": "6e1b7398-698f-4348-8211-ca2b92c75427",
    "name": "Turned4 the page3",
    "company": "Facebook",
    "phone": "(704) 555-0130",
    "email": "turned@facebook.com",
    "country": "Next page",
    "status": "Inactive"
  },
  {
    "id": "192b770c-5b40-476a-b076-83173fdc2826",
    "name": "Turned5 the page3",
    "company": "Facebook",
    "phone": "(704) 555-0130",
    "email": "turned@facebook.com",
    "country": "Next page",
    "status": "Active"
  },
  {
    "id": "e313afe9-e9d5-44bb-8f56-64881a18c434",
    "name": "Turned6 the page3",
    "company": "Facebook",
    "phone": "(704) 555-0130",
    "email": "turned@facebook.com",
    "country": "Next page",
    "status": "Inactive"
  },
  {
    "id": "5bdec52e-0e8b-4313-ae1c-55274a2ef432",
    "name": "Turned7 the page3",
    "company": "Facebook",
    "phone": "(704) 555-0130",
    "email": "turned@facebook.com",
    "country": "Next page",
    "status": "Active"
  },
  {
    "id": "117efd11-5770-4fae-8535-b85882f5b9f7",
    "name": "Turned8 the page3",
    "company": "Facebook",
    "phone": "(704) 555-0130",
    "email": "turned@facebook.com",
    "country": "Next page",
    "status": "Inactive"
  },
  {
    "id": "03403ee5-5b25-4b33-8d49-9c78ac6d3ed5",
    "name": "Turned1 the page4",
    "company": "Facebook",
    "phone": "(704) 555-0128",
    "email": "turned@facebook.com",
    "country": "Next page",
    "status": "Inactive"
  },
  {
    "id": "c58dd373-3225-4224-a9cf-750011fab027",
    "name": "Turned2 the page4",
    "company": "Yahoo",
    "phone": "(704) 555-0129",
    "email": "turned@yahoo.com",
    "country": "Next page",
    "status": "Inactive"
  },
  {
    "id": "f83f72a3-f0fe-44d6-b0e0-be324a6ee1e4",
    "name": "Turned3 the page4",
    "company": "Facebook",
    "phone": "(704) 555-0130",
    "email": "turned@facebook.com",
    "country": "Next page",
    "status": "Inactive"
  },
  {
    "id": "d7c8038e-5cca-49fa-a8bc-5db6b26efa0d",
    "name": "Turned4 the page4",
    "company": "Facebook",
    "phone": "(704) 555-0130",
    "email": "turned@facebook.com",
    "country": "Next page",
    "status": "Inactive"
  },
  {
    "id": "4fb64e05-69a3-466c-9f98-d109e07a2d9f",
    "name": "Turned5 the page4",
    "company": "Facebook",
    "phone": "(704) 555-0130",
    "email": "turned@facebook.com",
    "country": "Next page",
    "status": "Active"
  },
  {
    "id": "a1058cae-4436-4310-b82e-478b202b21f0",
    "name": "Turned6 the page4",
    "company": "Facebook",
    "phone": "(704) 555-0130",
    "email": "turned@facebook.com",
    "country": "Next page",
    "status": "Inactive"
  },
  {
    "id": "6568cf18-5642-4dd5-92da-4b6bdb8ebae0",
    "name": "Turned7 the page4",
    "company": "Facebook",
    "phone": "(704) 555-0130",
    "email": "turned@facebook.com",
    "country": "Next page",
    "status": "Active"
  },
  {
    "id": "968f882b-0942-446a-ae25-345600d4679f",
    "name": "Turned8 the page4",
    "company": "Facebook",
    "phone": "(704) 555-0130",
    "email": "turned@facebook.com",
    "country": "Next page",
    "status": "Inactive"
  }
];

// Функція для генерації випадкової дати
function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

customers = customers.map(customer => {
  // Удалить свойства
  delete customer.name;
  delete customer.company;
  delete customer.phone;
  delete customer.country;
  delete customer.status;

  // Добавить новые свойства
  const newCustomer = {
    ...customer,
    authToken: Math.random().toString(36).substring(2),
    creationDate: randomDate(new Date(2020, 0, 1), new Date()).toISOString().split('T')[0]
  };

  return newCustomer;
});

fs.writeFile('accounts.json', JSON.stringify(customers, null, 2), (err) => {
  if (err) throw err;
  console.log('Data written to file');
});