const {check, validationResult} = require('express-validator');

const generateAdoptionsValidator =() =>[
    check('id').notEmpty().isLength({max:11}).isNumeric().withMessage("Invalid name hijo de tu madre"),
    check('user_id').notEmpty().isLength({max:11}).isNumeric().withMessage("Invalid user_id"),
    check('pet_id').notEmpty().isLength({min:10, max:10}).isNumeric().withMessage("Invalid pet_id"),
    check('date').notEmpty().isLength({max:150}).isDate().withMessage("Invalid date"),
]

const updateAdoptionslidators = () => [
      check('id').notEmpty().isLength({max:11}).isNumeric().withMessage("Invalid name hijo de tu madre"),
    check('user_id').notEmpty().isLength({max:11}).isNumeric().withMessage("Invalid user_id"),
    check('pet_id').notEmpty().isLength({min:10, max:10}).isNumeric().withMessage("Invalid pet_id"),
    check('date').notEmpty().isLength({max:150}).withMessage("Invalid addres"),
]

const reporter =(req, res, next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(404).json({
            "success" :false,
            "code":404,
            "message":errors,
            "data": []
        });
    }    
    next();
}

module.exports = {
    add: [
        generateAdoptionsValidator(),
        reporter
    ],
    
    update:
    [
        updateAdoptionslidators(),
        reporter
    ]
};
