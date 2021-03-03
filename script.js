//when the window is refreshed 
window.onload = () => {
    
    const transitionElement = document.querySelector('.transition');//reference to transitions
    const anchors = document.querySelectorAll('a');//grab all links on the page

    setTimeout(() => {
        transitionElement.classList.remove('is-active');
    }, 500); 

    //loop through the anchors(links) on the page
    for(let i = 0; i < anchors.length; i++){
        const anchor = anchors[i];
        anchor.addEventListener('click', e => {
            e.preventDefault();//wont link you to a different page
            let target = e.target.href;//takes you to the link you're supposed to go to 

            transitionElement.classList.add('is-active');//adds the overlay on top of page
            setTimeout(()=>{
                window.location.href = target;
            }, 500)            
        });
    }
}