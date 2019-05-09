INSERT INTO users
    (first_name, last_name, authid, created_at)
VALUES
    ($1, $2, $3, CURRENT_TIMESTAMP)
RETURNING *;