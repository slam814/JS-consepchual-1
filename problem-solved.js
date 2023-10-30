// adil vai bie korbe, per bus 50, par car 11, baki jabe Rikshai pre person 70 taka

var peoples = 193;
var peoleForCar = peoples % 50;
var peoleForRickshaw = peoleForCar % 11;
var totalVara = peoleForRickshaw * 70;

console.log(totalVara, "Riska pepole:", totalVara / 70);