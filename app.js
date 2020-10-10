'use strict';




var headercontent = ['Car Model', 'Model Year', 'Price', 'Manufacturer']

var table = document.getElementById('mytable');
var allcars = [];



if(localStorage.getItem('car')){


   var localStorageData = JSON.parse(localStorage.getItem('car'));

   for( var l = 0; l < localStorageData.length; l++){

var helpingvar = new Car(localStorageData[l].model, localStorageData[l].year, localStorageData[l].manufacturer);

   }
}



function Car(model, year, manufacturer){

this.model = model;
this.year = year;
this.manufacturer = manufacturer;

allcars.push(this);
}



function header(){


    var tr = document.createElement('tr');
    table.appendChild(tr);


    for(var i = 0; i < headercontent.length; i++){


        var td = document.createElement('td');
        td.textContent = headercontent[i];
        tr.appendChild(td);
    }
}

header();



Car.prototype.random = function(min,max){


var randomNumber = Math.floor((Math.random()*(100000-7000+1)+7000) );

return randomNumber
}


Car.prototype.addRow = function(){

    var tr = document.createElement('tr');
    table.appendChild(tr);


    var td1 = document.createElement('td');
        td1.textContent = this.model;
        tr.appendChild(td1);

        var td2 = document.createElement('td');
        td2.textContent = this.year;
        tr.appendChild(td2);

        var td3 = document.createElement('td');
        td3.textContent = this.random();
        tr.appendChild(td3);

        var td4 = document.createElement('td');
        td4.textContent = this.manufacturer;
        tr.appendChild(td4);


}



var form = document.getElementById('myform');
form.addEventListener('submit', addCar);


function addCar(event){
event.preventDefault();


var modeltarget = event.target.model.value;

var yeartarget = event.target.year.value;

var mantarget = event.target.Manufacturer.value;



var addNewCar = new Car(modeltarget, yeartarget, mantarget);


addNewCar.addRow();

localStorage.setItem('car', JSON.stringify(allcars));

}



for (var y = 0; y < allcars.length; y++){

allcars[y].addRow();

}