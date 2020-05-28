
-- PART ONE 
-- Add a task with these attributes: title, 
-- description, created, updated, due_date, status_id, user_id
select * from task;
INSERT INTO 
	task (title, description, created, updated, due_date, status_id) 
VALUES 
	('add new task', 'new task added for homework', '2020-05-26 23:03::30', '2020-05-26 23:03:50','2020-05-26 23:05:30', 3 );


-- Change the title of a task


UPDATE task SET title = 'do my sql homework' 
WHERE id = 36;

-- Change a task due date

UPDATE task SET due_date = '2020-05-27 12:00:00' 
WHERE id = 36;

-- Change a task status
UPDATE task SET status_id = '2' 
WHERE id = 36;

-- Mark a task as complete
UPDATE task SET status_id = '3' 
WHERE id = 5;

-- Delete a task
DELETE FROM task WHERE id = 5;