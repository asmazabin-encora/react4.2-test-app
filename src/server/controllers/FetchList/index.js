const axios = require('axios');
const config = require('../../config');

async function getList(req,res) {
    let result = {};
    try {
        const postsList = await axios.get(`${config.DOMAIN}${config.PATH}`);
        result = postsList.data;
        return res.json({ status: true, code: config.SUCCESS_CODE, message: 'Record Found', list:result});
    } catch (error) {
        return res.json({ status: false, code: config.INTERNAL_SERVER_ERROR, message: 'No Record Found.'});
    }
}

module.exports = {
    getList
}