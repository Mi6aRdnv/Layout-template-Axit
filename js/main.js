document.querySelectorAll(".tabs-triggers__item").forEach((item) =>
  item.addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.target.getAttribute("href").replace("#", "");

    document
      .querySelectorAll(".tabs-triggers__item")
      .forEach((child) =>
        child.classList.remove("tabs-triggers__item--active")
      );

    document
      .querySelectorAll(".tabs-content__item")
      .forEach((child) => child.classList.remove("tabs-content__item--active"));
    item.classList.add("tabs-triggers__item--active");
    document.getElementById(id).classList.add("tabs-content__item--active");
  })
);
document.querySelector(".tabs-triggers__item").click();



let cards = document.querySelectorAll('.pricing-card');
let selfCard = document.querySelectorAll('.card-top');
for(let i=0; i < cards.length; i++){
    let hover = cards[i];
    let selfHover = selfCard[i];
    if(!(i == 1)){
        hover.onmouseenter = function () {
            selfHover.classList.add('zero');
            selfCard[1].classList.remove('zero');
        }
        
        hover.onmouseleave = function () {
            selfHover.classList.remove('zero');
            selfCard[1].classList.add('zero');
        }
    }
    
}
