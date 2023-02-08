/* Desenvolva sua lógica aqui...*/
let input = document.querySelector('#search')
let form = document.querySelector('form')
let body = document.querySelector("body")

form.addEventListener("submit", function(event){
    event.preventDefault()
    let value = input.value
    
    async function api(){
        localStorage.removeItem("repos")

        const data = await fetch(`https://api.github.com/users/${value}`)
        if(data.status === 200){
            const dataJson = await data.json()
            dataBase.push(dataJson)
            let storage = JSON.stringify(dataBase)

            const dataRepos = await fetch(`https://api.github.com/users/${value}/repos`)
            const dataJsonRepos = await dataRepos.json()
            let storageRepos = JSON.stringify(dataJsonRepos)
    
            localStorage.setItem("user", storage)
            
            localStorage.setItem("repos", storageRepos) 

            window.location.replace('./pages/profile/index.html')
        }else {
            modalError()
        }
        
    }
    api()
    
})

let recentUsers = document.querySelector('.recent_view')
let getRecentUSer = JSON.parse(localStorage.getItem("user"))
getRecentUSer.forEach(element => {
    let recentUser = recentViewed(element)
    recentUsers.appendChild(recentUser)
});

function recentViewed (element){ 
    let img = document.createElement('img')
    let imgRecentUser = element.avatar_url

    img.src = `${imgRecentUser}`

    img.addEventListener("click", function(event){
     
    })

    return img
}

function modalError (){
    let modalWrapper = document.createElement('div')
    let modal = document.createElement('div')
    let modalMessage = document.createElement('h1')
    let closeModal= document.createElement('p')

    let message = 'Error 404, user not found'

    modalWrapper.classList = 'modal_wrapper'
    modal.classList = 'modal'

    modalMessage.innerText = message
    closeModal.innerText = 'X'

    closeModal.addEventListener('click', function(event){
        modalWrapper.classList = 'hide_modal'
    })

    modal.append(message, closeModal)
    modalWrapper.append(modal)
    body.append(modalWrapper)
}
