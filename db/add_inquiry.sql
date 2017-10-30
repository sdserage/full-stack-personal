INSERT INTO inquiries (userid, date) VALUES($1,$2) RETURNING inquiryid;
