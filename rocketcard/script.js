const background_card = document.querySelector('.card-background')
const button = document.querySelector('button')

button.addEventListener('click', () => {
    const color = '#' + parseInt((Math.random() * 0xFFFFFF))
    .toString(16)
    .padStart(6, '0')

    background_card.style.backgroundColor =  color
})

function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/luizgfalqueto`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            userName.innerHTML = data.name
            userImage.src = data.avatar_url
            // userLogin.innerHTML = data.login
            userFollowers.innerHTML = `${data.followers} followers`
            userFollowing.innerHTML = `${data.following} following`
            userRepositories.innerHTML = `${data.public_repos} repositories`
            userCompany.innerHTML = `${data.company}`
            userLocation.innerHTML = data.location
        })
}

getGitHubProfileInfos()