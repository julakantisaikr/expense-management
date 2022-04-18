
const mongoose = require('mongoose');
const account = require ('../models/accountmodel');



/**
 * repository to create expense or income
 * @param {*} amount 
 * @param {*} description 
 * @param {*} isExpense 
 * @returns 
 */
const createBalance =  async (amount,description,isExpense) => {
    return await account.create({amount:amount, description:description,isExpense:isExpense});
}

/**
 * repository to get account detail by id
 * @param {*} id 
 * @returns 
 */
const accountDetail = async (id) => {
    return await account.findOne({_id:id})
}

/**
 * repository to update the account
 * @param {*} _id 
 * @param {*} amount 
 * @param {*} description 
 * @param {*} isExpense 
 * @returns 
 */
const updateAccount = async (_id, amount, description, isExpense) => {
    var acDetail = await accountDetail(_id);
    var date = new Date();
    acDetail.description= description;
    acDetail.isExpense= isExpense;
    acDetail.amount=amount;
    acDetail.updatedDate= date;
    return await acDetail.save();
}
/**
 * repository to delete the account
 * @param {*} id 
 */
const deleteAccount = async (id) => {

    var acDetail = await accountDetail(_id);
    await acDetail.delete();
}
/**repository to get all
 * 
 * @returns 
 */

const findAllAccount = async() => {
    return await account.find({});
}

const findById = async(id) => {
    return await account.find(
        {
            "_id":id
        }
    );
};

const findByName = async(name) => {
    return await account.find(
        {
            "studentName":name
        }
    );
};

const findByCity = async(cityCode) => {
    return await account.find(
        {
            "cityCode":cityCode
        }
    );
};




/**
 * export the defined function
 */
module.exports = {
    createBalanceRepository: createBalance,
    accountDetailRepository: accountDetail,
    updateAccountRepository: updateAccount,
    deleteAccountRepository: deleteAccount,
    findAllAccountRepository: findAllAccount
}