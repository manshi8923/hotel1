const express=require("express");
const { getRooms, updateRoom } = require("../controllers/roomController");
const router=express.Router();
router.route('/').get(getRooms);
router.route('/:id').put(updateRoom);
module.exports=router;