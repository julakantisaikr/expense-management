const express = require('express');
const router = express.Router();
const {createAmount, updateAccountController, getAccount, getallAccounts, deleteAccount,getBalance} = require("../controllers/accountcontroller");






router.route('/').post(createAmount);
router.route('/').get(getallAccounts);
router.route('/balance').get(getBalance);
router.route('/:id').put(updateAccountController);
router.route('/:id').delete(deleteAccount);
router.route('/:id').get(getAccount);

// router.route('/search').get(searchStudent);




module.exports = router