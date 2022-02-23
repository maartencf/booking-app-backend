import dayjs from 'dayjs';
import { meetingRoom, meetingRoomModel } from '../models/meetingRoomModel'

export const getAvailableMeetingRooms = async (req: any, res: any) => {
  console.log(req.query);
  const {startDateTime, endDateTime} = req.query;
  // send dateTime with request
  const meetingRooms: meetingRoomModel[] = await meetingRoom.find(
    {bookedTimes: 
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
  );

    //const timeZoneFromDB = -7.00;

    // waarschijnlijk fout!
    //const newStartDate = dayjs(new Date(startDateTime).toUTCString()).format('YYYY-MM-DDTHH:mm:ss.SSSZ');
    const formatDate = (date: string) => dayjs(new Date(date)).format('YYYY-MM-DDTHH:mm:ss.SSSZ');
    //const newEndDate = dayjs(new Date(endDateTime).toUTCString()).format('YYYY-MM-DDTHH:mm:ss.SSSZ');
    console.log(startDateTime);
    console.log("newDate");
    //console.log(newStartDate);

  const availableMeetingRooms = meetingRooms.filter(
 /*  r => !r.bookedTimes.some(f => f.endDateTime > startDateTime)
    ); */
    r => !r.bookedTimes.some(t => ((formatDate(t.startDateTime) < endDateTime) && (formatDate(t.endDateTime) > startDateTime))));

     /*  const testdate = ("2022-02-22T09:53:39.000Z");
      console.log(testdate);
      console.log(newEndDate);
      console.log(testdate < newEndDate); */

/*       const t = availableMeetingRooms.filter(
        r => !r.bookedTimes.some(t => {console.log(formatDate(t.startDateTime));console.log(formatDate(t.startDateTime) < endDateTime);console.log(endDateTime); t.startDateTime < endDateTime})
      );
      console.log("filtered");
      console.log(t);

      console.log("1912-06-22T23:00:00.000Z" < endDateTime);
      console.log("2112-06-22T23:00:00.000Z" > startDateTime);

      console.log("ahoj");
      console.log(availableMeetingRooms[0]);
      //console.log(availableMeetingRooms[0].bookedTimes);
      console.log(startDateTime);
      console.log(endDateTime); */

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
  const createReservation = await meetingRoom.update(req.params.id, { $push: {bookedTimes: req.body.params}}, {new: true});
  console.log("body");
  console.log(req.body.params);
  res.status(200).json(createReservation);
};

export const deleteReservation = async (req: any, res: any) => {
  await meetingRoom.remove(req.params.id);
  res.status(200).json({ id: req.params.id});
};


/* module.exports = {
  getAvailableMeetingRooms
} */