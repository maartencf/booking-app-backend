import { meetingRoom } from '../models/meetingRoomModel'

export const getAvailableMeetingRooms = async (req: any, res: any) => {
  console.log(req.body);
  // send dateTime with request
  const meetingRooms = await meetingRoom.find();
  console.log(meetingRooms);
  res.status(200).json(meetingRooms);
};

export const getBookedTimeSlots = async (req: any, res: any) => {
  console.log(req);
  console.log(req.params.roomId);
  //const roomId: string = "1";
  const timeSlots = await meetingRoom.findById(req.params.roomId, {bookedTimes:1})
  //const timeSlots = await meetingRoom.find({_id: "62129590867e651fda5ce7a6"});
  res.status(200).json(timeSlots);
};

export const setReservation = async (req: any, res: any) => {
  const createReservation = await meetingRoom.update(req.params.id, { $push: {bookedTimes: req.body}}, {new: true});
  res.status(200).json(createReservation);
};

export const deleteReservation = async (req: any, res: any) => {
  await meetingRoom.remove(req.params.id);
  res.status(200).json({ id: req.params.id});
};


/* module.exports = {
  getAvailableMeetingRooms
} */