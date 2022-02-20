export const getAvailableMeetingRooms = async (req, res) => {
  console.log(req.body);
  res.status(200).json({ "message": "succeeded"})
};

export const getBookedTimeSlots = async (req, res) => {
  res.status(200).json({ "message": `Get time slots for ${req.params.roomId}`})
};

export const setReservation = async (req, res) => {
  res.status(200).json({ "message": `Set reservation for ${req.params.roomId}`})
};

export const deleteReservation = async (req, res) => {
  res.status(200).json({ "message": `Delete reservation for ${req.params.roomId}`})
};


/* module.exports = {
  getAvailableMeetingRooms
} */