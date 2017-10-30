SELECT inquiryid, i.userid, istest, date, company, email, username, firstname, lastname, phonenumber FROM inquiries i JOIN users u ON i.userid=u.userid WHERE isarchived = FALSE;
