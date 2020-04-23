CREATE DATABASE checkout;

USE checkout;

-- CREATE TABLE userdata (
--   id INT NOT NULL AUTO_INCREMENT,
--   uname VARCHAR(100),
--   uemail VARCHAR(100),
--   upassword VARCHAR(100),
--   ucard VARCHAR(100),

--   PRIMARY KEY(ID)
-- );

-- CREATE TABLE shipping (
--   id INT NOT NULL AUTO_INCREMEMT,
--   user_id INT,
--   line1 VARCHAR(100),
--   line2 VARCHAR(100),
--   city VARCHAR(100),
--   state VARCHAR(100),
--   zip INT,
--   PRIMARY KEY(ID)
-- );

-- CREATE TABLE cardInfo (
--   id INT NOT NULL AUTO_INCREMENT,
--   cardnum BIGINT,
--   expire DATE,
--   CVV int,
--   zip INT
-- );

CREATE TABLE userdata (
  name VARCHAR(30),
  email VARCHAR(50),
  password VARCHAR(20),
  line1 VARCHAR(50),
  line2 VARCHAR(50),
  city VARCHAR(20),
  state VARCHAR(20),
  zip INT,
  cardnum VARCHAR(20),
  expire DATE,
  CVV int,
  bzip INT
);
