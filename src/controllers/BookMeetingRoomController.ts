import { meetingRoom, meetingRoomModel } from '../models/meetingRoomModel'

export const getAvailableMeetingRooms = async (req: any, res: any) => {
  console.log(req.query);
  const {startDate, endDate} = req.query;
  // send dateTime with request
  const meetingRooms: meetingRoomModel[] = await meetingRoom.find();
/*     {bookedTimes: 
     //  { $not:  
        { $elemMatch: 
          {startDate: 
            {$lt: new Date(endDate)}, 
          endDate: 
            {$gt: new Date(startDate)}
          }
        }
      //}
    }
  ); */

  const availableMeetingRooms = meetingRooms.filter(
    (r) => !r.bookedTimes.some(
      t => t.startDateTime < startDate && t.endDateTime > endDate));

/*   console.log(meetingRooms[0].bookedTimes[0]);

  console.log(new Date(startDate));
  console.log(new Date(endDate));
  console.log(availableMeetingRooms); */

  res.status(200).json(availableMeetingRooms);
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