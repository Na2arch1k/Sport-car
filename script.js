window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  let backToTopBtn = document.getElementById('backToTopBtn')
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backToTopBtn.style.display = 'block'
  } else {
    backToTopBtn.style.display = 'none'
  }
}

// Коли користувач натискає на кнопку, повернутися на початок сторінки
function topFunction() {
  document.body.scrollTop = 0 // Для Safari
  document.documentElement.scrollTop = 0 // Для Chrome, Firefox, IE та Opera
}
