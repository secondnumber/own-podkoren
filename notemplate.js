const listNode = document.querySelector('#list');
const randomArray = [
    {
        data: '3 июн 2018',
        text: 'Любезные братцы и сестрички, «Под Корень» закончился. Всё, что имеет начало, должно иметь и конец. Но всем нам нужен был вывод, последний сладкий итог. Часть этого итога – вы, любезные.',
        image: 'https://sun9-7.userapi.com/c830508/v830508652/116f1c/VB2gmz7FAAg.jpg'
    },
    {
        data: '2 июн 2018',
        text: 'Завтра, в воскресение, в сообществе появится последняя запись. Она будет перекликаться с той текстовой игрой, которая была выложена здесь в начале года. ',
        image: 'https://sun9-35.userapi.com/c841425/v841425129/58528/dyPl-2xaKNQ.jpg'
    },
    {
        data: '2 июн 2018',
        text: 'За время существования нашего сообщества была собрана небольшая библиотека из ста тридцати позиций. Это книги и авторы потаённого свойства: от Ареопагитик до Леона Блуа. ',
        image: 'https://sun9-22.userapi.com/c623323/v623323162/1ef8c/0WVMFuR9sGI.jpg'
    }
]

renderList(randomArray);

function renderList(arr) {
    arr.map(createListNode).forEach(element => {
        listNode.appendChild(element);
    });
}

function createListNode(item) {
    const itemNode = document.createElement('div');
    const dataNode = document.createElement('div');
    const textNode = document.createElement('div');
    const imageNode = document.createElement('img');

    dataNode.textContent = item.data;
    textNode.textContent = item.text;
    imageNode.src = item.image;

    itemNode.appendChild(dataNode);
    itemNode.appendChild(textNode);
    itemNode.appendChild(imageNode);

    return itemNode;
}