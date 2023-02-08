let getUser = JSON.parse(localStorage.getItem("user"))
let getRepos = JSON.parse(localStorage.getItem("repos"))

let divWrapper = document.querySelector('.div_wrapper')
let repos = document.querySelector('ul')
let emailUser = document.querySelector('.email')
let changeUser = document.querySelector('.back_to_home')

getRepos.forEach(element => {
    let reposRendered = renderRepos(element)
    repos.appendChild(reposRendered)
})

let currentUser = getUser.slice(-1)

currentUser.forEach(element => {
    let headerRendered = renderHeader(element)
    divWrapper.appendChild(headerRendered)

    let emailCurrentUser = email(element)
    emailUser.appendChild(emailCurrentUser)
})

function renderHeader (element){
    let div1 = document.createElement('div')
    let img = document.createElement('img')
    let div2 = document.createElement('div')
    let h1 = document.createElement('h1')
    let p = document.createElement('p')

    div1.classList = 'img_div2'
    div2.classList = 'name_bio'

    let avatar = element.avatar_url
    let name = element.name
    let bio = element.bio
    


    img.src = `${avatar}`
    h1.innerText = `${name}`
    p.innerText = `${bio}`
    

    div2.append(h1, p)
    div1.append(img, div2)

    return div1
}

function renderRepos(element){
    let li = document.createElement('li')
    let h2 = document.createElement('h2')
    let p2 = document.createElement('p')
    let div2 = document.createElement('div')
    let button = document.createElement('button')
    let button2 = document.createElement('button')

    let repoName = element.name
    let repoUrl = element.html_url

    div2.classList = 'demo_repo'
    button2.classList = 'demo'

    h2.innerText = `${repoName}`
    p2.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe itaque dolorum sequi? Aliquam doloribus facere ratione nihil placeat quia sapiente velit, assumenda quaerat, quasi, iure voluptates obcaecati molestiae ipsam sed.`
    button.innerHTML = `<a href="${repoUrl}" target="_blank">Repositório</a>`
    button2.innerText = 'Demo'

    div2.append(button, button2)
    li.append(h2, p2, div2)

    return li
}

function email (element){
    let buttonEmail = document.createElement('button')
    
    let email = element.email
    if(email === null){
        email = 'Email'
    }
   
    buttonEmail.innerText = `${email}`

    return buttonEmail
}

changeUser.addEventListener("click", function(event){
    window.location.replace('../../index.html')
})