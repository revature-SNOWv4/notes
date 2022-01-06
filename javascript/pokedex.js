var apiURL = 'http://pokeapi.co/api/v2/pokemon/'
document.getElementById('getData').onclick = getData;
function getData (){
    // AJAX
    // Autononmous Javascript and XML
    var userInput = document.getElementById('dataInput').value;

    // 4 steps
    // step 1: create an xml http request object

    // http: hypter text tranfer protocol

    // REST : REPRESENTATIONAL STATE TRANSFER
    // GET, PUT, POST, DELETE, etc

    var xhttp = new XMLHttpRequest();

    //step 2: set a callback function for the readystatechangeevent

    xhttp.onreadystatechange = receiveData;

    // step 3: open the request

    xhttp.open('GET', apiURL + '' + userInput);

    // step 4: send the request

    xhttp.send();

    function receiveData(){
        /*
        0: unsent
        1: opened
        2: headers received
        3: loading
        4: done
        */
       var dataSection = document.getElementById('data');
       dataSection.innerHTML = '';
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                var response = xhttp.responseText;
                response = JSON.parse(response);
                populateData(response);
            }
        }
    }
}
function populateData(response){
    var dataSection = document.getElementById('data');
    var nameTag = document.createElement('h3');
    nameTag.innerHTML = response.name;

    dataSection.appendChild(nameTag);
    console.log(nameTag);

    var abilitiesArray = response.abilities;
    var abilities = document.createElement('ul');

    // var ability is an object ability grabbed from json
    for(var ability of abilitiesArray){
        var abilityLi = document.createElement('li');
        abilityLi.innerHTML = ability.ability.name;
        abilities.appendChild(abilityLi);
    }
    dataSection.innerHTML += 'Abilities<br>';
    dataSection.appendChild(abilities);
    var spritesObject = response.sprites;
    
    // var sprite is an index
    for(var sprite in spritesObject){
        if(spritesObject[sprite]){
            var spriteImg = document.createElement('img');
            spriteImg.src = spritesObject[sprite];
            dataSection.appendChild(spriteImg);
        }
    }

}