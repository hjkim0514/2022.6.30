const car1={
    Name: "Ford Mustang",
    color: "Brown",
    price: 27205
};

const car2={
    Name: "BMW",
    color: "Yellow",
    price: 53400
};

const car3={
    Name: "Toyota Camry",
    color: "Red",
    price: 22550
};

// console.log(car1);
// console.log(car3.Name);
// car3.Name = "Honda Civic";
// console.log(car3.Name);

let carCollection=[car1, car2, car3];
console.log(carCollection);
carCollection.push({
    Name: "Hondacivic",
    color: "Black",
    price: 21700
});

// console.log(carCollection);
// console.log(carCollection[2])
console.log(carCollection[2].price)
console.log(carCollection[0].color)