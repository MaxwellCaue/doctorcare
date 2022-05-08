window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentScetion(home)
  activateMenuAtCurrentScetion(services)
  activateMenuAtCurrentScetion(about)
  activateMenuAtCurrentScetion(contact)
}

function activateMenuAtCurrentScetion(section) {
  const targetLine = scrollY + innerHeight / 2

  //Verificar se a sessão passou da linha
  //quais dados eu vou precisar?
  //offsetTop = da o topo (em nº) da seção ou div etc
  const sectionTop = section.offsetTop
  //altura da seção
  const sectionHeigth = section.offsetHeight

  //o topop da seção chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  //verificar se a base está a baixo da linha alvo
  //quais dados vou precisar?

  //a seção termina onde?
  const sectionEndsAt = sectionTop + sectionHeigth

  //o final da seção passou da linha alvo
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  //limites da seção
  const sectionBoundaris =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaris) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 400) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 900
}).reveal(`
#home,
#home img,
#home stats, 
#services,
#services header,
#services .card
#about,
#about header,
#about .content`)
