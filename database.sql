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