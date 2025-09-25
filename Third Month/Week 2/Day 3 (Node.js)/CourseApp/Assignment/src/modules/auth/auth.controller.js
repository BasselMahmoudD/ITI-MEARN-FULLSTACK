import { SendEmail } from '../../services.js/emailVervication.js';
import User from './../../../Database/models/user/user.model.js';
import jwt from "jsonwebtoken"

export const signin = async (req, res) => {
    try {
        const token = jwt.sign({ id: req.user._id, role: req.user.role }, "UserToken")
        const userObj = req.user.toObject();
        delete userObj.password;
        res.status(200).json({ message: "User logged", User: userObj, token: "Bearer " + token })
    } catch (error) {
        res.status(500).json({ Error: error.message })
    }
}



export const signup = async (req, res) => {
    try {
        const { email } = req.body
        const newUser = new User(req.body);
        const token = jwt.sign({ _id: newUser._id }, "verifyEmail", {
            expiresIn: "1h"
        })
        const verifyPage = `${req.protocol}://${req.headers.host}/auth/verify/${token}`
        const isEmailSent = await SendEmail({
            to: email,
            subject: "Welcome to course App , Verify Your email address",
            htmlMessage: `<a href=${verifyPage}>Please Verify your email address</a>`
        })
        if (isEmailSent.rejected.length) res.status(500).json({ message: "Verification email failed" })
        await newUser.save();
        res.status(201).json({ message: "user created successfully", user: newUser })
    } catch (error) {
        res.status(500).json({ Error: error.message })
    }
}

export const verificationEmail = async (req, res) => {
    try {
        const { token } = req.params
        const data = jwt.verify(token, "verifyEmail")
        const user = await User.findByIdAndUpdate({ _id: data._id, isConfirmed: false }, { isConfirmed: true }, { new: true })
        if (!user) res.status(404).json({ message: "User not found" })
        res.status(200).json({ message: "User verification successfully " })
    } catch (error) {
        res.status(500).json({ Error: error.message })
    }
}