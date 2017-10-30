module.exports = {
  createInquiry: (req, res, next) => {
    const db = req.app.get('db');
    const {
      userid,
      itemList
    } = req.body;

    const today = new Date();
    const date = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;

    db.add_inquiry([userid, date])
      .then(id => {
        itemList.map(item => {
          const {inquiryid} = id[0];
          switch(item.itemtype){
            case "Valve":
              db.create_valve([
                inquiryid,
                item.itemtype,
                item.media,
                item.temperature,
                item.pressure,
                item.pipesize,
                item.pipesizeadditionalinfo,
                item.additionaliteminfo
              ]);
              break;
            case "Instrumentation":
              db.create_instrumentation([
                inquiryid,
                item.itemtype,
                item.media,
                item.temperature,
                item.pressure,
                item.pipesize,
                item.pipesizeadditionalinfo,
                item.additionaliteminfo
              ]);
              break;
            case "Dust Collector":
              db.create_dust_collector([
                inquiryid,
                item.itemtype,
                item.particulatetype.toString(),
                item.particulatesize,
                item.temperature,
                item.additionaliteminfo
              ]);
              break;
            case "Actuator":
              db.create_actuator([
                inquiryid,
                item.itemtype,
                item.valvesize,
                item.torque,
                item.valvedescription,
                item.stemdimensions,
                item.returntype,
                item.additionaliteminfo
              ]);
              break;
            default:
              break;
          }
        });
        //req.body = {inquiryid: id[0].inquiryid, itemList};
        //res.status(200).send(req.body);
      })
      .catch(err => {
        res.status(500).send();
      })
  },
  getInquiryItems: (req, res, next) => {
    const db = req.app.get('db');
    db.get_inquiry_items()
      .then(items => res.status(200).send(items))
      .catch(err => res.status(500).send(err));
  },
  getInquiries: (req, res, next) => {
    const db = req.app.get('db');
    db.get_inquiries()
      .then(inquiries => res.status(200).send(inquiries))
      .catch(err => res.status(500).send(err));
  }
};
