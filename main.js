"use strict"

function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
    html += '<td>' + coffee.name + '</td>';
    html += '<td>' + coffee.roast + '</td>';
    html += '</tr>';
    return html;
} // function to arrange values for tables.

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
} // function to gather html data from renderCoffee function and add it to html as a string.

function updateCoffees(finalRoast) { // edited for new navbar listening and specs
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
// var submitButton = document.querySelector('.menu-item');
// var roastSelection = document.querySelector('#roast-selection');

sortArray(coffees);

function sortArray (coffees) {
// sort by value
    coffees.sort(function (a, b) {
        return b.id - a.id;
    });
    tbody.innerHTML = renderCoffees(coffees);
}

// submitButton.addEventListener('click', updateCoffees);

//menu-bar dropdown logic
var selectingCoffee = document.getElementsByClassName('roast');
selectingCoffee = Array.from(selectingCoffee);
selectingCoffee.forEach(function (element) {
    element.addEventListener('click', function() {
        var selection = element.innerText;
        var finalRoast = selection.toLowerCase();
        // console.log(finalRoast);  //needed to lowercase since updateCoffees() function was comparing this value to the name of the "roast" value, and that is in lower case.
        updateCoffees(finalRoast);
        // when user clicks all on table, this calls function renderCoffees and displays it.
        if (finalRoast === "all" ){
            // tbody.innerHTML = renderCoffees(coffees);
            sortArray(coffees);
        }
    });
});

// select what is placed on the DOM
function sortByFirstLetter() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        // if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        if (a.innerHTML.toUpperCase().charAt(0).includes(filter)) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function sortByFirstLetter2() {
    var input, filter, ul, li, a, i;
    input = document.getElementsByClassName("inputBox");
    filter = input[0].value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().charAt(0).includes(filter)) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

populateList();

function populateList () {
    var sortedArray = coffees.sort(function (a, b) {return a.id - b.id;});
    for (var i = 0; i <= sortedArray.length; i += 1) {
        var list = document.getElementById('myUL');
        list.innerHTML += renderCoffeeList(coffees[i]);
    }
}

function renderCoffeeList (coffee) {
    var html = '<li>' + '<a' + ' href="#">' + coffee.name + ' (' + coffee.roast + ')' + '</a>' + '</li>';
    return html;
    console.log(html);
}

function listCoffees (coffee) {
    var html = '<li>' + '<a' + ' href="#">' + coffee[0].name + ' (' + coffee[0].roast + ')' + '</a>' + '</li>';
    return html;
}
