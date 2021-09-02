function alertOnHome() {
    document.getElementById("home-button").onclick = function() {
        alert('Test');
    }
}

let mainElQuestions = document.querySelector('#main__questions')
let mainElBookmarks = document.querySelector('#main__bookmarks')
let mainElAddQuestion = document.querySelector('#main__create')
let mainElProfile = document.querySelector('#main__profile')

let buttonElHome = document.querySelector('#navbar__home')
let buttonElBookmarks = document.querySelector('#navbar__bookmarks')
let buttonElAddQuestion = document.querySelector('#navbar__add-question')
let buttonElProfile = document.querySelector('#navbar__profile')

let buttonElStart = document.querySelector('.intro__start')


buttonElStart.addEventListener('click', () => {
    window.location.replace('card-start')
  })


buttonElHome.addEventListener('click', () => {
    mainElBookmarks.classList.add('main')
    mainElQuestions.classList.remove('main')
    mainElAddQuestion.classList.add('main')
    mainElProfile.classList.add('main')
    buttonElHome.classList.add('home-button')
    buttonElBookmarks.classList.remove('bookmark-button')
    buttonElAddQuestion.classList.remove('pencil-button')
    buttonElProfile.classList.remove('acount-button')
})

buttonElProfile.addEventListener('click', () => {
    mainElBookmarks.classList.add('main')
    mainElQuestions.classList.add('main')
    mainElAddQuestion.classList.add('main')
    mainElProfile.classList.remove('main')
    buttonElHome.classList.remove('home-button')
    buttonElBookmarks.classList.remove('bookmark-button')
    buttonElAddQuestion.classList.remove('pencil-button')
    buttonElProfile.classList.add('acount-button')
  })

  buttonElAddQuestion.addEventListener('click', () => {
    mainElBookmarks.classList.add('main')
    mainElQuestions.classList.add('main')
    mainElAddQuestion.classList.remove('main')
    mainElProfile.classList.add('main')
    buttonElHome.classList.remove('home-button')
    buttonElBookmarks.classList.remove('bookmark-button')
    buttonElAddQuestion.classList.add('pencil-button')
    buttonElProfile.classList.remove('acount-button')
  })