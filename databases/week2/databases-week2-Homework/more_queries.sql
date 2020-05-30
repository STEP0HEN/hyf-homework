-- Get all tasks assigned to users whose email ends in @spotify.com
SELECT t.title
FROM user_task ut 
INNER JOIN task t ON ut.task_id=t.id 
INNER JOIN (
    SELECT u.id, u.email
    FROM user u
    WHERE email LIKE '%@spotify.com'
) u ON ut.user_id=u.id;


-- Get all taks for 'Donald Duck' where status 'not started' 
SELECT t.title
FROM task t
INNER JOIN user_task ut ON t.id = ut.task_id
INNER JOIN status s ON t.status_id = s.id 
WHERE ut.user_id = (
    SELECT id 
    FROM user
    WHERE name LIKE '%Donald Duck%'
)
AND s.id = (
    SELECT id
    FROM status
    WHERE name = 'Not started'
);


-- Get all task for 'Maryrose Meadows' that were created in september
SELECT 
	* 
FROM 
	user 
JOIN 
	user_task 
ON 
    user.id = user_task.user_id 
JOIN 
	task 
ON 
	user_task.task_id = task.id 
WHERE user.name = 'Maryrose Meadows' AND month(created) = 09;


-- Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
SELECT 
    count(*),MONTHNAME(created) 
AS 
    task_per_month 
FROM task GROUP BY task_per_month;