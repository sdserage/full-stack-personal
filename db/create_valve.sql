INSERT INTO inquiryitems (
  inquiryid,
  itemtype,
  media,
  temperature,
  pressure,
  pipesize,
  pipesizeadditionalinfo,
  additionaliteminfo
)
VALUES($1,$2,$3,$4,$5,$6,$7,$8);
