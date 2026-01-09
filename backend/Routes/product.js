const router = require('express').Router()
const Product = require('../models/product')
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinary');

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'duo-products',
    allowed_formats: ['jpg', 'png', 'jpeg', 'webp'],
  },
});

const upload = multer({ storage });



router.post('/add-product', upload.single('image') ,async(req, res)=>{
    try {
        const newProduct = new Product({
            name : req.body.name,
            description : req.body.description,
            category : req.body.category,
            price : req.body.price,
            image : req.file.path
        })
        await newProduct.save()
        return res.status(200).json({message : 'Produit Ajouté'})
    } catch (error) {
        console.log(error)
        return res.status(400).json({message : 'Erreur interne du serveur'})
        
    }
})

router.get('/get-products', async(req, res)=>{
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (error) {
        console.log(error)
        return res.status(400).json({message : 'Erreur interne du serveur'})
    }
})

module.exports = router