import express from 'express'
const router = express.Router()

import {getAllUser, createUser, getUserByID, updateUserByID, deleteUserByID} from '../controllers/Users.js'

router.get('/', getAllUser)

router.post('/', createUser) 
router.get('/:id', getUserByID)
router.patch('/:id', updateUserByID)
router.delete('/:id', deleteUserByID)

export default router