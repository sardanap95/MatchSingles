-- CREATE TABLE users (
--     id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--     username VARCHAR(50) NOT NULL UNIQUE,
--     password VARCHAR(255) NOT NULL,
--     created_at DATETIME DEFAULT CURRENT_TIMESTAMP
-- );

-- <?php
-- /* Database credentials. Assuming you are running MySQL
-- server with default setting (user 'root' with no password) */
-- define('DB_SERVER', 'localhost');
-- define('DB_USERNAME', 'root');
-- define('DB_PASSWORD', '');
-- define('DB_NAME', 'demo');
 
-- /* Attempt to connect to MySQL database */
-- $link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
 
-- // Check connection
-- if($link === false){
--     die("ERROR: Could not connect. " . mysqli_connect_error());
-- }
-- ?>


CREATE DATABASE IF NOT EXISTS `nodelogin` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `nodelogin`;

CREATE TABLE IF NOT EXISTS `accounts` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

INSERT INTO `accounts` (`id`, `username`, `password`, `email`) VALUES (1, 'test', 'test', 'test@test.com');

ALTER TABLE `accounts` ADD PRIMARY KEY (`id`);
ALTER TABLE `accounts` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;