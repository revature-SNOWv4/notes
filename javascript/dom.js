//grab the span we will modify
var helloSpan = document.getElementById('hello');
//grab the button
var clickMeButton = document.getElementById('clickMe');
//define the function that runs on event onclick
clickMeButton.onclick = changeHelloSpan;

function changeHelloSpan() {
    
    // Generates a random font size.
    var randomSize = (Math.floor(Math.random() * 30)) + 10;
    //Math.random just gives a random decimal between 0 and 1

    // Generates a random hexcode color color.
    var hexcode = '#';
    for (var i = 0; i < 6; i++) {
        var letterOrNumber = Math.floor(Math.random() * 2);
        if (letterOrNumber === 0)
            hexcode += '' + Math.floor(Math.random() * 10);
        else {
            hexcode += '' + String.fromCharCode(Math.floor(Math.random() * 6) + 65);
        }
    }

    // Generates a "random" message.
    var message = '';
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            message = 'Hello world!';
            break;
        case 1:
            message = 'Revature';
            break;
        case 2:
            message = 'JavaScript is great!';
            break;
    }

    // Sets the span's color and size to the randomized values.
    helloSpan.style = 'color:' + hexcode + ';font-size:' + randomSize;
    // Sets the span's text to the random message.
    // helloSpan.innerHTML = message;
    helloSpan.innerHTML = `<strong>
        ${message}!
    </strong>`;
    
   helloSpan.innerHTML = `Revature??`;
}

var createTableButton = document.getElementById('tableButton');
var tableDiv = document.getElementById('tableDiv');
createTableButton.onclick = createTable;

function createTable() {

    createTableButton.removeEventListener('click', createTable);

    var table = document.createElement('table');
    var rows = 5;
    var cols = 7;

    for(let i = 0; i < rows; i++){
        var tr = document.createElement('tr');
        for(var j = 0; j < cols; j++){
            if(i===0){
                td = document.createElement('th');
            }else{
                td = document.createElement('td');
            }
            td.innerHTML = j;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    tableDiv.appendChild(table);
}

var showTextButton = document.getElementById('clickMe2');
var inputBox = document.getElementById('textInput');
var text = document.getElementById('myText');
showTextButton.onclick = showText;

function showText(){
    text.innerHTML = inputBox.value;
}