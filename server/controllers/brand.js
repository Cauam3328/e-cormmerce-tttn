const Brand = require('../models/brand')
const asyncHandler = require('express-async-handler')

const createNewBrand = asyncHandler(async(req, res) => { 
    const response = await Brand.create(req.body)
    return res.json({
        success: response ? true:false,
        createdBrand: response? response:'Cannot create new brand'
    })
 })

 const getBrand = asyncHandler(async(req, res) => { 
    const response = await Brand.find()
    return res.json({
        success: response ? true:false,
        brands: response? response:'Cannot get brand'
    })
 })

 const updateBrand = asyncHandler(async(req, res) => { 
    const {bid} = req.params
    const response = await Brand.findByIdAndUpdate(bid, req.body, {new:true})
    return res.json({
        success: response ? true:false,
        updatedBrand: response? response:'Cannot update new brand'
    })
 })

 const deleteBrand = asyncHandler(async(req, res) => { 
    const {bid} = req.params
    const response = await Brand.findByIdAndDelete(bid)
    return res.json({
        success: response ? true:false,
        deleteBrand: response? response:'Cannot delete brand'
    })
 })

 module.exports = {
    createNewBrand,
    getBrand,
    updateBrand,
    deleteBrand

 }