const btn = document.querySelector(".btn")


const func = () => {
  
  swal("Good job!", "You clicked the button!", "success");
  
}

btn.addEventListener("click", func)
