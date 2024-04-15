const express=require("express");
const { deleteGuest, getGuests, addGuest, updateGuest } = require("../controllers/guestsController");
const router=express.Router();

router.route('/:id').put(updateGuest);
router.route('/').get(getGuests);
router.route('/addguest').post(addGuest);
module.exports=router;