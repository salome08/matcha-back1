var express = require('express');
var router = express.Router();

/* GET home page. */
const peoples = [
	{
		id: 0,
		name: 'rick'
	}, {
		id: 1,
		name: 'abed'
	}, {
		id: 2,
		name: 'neo'
	}
]; 

// READ - read all
router.get('/', (req, res, next) => {
  res.render('people', { title: 'hello !'});
});

//READ - read one
router.get('/:id', (req, res, next) => {
  res.render('one', { 
  	people: peoples[req.params.id]
  });
});

//update  - show update form
router.get('/:id/edit', (req, res, next) => {
  res.render('edit', { 
  	people: peoples[req.params.id]
  });
});

// CREAT - creates one (and after redirect to the one we created)
router.post('/', (req, res, next) => {
	const people = req.body;
	people.id = peoples.lenght;
	peoples.push(people);
  res.redirect(`/people/${people.id}`);
});

// UPDATE - update one
router.put('/:id', (req, res, next) => {
	const people = peoples[req.params.id];
	people.name = req.body.name;

  res.redirect(`/people/${people.id}`);
});

// DELETE - delets one
router.delete('/:id', (req, res, next) => {
	peoples.splice(req.params.id, 1);
  res.redirect('/people');
});

module.exports = router;


