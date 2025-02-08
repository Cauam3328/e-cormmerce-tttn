const BlogCategory = require('../models/blogCategory')
const asyncHandler = require('express-async-handler')

const createCategory = asyncHandler(async(req, res) => { 
    const response = await BlogCategory.create(req.body)
    return res.json({
        success: response ? true:false,
        createCategory: response? response:'Cannot create new blog-category'
    })
 })

 const getCategories = asyncHandler(async(req, res) => { 
    const response = await BlogCategory.find().select('title _id')
    return res.json({
        success: response ? true:false,
        blogCategory: response? response:'Cannot get new blog-category'
    })
 })

 const updateCategories = asyncHandler(async(req, res) => { 
    const {bcid} = req.params
    const response = await BlogCategory.findByIdAndUpdate(bcid, req.body, {new:true})
    return res.json({
        success: response ? true:false,
        blogCategory: response? response:'Cannot update new blog-category'
    })
 })

 const deleteCategory = asyncHandler(async(req, res) => { 
    const {bcid} = req.params
    const response = await BlogCategory.findByIdAndDelete(bcid)
    return res.json({
        success: response ? true:false,
        blogCategory: response? response:'Cannot delete new blog-category'
    })
 })

 module.exports = {
    createCategory,
    getCategories,
    updateCategories,
    deleteCategory
 }