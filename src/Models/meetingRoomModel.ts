const mongoose = require('mongoose');

const meetingRoomSchema = mongoose.Schema({
  roomId: Number,
  roomName: String,
  bookedTimes: [{
    startDateTime: Date,
    endDateTime: Date,
  }]
});

export type meetingRoomModel = {
  roomId: Number,
  roomName: String,
  bookedTimes: [{
    startDateTime: string,
    endDateTime: string,
  }]
};

export const meetingRoom = mongoose.model('MeetingRooms', meetingRoomSchema);