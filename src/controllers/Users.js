import { v4 as uuidv4 } from 'uuid';

let Users = []

export const getAllUser = (req, res) => {
    res.send(Users)
}

export const createUser = (req, res) => {
    let userItems = req.body
    res.send("posted")
    Users.push({ ...userItems, id: uuidv4() })
}

export const getUserByID = (req, res) => {
    const { id } = req.params

    const getUser = Users.find((user) => user.id === id)
    res.send(getUser)
}

export const updateUserByID = (req, res) => {
    const { id } = req.params
    const { name, age } = req.body
    const updateUser = Users.find((user) => user.id === id)

    if (name) updateUser.name = name

    if (age) updateUser.age = age

    res.send("updated successfully")
}

export const deleteUserByID = (req, res) => {
    const { id } = req.params
    const removeUser = Users.find((user) => user.id)
    const removedUser = Users.splice(0, removeUser.id == id)
    res.send(removedUser)
}