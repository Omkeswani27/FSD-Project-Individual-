//nav hide
let navBar =document.querySelectorAll(".nav-link");
let navCollapse =document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    })
})

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar-example');
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });



//counter design
document.addEventListener("DOMContentLoaded",() =>{
    function counter(id,start,end,duration){
        let obj =document.getElementById(id),
        current=start,
        range=end-start,
        increment=end>start ? 1 :-1,
        step=Math.abs(Math.floor(duration / range)),
        timer=setInterval(() => {
            current+=increment
            obj.textContent =current
            if(current == end){
                clearInterval(timer);
            }
        }, step);

    }
    counter("count1",0,820,3000)
    counter("count2",0,363,1000)
    counter("count3",0,43,2000)
    counter("count4",0,57,3000)
})