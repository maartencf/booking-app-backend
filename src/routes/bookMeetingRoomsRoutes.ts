import express from "express";
import { getAvailableMeetingRooms, getBookedTimeSlots, setReservation, deleteReservation } from '../controllers/BookMeetingRoomController';

const router = express.Router();

router.route('/').get(getAvailableMeetingRooms);
router.route('/:roomId').get(getBookedTimeSlots).put(setReservation).delete(deleteReservation);

module.exports = router;