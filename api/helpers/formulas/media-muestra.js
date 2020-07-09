module.exports = {


  friendlyName: 'Media muestra',


  description: 'Suma todos los puntos de datos, luego divídela por la cantidad de puntos de datos',


  inputs: {
    question: {
      type: 'string',
      description: 'Id de la pregunta a la que se le va hallar la Media',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs,exits) {
    // TODO
    var X= await Answer.avg('answer').where({question: inputs.question}); //Media de una sola pregunta
    
    return exits.success(X);
  }


};

