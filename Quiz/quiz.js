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

    // CANT GET COLOR TO CHANGE 
    let ide = document.getElementById("100");
    alert(ide);
    ide.style.backgroundColor = blue;
    
    for (let i = 0; i < shoes.length; i++){
        if (max == 100) {
            //for every shoe
            if (shoes[i].price <= 100){
                //something with pushing price onto array wasn't working: shoes[i].pros.push("price");
            }
            if (shoes[i].price > 100) {
                shoes[i].score = shoes[i].score - 1;
                //something with pushing price onto array wasn't working                
            }
            if (shoes[i].price > 130) {
                shoes[i].score = shoes[i].score - 1;
            }
            if (shoes[i].price > 150) {
                shoes[i].score = shoes[i].score - 1;
            }
        }

        if (max == 130) {
            //for every shoe
            if (shoes[i].price <= 130){
                //something with pushing price onto array wasn't working: shoes[i].pros.push("price");
            }
            if (shoes[i].price > 130) {
                shoes[i].score = shoes[i].score - 1;
                //something with pushing price onto array wasn't working                
            }
            if (shoes[i].price > 150) {
                shoes[i].score = shoes[i].score - 1;
            }
        }

        if (max == 150) {
            //for every shoe
            if (shoes[i].price <= 150){
                //something with pushing price onto array wasn't working: shoes[i].pros.push("price");
            }
            if (shoes[i].price > 150) {
                shoes[i].score = shoes[i].score - 1;
                //something with pushing price onto array wasn't working                
            }
        }

        if (max == 160) {
            //Basixally do nothing
        }
    }
}

//More cushion or less cushion

function cushion(level){
    alert("enter function");
    for (let i = 0; i < shoes.length; i++){
        alert(level);
        if (level == "minimal") {
            //for every shoe
            alert(shoe[i].cushion);
            if (shoes[i].cushion.equals("minimal")){
                //push cshion level on pro 
            }
            if (shoes[i].cushion.equals("light")) {
                shoes[i].score = shoes[i].score - 1;
                //push cushion level on to con              
            }
            if (shoes[i].cushion.equals("medium")) {
                shoes[i].score = shoes[i].score - 2;
                //push cushion level on to con
            }
            if (shoes[i].cushion.equals("heavy")) {
                shoes[i].score = shoes[i].score - 3;
                //push cushion level on to con
            }
        }

        if (level.equals("light")) {
            //for every shoe
            alert(shoe[i].cushion);
            if (shoes[i].cushion.equals("minimal")){
                shoes[i].score = shoes[i].score - 1;
                //push cushion level on to con
            }
            if (shoes[i].cushion.equals("light")) {
                //push cshion level on pro               
            }
            if (shoes[i].cushion.equals("medium")) {
                shoes[i].score = shoes[i].score - 1;
                //push cushion level on to con
            }
            if (shoes[i].cushion.equals("heavy")) {
                shoes[i].score = shoes[i].score - 2;
                //push cushion level on to con
            }
        }

        if (level.equals("medium")) {
            //for every shoe
            alert(shoe[i].cushion)
            if (shoes[i].cushion.equals("minimal")){
                shoes[i].score = shoes[i].score - 2;
                //push cushion level on to con
            }
            if (shoes[i].cushion.equals("light")) {
                shoes[i].score = shoes[i].score - 1;
                //push cshion level on con              
            }
            if (shoes[i].cushion.equals("medium")) {
                //push cushion level on to pro
            }
            if (shoes[i].cushion.equals("heavy")) {
                shoes[i].score = shoes[i].score - 1;
                //push cushion level on to con
            }
        }

        if (level.equals("medium")) {
            //for every shoe
            alert(shoe[i].cushion);
            if (shoes[i].cushion.equals("minimal")){
                shoes[i].score = shoes[i].score - 2;
                //push cushion level on to con
            }
            if (shoes[i].cushion.equals("light")) {
                shoes[i].score = shoes[i].score - 1;
                //push cshion level on con              
            }
            if (shoes[i].cushion.equals("medium")) {
                //push cushion level on to pro
            }
            if (shoes[i].cushion.equals("heavy")) {
                shoes[i].score = shoes[i].score - 1;
                //push cushion level on to con
            }
        }

        if (level.equals("heavy")) {
            //for every shoe
            alert(shoe[i].cushion);
            if (shoes[i].cushion.equals("minimal")){
                shoes[i].score = shoes[i].score - 3;
                //push cushion level on to con
            }
            if (shoes[i].cushion.equals("light")) {
                shoes[i].score = shoes[i].score - 2;
                //push cshion level on con              
            }
            if (shoes[i].cushion.equals("medium")) {
                shoes[i].score = shoes[i].score - 1;
                //push cushion level on to con
            }
            if (shoes[i].cushion.equals("heavy")) {
                //push cushion level on to pros
            }
        }
    }
}
