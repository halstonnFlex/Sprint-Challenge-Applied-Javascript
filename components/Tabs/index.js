// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(axiosData=>{
    axiosData.data.topics.forEach(obj => {
        const topicTag=
            document.createElement('div');
            topicTag.textContent=`${obj}`;
            topicTag.classList.add('tab');
            topicTag.append('.topics');
            document.querySelector('.topics').append(topicTag);
    });
})
.catch(err=>{
    console.log(err)
})
