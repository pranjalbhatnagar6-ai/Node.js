function userform(req, resp){
    resp.write(
    `
    <form action="/submit" method="post">
    <h1>Sending html file</h1>
    <h2>Register</h2>
    <h3>User name</h3>
    <input type="text" name="" id="">
    <br>
    <h3>Password</h3>
    <input type="password" name="" id="">
    <br>
    <button>SUBMIT</button>
    </form>`
    )
}

module.exports = userform;