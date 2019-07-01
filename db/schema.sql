use ServiceMonitor;
drop table if exists users;
create table users (
    id int not null auto_increment,
    PRIMARY KEY(id)
);