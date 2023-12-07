const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// mi seleziono il container nel DOM
const postsContainer = document.getElementById('container');
// mi ciclo ogni elemento per mostralo in modo dinamico nel DOM, con il template literal per rendere dinamici gli elementi al suo interno. 
//creo l arrow function dato che è una funzione semplice e non necessita di molti calcoli
posts.forEach((post, index) => {
    postsContainer.innerHTML += `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${post.author.image}" alt="${post.author.name}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${post.author.name}</div>
                        <div class="post-meta__time">${post.created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${post.content}</div>
            <div class="post__image">
                <img src="${post.media}" alt="${post.author.name}">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button js-like-button" href="#" data-postid="${post.id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <strong id="like-counter-${post.id}" data-postid="${post.id}" class="js-likes-counter">${post.likes}</strong> persone
                    </div>
                </div> 
            </div>            
        </div>`;
});


// mi seleziono tutti i bottoni per aggiungere l'evento
const likeButtonsList = postsContainer.querySelectorAll('a.like-button.js-like-button');

const likeCountersList = postsContainer.querySelectorAll('strong.js-likes-counter');

// ho l id degli elementi che parte da 1 quindi faccio partire il ciclo for da 1 e aggiungo la classe al bottone cliccato

for (let index = 0; index < likeButtonsList.length; index++) {
// mi creo una nuova variabile del bottone corrente, che si sostiuira a likebuttons
    const currentLikeButton = likeButtonsList[index];
    // creo l evento al click per aggiungere il like
    currentLikeButton.addEventListener('click', function( event ){
        event.preventDefault();
// se contiene la classe like mi toglie la classe
        if (currentLikeButton.classList.contains('like-button--liked')){
            currentLikeButton.classList.remove('like-button--liked');
            // aggiorno il counter, sovrascrivo quello che ha l utente,  decremento
            likeCountersList[index].innerHTML = parseInt(likeCountersList[index].innerHTML) - 1;
        } else {
            // altrimenti metti la classe like
            currentLikeButton.classList.add('like-button--liked');
            // e aggiorna il counter del lelemento index, sovrascrivo quello che ha l utente, incremento
            likeCountersList[index].innerHTML = parseInt(likeCountersList[index].innerHTML) + 1;
        }
    });
}

// ho seguito le indicazioni della correzione, seguendo la registrazione e comprendendo i concetti