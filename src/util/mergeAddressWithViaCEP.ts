
import axios from 'axios';

import { Model } from 'sequelize';

import { ViaCepResult } from "../middlewares/validateAddressMiddleware";



function mergeAddressWithViaCEP(data: Model<any,any>) {
    return new Promise( async (resolve, reject) => {
        try {
            const url = `https://viacep.com.br/ws/${data.getDataValue('cep')}/json/`
            const address = await axios.get<ViaCepResult>(url);

            resolve({
                id: data.getDataValue('id'),
                name: data.getDataValue('name'),
                cpf: data.getDataValue('cpf'),
                cep: data.getDataValue('cep'),
                number: data.getDataValue('number'),
                complement: data.getDataValue('complement'),
                references: data.getDataValue('references'),
                user_id: data.getDataValue('user_id'),

                city: address.data.localidade,
                state: address.data.uf,
                neighborhood: address.data.bairro,
                street: address.data.logradouro
            });
        } catch(err) {
            reject(err);
        }
    });
}

export default mergeAddressWithViaCEP;
