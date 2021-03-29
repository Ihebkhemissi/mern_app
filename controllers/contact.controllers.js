const Contact = require("../models/Contact");

exports.getAllContact = async (req, res) => {
  try {
    const getAllcontacts = await Contact.find(req.body);
    res.status(200).send({
      response: getAllcontacts,
      msg: "getting contacts successfully",
    });
  } catch (error) {
    res.status(400).send(`error ${errors}`);
  }
};

exports.postContact = async (req, res) => {
  try {
    console.log(req.body);
    const newContact = new Contact({ ...req.body });
    if (!req.body.email) {
      res.status(400).send({ msg: "email is required" });
      return;
    }
    const contact = await Contact.findOne({ email: req.body.email });
    if (contact) {
      res.status(400).send("this email already existed");
      return;
    }
    const response = await newContact.save();
    res.status(200).send({ msg: "contact added ", response: response });
  } catch (error) {
    res.status(400).send(`error : ${error}`);
  }
};

exports.deleteContact = async (req, res) => {
  try {
    const contactdeleted = await Contact.deleteOne({ _id: req.params.id });
    console.log(contactdeleted);
    contactdeleted.n
      ? res.send({ msg: "contact deleted" })
      : res.send({ msg: "contact is alreay been deleted" });
  } catch (error) {
    res.status(400).send(`error: ${error}`);
  }
};

exports.putContact = async (req, res) => {
  try {
    const updateContact = await Contact.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    updateContact.nModified
      ? res.send({ msg: "contact updated" })
      : res.send({ msg: "contact is already updated" });
  } catch (error) {
    res.status(400).send(`error updating : ${error}`);
  }
};
