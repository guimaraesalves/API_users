import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import userUpdatePasswordService from "../../services/user/userUpdatePassword.service";

const userUpdatePasswordController =  async (req: Request, res: Response) => {
    try {
        const email = req.userEmail

        const {password} = req.body

        if(!password) {
            throw new Error("No password informed.")
        }

        const user = await userUpdatePasswordService(email, password)

        return res.status(201).json({message: "Password updated!"})

    } catch (err) {
        if (err instanceof AppError) {
            handleError(err, res)
        }
    }
};

export default userUpdatePasswordController;