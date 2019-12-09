'use strict';

function getDogImage(breed){
    const options = {method: 'GET'};
    if(breed === ''){
        fetch
            (`https://dog.ceo/api/breed/hound/images/random`, options)
                .then(response => response.json())
                .then(responseJson => displayResults(responseJson))
                .catch(error => alert ('Please check your internet connection - the servers may be down ;('))
    } else {
        fetch
            (`https://dog.ceo/api/breed/${breed}/images/random`, options)
                .then(response => response.json())
                .then(responseJson => displayResults(responseJson))
                .catch(error => alert ('Please check your internet connection - the servers may be down ;('))
    }
}

function displayResults(responseJson) {
    console.log(responseJson);
    if (responseJson.status === 'error') {
        console.log(responseJson.message);
        $('.data').append(`<p>The breed that you selected can not be located. Please try another breed :)</p>`)
    } else {
        $('.data').append(`<img src="${responseJson.message}" alt='Random Dog Breed' class='img-results'`)
    }
}

function formValue() {
   $('.submit').on('click', function(e){
       let breed = $('#userNum').val();
       e.preventDefault();
       getDogImage(breed);
       $('.data').empty();
   })
}

formValue();