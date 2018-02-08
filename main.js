"use strict"

function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
    html += '<td>' + coffee.id + '</td>';
    html += '<td>' + coffee.name + '</td>';
    html += '<td>' + coffee.roast + '</td>';
    html += '</tr>';
    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    // console.log(html)
    return html;
}

function updateCoffees(finalRoast) {
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === finalRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('.menu-item');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);

//menu-bar dropdown logic
var selectingCoffee = document.getElementsByClassName('roast');
selectingCoffee = Array.from(selectingCoffee);
selectingCoffee.forEach(function (element) {
    element.addEventListener('click', function() {
        var selection = element.innerText;
        var finalRoast = selection.toLowerCase();
        updateCoffees(finalRoast);
        // when user clicks all on table, this calls function renderCoffees and displays it.
        if (finalRoast === "all" ){
            tbody.innerHTML = renderCoffees(coffees);
        }
    });
});

// select what is placed on the DOM
function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    console.log(filter);
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        console.log(a);
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}

populateList();

function populateList () {
    for (var i = 1; i < coffees.length; i += 1) {
        var list = document.getElementById('myUL');
        list.innerHTML += renderCoffeeList(coffees[i]);
    }
}

function renderCoffeeList (coffee) {
    var html = '<li>' + '<a' + ' href="#">' + coffee.name + ' (' + coffee.roast + ')' + '</a>' + '</li>';
    return html;
}

function listCoffees (coffee) {
    var html = '<li>' + '<a' + ' href="#">' + coffee[0].name + ' (' + coffee[0].roast + ')' + '</a>' + '</li>';
    return html;
}


// function unusedCode() {
//
// list.forEach(function(element) {
//     list.innerHTML += listCoffees(coffees);
//     console.log(coffees);
//     element.addEventListener('keypress', function () {
//         var input, filter;
//             input = document.getElementById("myInput");
//             filter = input.value.toUpperCase();
//         if (element.name.includes(filter) == true) {
//             // console.log(element.name);
//             // displayCoffees.push(element);
//         }
//
//     })
//     // if (coffee.name.includes(filter) == true) {
//     //     console.log(coffee.name);
//     //     filteredCoffees.push(coffee);
//     // }
// });
    // attempt to catch input from user and console log it.
// var list = document.getElementById('myInput');

// var list = document.querySelector('#myInput')[0].value;
// var list = document.querySelector('#myInput').value;
// // console.log(list);
// list = Array.from(list);
// coffees.forEach(function(list){
//     list.addEventListener('keypress', function () {
//         // var filter = list.value.toUpperCase();
//         // console.log("value of input is " + filter);
//         console.log(element);
//     });
// });

// function myFunction() {
//     var input, filter, ul, item;
//     input = document.getElementById("myInput"); //input
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myUL"); //
//     item = document.getElementById(input.value);
//
//     coffees.forEach(function(coffee) {
//         // coffee.addEventListener()
//         if (coffee.name.includes(filter)) {
//             // input.removeChild(input.childNodes[0]);
//             console.log(coffee.name);
//             ul.removeChild(item);
//         }
//     });
//
//     // var list = document.getElementById('myUL');
//     // list.innerHTML += listCoffees(filteredCoffees);
//     // renderCoffees(coffees)
// }
// }
