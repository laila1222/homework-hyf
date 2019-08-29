show databases;
use meal_sharing;
-- Meal - queries to write
-- Get all meals
select * from meal;

-- Add a new meal
insert into meal values (null, 'Corn flakes', 'Crunchy breakfast', 'Copenhagen', '2019-09-26', 8, 30.00, '2019-08-25');

-- Get a meal with any id, fx 1
select * from meal where id = 1;

-- Update a meal with any id fx 1, Update any attribute fx the title or multiple attributes
update meal set title = 'Pencake' where id = 1;

-- Delete a meal with any id fx 3
delete from meal where id = 3;

-- Reservation
-- Get all reservations
select * from reservation;

-- Add a new reservation
insert into reservation values (null, 15, 6, '2019-08-25');

-- Get a reservation with any id fx 5
select * from reservation where id = 5;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
update reservation set number_of_guests = 5 where id = 2;

-- Delete a reservation with any id, fx 1
delete from reservation where id = 6;

-- Review
-- Get all reviews
select * from review;

-- Add a new review
insert into review value (null, 'Okay dinner', 'It was fine.', 6, 3, '2019-08-26');

-- Get a review with any id, fx 1
select * from review where id = 5;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
update review set description = 'It was brilliant!' where id = 4;

-- Delete a review with any id, fx 1
delete from review where id = 3;


-- Functionality

-- Get meals that has a price smaller than a specific price fx 90
select * from meal where price < 90;

-- Get meals that still has available reservations
select distinct * from meal
inner join reservation on meal.id = reservation.meal_id
where meal.max_reservations > reservation.number_of_guests;

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
select * from meal 
where title like '%cake%';

-- Get meals that has been created between two dates
select * from meal where created_date between '2019-08-20' and '2019-08-25';

-- Get only specific number of meals fx return only 5 meals
select * from meal limit 5;

-- Get the meals that have good reviews
select meal.id, meal.title, meal.price, review.stars from meal
inner join review on meal.id = review.meal_id
where review.stars > 3;

-- Get reservations for a specific meal sorted by created_date
select * from reservation 
inner join meal on reservation.meal_id = meal.id
where meal.title = 'Pizza'
order by reservation.created_date;

-- Sort all meals by average number of stars in the reviews
select meal.title, avg(review.stars) from meal
left join review on meal.id = review.meal_id
group by meal.title
order by avg(review.stars) desc;
