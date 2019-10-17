const inventorySchema = [{
    organic: Boolean,
    img: String,
    produce: String
}];






const cherry = addProduce(true, '../img/001-cherry.png', 'Cherry');
const bamboo = addProduce(true, '../img/002-bamboo.png', 'Bamboo');
const peanut = addProduce(true, '../img/003-peanut.png', 'Peanut');
const pitaya = addProduce(true, '../img/004-pitaya.png', 'Pitaya');

let inventoryList = [cherry, bamboo, peanut, pitaya];





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
    console.log(listofItems);
});