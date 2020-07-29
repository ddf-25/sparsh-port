// toggle menu for small screens
function toggleMenu()
{
    let toggle= document.getElementById('toggle');
    if(toggle.classList.contains('toggled'))
    {
        toggle.classList.remove('toggled');
        let menuContainer= document.getElementById('menu-container');
        menuContainer.innerHTML= `<img src="images/menu.svg" id="menu" alt="close" onclick="toggleMenu()">`;
    }
    else{
    toggle.classList.add('toggled');
    let navigation= document.getElementById('navigation');
    navigation.classList.add('expand');
    let menuContainer= document.getElementById('menu-container');
    menuContainer.innerHTML= `<img src="images/close.svg" id="menu" alt="close" onclick="toggleMenu()">`;
    }
}


// for slideshow
    let i = 0;
    let slides = document.getElementsByClassName('recent-slideshow');
    showSlide(i);
    i++;
    setInterval(() => {
        if (i != 4) {
            showSlide(i);
            i++;
        }
        else {
            i = 0;
            showSlide(i);
            i++;
        }
    }, 3900);
    function showSlide(index) {
        slides[index].style.display = 'block';
        for (let ind = 0; ind < slides.length; ind++) {
            if (ind != index) {
                slides[ind].style.display = 'none';
            }
        }
    }

//for showing animation only if the content is in viewport
    // get the element to animate
    let dos = document.getElementById('dos');
    let dosHeight = dos.clientHeight;
    let box1 = document.getElementById('box-1');
    let box1Height = box1.clientHeight;
    let box2 = document.getElementById('box-2');
    let box2Height = box2.clientHeight;
    let box3 = document.getElementById('box-3');
    let box3Height = box3.clientHeight;

    // listen for scroll event and call animate function
    document.addEventListener('scroll', animate);
    document.addEventListener('scroll', animate1);
    document.addEventListener('scroll', animate2);
    document.addEventListener('scroll', animate3);

    // check if element is in view
    function inView(element,elementHeight) {
        // get window height
        let windowHeight = window.innerHeight;
        // get number of pixels that the document is scrolled
        let scrollY = window.scrollY || window.pageYOffset;

        // get current scroll position (distance from the top of the page to the bottom of the current viewport)
        let scrollPosition = scrollY + windowHeight;
        // get element position (distance from the top of the page to the bottom of the element)
        let elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;

        // is scroll position greater than element position? (is element in view?)
        if (scrollPosition > elementPosition) {
            return true;
        }

        return false;
    }

    // animate element when it is in view
    function animate() {
        // is element in view?
        if (inView(dos,dosHeight)) {
            // element is in view, add class to element
            let element1= document.getElementById('dos-1');
            let element2= document.getElementById('dos-2');
            element1.classList.add('left-animation');
            element2.classList.add('right-animation');
        }
    }
    function animate1() {
        // is element in view?
        if (inView(box1,box1Height)) {
            // element is in view, add class to element
            box1.classList.add('skew-anim');
        }
    }
    function animate2() {
        // is element in view?
        if (inView(box2,box2Height)) {
            // element is in view, add class to element
            box2.classList.add('skew-anim');
        }
    }
    function animate3() {
        // is element in view?
        if (inView(box3,box3Height)) {
            // element is in view, add class to element
            box3.classList.add('skew-anim');
        }
    }
// for opening gmail in new tab (for message me button)
    function mailto(email, subject, body) {
        var url;
        url = 'mailto:' + email;
        url += '?subject=' + subject;
        url += '&body=' + body;
        window.open(url);
    }