const Product = require('../models/product');

exports.getAllProducts = (req, res, next) => {
    Product.find().then(
        (product) => {
            res.status(200).json(product)
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.getOneProduct = (req, res, next) => {
    Product.findOne({
        _id: req.params.id
    }).then(
        (product) => {
            res.status(200).json(product)
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.createProduct = (req, res, next) => {
    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        inStock: req.body.inStock
    });
    product.save()
        .then(
            (product) => {
                res.status(200).json({product});
            }
        ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.modifyProduct = (req, res, next) => {
    const product = new Product({
        _id: req.params.id,
        name: {type: String, required: true},
        description: {type: String, required: true},
        price: {type: Number, required: true},
        inStock: {type: Boolean, required: true}
    });
    Product.updateOne({_id: req.params.id}, product).then(
        () => {
            res.status(200).json({
                message: 'Modified!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.deleteProduct =  (req, res, next) => {
    Product.findOne({_id: req.params.id}).then(
        () => {
            res.status(200).json({
                message: 'Deleted!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};