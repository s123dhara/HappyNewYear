const text = document.querySelector('.text h1')
const container = document.querySelector('.main')
const button = document.querySelector('.button-container button')
const year_container = document.querySelector('.year-container')
const y1 = document.querySelector('.year-container .y1')
const y2 = document.querySelector('.year-container .y2')
const y3 = document.querySelector('.year-container .y3')
const y4 = document.querySelector('.year-container .y4')
const wish = document.querySelector('.text-container p')

function change()
{
    text.innerHTML = "HAPPY NEW YEAR"
    container.style.height = '400px'
    container.style.backgroundColor = '#ffffff7c'
    // container.style.transition = '0.5s ease-in-out'
    button.style.display = 'none';
    y1.innerHTML = "2"
    y2.innerHTML = "0"
    y3.innerHTML = "2"
    y4.innerHTML = "4"
    wish.innerHTML = "Best Wishes from Supriyo Dhara"
    wish.style.color = "#950fee"
    y1.style.color = "rgb(250, 250, 0)"
    y2.style.color = "orange"
    y3.style.color = "rgb(44, 44, 160)"
    y4.style.color = "greenyellow"
}

