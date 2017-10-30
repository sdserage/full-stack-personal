SELECT * FROM inquiryitems ii JOIN inquiries i ON ii.inquiryid = i.inquiryid WHERE isarchived = FALSE && inquiryid = $1;
