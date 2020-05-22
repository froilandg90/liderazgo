// Figure out if USER exists
// api/helpers/user/existUser
module.exports={

friendlyName:'This user exists',
description:'Figure out if the user exists in DB',

inputs:{
    user:{type:'string',regex:/([a-z0-9]{5,10})$/} //Verificame la expresion regular letras primero en minuscula y luego numero minimo 5 caracteres maximo 10
},
exits:{
    success:{
         outputFriendlyName:'User exist'
    },
    noUsersFound:{
        return:'false'
    }
},
fn: async function(inputs,exits)
{
    const user=await User.findOne({user:inputs.user});
    if (!user) {
        return exits.noUsersFound;
    }
    return exits.success(user);
}

};