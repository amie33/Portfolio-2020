//when the window is refreshed 
window.onload = () => {

    const transitionElement = document.querySelector('.transition');//reference to transitions
    const anchors = document.querySelectorAll('a');//grab all links on the page
   

    setTimeout(() => {
        transitionElement.classList.remove('is-active');
    }, 500); //get the transition div and remove it if present

    //loop through the anchors(links) on the page
    for(let i = 0; i < anchors.length; i++){
        const anchor = anchors[i]; //set anchor to each iteration of a 
        //every time a link is clicked nothing will happen 
        anchor.addEventListener('click', e => {
            e.preventDefault();//wont link you to a different page
            
            let target = e.target.href;//takes you to the link you're supposed to go to and stores it in target.  T

            transitionElement.classList.add('is-active');//adds the overlay on top of page..the default is still being prevented so below we set a timeout for the same amount of time the animation lasts for.  
            setTimeout(()=>{
                window.location.href = target;
            }, 500)   
                    
        });
    }
}

//create a constant for the bubblegum div then use sessionstorage to set the session to true and if it displays more than once it's visibility will be hidden.
const bubbleGum = document.getElementById('bubblegum');//get the bubblegum div
function showBG(){
    //set the sessionStorageitem to true
    sessionStorage.setItem(bubbleGum, true);
    console.log(sessionStorage);
    if(sessionStorage.length > 1){
        bubbleGum.style.display = 'none';
    }
}  
showBG(); 
// if(sessionStorage.bubbleGum = !true){
//     sessionStorage.bubbleGum = true;
//     bubbleGum.style.display = 'block';
// }else{
//     bubbleGum.style.display = 'none';
// }