load()
document.getElementById('input_search').addEventListener('input', search)

function search(){
    all_products = document.getElementById('div_all_results').children

    search_expression = document.getElementById('input_search').value

    for (i=0; i < all_products.length; i++){

        if (all_products[i].getAttribute('name').toLowerCase().includes(search_expression.toLowerCase()) || 
        all_products[i].getElementsByClassName('os')[0].innerHTML.toLowerCase().includes(search_expression.toLowerCase())){
            all_products[i].removeAttribute('hidden')
        }
        else{
            all_products[i].setAttribute('hidden',true)
        }
    }
}

function load(){

    for (i=0; i<data.length; i++){
        product_div = document.createElement('div')
        product_div.setAttribute("name", data[i]['nazov'])
        product_div.setAttribute('class', 'product_div')

        image = document.createElement('img')
        image.setAttribute('src', data[i]['img'])
        image.setAttribute('alt', data[i]['alt'])

        nazov = document.createElement('p')
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

        // procesor = document.createElement('p')
        // procesor.setAttribute('class', 'procesor')
        // procesor.innerHTML = '<b>Procesor: </b>' + data[i]['procesor']

        product_div.append(image, nazov, popis, os, display)
        document.getElementById('div_all_results').append(product_div)
    }
}