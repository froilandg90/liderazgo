module.exports = {


  friendlyName: 'N',


  description: 'Cantidad de Encuestas',


  inputs: {

  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs, exits) {
    const query = {};
    var cantidadA= await Answer.count(query);    //Cantidad Repuestas
    var cantidadP= await Question.count(query);  //Cantidad Preguntas  
    var cantidadE= cantidadA/cantidadP;          //Cantidad Encuestas
    return exits.success(cantidadE);
  }


};

