CREATE TABLE `teachers`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `first_name` VARCHAR(255) NOT NULL,
    `last_name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `salary` BIGINT NOT NULL
);
CREATE TABLE `course`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `teacher_id` BIGINT UNSIGNED NOT NULL,
    `class` BIGINT NOT NULL,
    FOREIGN KEY(`teacher_id`) REFERENCES `teachers`(`id`)
);
CREATE TABLE `tests`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `class` BIGINT NOT NULL,
    `date` DATE NOT NULL,
    `course_id` BIGINT UNSIGNED NOT NULL,
    FOREIGN KEY(`course_id`) REFERENCES `course`(`id`)
);
CREATE TABLE `students`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `first_name` VARCHAR(255) NOT NULL,
    `last_name` VARCHAR(255) NOT NULL,
    `birth_date` DATE NOT NULL,
    `class` BIGINT NOT NULL,
    `address` VARCHAR(255) NOT NULL
);
CREATE TABLE `grades`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `student_id` BIGINT UNSIGNED NOT NULL,
    `test_id` BIGINT UNSIGNED NOT NULL,
    `grade` BIGINT UNSIGNED NOT NULL,
    FOREIGN KEY(`test_id`) REFERENCES `tests`(`id`),
    FOREIGN KEY(`student_id`) REFERENCES `students`(`id`)
);
