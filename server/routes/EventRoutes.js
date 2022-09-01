const express = require("express");

const router = express.Router();

// controllers
const {
  createEvent,
  getAllEvents,
  getSuggestedEvents,
  getEventInfo,
  updateInfo,
} = require("../controllers/EventController");

router.post('/create', createEvent);
router.get('/', getAllEvents);
router.post('/suggest', getSuggestedEvents);
router.get('/info/:id', getEventInfo);
router.put('/update', updateInfo);

module.exports = router;