/*
databases:
stores information and retrieves information
organizes information in a structured way


acid
atomicity
	- "All or nothing", if any statement fails, the whole transaction fails
consistency
	- if the database was consistent before transaction, it should after it
isolation
	- multiple transactions occur independently
durability
	- the database is resistent to failures and still has fallbacks in case of failures

tables:
	pre-set structures for some independent unit of information
	
relational database:
	information can be related to other information 
		all songs belong to an album, and all albums belong to artists
		
		
datatypes: 
bit
tinytbit
bigint
decimal
numeric
float
roal
date
timestamp
datetime
time year
char
nachar
varchar
nvaarchar
binary
varbbinary
image
clob
blob
xml
json

primary keys are unique
foreign must reference a primary key that already exists

multiplicity:
1:1
1:N
N:N
any number of users can subscribe to any number of playlists
1 user : n subscriptions n : 1 playlist
*/
drop table song;
drop table album;
drop table artist;



create table artist(
	artist_num int,
	artist_name varchar(40) not NULL,
	year_founded int,
	primary key (artist_num),
);

create table album(
	artist_num int,
	album_num int,
	album_name varchar(40),
	year_made int,
	primary key (album_num),
	foreign key (artist_num) references artist(artist_num)
);

create table song(
	song_num int,
	album_num int,
	song_name varchar(40),
	runtime int,
	primary key (song_num),
	foreign key (album_num) references album(album_num)
);

insert into artist (artist_num, artist_name, year_founded) 
	values 
	(0, 'bjork', 1993),
	(1, 'genesis', 1967);
	

insert into album (album_num, artist_num, album_name, year_made, x)
	values 
	(0, 0, 'post', 1999, 9023),
	(1, 1, 'foxtrot', 1972, 1238),
	(2, 1, 'selling england by the pound', 1973, 2139);
	

insert into song (song_num, album_num, song_name, runtime)
	values 
	(0, 0, 'army of me', 120),
	(1, 0, 'modern things', 120),
	(2, 1, 'get em out by friday', 300),
	(3, 2, 'dancing with the moonlit knight', 400),
	(4, 2, 'i know what i like', 200),
	(5, 2, 'the cinema show', 400);

insert into artist (artist_num, artist_name, year_founded) 
	values
	(2, 'drake', null),
	(3, 'taylor swift', null);


insert into album (album_num, artist_num, album_name, year_made)
	values 
	(3, 2, 'certified lover boy', null),
	(4, 3, 'folklore', null);

select * from artist;

select song_name, runtime from song;

select song_name, runtime from song where runtime >200;

select song_name, runtime from song where (runtime > 200) and (album_num = 2);

select * from (song natural join album);

select * from (album natural join (select * from song where runtime < 350) a);

alter table album add column x int;

alter table song add column x int;

alter table song drop column x;


delete from artist where artist_name = 'drake';

delete from album where artist_num = 2;
delete from album where artist_num = 3;

select * from (album join artist on album.year_made = artist.year_founded);

-- left/right joins, theta joins natural joins, unions, subtraction, division, cross join
-- database normalization

update album set x = 321 where album_num = 2;

select * from (song natural join album) where artist_num = 1 order by year_made asc;

