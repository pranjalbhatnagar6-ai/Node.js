function userDataSubmit(req, resp){
    resp.write(
        `<h1>You can get data from here</h1> `
    )
}

module.exports = userDataSubmit;