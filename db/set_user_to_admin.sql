UPDATE Users
SET isEmployee=TRUE, isAdmin=TRUE
WHERE UserID = $1;
