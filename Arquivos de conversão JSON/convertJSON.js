/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function convert(){
    
    var text = '{"employees":[' +
        '{"firstName":"John","lastName":"Doe" },' +
        '{"firstName":"Anna","lastName":"Smith" },' +
        '{"firstName":"Peter","lastName":"Jones" }]}';
    var obj = JSON.parse(text);
    document.getElementById("json").innerHTML = 
            obj.employees[1].firstName + " " + obj.employees[1].lastName;

};

