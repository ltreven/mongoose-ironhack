
function loginUser(name, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({username: "Lourenco"})
        }, 2000)    
    })
}

function getPosts(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({lista: ["Post 1", "Post 2", "Post 3"]})
        }, 1000)
    })
}

function getUserData() {
    console.log("antes de chamar")

    loginUser("ltn", "123")
    .then(user => {
        console.log(user.username)
        return getPosts(user.username)
    })
    .then(posts => {
        posts.lista.forEach(post => {
            console.log(post)
        })
    })
    .catch(err => console.log("algo salió mal"))

    console.log("depois de chamar")

}

getUserData()