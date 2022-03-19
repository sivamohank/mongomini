const express = require('express');
const { addListener } = require('../models/details');
const router = express.Router()
const Details = require('../models/details')

router.get('/', async(req,res) => {
    try{
        const details = await Details.find()
        res.json(details)
    }catch(err){
        res.send('Error ' + err)
    }
});

router.get('/:id', async(req,res) => {
    try{
        const details = await Details.findById(req.params.id)
        res.json(details)
    }catch(err){
        res.send('Error ' + err)
    }
});

router.post('/', async(req,res) => {
    const details = new Details({
        name : req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })
    try{
        const a1 = await details.save()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id', async(req,res) => {
    try{
        const details = await Details.findById(req.params.id)
        details.sub = req.body.sub
        const a1 = await details.save()
    }catch(err){
        res.send('Error')
    }
})

module.exports = router