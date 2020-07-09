module.exports = {


  friendlyName: 'Formula',


  description: 'Formula formula.',


  inputs: {

  },


  exits: {
    success: {
      description: 'All done.',
    },
  },


  fn: async function (inputs, exits) {
    const query = {};

    var cantidadEncuestas = await sails.helpers.formulas.n();  //n
    var numerador = 0;
    var denominador = (cantidadEncuestas - 1);//(n-1)
    var arrayResta = [];
    var varianza = 0;

    var preguntas = await Question.find(query);  //listado de preguntas
    var respuestas = await Answer.find(query);    //listado respuestas  */

    for (let index = 0; index < preguntas.length; index++) {
      const X = await sails.helpers.formulas.mediaMuestra(preguntas[index].id); //Media de una pregunta
      for (let r = 0; r < respuestas.length; r++) {

        if (respuestas[r].question == preguntas[index].id) {
          var resta = respuestas[r].answer - X;
          arrayResta.push(resta);
          // console.log(resta+'  numero '+r+': '+respuestas[r].answer +' Y '+X);
          numerador += Math.pow(resta, 2);
          // console.log(numerador+' '+preguntas[index].id);
        }
      }
    }
    varianza = numerador / denominador;
    // All done.
    desviacionEstandar = Math.sqrt(varianza);
    //Coeficeinte de Fisher
    var cofFisher;
    var sumatoria = 0;
    for (let index = 0; index < arrayResta.length; index++) {
      var r = arrayResta[index] / desviacionEstandar;
      sumatoria += Math.pow(r, 3);

    }
    cofFisher = (cantidadEncuestas / (denominador * (cantidadEncuestas - 2)))*sumatoria;
    return exits.success({ n:cantidadEncuestas,
                           varianz: varianza,
                           desvEstan:desviacionEstandar,
                           coeficenteF:cofFisher });

  }


};
