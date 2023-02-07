import Event from "../models/EventSchema.js";
import User from "../models/UserSchema.js";
export const createEvent = async (req, res, next) => {
  const newEvent = new Event(req.body);

  try {
    const savedEvent = await newEvent.save();
    res.status(200).json(savedEvent);
  } catch (err) {
    next(err);
  }
};

export const updateEvent = async (req, res, next) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      //findOneAndUpdate() returns the document as it was before update was applied.
      //new:true to return the document after update was applied
      { new: true }
    );
    res.status(200).json(updatedEvent);
  } catch (err) {
    next(err);
  }
};

export const deleteEvent = async (req, res, next) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.status(200).json("Event has been deleted.");
  } catch (err) {
    next(err);
  }
};

export const getEvent = async (req, res, next) => {
  try {
    const Event = await Event.findById(req.params.id);
    res.status(200).json(Event);
  } catch (err) {
    next(err);
  }
};

export const getEvents = async (req, res, next) => {
  const reqBody = req.body;
  try {
    const Events = await Event.find({
      ...reqBody,
    }).limit(req.query.limit);
    res.status(200).json(Events);
  } catch (err) {
    next(err);
  }
};

export const registerEvent = async (req, res, next) => {
  try {
    const { name, eventid } = req.body;
    // console.log(req.body);
    const updatedUser = await User.findOneAndUpdate(
      { username: name },
      { $push: { events: eventid } },
      //findOneAndUpdate() returns the document as it was before update was applied.
      //new:true to return the document after update was applied
      { new: true }
    );
    const updatedEvent = await Event.findOneAndUpdate(
      { _id: eventid },
      { $inc: { capacity: -1 } },
      //findOneAndUpdate() returns the document as it was before update was applied.
      //new:true to return the document after update was applied
      { new: true }
    );
    res.status(200).json({ updatedUser, ...updatedEvent });
  } catch (err) {
    next(err);
  }
};

export const getRegistered = async (req, res, next) => {
  try {
    const { name } = req.body;
    console.log(req.body);
    const user = await User.find({
      username: name,
    });
    const list = await Promise.all(
      user[0].events.map((eventid) => {
        return Event.findById(eventid);
      })
    );

    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
