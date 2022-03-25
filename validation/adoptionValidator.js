const {check, validationResult} = require('express-validator');

 const generateAdoptionValidators = () => [
    check('user_id').notEmpty().isLength({min:10, max:10}).isNumeric().withMessage("Invalid user ID"),
    check('pet_id').notEmpty().isLength({min:10, max:10}).isNumeric().withMessage("Invalid pet ID"),
    check('date').notEmpty().isDate().withMessage("Invalid date"),
]

const generateIdValidators = () => [
    check('id').notEmpty().isNumeric().withMessage("Invalida Id")
]

const updateAdoptionValidators = () => [
    check('id').notEmpty().isNumeric().withMessage("Invalida Id"),
    check('user_id').isLength({min:10, max:10}).isNumeric().withMessage("Invalid user ID"),
    check('pet_id').isLength({min:10, max:10}).isNumeric().withMessage("Invalid pet ID"),
    check('date').isDate().withMessage("Invalid date"),
]

const reporter =(req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()){
        return res.status(404).json({
            "success": false,
            "code": 404,
            "message": errors,
            "data":[]
        });
    }
    next();
}

module.exports = {
    add: [
        generateAdoptionValidators(),
        reporter
    ],
    id: [
        generateIdValidators(),
        reporter
    ],
    update:[
        updateAdoptionValidators(),
        reporter
    ]
};
