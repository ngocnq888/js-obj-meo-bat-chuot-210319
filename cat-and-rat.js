class Rat {
    constructor(name){
        this.name = name;
        this.weight = 10;
        this.speed = Math.ceil(Math.random()*5);
        this.isDead = false;
        this.voice = "Chiz chiz .. !"
    }

}
class Cat {
    constructor(name){
        this.name = name;
        this.weight = 12;
        this.speed = Math.ceil(Math.random()*6);
        this.isDead = false;
        this.voice = "meo meo .. !"
    }

    catchRat = function (Rat) {
        if(!Rat.isDead){
            if(Rat.speed < this.speed){

               return true;
            }
            else console.log('meo chay khong nhanh hon chuot !')
        }
        else{
            alert(' chuot '+ Rat.name + 'da chet, Bat khong thanh cong ! ');
            return false;
        }
    };
    eatRat = function (Rat) {
        if(this.catchRat(Rat)){
            this.weight += Rat.weight;
            Rat.isDead = true ;
            console.log('da an chuot ' + Rat.name);
        }
    }
}
let firstRat = new Rat("jery");
let firstCat = new Cat();
firstCat.name = "Tom";
firstCat.eatRat(firstRat);
console.log(firstCat.name);
