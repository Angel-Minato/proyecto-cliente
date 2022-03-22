const {check, validationResult} = require('express-validator');

const generateUserValidator =() =>[
    check('name').notEmpty().isLength({max:50}).withMessage("Invalid name hijo de tu madre"),
    check('lastnem').notEmpty().isLength({max:50}).withMessage("Invalid lastname"),
    check('phone').notEmpty().isLength({min:10, max:10}).isNumeric().withMessage("Invalid lastname"),
    check('addres').notEmpty().isLength({max:150}).withMessage("Invalid addres"),
]

const generateidvalidators = () =>[
    check('id').notEmpty().isNumeric().withMessage("Invalid ID hijo de tu madre"),
]

const updateUservalidators = () => [
    check('id').notEmpty().isNumeric().withMessage("Invalid ID hijo de tu madre"),
    check('name').notEmpty().isLength({max:50}).withMessage("Invalid name hijo de tu madre"),
    check('lastnem').notEmpty().isLength({max:50}).withMessage("Invalid lastname"),
    check('phone').notEmpty().isLength({min:10, max:10}).isNumeric().withMessage("Invalid lastname"),
    check('addres').notEmpty().isLength({max:150}).withMessage("Invalid addres"),
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
        generateUserValidator(),
        reporter
    ],
    id:
    [
        generateidvalidators(),
        reporter
    ],
    update:
    [
        updateUservalidators(),
        reporter
    ]
};