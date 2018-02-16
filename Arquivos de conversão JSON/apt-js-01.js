/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function apt01(){

var x = parseInt(window.prompt('Digite um valor para x:'));
var y = parseInt(window.prompt('Digite um valor para y:'));
var z;

function soma(x,y){
    z = x + y;
    return z;
}

soma();
document.write('O Resultado eh:'+ soma(x,y));

}
