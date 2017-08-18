CREATE TABLE owners(
	id serial PRIMARY KEY,
	first_name VARCHAR(80) NOT NULL,
	last_name VARCHAR(80) NOT NULL
	);
	
CREATE TABLE pets(
	id serial PRIMARY KEY,
	pet_name VARCHAR(80) NOT NULL,
	breed VARCHAR(40) NOT NULL,
	color VARCHAR(40) NOT NULL,
	owner_id integer REFERENCES owners
	);

SELECT * FROM visits;
	SELECT * FROM pets;
	SELECT * FROM owners;
	
INSERT INTO owners(first_name, last_name)
VALUES ('Kevin', 'McMahon'),
('John', 'Jingleheimer'),
('Harry', 'Potter');

INSERT INTO pets(pet_name, breed, color, owner_id)
VALUES ('Gizmo', 'Mogwai', 'brown and white', 1),
('Cerberus', '3 headed dog', 'black', 2),
('Hedwig', 'Owl', 'white', 3),
('Falcor', 'Dragon dog', 'white', 1);

INSERT INTO visits (checkin_date, checkout_date, pet_id)
VALUES('1999-01-08 04:05:06', '1999-01-10 05:25:35', 1);

INSERT INTO visits (checkin_date, checkout_date, pet_id)
VALUES('2010-11-18 12:47:32', '2010-11-19 05:20:12', 2),
('2014-06-18 20:30:51', '2014-07-19 10:30:22', 3),
('2016-12-25 01:45:23', '2016-12-25 05:45:35', 4),
('2017-01-02 04:25:13', '2017-01-07 08:19:52', 2);