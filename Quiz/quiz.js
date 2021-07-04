//Quiz Layout

 // ALSO: somehow make the score, pros, and cons reset when quiz is restarted
 class Shoe {
    constructor(name, brand, price, cushion) {
      this.name = name;
      this.brand = brand;
      this.price = price;
      this.cushion = cushion;
      this.score = 0;
      const pros = [];
      const cons = [];
    }
  }
  
  //Shoes in the database:
  let HokaBondi = new Shoe("Bondi", "Hoka", 150, "high");
  let BrooksGhost = new Shoe("Ghost", "Brooks", 130, "medium");
  
  const shoes = [HokaBondi, BrooksGhost];
  


//open page 
//make a different function for each question?

//very simple: 3 questions - 

function priceRange(max){
    alert("kjahgsokhasl")
    let chosen = document.getElementById(max);
    chosen.style.backgroundColor = blue;
    for (const shoe in shoes) {
        if (max = "100") {
            //for every shoe
            if (shoe.price <= 100){
                shoe.push("price");
            }
            if (shoe.price > 100) {
                shoe.score = shoe.score - 1;
                shoe.cons.push("price")
            }
            if (shoe.price > 130) {
                shoe.score = shoe.score - 1;
            }
            if (shoe.price > 150) {
                shoe.score = shoe.score - 1;
            }
        }

        if (price = "130") {
            //for every shoe
            if (shoe.price <= 130){
                shoe.push("price");
            }
            if (shoe.price > 130) {
                shoe.score = shoe.score - 1;
                shoe.cons.push("price")
            }
            if (shoe.price > 150) {
                shoe.score = shoe.score - 1;
            }
        }

        if (price = "150") {
            if (shoe.price <= 150){
                shoe.push("price");
            }
            if (shoe.price > 150) {
                shoe.score = shoe.score - 1;
                shoe.cons.push("price")
            }
        }

        if (price = "160") {
            shoe.pro.push("price")
        }
    }
}
   


//More cushion or less cushion

function cushion (level){

}


//