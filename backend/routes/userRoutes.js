import express from 'express'
import {
	loginUser,
	registerUser,
	logoutUser,
	getUserProfile,
	updateUserProfile,
	getUsers,
	getUserByID,
	deleteUser,
	updateUser,
} from '../controllers/userController.js'

const router = express.Router()

router.route('/').post(registerUser).get(getUsers)
router.route('/logout').post(logoutUser)
router.route('/login').post(loginUser)
router.route('/profile').get(getUserProfile).put(updateUserProfile)
router.route('/:id').delete(deleteUser).get(getUserByID).put(updateUser)

export default router
