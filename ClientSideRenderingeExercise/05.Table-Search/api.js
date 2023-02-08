const baseUrl = 'http://localhost:3030/jsonstore/advanced/table';

export async function getRequest() {
   let response = await fetch(baseUrl);
   let data = await response.json();

   return data;
};