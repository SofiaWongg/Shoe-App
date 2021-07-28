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
    alert("Start");

    for (let i = 0; i < shoes.length; i++){
        alert("enter loop")
        alert(max)
        if (max == 100) {
            //for every shoe
            alert("in!");
            alert(shoes[i].price);
            if (shoes[i].price <= 100){
                shoes[i].push("price");
            }
            if (shoes[i].price > 100) {
                shoes[i].score = shoes[i].score - 1;
                shoes[i].cons.push("price");
                alert(shoes[i].score);
            }
            if (shoes[i].price > 130) {
                shoes[i].score = shoes[i].score - 1;
            }
            if (shoes[i].price > 150) {
                shoes[i].score = shoes[i].score - 1;
            }
            alert(shoes[i].score);
        } 
    }

    /** 
    for (const shoe in shoes) {
        alert("Enter loop");
        alert(shoe.price)//gives me undifined
        if (max == "100") {
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

        if (price == "130") {
            alert("130");
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

        if (price == "150") {
            alert("150");
            if (shoe.price <= 150){
                shoe.push("price");
            }
            if (shoe.price > 150) {
                shoe.score = shoe.score - 1;
                shoe.cons.push("price")
            }
        }

        if (price == "160") {
            alert("160");
            shoe.pro.push("price")
        }
    }
}
*/
}

function changecell(id, color)
{
  let a = document.getElementById(id);
  a.style.backgroundColor = color;
}
   


//More cushion or less cushion

function cushion (level){

}


//