UPDATE Users
SET isEmployee=TRUE, isAdmin=FALSE
WHERE UserID = $1;
