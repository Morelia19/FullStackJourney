import { PrismaClient } from "@prisma/client"

const authorClient = new PrismaClient().author;

//get all authors
    export const getAllAuthors = async (req, res) => {
        try {
            const allAuthors = await authorClient.findMany({
                include: {
                    book: true
                }
            })
            res.status(200).json({ data: allAuthors })

        } catch (e){
            console.log(e)
        }
    }

//get author by id
export const getAuthorById = async (req, res) => {
    try {
        const authorId = req.params.id
        const author = await authorClient.findUnique({
            where:{
                id: authorId
            },
            include: {
                book: true
            }
        })
        res.status(200).json({ data: author })

    } catch (e){
        console.log(e)
    }
}

//create author

export const createAuthor = async (req, res) => {
    try {
        const authorData= req.body
        const author = await authorClient.create({
            data:authorData
        })
        res.status(201).json({ data: author })

    } catch (e){
        console.log(e)
    }
}

//update author

export const updateAuthor = async (req, res) => {
    try {
        const authorId = req.params.id
        const authorData= req.body

        const author = await authorClient.update({
            where:{
                id: authorId
            },
            data: authorData
        })
        res.status(200).json({ data: author })

    } catch (e){
        console.log(e)
    }
}
//delete author

export const deleteAuthor = async (req, res) => {
    try {
        const authorId = req.params.id
        const author = await authorClient.delete({
            where: {
                id: authorId
            }
        })
        res.status(200).json({})

    } catch (e){
        console.log(e)
    }
}