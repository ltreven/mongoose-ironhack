
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

async function getUserData() {
    console.log("antes de chamar")

    try {
        const user = await loginUser("lou", "123")
        console.log(user.username)
        const posts = await getPosts(user.username)
        posts.lista.forEach(post => {
            console.log(post)
        })
    } catch(err) {
        console.log(err)
    } 

    console.log("depois de chamar")
}

getUserData()