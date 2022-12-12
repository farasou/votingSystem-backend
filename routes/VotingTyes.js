var express = require('express');
var router = express.Router();
const VotingType = require('../models/VotingType');

// Middleware
const getOne = async (req, res, next) => {
  let foundVotingType;
  try {
    foundVotingType = await VotingType.findById(req.params.id);
    if (!foundVotingType)
      return res.status(404).json({ 'ID Not Found': req.params.id });
  } catch (error) {
    res.json({ 'error while retrieving VotingType': error.message });
  }
  res.foundVotingType = foundVotingType;
  next();
}

/* ******* */

router.get('/', async (req, res) => {
  try {
    const list = await VotingType.find();
    res.status(200).json(list);
  } catch (error) {
    res.status(500).send(error.messaage);
  }
});

router.get('/:id', getOne, (req, res) => {
  res.send(res.foundVotingType);
});

router.post('/', async (req, res) => {
  const newObject = new VotingType({
    id: req.body.sku,
    name: req.body.name,
    date_added: req.body.date_added,
    priority: req.body.price,
    parameter: req.body.quantity,
    content: req.body.description
  });

  try {
    const res = await newObject.save();
    res.status(200).json(newObject);
  } catch (error) {
    res.status(500).send(error.messaage);
  }
});

router.put('/:id', getOne, async (req, res) => {
  try {
    if (req.body.id) {
      res.foundVotingType.id = req.body.id;
    }
    if (req.body.name) {
      res.foundVotingType.name = req.body.name;
    }
    if (req.body.priority) {
      res.foundVotingType.priority = req.body.priority;
    }
    if (req.body.parameter) {
      res.foundVotingType.parameter = req.body.parameter;
    }
    if (req.body.content) {
      res.foundVotingType.content = req.body.content;
    }

    const res = await res.foundVotingType.save();
    res.status(200).json(res);
  } catch (error) {
    res.status(500).send(error.messaage);
  }
});

router.delete('/:id', getOne, async (req, res) => {
  try {
    const res = await res.foundVotingType.remove();
    res.status(200).json(res);
  } catch (error) {
    res.status(500).json(error.messaage);
  }
});

module.exports = router;
