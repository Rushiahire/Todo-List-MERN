import mongoose from "mongoose"

export const connection = async (req, res) => {
    try {
        await mongoose.connect("mongodb+srv://Rushi:%23Rushi9970@cluster0.yjqtfjf.mongodb.net/")
            .then(() => {
                console.log("Connected")
            })

    } catch (error) {
        console.log("error found", error)

    }
}

