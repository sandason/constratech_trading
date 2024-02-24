

  const menuBtn = document.querySelector('.hamburger');
  const mobile_menu = document.querySelector('.mobile-nav')

  menuBtn.addEventListener('click', () =>{
    menuBtn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
  });

document.querySelectorAll(".nav__link").forEach(n => n.
addEventListener("click", ()=>{
  menuBtn.classList.remove("is-active");
  mobile_menu.classList.remove("is-active");
})
)


const filterContainer = document.querySelector(".gallery-filter"),
 galleryItems = document.querySelectorAll(".photo");

 filterContainer.addEventListener("click", (event) =>{
   if(event.target.classList.contains("filter-item")){
   	 // deactivate existing active 'filter-item'
   	 filterContainer.querySelector(".active").classList.remove("active");
   	 // activate new 'filter-item'
   	 event.target.classList.add("active");
   	 const filterValue = event.target.getAttribute("data-filter");
   	 galleryItems.forEach((item) =>{
       if(item.classList.contains(filterValue) || filterValue === 'all'){
       	item.classList.remove("hide");
       	 item.classList.add("show");
       }
       else{
       	item.classList.remove("show");
       	item.classList.add("hide");
       }
   	 });
   }
 });
 
 
