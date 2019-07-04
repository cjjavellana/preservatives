use ServiceMonitor;
drop table if exists users;
create table users (
    id int not null auto_increment,
    username varchar(16) not null,
    password varchar(512) not null,
    first_name varchar(128) not null,
    last_name varchar(128) null,
    created_by varchar(16) not null default 'SYSTEM',
    created_date timestamp not null default now(),
    updated_by varchar(16) null,
    updated_date timestamp null,
    UNIQUE KEY(username),
    PRIMARY KEY(id)
);