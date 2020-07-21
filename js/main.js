load()
responsive_menu()
document.getElementById('input_search').addEventListener('input', search)
document.getElementById('button_menu').addEventListener('click', openNav)
window.addEventListener('resize', responsive_menu)

function search() {
    all_products = document.getElementById('div_all_results').children

    search_expression = document.getElementById('input_search').value

    for (i = 0; i < all_products.length; i++) {

        if (all_products[i].getAttribute('name').toLowerCase().includes(search_expression.toLowerCase()) ||
            all_products[i].getElementsByClassName('os')[0].innerHTML.toLowerCase().includes(search_expression.toLowerCase())) {
            all_products[i].removeAttribute('hidden')
        }
        else {
            all_products[i].setAttribute('hidden', true)
        }
    }
}

function load() {

    for (i = 0; i < data.length; i++) {
        product_div = document.createElement('div')
        product_div.setAttribute("name", data[i]['nazov'])
        product_div.setAttribute('class', 'product_div')

        image = document.createElement('img')
        image.setAttribute('src', data[i]['img'])
        image.setAttribute('alt', data[i]['alt'])

        nazov = document.createElement('h5')
        nazov.setAttribute('class', 'nazov')
        nazov.innerHTML = data[i]['nazov']

        popis = document.createElement('p')
        popis.setAttribute('class', 'popis')
        popis.innerHTML = '<b>Popis: </b>' + data[i]['popis']

        os = document.createElement('p')
        os.setAttribute('class', 'os')
        os.innerHTML = '<b>OS: </b>' + data[i]['os']

        display = document.createElement('p')
        display.setAttribute('class', 'display')
        display.innerHTML = '<b>Display: </b>' + data[i]['display']

        product_div.append(image, nazov, popis, os, display)
        document.getElementById('div_all_results').append(product_div)
    }
}


function openNav() {
    if (parseInt(document.getElementById("nav").style.height) > 0)
        document.getElementById("nav").style.height = "0px";
    else
        document.getElementById("nav").style.height = "470px";
}

function responsive_menu() {
    if (document.documentElement.clientWidth > 750) {
        document.getElementById('button_menu').hidden = true
        document.getElementById('nav').removeAttribute('class')
        document.getElementById('nav').style.height = '0px'
        document.getElementById('nav_content').removeAttribute('class')
    }
    else {
        document.getElementById('button_menu').removeAttribute('hidden')
        document.getElementById('nav').setAttribute('class', 'overlay')
        document.getElementById('nav_content').setAttribute('class', 'overlay-content')
    }
}