UPDATE Users
SET isEmployee=FALSE, isAdmin=FALSE
WHERE UserID = $1;
