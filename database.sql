CREATE DATABASE garage;

CREATE TABLE company (
	id SERIAL PRIMARY KEY,
	name VARCHAR(25) NOT NULL,
	country VARCHAR(25) NOT NULL
);

INSERT INTO company (name, country)
VALUES ('Ford', 'USA'),
('Toyota', 'Japan'),
('Aston Martin', 'UK'),
('Volkswagon', 'Germany');