


function appendMovies(data){
    let data_div = document.getElementById('movietable');

    data_div.innerHTML =null;
   // data_div.id = 'movies';

    data.forEach(function(el){

        let div = document.createElement('div');

        let p_name = document.createElement('p')
        p_name.innerHTML =`Name : ${el.name}`;
    

        let p_rating = document.createElement('p');
        p_rating.innerHTML= `Year: ${el.rating}`;

        let rating = document.createElement('p');
        p_rating.innerHTML= `Year: ${el.rating}`;

        let img = document.createElement('img');
        img.id ='poster';
        img.src =el.poster

        div.append(img,name,p_rating);
        data_div.append(div)
    });