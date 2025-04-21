//  elementos del DOM
const input = document.getElementById('itemInput');
const addButton = document.getElementById('addButton');
const itemList = document.getElementById('itemList');

// Función para agregar un nuevo elemento a la lista
addButton.addEventListener('click', () => {
  const inputValue = input.value.trim(); 
  if (inputValue !== '') {
    // Crea el nuevo elemento de <li>
    const listItem = document.createElement('li');
    listItem.textContent = inputValue;

    // Crea un botón "Eliminar" para el <li>
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', () => {
      itemList.removeChild(listItem); // Elimina el <li> cuando se hace clic en el botón
    });

    // Agrega el botón "Eliminar" al <li>
    listItem.appendChild(deleteButton);
    deleteButton.style.marginLeft = '10px';

    // Agrega el nuevo <li> a la lista <ul>
    itemList.appendChild(listItem);

    // Limpia el input después de agregar el elemento
    input.value = '';
  }
});