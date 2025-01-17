const { body } = require('express-validator');

const validateProductInfo = [
    body('name')
        .notEmpty().withMessage('Agrega el nombre del producto').bail() //SI NECESITO UN MÍNIMO DE 2 NO NECESITO VERIFICAR SI EL CAMPO ESTÁ VACÍO O NO
        .isLength({ min: 5}).withMessage('Por lo menos necesito 5 caracteres').bail()
        .isLength({ max: 20}).withMessage('Máximo puedo tener 20 caracteres').bail(),
    body('descripcion')
        .notEmpty().withMessage('Agrega la descripción del producto').bail()
        .isLength({ min: 10}).withMessage('Por lo menos necesito 300 caracteres').bail(),
    body('precio')
        .notEmpty().isCurrency().withMessage('Agrega el precio del producto').bail(),
    body('cantidad')
        .notEmpty().isInt().withMessage('Agrega la cantidad disponible del producto').bail(),
    // body('image').custom((value, { req }) => {
    //     let file = req.file;
    //     // let acceptedExtensions = ['.jpg', '.png', '.gif'];
    //     if (!file) {
    //         throw new Error ('Sube una imagen para este producto')
    //     }
    //     // } else {
        //     let fileExtension = path.extname(file.originalname);
        //     if (!acceptedExtensions.includes(fileExtension)){
        //         throw new Error ('Las extensiones permitidas son .jpg, .png y .gif')
        //     }
        // }
    //     return true
    // })
]

module.exports = validateProductInfo;