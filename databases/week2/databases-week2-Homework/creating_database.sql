-- creating database

CREATE DATABASE football_club_DB;

USE football_club_DB;

SET NAMES utf8mb4;
  
CREATE TABLE `team` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `created` datetime  NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `player` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`name` varchar(255) NOT NULL,
`age` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_id` FOREIGN KEY (`id`) REFERENCES `team` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `player_position` (
`position_id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`position_title` varchar(255) NOT NULL,
  CONSTRAINT `fk_position_id` FOREIGN KEY (`position_id`) REFERENCES `player` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  


--insert into team

INSERT INTO team(name, description,location, created)  VALUES ( 'Barca', 'great team from spain', 'spain', '2020-02-08 09:17:18');
INSERT INTO team(name, description,location, created)  VALUES ( 'Madrid', 'great team from spain', 'spain', '2020-05-10 22:14:24');
INSERT INTO team(name, description,location, created)  VALUES ( 'Sevilla', 'great team from spain', 'spain', '2020-09-10 02:39:04');

-- Insert into player
INSERT INTO player(name,age)  VALUES ('messi', '33');
INSERT INTO player(name,age)  VALUES ('Braithwaithe', '27'); 
