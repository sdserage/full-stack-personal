INSERT INTO Users(UserName, Email, AuthID)
VALUES ($1, $2, $3)
RETURNING *;
