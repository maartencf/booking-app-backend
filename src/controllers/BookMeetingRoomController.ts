import { meetingRoom } from '../models/meetingRoomModel'

export const getAvailableMeetingRooms = async (req: any, res: any) => {
  console.log(req.body);
  const meetingRooms = await meetingRoom.find();
  console.log(meetingRooms);
  res.status(200).json(meetingRooms);
};

export const getBookedTimeSlots = async (req: any, res: any) => {
  res.status(200).json({ "message": `Get time slots for ${req.params.roomId}`});
};

export const setReservation = async (req: any, res: any) => {
  res.status(200).json({ "message": `Set reservation for ${req.params.roomId}`});
};

export const deleteReservation = async (req: any, res: any) => {
  res.status(200).json({ "message": `Delete reservation for ${req.params.roomId}`});
};


/* module.exports = {
  getAvailableMeetingRooms
} */