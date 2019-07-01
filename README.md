# Preservatives

Script your mundane tasks away, focus on the next big thing

## Prerequisites

1. docker & docker-compose

## Integration Test

1. Starting the Integration Test Database

```bash
$ docker-compose up -d db
Creating preservatives_db_1 ... done
Attaching to preservatives_db_1
db_1  | Initializing database
db_1  | 2019-06-30T14:23:22.127423Z 0 [Warning] [MY-011070] [Server] 'Disabling symbolic links using --skip-symbolic-links (or equivalent) is the default. Consider not using this option as it' is deprecated and will be removed in a future release.
db_1  | 2019-06-30T14:23:22.127552Z 0 [System] [MY-013169] [Server] /usr/sbin/mysqld (mysqld 8.0.16) initializing of server in progress as process 31
db_1  | 2019-06-30T14:23:26.107782Z 5 [Warning] [MY-010453] [Server] root@localhost is created with an empty password ! Please consider switching off the --initialize-insecure option.
...
```
