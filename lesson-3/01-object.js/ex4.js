let product = {
    "banh": 5,
    "keo": 6,
    "tay": 7,
};

for(let items in product){
    console.log(items+": "+product[items]);
}
