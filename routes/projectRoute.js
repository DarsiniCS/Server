// const express=require('express')

// const router=express.Router();

// const Projects=require('../models/projectModel')

// router.get('/all',async(req,res)=>{

//     try {
//         const fetchedprojects = await Projects.find()
//         res.json(fetchedprojects).status(200)
//     } catch (error) {
//         res.json(error).status(500)
        
//     }
// })

// router.post('/add',async(req,res)=>{
//     try {
//         const newprojectdata=await Projects(req.body)
//         const {title,desc}=newprojectdata
//         // if(!title || !desc){
//         //     res.json({message:"Title & desc Required"}).status(500)
//         // }
//         // await Projects.create()
//         // res.json({message:"Added"}).status(201)

//     } catch (error) {
//         res.json(error).status(500)
//     }
// })
// module.exports=router;




const express = require('express')
const router = express.Router();
const Projects = require('../models/projectModel')

router.get('/all', async (req, res) => {
    try {
        const fetchedprojects = await Projects.find()
        res.status(200).json(fetchedprojects)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/add', async (req, res) => {
    try {
        const newprojectdata = new Projects(req.body)
        const { title, desc } = newprojectdata
        if (!title || !desc) {
            res.status(400).json({ message: "Title & Desc Required" })

        }
        const savedata = await newprojectdata.save()
        res.status(201).json(savedata)

    } catch (error) {
        res.status(500).json(error)
    }
})
router.put('/edit/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const currentrecord = await Projects.findOne({ _id: id })
        if (!currentrecord) {
            res.status(404).json({ message: "Project not found !" })
        }
        const updateProject = await Projects.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json(updateProject)
    } catch (error) {
        res.status(500).json(error)
    }
})
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const currentrecord = await Projects.findOne({ _id: id })
        if (!currentrecord) {
            res.status(404).json({ message: "Project not found !" })
        }
        const deleteProject = await Projects.findByIdAndDelete(id)
        res.status(200).json({ message: "Project Deleted !" })
    } catch (e) {
        res.status(500).json(error)
    }
})

module.exports = router
