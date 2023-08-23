const navToggle = document.querySelector('.nav-toggle')
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open')
})

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open')
  })
})

// Get the modal
const modal = document.getElementById('modal01')

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img = document.getElementById('portfolio-01')
const modalImg = document.getElementById('img01')
img.onclick = function () {
  modal.style.display = 'grid'
  modalImg.src = this.src
}

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0]

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none'
  modal02.style.display = 'none'
}

// Get the modal
const modal02 = document.getElementById('modal02')

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img02 = document.getElementById('portfolio-02')
const modalImg02 = document.getElementById('img01')
img02.onclick = function () {
  modal02.style.display = 'grid'
}

// Get the <span> element that closes the modal
const span02 = document.getElementsByClassName('close')[1]

// When the user clicks on <span> (x), close the modal
span02.onclick = function () {
  modal02.style.display = 'none'
}

// Get the modal
const modal03 = document.getElementById('modal03')

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img03 = document.getElementById('portfolio-03')
const modalImg03 = document.getElementById('img01')
img03.onclick = function () {
  modal03.style.display = 'grid'
}

// Get the <span> element that closes the modal
const span03 = document.getElementsByClassName('close')[2]

// When the user clicks on <span> (x), close the modal
span03.onclick = function () {
  modal03.style.display = 'none'
}

// Get the modal
const modal04 = document.getElementById('modal04')

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img04 = document.getElementById('portfolio-04')
const modalImg04 = document.getElementById('img01')
img04.onclick = function () {
  modal04.style.display = 'grid'
}

// Get the <span> element that closes the modal
const span04 = document.getElementsByClassName('close')[3]

// When the user clicks on <span> (x), close the modal
span04.onclick = function () {
  modal04.style.display = 'none'
}

// Get the modal
const modal05 = document.getElementById('modal05')

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img05 = document.getElementById('portfolio-05')
const modalImg05 = document.getElementById('img01')
img05.onclick = function () {
  modal05.style.display = 'grid'
}

// Get the <span> element that closes the modal
const span05 = document.getElementsByClassName('close')[4]

// When the user clicks on <span> (x), close the modal
span05.onclick = function () {
  modal05.style.display = 'none'
}

// Get the modal 06
const modal06 = document.getElementById('modal06')

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img06 = document.getElementById('portfolio-06')
const modalImg06 = document.getElementById('img01')
img06.onclick = function () {
  modal06.style.display = 'grid'
}

// Get the <span> element that closes the modal
const span06 = document.getElementsByClassName('close')[5]

// When the user clicks on <span> (x), close the modal
span06.onclick = function () {
  modal06.style.display = 'none'
}

// Get the modal 07
const modal07 = document.getElementById('modal07')

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img07 = document.getElementById('portfolio-07')
const modalImg07 = document.getElementById('img01')
img07.onclick = function () {
  modal07.style.display = 'grid'
}

// Get the <span> element that closes the modal
const span07 = document.getElementsByClassName('close')[6]

// When the user clicks on <span> (x), close the modal
span07.onclick = function () {
  modal07.style.display = 'none'
}

// Get the modal 08
const modal08 = document.getElementById('modal08')

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img08 = document.getElementById('portfolio-08')
const modalImg08 = document.getElementById('img01')
img08.onclick = function () {
  modal08.style.display = 'grid'
}

// Get the <span> element that closes the modal
const span08 = document.getElementsByClassName('close')[7]

// When the user clicks on <span> (x), close the modal
span08.onclick = function () {
  modal08.style.display = 'none'
}

// Get the modal
const modal09 = document.getElementById('modal09')

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img09 = document.getElementById('portfolio-09')
const modalImg09 = document.getElementById('img01')
img09.onclick = function () {
  modal09.style.display = 'grid'
}

// Get the <span> element that closes the modal
const span09 = document.getElementsByClassName('close')[8]

// When the user clicks on <span> (x), close the modal
span09.onclick = function () {
  modal09.style.display = 'none'
}
