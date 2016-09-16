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
	available boolean not null,
	create_date DATE
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

create table board(
	id int not null auto_increment primary key,
	admin_id int not null,
	title varchar(200),
	description TEXT,
	create_date DATE,
	update_date DATE,
	delete_date DATE,
	available boolean not null,
	FOREIGN KEY (admin_id) REFERENCES user(id) ON DELETE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

create table guest(
	id int not null auto_increment,
	board_id int not null,
	user_id int not null,
	join_date DATE,
	PRIMARY KEY (id),
	FOREIGN KEY (board_id) REFERENCES board(id) ON DELETE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

select * from board where id = (select board_id from guest where user_id = ?)

insert into user(userID, password, email, available, create_date) values('jumpegg', '870915', 'jumpegg@naver.com',true, now());
insert into user(userID, password, email) values('wonny', 'wonny', 'wonny@naver.com');

/*테이블 구조 보기*/
desc board;