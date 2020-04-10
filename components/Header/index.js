// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const headerTag=
        document.createElement('div');
    const dateTag=
        document.createElement('span');
    const titleTag=
        document.createElement('h1');
    const tempTag=
        document.createElement('div');
    //^creating elements
    dateTag.textContent='SMARCH 28, 2019';
    titleTag.textContent='Lambda Times';
    tempTag.textContent='98°';
    //^setting content
    headerTag.classList.add('header');
    dateTag.classList.add('date');
    tempTag.classList.add('temp');
    //^applying class names
    headerTag.append(dateTag);
    headerTag.append(titleTag);
    headerTag.append(tempTag);
    return headerTag;
}
document.querySelector('.header-container').append(Header());