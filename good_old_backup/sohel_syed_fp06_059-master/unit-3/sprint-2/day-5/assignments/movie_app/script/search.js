

async function searchMovies(){
  //  440dfa43
 // http://www.omdbapi.com/?i=tt3896198&apikey=440dfa43

 let query = document.getElementById('query').value
 
//console.log('query:',query);

try{
    let res = await fetch(`http://www.omdbapi.com/?apikey=440dfa43&s=${query}`);

    let data = await res.json();
   // console.log('data:',data);
    let actual_data = data.Search
 console.log('attdata:',actual_data);
 appendMovies(actual_data);
}catch(err){
    console.log('err:',err);
}
  

}





 function appendMovies(data){
    let data_div = document.getElementById('moviesShow');

    data_div.innerHTML =null;
   // data_div.id = 'movies';

    data.forEach(function(el){

        let div = document.createElement('div');

        let p_name = document.createElement('p')
        p_name.innerHTML =`Name : ${el.Title}`;
    

        let p_rating = document.createElement('p');
        p_rating.innerHTML= `Year: ${el.Year}`;

        let img = document.createElement('img');
        img.id ='poster';
        img.src =el.Poster

        div.append(img,p_name,p_rating);
        data_div.append(div)
    });
}