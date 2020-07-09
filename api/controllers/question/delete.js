module.exports = {


  friendlyName: 'Delete',


  description: 'Delete question.',


  inputs: {
    id: {
      type: 'string',
      description: 'Question identifier.',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs, exists) {
    var question = await Question.findOne({
      id: inputs.id
    });
    var questionDeleted;
    var message = '';

    if (!question) {
      questionDeleted = { " ": " " };
      this.message = 'La pregunta no se borro porque no existe';
    }
    else {
      var criteria = { id: inputs.id };
      questionDeleted = await User.destroyOne(criteria).fetch();
      this.message = 'La pregunta se borro satisfactoriamente';
    }

    // All done.
    return exits.success({ "questionDeleted": questionDeleted, "message": message });

  }


};
