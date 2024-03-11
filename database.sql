-- Active: 1707508737568@@127.0.0.1@5432@sastraku

SELECT * FROM pg_tables WHERE schemaname = 'public'
-- CREATE USER TABL
CREATE TABLE users (
    id_user SERIAL PRIMARY KEY, username VARCHAR NOT NULL, password VARCHAR NOT NULL, ttl VARCHAR NOT NULL
);