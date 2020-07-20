// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
products = document.getElementsByClassName("product_div")
for (i = 0; i < products.length; i++)
  products[i].addEventListener('click', modal_show);



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
function modal_show() {
  modal.style.display = "block";
  set_content_modal(this)
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function set_content_modal(product_element) {
  document.getElementById('modal_content').innerHTML = product_element.innerHTML

  for (i = 0; i < data.length; i++) {
    if (data[i]['nazov'] == product_element.getElementsByClassName('nazov')[0].innerHTML) {
      document.getElementById('modal_content').getElementsByClassName('popis')[0].innerHTML = data[i]['cely_popis']
    }
  }
  if (document.getElementById('modal_header').getElementsByTagName('h2')[0])
    document.getElementById('modal_header').getElementsByTagName('h2')[0].remove()

  title = document.createElement('h2')
  title.innerHTML = product_element.getElementsByClassName('nazov')[0].innerHTML
  document.getElementById('modal_header').prepend(title)
}
