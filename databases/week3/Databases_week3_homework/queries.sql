-- MEAL QUERIES 

-- Get all meals
SELECT * FROM meal;

-- Add a new meal 
INSERT INTO meal (title, description, location, `when`, max_reservations, price, created_date) 
VALUES ('fish lasagna', 'lasagna made with salmon', 'vanløse', '2020-04-04 15:15:15', 9, 99, '2019-04-04 15:15:15');

-- Get a meal with any id
SELECT * FROM meal WHERE id = 2;

-- update a meal with any id 
UPDATE meal SET price = price + 10, title = 'fish lasagna : TODAYS SPECIAL' WHERE id = 9;

-- Delete a meal
-- SET SQL_SAFE_UPDATES = 1;

DELETE meal.* FROM meal WHERE id = 1;

-- RESERVATION 
-- Get all reservation 
SELECT * FROM reservation;

-- Add a new reservation
INSERT INTO reservation (number_of_guests, meal_id, created_date) 
VALUES (7, 7,'2020-04-08 16:15:14');

-- get a resrvation with any id
SELECT * FROM reservation WHERE id = 4;

-- Update a reservation with any id 
UPDATE reservation SET number_of_guests = 6 WHERE id = 9;

-- Delete a resrvation with any id
DELETE FROM reservation WHERE id = 3;

-- REVIEW

-- Get all reviews
SELECT * FROM review;

-- Add a new review
INSERT INTO review(title, description, meal_id, stars, created_date)
VALUES('I RECOMMEND 5 STARS', 'The best local restaurant in town', 8, 5, '2020-05-05 22:47:20');

-- Get a review with any id
SELECT * FROM review WHERE id = 1;

-- update review with any id
UPDATE review SET meal_id = 4, title = 'TOP TOP SERVICE', stars = 5 where id = 1;

-- delete a review with any id
DELETE FROM review WHERE id = 1;


-- ADDITIONAL QUERIES 

-- Get meals that has a price smaller than a specific price fx 90
SELECT * FROM meal WHERE price <150;

-- Get meals that still has available reservations
SELECT meal.*,sum(reservation.number_of_guests) Total 
FROM meal INNER JOIN reservation on meal.id = reservation.meal_id GROUP BY meal.id HAVING Total < max_reservations;

-- Get meals that partially match a title. 
-- Rød grød med will match the meal with the title Rød grød med fløde
SELECT * FROM meal WHERE title LIKE '%chicken%';

-- Get meals that has been created between two dates
SELECT * FROM meal WHERE created_date BETWEEN '2020-05-05 12:00:00' AND '2010-12-12 14:14:14';


-- Get only specific number of meals fx return only 5 meals
SELECT * FROM meal LIMIT 5;


-- Get the meals that have good reviews
SELECT meal.title, meal.description,review.title, review.stars FROM meal INNER JOIN review ON meal.id = review.meal_id
WHERE review.stars > 3;


-- Get reservations for a specific meal sorted by created_date
SELECT * FROM reservation 
INNER JOIN meal ON reservation.meal_id = meal.id
WHERE meal.title = 'spaghetti'
ORDER BY reservation.created_date DESC;


-- Sort all meals by average number of stars in the reviews
SELECT DISTINCT meal.title, AVG(review.stars) FROM meal
INNER JOIN review ON meal.id = review.meal_id
GROUP BY meal.title
ORDER BY AVG(review.stars) DESC;

