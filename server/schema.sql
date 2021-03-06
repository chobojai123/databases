DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;



CREATE TABLE users (
  id integer AUTO_INCREMENT NOT NULL PRIMARY KEY, 
  username VARCHAR(20) NOT NULL
);

CREATE TABLE rooms (
  id integer AUTO_INCREMENT NOT NULL PRIMARY KEY, 
  roomname VARCHAR(20) NOT NULL
);

CREATE TABLE messages (
  id integer AUTO_INCREMENT NOT NULL PRIMARY KEY,
  message VARCHAR(150) NOT NULL, 
  createdAt VARCHAR(30) NOT NULL,
  rooms_id integer,
  users_id integer,
  -- INDEX r_id (rooms_id),
  CONSTRAINT FOREIGN KEY(rooms_id) references rooms(id),
  CONSTRAINT FOREIGN KEY(users_id) references users(id)
);
INSERT INTO users (username) VALUES
('Joe'),
('Tom');

INSERT INTO rooms (roomname) VALUES
('lobby'),
('testroom');

INSERT INTO messages (message, createdAt, rooms_id, users_id) VALUES 
('hello', '7:39PM', 1, 1),
('testing', '8:25AM', 2, 2);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

