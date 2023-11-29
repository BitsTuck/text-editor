import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });


// Adds content to indexdb
export const putDb = async (content) => {
  console.log('db updated');
  const textDb = await openDB('jate', 1);
  const tx = textDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({ id: 1 , text: content });
  const result = await request;

  if (!result) {
    console.error('putDb not implemented');
  } return result
}



// Retrieves existing data from indexdb and displays it in the editor
export const getDb = async () => {
  console.log('GET all text from db')
  const textDb = await openDB('jate', 1);
  const tx = textDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.getAll();
  const result = await request;
  console.log('result.value', result)
  return result[0].text
}

initdb();
