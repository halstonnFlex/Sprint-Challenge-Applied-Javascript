// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(axiosData=>{
    console.log(axiosData)
    Object.keys(axiosData.data.articles).forEach(subject=>{
        axiosData.data.articles[subject].forEach(attribute=>{
            document.querySelector('.cards-container').append(cardSleeve(attribute));
        console.log(attribute);
        })
    });
})
.catch(error=>{console.log(error);
});
function cardSleeve(props){
    const cardTag=
        document.createElement('div');
    const headlineTag=
        document.createElement('div');
    const authorTag=
        document.createElement('div');
    const imgContainerTag=
        document.createElement('div');
    const imgTag=
        document.createElement('img');
    const authorNameTag=
        document.createElement('span');
    cardTag.append(headlineTag);
    cardTag.append(authorTag);
    authorTag.append(imgContainerTag);
    authorTag.append(authorNameTag);
    imgContainerTag.append(imgTag)
    cardTag.classList.add('card');
    headlineTag.classList.add('headline')
    authorTag.classList.add('author');
    imgContainerTag.classList.add('img-container');
    headlineTag.textContent=props.headline;
    imgTag.src=props.authorPhoto;
    authorNameTag.textContent=props.authorName;
    return cardTag;
};