create table annonce
(
    annonce_id   SERIAL PRIMARY KEY,
    title        VARCHAR(255) NOT NULL,
    description  TEXT         NOT NULL,
    category     VARCHAR(100) NOT NULL,
    price        INTEGER      NOT NULL,
    localisation VARCHAR(255) NOT NULL,
    posted_at    DATE         NOT NULL,
    image        oid
);