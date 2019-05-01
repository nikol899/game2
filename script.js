"use strict";
let wins = 0;
let userHP = 40;
let grantHP = 10;
let name = undefined;
let play = prompt;
let userDam = 0;
let grantDam =0;

function startGame() {
     play = prompt("Would you like to play?");
   if (play === "yes") {
  
   name = prompt("Enter your name.");
   startCombo();
   }else {
    prompt("Next Time");
  }

function startCombo(){
  while (play) {
  
    // console.log(`${name} has ${userHP} health left.`);
    // console.log(`Grant has ${grantHP} health left.`);
  let attack = prompt("Would you like to attack or quit?");
 if(attack === "attack"){
  userHP -= userDam;
  grantHP -= grantDam;
  getDamage();
 }else{
   return;
 }
    if (grantHP <= 0) {
       wins++;
      grantHP = 10;
      if (wins === 3) {
        console.log(`${name} is victorious. ${name} wins the game.`);
        break;
      } 
      }
    } 
    if (userHP <= 0) {
      console.log(`${name} has been defeated. Sucks to suck.`);
      // break;
    }  
  }

function getDamage(){
Math.floor((Math.random()*5)+1);

}
startGame();