create table products(
id int not null auto_increment primary key,
name varchar(50) not null,
modelnumber varchar(15) not null,
series varchar(30) not null
);

create table user(
	id int not null auto_increment primary key,
	userID varchar(100) not null,
	password varchar(100) not null,
	email varchar(100) not null,
);

create table board(
	id int not null auto_increment primary key,
	admin_id int not null,
	title varchar(200),
	description TEXT,
	create_date DATE,
	update_date DATE,
	delete_date DATE,
	FOREIGN KEY(`admin_id`) REFERENCES user(`id`) ON DELETE CASCADE
);

/*에러발생 원인 모름*/
create table guest(
	id int not null auto_increment primary key,
	board int not null,
	user_id int not null,
	FOREIGN KEY('board') REFERENCES board('id') ON DELETE CASCADE
);

/*외래키 없이 생성*/
create table guest(
	id int not null auto_increment primary key,
	board int not null,
	user_id int not null
);

insert into user(userID, password, email) values('jumpegg', '870915', 'jumpegg@naver.com');
insert into study(admin_id, create_date) values(1, now());

/*테이블 구조 보기*/
desc board;