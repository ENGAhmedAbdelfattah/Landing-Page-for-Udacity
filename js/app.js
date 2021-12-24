//I called up the Lists container <lu> and recorded it in a variable
var mainUl = document.querySelector('ul');
//I called up the Lists sections (all <section>) and recorded them in a variable
var sections = document.querySelectorAll('section');
//I created DocumentFragment to reduce page load time
var newfrg = document.createDocumentFragment();
//part 1
//I created loop on sections 
sections.forEach(section => {
        newList = document.createElement('li'); //I created element <li> and recorded it in a variable
        mainUl.appendChild(newList); //I entered an element <li> in an element <lu>
        link = document.createElement('a'); //I created element <a> and recorded it in a variable
        const mark = section.getAttribute('data-nav');
        text = document.createTextNode( mark +'|' ); //I created element text ('') and recorded it in a variable
        link.appendChild(text); //I entered an element text in an element <a>
        newList.appendChild(link); //I entered an element <a> in an element <li>
        newfrg.appendChild(newList); //I entered an element <li> in an element DocumentFragment

mainUl.appendChild(newfrg); //I entered an element DocumentFragment in an element <lu> 

link.addEventListener("click", function() {section.scrollIntoView ({behavior:"smooth"})});
  
}); //I created a click event to slide to the section that was clicked

//part 2
//I made the section be displayed on the screen differently to show that state is active
//I created loop on sections 
sections.forEach(section => {
//I created a scroll event to active the section display on the screen
  window.addEventListener("scroll", function() {
    //I used getBoundingClientRect() to know the boundaries of the section
    var Rect = section.getBoundingClientRect();
    //I used if() to compare the border of the section and the border of the window to determine if it is in the window or not
    //and I added "your-active-class" class to show the difference in the style that showed that it is active and visible on the screen
        if(
          Rect.top <= 50 
          && Rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) 
          && Rect.right  <= (window.innerWidth || document.documentElement.clientWidth)
          )
          {section.classList.add("your-active-class"); //add class = your-active-class in html and called .your-active-class{} in syle sheet 
      
          } else {
          section.classList.remove("your-active-class"); //remove class = your-active-class in html and exit the call with .your-active-class{} in syle sheet 
          }; 
  });
});

//end
