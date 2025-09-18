const onRegister = () => {
    let firstn = document.getElementById('first').value
    let lastn = document.getElementById('last').value
    let user1name = document.getElementById('username').value
    let pass1word = document.getElementById('password').value
    let pass2word = document.getElementById('confirmPassword').value

    if (pass1word == pass2word) {

        let userDetails = { firstn, lastn, user1name, pass1word }
        userDetails = JSON.stringify(userDetails)
        sessionStorage.setItem('DetailsOfUser', userDetails)

        window.location = 'login.html'

    } else {
        alert("Passwords Not Matched!!!")
    }
}

const onLogin = () => {
    let nameOfUser = document.getElementById('useN').value
    let passwordOfUser = document.getElementById('passW').value

    let data = sessionStorage.getItem('DetailsOfUser')
    data = JSON.parse(data)

    if (nameOfUser == data.user1name && passwordOfUser == data.pass1word) {
        window.location = 'home.html'
    } else {
        alert("Wrong Login Details")
    }
}

let data1 = sessionStorage.getItem('DetailsOfUser')
data1 = JSON.parse(data1)

nameOfUser.innerHTML = `${data1.firstn}`


const colorChange = (value) => {
    let colorIs = document.body.style.backgroundColor = value;
    colorChanged.innerHTML = `The Selected Color is ${colorIs}`
    colorIs = JSON.stringify(colorIs)
    sessionStorage.setItem('colorSelected', colorIs);
}

let colorStored = sessionStorage.getItem('colorSelected');
colorStored = JSON.parse(colorStored)
document.body.style.backgroundColor = colorStored;
colorChanged.innerHTML = `The Selected Color is ${colorStored}`





