/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

// axios.get("https://api.github.com/users/lyndsiWilliams")
//     .then((response) => {
//         console.log(response);
//         createComponent(response);
//     })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
axios.get(`https://api.github.com/users/lyndsiWilliams`)
    .then((response) => {
        createComponent(response);
    })

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['ArianaShackelford', 'tygedavis', 'SeeStephSay', 'MatthewCebenka'];

followersArray.forEach(follower => {
    axios.get(`https://api.github.com/users/${follower}`)
        .then((response) => {
            createComponent(response);
        })
})

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/



// Grab parent element
const cards = document.querySelector('.cards');

// // Loop through data
cards.appendChild(createComponent(cards.gitLink));

// Component function

function createComponent(gitLink) {

    // Element definition
    const card = document.createElement('div');
    const img = document.createElement('img');
    const cardInfo = document.createElement('div');
    const H3name = document.createElement('h3');
    const username = document.createElement('p');
    const location = document.createElement('p');
    const profile = document.createElement('p');
    const followers = document.createElement('p');
    const following = document.createElement('p');
    const bio = document.createElement('p');


    // Appending children to their parents
    card.append(img, cardInfo);
    cardInfo.append(H3name, username, location, profile, followers, following, bio);


    // Class names
    card.classList.add('card');
    H3name.classList.add('name');
    username.classList.add('username');


    // Content
    img.src = gitLink.data.avatar_url;
    H3name.textContent = gitLink.data.name;
    username.textContent = gitLink.data.login;
    location.textContent = "Location: " + gitLink.data.location;
    followers.textContent = "Followers: " + gitLink.data.followers
    following.textContent = "Following: " + gitLink.data.following
    bio.textContent = "Bio: " + gitLink.data.bio
    profile.textContent = `Profile: `
    gitLink.href = gitLink.data.html_url;
    gitLink.textContent = gitLink.data.html_url;


    console.log(gitLink)
    document.querySelector('.cards').appendChild(card);

    // Events


    // return card;
}



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/