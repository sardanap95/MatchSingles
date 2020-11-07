-- DROP DATABASE IF EXISTS match_singles_db;
-- CREATE database match_singles_db;

-- USE match_singles_db;

-- -- CREATE TABLE users (
-- --     id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
-- --     users_name VARCHAR(255) NOT NULL UNIQUE,
-- --      VARCHAR(255) NOT NULL,
-- --     created_at DATETIME DEFAULT CURRENT_TIMESTAMP
-- -- );

-- -- CREATE TABLE matches (
-- --     id INT AUTO_INCREMENT NOT NULL,
-- --     title VARCHAR(30),
-- --     salary DECIMAL(10,2),
-- --     department_id INT(10),
-- --     PRIMARY KEY (id)
-- -- );

-- -- CREATE TABLE department (
-- --     id INT AUTO_INCREMENT NOT NULL,
-- --     name VARCHAR(30),
-- --     department_id INT(10),
-- --     PRIMARY KEY (id)
-- -- );

-- -- CREATE TABLE  (
-- --     id INT AUTO_INCREMENT NOT NULL,
-- --     first_name VARCHAR(30) NOT NULL,
-- --     last_name VARCHAR(30) NOT NULL,
-- --     role_id INT(10) NULL,
-- --     manager_id INT(10) NULL,
-- --     PRIMARY KEY (id)
-- -- );

-- CREATE TABLE profiles (
--     PersonID int,
--     USER_NAMES VARCHAR(255),
--     Bio VARCHAR(255),

-- )

CREATE TABLE login  (
  id  INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  email     VARCHAR(255)    NOT NULL,
  create_date   DATETIME    NOT NULL,
  password      VARCHAR(255)   NOT NULL,
  user     VARCHAR(255),
  phone         VARCHAR(25),
  INSERT id INTO user,
  INSERT email INTO USER
);

CREATE TABLE user (
    gender  VARCHAR(255)    NOT NULL,
    preference VARCHAR(255) NOT NULL,
    bio VARCHAR(255)
);
