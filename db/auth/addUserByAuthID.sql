INSERT INTO users
    (authid, first_name, last_name, created_at)
VALUES
    ($1, $2, $3, CURRENT_TIMESTAMP)
RETURNING *;