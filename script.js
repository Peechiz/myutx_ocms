document.addEventListener("DOMContentLoaded", function(event) {

  let menu = document.querySelector('#hamburger');
  let mobileNav = document.querySelector('#mobileNav');

  menu.addEventListener('click', ()=>{
    menu.classList.toggle('menu-active');
    mobileNav.classList.toggle('hide')

  })

  let chevrons = document.querySelectorAll('.chevron');

  if (chevrons.length){
    chevrons.forEach(chevron => {
      chevron.addEventListener('click', ()=> {
        chevron.classList.toggle('active');

        // don't put any siblings below .accordian_content
        let blockContent = chevron.parentElement.lastElementChild;
        blockContent.classList.toggle('hide')
      })
    })
  }



  // adds current date to <span></span>
  // NOTE: don't use this for production, just a placeholder for date queried from SF on the Update's object
  let date = document.querySelector('.project-update h3 span')
  if (date) {
    const d = new Date();
    date.innerHTML = d.toLocaleDateString();
  }

});
