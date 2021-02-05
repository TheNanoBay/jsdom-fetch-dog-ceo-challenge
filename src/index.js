console.log('%c HI', 'color: firebrick')

loadImages();

function loadImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
      .then(response=> response.json())
      .then(json => {
        json.message.forEach(image => addImage(image))
      });
  }
  
  function addImage(dogPicUrl) {
    let container = document.querySelector('#dog-image-container');
    let newImageEl = document.createElement('img');
    newImageEl.src = dogPicUrl;
    container.appendChild(newImageEl);
  }


  function loadBreeds(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch (breedUrl)
    .then(resp => resp.json())
    .then(json => {
        joson.message.forEach(breed => addBreed(breed))
    });
  }

  function addBreed(){
       
  }



  

