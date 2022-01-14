async function get(){
    const response = await fetch("https://restcountries.com/v2/regionalbloc/eu")
    const data = await response.json();
    console.log(data);
    var cardsContainer = document.getElementById("vv");

    var list = []
    for(j=0;j<data.length;j++){
        list.push(data[j])
    }
    console.log(list)
    var random = Math.floor(Math.random()* list.length)
    if(random<0)
    {random=0} 

    for(var i = random; i < random + 31  ; i++){
        var newCard = "";
        newCard += "<div class='card' style='width: 18rem;'>";
        newCard += `<img src="${list[i]["flags"]["png"]}" class="card-img-top" alt="..." style="height: 42%;">`
        newCard += '<ul class="list-group list-group-flush">';
        newCard += `<ul class="list-group-item" style="text-align: center;font-size: 25px;">${list[i]["name"]}</ul>`;
        newCard += `<li class="list-group-item">Capital : <span>${list[i]["capital"]}</span></li>`;
        newCard += `<li class="list-group-item">Region : <span>${list[i]["region"]}</span></li>`;
        newCard += `<li class="list-group-item">Population : <span>${list[i]["population"]}</span></li>`;       
        newCard += '</ul></div>';

        cardsContainer.innerHTML += newCard;
    }
  
}
get();


 
