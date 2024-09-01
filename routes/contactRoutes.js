const express = require('express');
const router = express.Router();
const {getContact} = require("../controllers/contactController");
const {addContact} = require("../controllers/contactController");
const {getContactId} = require("../controllers/contactController");
const {updateContact} = require("../controllers/contactController");
const {deleteContact} = require("../controllers/contactController");
const {getLiteMode} = require("../controllers/contactController");

router.route('/').get(getContact);

router.route('/').post(addContact);

router.route('/:id').get(getContactId);

router.route('/mode/lite').get(getLiteMode);

router.route('/:id').put(updateContact);

router.route('/:id').delete(deleteContact);
module.exports = router;