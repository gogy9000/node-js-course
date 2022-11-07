const users = [
    {id: 1, name: '2aadasd'},
    {id: 2, name: 'sdfsdf'},
    {id: 3, name: '2aasdfsdfdasd'},
    {id: 4, name: 'sdfsdff'},
]

const getUsers=(req, res) => {
    if (req.params.id) {
        const user=users.find(user => user.id == req.params.id)
        if(user){
           return  res.send(user)
        }
        return res.send('user not found')
    }
    res.send(users)
}

const postUser=(req, res) => {
    const user = req.body
    users.push(user)
    res.send(user)
}

module.exports={
    getUsers,
    postUser
}
