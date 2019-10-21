module.exports = {
    getTheProducts: (req, res, next) => {
        const db = req.app.get('db');
        db.get_all_products().then(product => {
            res.status(200).send(product)
        });
    },
    postTheProducts: (req, res, next) => {
        const db = req.app.get('db');
        const {product, image_url, price} = req.body;
        db.post_products([product, image_url, price]).then(products => {
            res.status(200).send(products);
        });
    },
    deleteTheProducts: (req, res, next) => {
        const db = req.app.get('db');
        const {id} = req.params;
        db.delete_product(id).then(() => {
            res.status(200);
        }).catch( err => {
            res.status(500).send({errorMessage: "Cannot Delete"})
            console.log(err);
        });
    }

}