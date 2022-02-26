import dayjs from 'dayjs';
import { meetingRoom, meetingRoomModel } from '../models/meetingRoomModel'

const formatDate = (date: string) => dayjs(new Date(date)).format('YYYY-MM-DDTHH:mm:ss.SSSZ');

export const getAvailableMeetingRooms = async (req: any, res: any) => {
  const {startDateTime, endDateTime} = req.query;
  const meetingRooms: meetingRoomModel[] = await meetingRoom.find();
  // Below DB filtering probably did not work because of missing date formatting
/*     {bookedTimes: 
       { $not:  
        { $elemMatch: 
          {startDateTime: 
            {$lt: (endDateTime)}, 
          endDateTime: 
            {$gt: (startDateTime)}
          }
        }
      }
    }
  ); */
  const availableMeetingRooms = meetingRooms.filter(
    r => !r.bookedTimes.some(t => ((formatDate(t.startDateTime) < endDateTime) && (formatDate(t.endDateTime) > startDateTime))));

  res.status(200).json(availableMeetingRooms);
};

export const getBookedTimeSlots = async (req: any, res: any) => {
  const timeSlots = await meetingRoom.findById(req.params.roomId, {bookedTimes:1})
  
  res.status(200).json(timeSlots);
};

export const setReservation = async (req: any, res: any) => {
  const createReservation = await meetingRoom.updateOne({ roomId: req.params.roomId}, { $push: {bookedTimes: req.body.params}}, {new: true});

  res.status(200).json(createReservation);
};

export const deleteReservation = async (req: any, res: any) => {
  await meetingRoom.remove(req.params.id);

  res.status(200).json({ id: req.params.id});
};
