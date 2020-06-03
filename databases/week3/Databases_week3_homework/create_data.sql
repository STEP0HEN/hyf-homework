-- creating DB
CREATE DATABASE meal_sharing_app;

-- USE DB 
USE meal_sharing_app;

SET NAMES utf8mb4;
-- meal table creation

CREATE TABLE `meal` (
 `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `title` varchar(255) NOT NULL,
 `description` text(255) NOT NULL,
 `location` varchar(255) NOT NULL,
 `when` datetime NOT NULL,
 `max_reservations` int(10) unsigned NOT NULL,
 `price` decimal(6,2) NOT NULL,
 `created_date` datetime NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- reservation table creation
CREATE TABLE `reservation`(
 `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `number_of_guests` int(10) unsigned NOT NULL,
 `meal_id` int(10) unsigned NOT NULL,
 `created_date` datetime NOT NULL,
 CONSTRAINT `fk_reservation_meal_id` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- review table creation
CREATE TABLE `review`(
 `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `title` varchar(255),
 `description` text(255),
 `meal_id` int(10) unsigned NOT NULL,
 `stars` int(10) NOT NULL, 
 `created_date` datetime ,
 CONSTRAINT `fk_review_meal_id` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- Adding Meals
INSERT INTO meal (title, description, location, `when`, max_reservations, price, created_date) 
VALUES ('yampork', 'spicy pork sauce with yams', 'Valby', '2010-10-11 19:09:09', 4, 250, '2010-10-10 18:19:20');

INSERT INTO meal (title, description, location, `when`, max_reservations, price, created_date) 
VALUES ('chicken caramel grains', 'caramelized fried chicken with rice', 'østerbro', '2019-08-12 15:16:17', 2, 300, '2019-07-03 16:17:18');

INSERT INTO meal (title, description, location, `when`, max_reservations, price, created_date)
VALUES ('potato fish salad', 'boiled potatoes with deep fried red fish and fresh salad', 'vasybygade 21', '2020-05-06 20:20:30', 2, 200, '2006-10-14 12:06:40');

INSERT INTO meal (title, description, location, `when`, max_reservations, price, created_date) 
VALUES ('Beef fried rice', 'Beef stew with fried eggs mixed with parboiled rice', 'Amagerbrogade 71', '2020-05-09 16:16:16', 4, 150, '2020-07-08 20:18:00');
INSERT INTO meal (title, description, location, `when`, max_reservations, price, created_date) 
VALUES ('spaghetti', 'spaghetti with beef sauce', 'vanløse', '2010-10-11 19:09:09', 6, 500, '2010-10-10 18:19:20');

INSERT INTO meal (title, description, location, `when`, max_reservations, price, created_date) 
VALUES ('porridge delight', 'porridge with kanel and fløde', 'østerbro', '2019-08-12 15:16:17', 9, 99, '2019-07-03 16:17:18');

INSERT INTO meal (title, description, location, `when`, max_reservations, price, created_date)
VALUES ('durum kylling', 'durum with chicken and salad', 'amagerbro 20', '2020-06-06 20:06:06', 7, 600, '2006-10-14 12:06:40');

INSERT INTO meal (title, description, location, `when`, max_reservations, price, created_date) 
VALUES ('potato salad', 'poatto with tuna and chicken salad', 'nørreport 16', '2020-05-09 16:16:16', 4, 70, '2020-10-09 15:16:17');

-- Adding reservations 

INSERT INTO reservation (number_of_guests, meal_id, created_date) 
VALUES (5, 3,'2020-05-05 16:16:16');

INSERT INTO reservation (number_of_guests, meal_id, created_date) 
VALUES (3, 3,'2007-07-07 10:10:10');

INSERT INTO reservation (number_of_guests, meal_id, created_date) 
VALUES (1, 7,'2020-10-1 20:19:00');

INSERT INTO reservation (number_of_guests, meal_id, created_date) 
VALUES (6, 8,'2020-10-1 20:19:00');

INSERT INTO reservation (number_of_guests, meal_id, created_date) 
VALUES (3, 4,'2020-10-1 20:19:00');

INSERT INTO reservation (number_of_guests, meal_id, created_date) 
VALUES (1, 2,'2018-01-03 17:18:19');

INSERT INTO reservation (number_of_guests, meal_id, created_date) 
VALUES (7, 1,'2018-10-05 13:12:11');

INSERT INTO reservation (number_of_guests, meal_id, created_date) 
VALUES (2, 4,'2016-12-12 12:00:00');

-- Adding reviews 
INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES('NEVER GOING AGAIN', 'food was cold, waiter came with wrong order!!!', 3, 1, '2016-11-11 11:11:11');

INSERT INTO review(title, description, meal_id, stars, created_date)
VALUES('highly recommend', 'best yam pork ever!Everyone should try that sometime', 1, 5, '2009-09-09 09:09:09');

INSERT INTO review(title, description, meal_id, stars, created_date)
VALUES('Good restaurant', 'courteous waiters, tasty wine, good atmosphere', 5, 4, '2018-12-12 12:04:00');

INSERT INTO review(title, description, meal_id, stars, created_date)
VALUES('Wanna go again', 'Best restaurant ever!', 5, 5, '2020-04-01 19:47:20');