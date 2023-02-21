let rating = 0;

document.querySelectorAll(".bg-rating").forEach((element) =>
  element.addEventListener("click", function (e) {
    rating = e.target.innerText;
    element.classList.toggle("selected");
  
    
  })
);

document.getElementById("submit").addEventListener("click", function () {
  if (rating === 0) {
    alert("Please, give us a rating");
    return;
  }
  document.getElementById("thank-you-container").innerHTML = `
    
    <div class="rating-state-body align-center">
    <div class="thank-you-image"> 
    <img src="./images/illustration-thank-you.svg">
    </div>

    <div class="star"> You selected ${rating} out of 5 </div>

    <h3 class="rating-title">Thank you!</h3>

   <p class="rating-text"> We appreciate you taking the time to give a rating. If you ever need more support,
    don’t hesitate to get in touch!</p>
    </div>

`;
});
