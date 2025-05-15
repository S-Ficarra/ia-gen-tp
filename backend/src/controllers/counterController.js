const { Counter } = require('../models');

exports.getCounter = async (req, res) => {
  try {
    let counter = await Counter.findOne({ where: { id: 1 } });
    if (!counter) {
      counter = await Counter.create({ value: 0 });
    }
    res.json({ counter: counter.value });
  } catch (err) {
    console.error('Could not get counter value', err);
    res.status(500).json({ error: 'Could not get counter value' });
  }
};

exports.incrementCounter = async (req, res) => {
  try {
    let counter = await Counter.findOne({ where: { id: 1 } });
    if (!counter) {
      counter = await Counter.create({ value: 0 });
    }
    counter.value += 1;
    await counter.save();
    res.json({ counter: counter.value });
  } catch (err) {
    console.error('Could not increment counter', err);
    res.status(500).json({ error: 'Could not increment counter' });
  }
};

exports.resetCounter = async (req, res) => {
  try {
    let counter = await Counter.findOne({ where: { id: 1 } });
    if (!counter) {
      counter = await Counter.create({ value: 0 });
    }
    counter.value = 0;
    await counter.save();
    res.json({ counter: counter.value });
  } catch (err) {
    console.error('Could not reset counter', err);
    res.status(500).json({ error: 'Could not reset counter' });
  }
};