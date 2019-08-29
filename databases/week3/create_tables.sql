create database meal_sharing;
use meal_sharing;

create table `meal` (
	`id` int(10) unsigned not null auto_increment,
    `title` varchar(255) not null,
    `description` text null default null,
    `location` text not null,
    `when` date not null,
    `max_reservations` int not null,
    `price` decimal(6,2) not null,
    `created_date` date not null,
    primary key (`id`)
    ) engine=innodb default charset=utf8mb4 collate=utf8mb4_unicode_ci;
    
create table `reservation` (
	`id` int(10) unsigned not null auto_increment,
    `number_of_guests` int(10) not null,
    `meal_id` int(10) unsigned not null,
    `created_date` date not null,
    primary key (`id`),
    constraint `fk_meal_id` foreign key (`meal_id`) references `meal` (`id`) on delete cascade
    ) engine=innodb default charset=utf8mb4 collate=utf8mb4_unicode_ci;
    
create table `review` (
	`id` int(10) unsigned not null auto_increment,
    `title` varchar(255) not null,
    `description` text not null,
    `meal_id` int(10) unsigned not null,
    `stars` int(10) not null,
	`created_date` date not null,
    primary key (`id`),
    constraint `fk_meal_id_from_review` foreign key (`meal_id`) references `reservation` (`meal_id`) on delete cascade
    )engine=innodb default charset=utf8mb4 collate=utf8mb4_unicode_ci;
    
    alter table meal modify price decimal(10,2) not null;