SET NAMES utf8mb4;

-- tables

CREATE TABLE `class` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`name` varchar(255) NOT NULL,
`begins` DATETIME NULL DEFAULT NULL,
`ends` DATETIME NULL DEFAULT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `student`(
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`name` varchar(255) NOT NULL,
`email` varchar(255) NOT NULL,
`phone` varchar(255) NULL,
CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `class`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `student_classes`(
`student_id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`class_id` int(10) unsigned NOT NULL,
CONSTRAINT `fk_student_classes_student` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
CONSTRAINT `fk_student_classes_class` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- create index on name column from student table
CREATE INDEX student_name_index
ON student (name);

-- Add column to table

ALTER TABLE class ADD COLUMN status ENUM('not started', 'ongoing', 'finished');

--modified status column on class table and added default value
ALTER TABLE class MODIFY COLUMN status ENUM('not started', 'ongoing', 'finished') DEFAULT 'not started';