const inventorySchema = [{
    organic: Boolean,
    img: String,
    produce: String
}];






const cherry = addProduce(true, '../img/001-cherry.png', 'Cherry', 2.90, 10, 5);
const bamboo = addProduce(true, '../img/002-bamboo.png', 'Bamboo', 1.99, '', 10);
const peanut = addProduce(true, '../img/003-peanut.png', 'Peanut', 2.90, 10, 5);
const pitaya = addProduce(true, '../img/004-pitaya.png', 'Pitaya', 1.99, '', 10);
const onion = addProduce(true, '../img/005-onion.png', 'Onion', 2.90, 10, 5);
const tomato = addProduce(true, '../img/006-tomato.png', 'Tomato', 1.99, '', 10);
const durian = addProduce(true, '../img/007-durian.png', 'Durian', 2.90, 10, 5);
const lettuce = addProduce(true, '../img/008-lettuce.png', 'Lettuce', 1.99, 50, 10);
const broccoli = addProduce(true, '../img/009-broccoli.png', 'Broccoli', 2.90, 10, 5);
const corn = addProduce(true, '../img/010-corn.png', 'Corn', 1.99, '', 10);
const breastMilkFruit = addProduce(true, '../img/011-breast-milk-fruit.png', 'Breast-Milk Fruit', 2.90, 10, 5);
const blueberry = addProduce(true, '../img/012-blueberry.png', 'Blueberry', 1.99, '', 10);
const potato = addProduce(true, '../img/013-potato.png', 'Potato', 2.90, 25, 5);
const mango = addProduce(false, '../img/014-mango.png', 'Mango', 1.08, '', 20);
const bellPepper = addProduce(false, '../img/015-bell-pepper.png', 'Bell Pepper', .55, '', 20);
const avocado = addProduce(true, '../img/016-avocado.png', 'Avocado', 2.90, 10, 5);
const strawberry = addProduce(true, '../img/017-strawberry.png', 'Strawberry', 1.99, '', 10);
const peas = addProduce(true, '../img/018-peas.png', 'Peas', 2.90, 30, 5);
const kiwi = addProduce(true, '../img/019-kiwi.png', 'Kiwi', 1.99, '', 10);
const grape= addProduce(true, '../img/020-grape.png', 'Grapes', 2.90, 10, 5);
const parsley = addProduce(true, '../img/021-parsley.png', 'Parsley', 1.99, '', 10);
const cucumber = addProduce(true, '../img/022-cucumber.png', 'Cucumber', 2.90, 10, 5);
const ginger = addProduce(true, '../img/023-ginger.png', 'Ginger', 1.99, '', 10);
const springOnion = addProduce(true, '../img/024-spring-onion.png', 'Spring Onion', 2.90, 5, 5);
const pomegranate = addProduce(true, '../img/025-pomegranate.png', 'Pomegranate', 1.99, '', 10);
const banana = addProduce(true, '../img/026-bananas.png', 'Banana', 2.99, '', 6);
const watermelon = addProduce(false, '../img/027-watermelon.png', 'Watermelon', 4.99, '', 10);
const artichoke = addProduce(true, '../img/028-artichoke.png', 'Artichoke', 2.90, 10, 5);
const carrot = addProduce(true, '../img/029-carrot.png', 'Carrot', 1.99, '', 10);
const roseApple = addProduce(true, '../img/030-rose-apple.png', 'Rose Apple', 2.90, 12, 5);
const rambutan = addProduce(true, '../img/031-rambutan.png', 'Rambutan', 1.99, '', 10);
const salad = addProduce(true, '../img/032-salad.png', 'Salad', 2.90, 10, 5);
const peach = addProduce(true, '../img/033-peach.png', 'Peach', 1.99, '', 10);
const olive = addProduce(true, '../img/034-olive.png', 'Olive', 2.90, 20, 5);
const mangosteen = addProduce(true, '../img/035-mangosteen.png', 'Mangosteen', 1.99, '', 10);
const radish = addProduce(true, '../img/036-radish.png', 'Radish', 2.90, 10, 5);
const mushroom = addProduce(true, '../img/037-mushroom.png', 'Mushroom', 1.99, '', 10);
const chili = addProduce(true, '../img/038-chili.png', 'Chili', 2.90, 25, 5);
const lemon = addProduce(true, '../img/039-lemon.png', 'Lemon', 1.99, '', 10);
const apple = addProduce(true, '../img/040-apple.png', 'Apple', 2.90, 10, 5);
const cabbage = addProduce(true, '../img/041-cabbage.png', 'Cabbage', 2.90, 15, 5);
const orange = addProduce(true, '../img/042-orange.png', 'Orange', 1.99, '', 10);
const tamarind = addProduce(true, '../img/043-tamarind.png', 'Tamarind', 2.90, 5, 5);
const coconut = addProduce(true, '../img/044-coconut.png', 'Coconut', 1.99, '', 10);
const eggplant= addProduce(true, '../img/045-eggplant.png', 'Eggplant', 2.90, 10, 5);
const pumpkin = addProduce(true, '../img/046-pumpkin.png', 'Pumpkin', 1.99, '', 10);
const acorn = addProduce(true, '../img/047-acorn.png', 'Acorn', 2.90, 20, 5);
const papaya = addProduce(true, '../img/048-papaya.png', 'Papaya', 1.99, '', 10);
const asparagus = addProduce(true, '../img/049-asparagus.png', 'Asparagus', 2.90, 25, 5);
const pineapple = addProduce(true, '../img/050-pineapple.png', 'Pineapple', 1.99, '', 10);
//Throw all my produce into an array for a list
let inventoryList = [cherry, bamboo, peanut, pitaya, onion, tomato, durian, lettuce, broccoli, corn, breastMilkFruit, blueberry, potato, mango, bellPepper, avocado, strawberry, peas, kiwi, grape, parsley, cucumber, ginger, springOnion, pomegranate, banana, watermelon, artichoke, carrot, roseApple, rambutan, salad, peach, olive, mangosteen, radish, mushroom, chili, lemon, apple, cabbage, orange, tamarind, coconut, eggplant, pumpkin, acorn, papaya, asparagus, pineapple];
//Throw all my produce into an array for a list
// const inventoryList = [cherry, banana, mango];







function addProduce(organic, image, produce) {

    const newProduce = Object.create(inventorySchema);
    newProduce.organic = organic;
    newProduce.image = image;
    newProduce.produce = produce;


    return newProduce;



}


function makeElement(element, elementId, elementClass, text) {
    const newElement = document.createElement(element);
    newElement.id = elementId;
    newElement.className = elementClass;
    newElement.innerText = text;
    return newElement;
}

const makeAttributes = function (element, ...attributes) {
    attributes.forEach(key => {
        element.setAttribute(key[0], key[1]);
    })
    return element;
}





function makeProduceCard(produce) {

    for (i = 0; i < 3; i++) {
        const box = makeElement('div', '', 'boxItem', '');
        const wrapper = makeElement('div', '', '', '');
        const li = makeElement('li', `produceItem${produce.produce}`, '', '');
        const image = makeElement('img', `${produce.produce.toLowerCase()}`, '', '');
        makeAttributes(image, ['src', `${produce.image}`], ['alt', `An image of a ${produce.produce}`]);
        const produceName = makeElement('span', '', '', produce.produce);

        const checkBox = makeElement('input', ``, 'allcheckBoxes', '');
        makeAttributes(checkBox, ['type', 'checkbox']);


        wrapper.append(image, produceName, checkBox);
        li.append(wrapper);
        box.appendChild(li);
        return box;
    }
}








const addInventoryToDOM = function (list) {
    const container = document.getElementById('inventoryList');
    for ($i = 0; $i < list.length; $i++) {

        container.appendChild(makeProduceCard(list[$i]));
    }
}
//Remember that array full of the produce I, you created? Well, now it serves here to loop through and append to the container. Done.
addInventoryToDOM(inventoryList);








const itemchecked = document.querySelectorAll(".allcheckBoxes");

const itemName = document.getElementsByTagName("span");










document.addEventListener("click", function () {

    let listofItems = [];
    for (i = 0; i < inventoryList.length; i++) {
       
        if (itemchecked[i].checked == true) {

          
            listofItems.push(itemName[i].innerText);
           
            

        } 

    }
    
    if (listofItems.length > 0){
    console.log(listofItems);
}
});