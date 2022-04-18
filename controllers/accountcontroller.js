// const mongoose = require('mongoose');
const {balanceValidation} = require("../validation");
const { createBalanceRepository, accountDetailRepository, updateAccountRepository, deleteAccountRepository, findAllAccountRepository } = require('../repository/accountMongodbRepository');


/**
 * for creating the account
 *  */

exports.createAmount = async (req, res) => {
    // Validating the request with model
    const {error} = balanceValidation(req.body);
    if(error) {
        var response = {};
        response.error = error.details;
        res.status(400).send(response);
    }
    else{
        const { amount, description, isExpense } = req.body;

        // calling create balance repository to insert amount details
        const newAccount = await createBalanceRepository(amount, description, isExpense);
    
        res.status(201).json({
            success: true,
            data: newAccount,
            message: 'account   created successfully'
        })
    }
    

}

/**for adding the expense to the account */

exports.updateAccountController = async (req, res) => {
    const { amount, description, isExpense } = req.body;
    const existAccount = await accountDetailRepository(req.params.id)
    if (existAccount) {
        const updatedAccount = await updateAccountRepository(req.params.id, amount, description, isExpense);
        console.log(isExpense);
        res.status(200).json({
            sucess: true,
            data: updatedAccount,
            message: 'account is updated Succesfully'
        })
    }
    else {
        res.status(401).json({
            sucess: false,
            data: null,
            message: 'Account not found'
        })
    }

}
/**for deleting  the Account
 * 
*/

exports.deleteAccount = async (req, res) => {
    const existAccount = await accountDetailRepository(req.params.id);
    if (existAccount) {
        await deleteAccountRepository(req.params.id);
        res.status(200).json({
            sucess: true,
            message: 'Account  is Deleted Succesfully'
        })
    }
    else {
        res.status(401).json({
            sucess: false,
            data: null,
            message: 'Account  not found'
        })
    }

}


/**to Get   the Account
 * 
*/

exports.getAccount = async (req, res) => {
    const existAccount = await accountDetailRepository(req.params.id)
    if (existAccount) {

        res.status(200).json({
            sucess: true,
            data: existAccount,
            message: 'Account  fetched Succesfully'
        })
    }
    else {
        res.status(401).json({
            sucess: false,
            data: null,
            message: 'Account not found'
        })
    }

}



/**to Get all   the Accounts(s)
 * 
*/

exports.getallAccounts = async (req, res) => {
    const allAccounts = await findAllAccountRepository();
    if (allAccounts) {

        res.status(200).json({
            sucess: true,
            data: allAccounts,
            message: 'all Accounts(s) fetched Succesfully'
        });
    }
    else {
        res.status(401).json({
            sucess: false,
            data: null,
            message: 'Account  not found'
        });
    }

};

exports.getBalance = async (req, res) => {
    console.log("function called");
    const allAccounts = await account.find({});
    let income = 0;
    let expense = 0;
    for (var i = 0; i < allAccounts.length; i++) {
        var accountDetail = allAccounts[i];
        if (accountDetail.isExpense === true) {
            console.log('hell world')
            expense += parseInt(accountDetail.amount);
        }
        else {
            income += parseInt(accountDetail.amount);
        }
    }
    var response = {};
    response.income = income;
    response.expense = expense;
    response.saving = income - expense;
    res.send(response);
};
