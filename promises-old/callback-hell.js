
function loginUser(name, password, callback) {
    setTimeout(() => {
        callback({username: "Lourenco"})
    }, 1000)
}

function getPosts(username, callback) {
    setTimeout(() => {
        callback({lista: ["Post 1", "Post 2", "Post 3"]})
    }, 1000)
}

function getUserData() {
    console.log("antes de chamar")
    loginUser("ltn", "123", user => {
        console.log(user.username)
        getPosts(user.username, posts => {
            posts.lista.forEach(post => {
                console.log(post)
            })
        })
    })
    console.log("depois de chamar")

    //return new Promise((resolve, reject))
}

getUserData()