$("document").ready(function(){

var random = Math.floor(Math.random() *100 +25 );

$("#bottom").text("Number to Reach: " + " " + random);


var lost = 0;
var wins = 0;
var randomnumber;
var placeholder = 0;


var placeone = Math.floor(Math.random() *25);
var placetwo = Math.floor(Math.random() *25);
var placethree = Math.floor(Math.random() *25);
var placefour = Math.floor(Math.random() *25);

$("#wins").text("Number of Wins: " + " " + wins);
$("#lost").text("Number of Loses:" + " " + lost);

function reset(){
    var random = Math.floor(Math.random() *100 );

    $("#bottom").text("Number to Reach: " + " " + random);
    var placeone = Math.floor(Math.random() *25);
    var placetwo = Math.floor(Math.random() *25);
    var placethree = Math.floor(Math.random() *25);
    var placefour = Math.floor(Math.random() *25);
    placeholder = 0;
    $("#top").text(placeholder);

}

function yay(){
    alert("You did it!! ");
    wins++;
    $("#wins").text(placeholder);
    reset();

}
function lostgame(){
    alert("You Lose");
    lost++;
    $("#lost").text(lost);
    reset();


}
$("#place1").on("click", function(){
    placeholder = placeholder + placeone;
    $("#top").text(placeholder);

    if( placeholder == random){
        yay();}
        else if( placeholder  > random){
            lostgame();

        }
    
})

$("#place2").on("click", function(){
    placeholder = placeholder + placetwo;
    $("#top").text(placeholder);

    if( placeholder == random){
        yay();}
        else if( placeholder  > random){
            lostgame();
            
        }
    
})

$("#place3").on("click", function(){
    placeholder = placeholder + placethree;
    $("#top").text(placeholder);

    if( placeholder == random){
        yay();}
        else if( placeholder  > random){
            lostgame();
            
        }
    
})

$("#place4").on("click", function(){
    placeholder = placeholder + placefour;
    $("#top").text(placeholder);

    if( placeholder == random){
        yay();}
        else if( placeholder  > random){
            lostgame();
            
        }
   
        
});




});