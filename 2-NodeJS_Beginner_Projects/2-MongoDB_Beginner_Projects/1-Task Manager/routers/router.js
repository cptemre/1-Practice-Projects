const express = require('express');
const router = express.Router();
const { getAll,getSingle } = require('../controls/tasks');

router.route("/").get(getAll);
router.route("/:id").get(getSingle);

module.exports = router