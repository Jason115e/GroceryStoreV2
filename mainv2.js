//schema
const inventorySchema = [
    {
        organic: Boolean,
        img: String,
        produce: String
    }
];



function addProduce(organic, image, produce){

    const newProduce = Object.create(inventorySchema);
    newProduce.organic = organic;
    newProduce.image = image;
    newProduce.produce = produce;


    return newProduce;
  
   

}



//produce item

const cherry = addProduce(true, '../img/001-cherry.png', 'Cherry');
const cherry2 = addProduce(true, '../img/001-cherry.png', 'Cherry');
const cherry3 = addProduce(true, '../img/001-cherry.png', 'Cherry');

let inventoryList = [cherry, cherry2, cherry3];


//function to generate a itemcard







