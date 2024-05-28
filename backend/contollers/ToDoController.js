const ToDoModel = require("../model/ToDoModel");

module.exports.getToDo = async (req, res) => {
  const { user_id } = req.query;

  const todo = await ToDoModel.find({ user_id }).sort({ createdAt: -1 });
  res.send(todo);
};

module.exports.saveToDo = (req, res) => {
  const { text, user_id } = req.body;

  ToDoModel.create({ text, user_id })
    .then((data) => {
      console.log("Added Successfully...");
      console.log(data);  
      res.send(data);
    })
    .catch((err) => console.log(err));
};

module.exports.deleteToDo = (req, res) => {
  const id = req.params.id;

  console.log("id ---> ", req.body.data);

  ToDoModel.findByIdAndDelete(id)
    .then(() => res.set(201).send("Deleted Successfully..."))
    .catch((err) => console.log(err));
};

module.exports.updateToDo = (req, res) => {
  const { _id, text } = req.body;

  ToDoModel.findByIdAndUpdate(_id, { text })
    .then(() => res.set(201).send("Updated Successfully..."))
    .catch((err) => console.log(err));
};










// const ToDoModel = require("../model/ToDoModel");

// module.exports.getToDo = async (req, res) => {
//   try {
//     const { user_id } = req.query;
//     const todo = await ToDoModel.find({ user_id }).sort({ createdAt: -1 });
//     res.status(200).send(todo);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error retrieving To-Do items.");
//   }
// };

// module.exports.saveToDo = async (req, res) => {
//   try {
//     const { text, user_id } = req.body;
//     const newToDo = await ToDoModel.create({ text, user_id });
//     console.log("Added Successfully...");
//     console.log(newToDo);
//     res.status(201).send(newToDo);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error saving To-Do item.");
//   }
// };

// module.exports.deleteToDo = async (req, res) => {
//   try {
//     const { id } = req.params;
//     await ToDoModel.findByIdAndDelete(id);
//     res.status(200).send("Deleted Successfully...");
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error deleting To-Do item.");
//   }
// };

// module.exports.updateToDo = async (req, res) => {
//   try {
//     const { _id, text } = req.body;
//     await ToDoModel.findByIdAndUpdate(_id, { text }, { new: true });
//     res.status(200).send("Updated Successfully...");
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error updating To-Do item.");
//   }
// };













