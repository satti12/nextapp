CREATE TABLE `data` (
	`id` int NOT NULL,
	`name` varchar(255),
	`age` int,
	CONSTRAINT `data_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` int NOT NULL,
	`name` varchar(255),
	`age` int,
	`email` varchar(255) NOT NULL,
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_email_unique` UNIQUE(`email`)
);
