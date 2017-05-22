'use strict';

const express = require('express');         /* eslint-disable new-cap */
const router = express.Router();            /* eslint-enable new-cap */

/* CREATE */
router.post('/', (req, res, next) => {
  const newEvent = req.body;
  return knex('2_events')
  .returning('*')
  .insert(newEvent)
  .then(() => res.sendStatus(200))
  .catch((err)=> next(err));
});

/* READ */
router.get(/:id, (req, res, next) => {
  const id = req.params.id;
  return knex('2_events')
  .select('*')
  .where('id', id)
  .first()
  .then((event)=> res.json(event))
  .catch((err)=> next(err));
});

/* UPDATE */
router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  const changes = req.body;
return knex('2_events')
.returning('*')
.where('id', id)
.update(changes)
.then(()=> res.sendStatus(200))
.catch((err)=> next (err));

});

/* DELETE */
router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
return knex('2_events')
.where('id', id).del()
.then(()=> res.sendStatus(200))
.catch((err)=> next(err))
});

/* LIST */
router.get('/', (req, res, next) => {

  return knex('2_events')
  .returning('*')
  .orderBy('created_at', 'asc')
  .then((events) => res.json(events))
  .catch((err) => next(err));
});

module.exports = router;