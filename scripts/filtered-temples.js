
//temples object
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Curitiba Brazil",
    location: "Curitiba, Parana, Brazil",
    dedicated: "2008, June, 1",
    area: 27850,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/ea7e0f39c8e26d163a4dfedfcb1ce5c41d650b5b/full/640%2C/0/default"
  },
  {
    templeName: "Porto Alegre Brazil",
    location: "Porto Alegre, Rio Grande do Sul, Brazil",
    dedicated: "2000, December, 17",
    area: 13325,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/8b7f7031cc837345a3638255f73ad8df9b9ed693/full/500%2C/0/default"
  },
  {
    templeName: "Rio de Janeiro Brazil",
    location: "Rio de Janeiro, Brazil",
    dedicated: "2022, May, 8",
    area: 29966,
    imageUrl:
    "https://www.churchofjesuschrist.org/imgs/001db7326e638032470a02813c9e47191ef74b0e/full/500%2C/0/default"
  },

];

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
})

//variables by selecting with document.querySelector

//get the new information

//set through innerHTML or text...

//variable.addEventListener('click')... if needed

//exemple: windChill.innerHTML = calculateWindChill(temperature, windSpeed);


//event listener for home, small, large, new n old
//use the area and year for the function

const templesDiv = document.querySelector('#filtered-temples');

function oldTem() {
    let oldTem = temples.filter(temple => parseInt(temple.dedicated.split(',')[0], 10) < 1900);
    return oldTem;
}

function newTem() {
    let newTemples = temples.filter(temple => parseInt(temple.dedicated.split(',')[0], 10) > 2000);
    return newTemples;
}

function largeTem() {
    let largeTem = temples.filter(temple => temple.area > 90000);
    return largeTem;
}

function smallTem() {
    let smallTem = temples.filter(temple => temple.area < 10000);
    return smallTem;
}

function displayCard(name, location, dedicated, size, imageLink) {
    return (
            `<div class="temple">
                <h3>${name}</h3>
                <p>Location: ${location}</p>
                <p>Dedicated: ${dedicated}</p>
                <p>Size: ${size}</p>
                <img src=${imageLink} alt=${name} loading="lazy" width="250" height="150"/>
            </div>
            `);
}

function displayAllTemples() {
    let html = '';

    temples.forEach(temple => {
        html += displayCard(
            temple.templeName,
            temple.location,
            temple.dedicated,
            temple.area,
            temple.imageUrl
        );
    });

    templesDiv.innerHTML = html;
}

function displayTemplesArray(array) {
    let html = '';
     
    array.forEach(temple => {
        html += displayCard(
            temple.templeName,
            temple.location,
            temple.dedicated,
            temple.area,
            temple.imageUrl
        );
    });

    templesDiv.innerHTML = html;
}

// At the bottom of your script:
document.addEventListener('DOMContentLoaded', function() {
    // Check if this is the homepage
    if (window.location.pathname.endsWith('/') || 
        window.location.pathname.endsWith('/index.html') ||
        window.location.pathname.endsWith('/filtered-temples.html')) {
        displayAllTemples();
    }
});

const old = document.querySelector('#old');
const newt = document.querySelector('#new');
const large = document.querySelector('#large');
const small = document.querySelector('#small');

const home = document.querySelector('#home');


old.addEventListener('click', () => {
    displayTemplesArray(oldTem());
});

newt.addEventListener('click', () => {
    displayTemplesArray(newTem());
});

large.addEventListener('click', () => {
    displayTemplesArray(largeTem());
});

small.addEventListener('click', () => {
    displayTemplesArray(smallTem());
});

home.addEventListener('click', () => {
    displayAllTemples();
});