import {IResolvers} from '@graphql-tools/utils';
import { CartoonDataSource } from '../../datasource';

const resolver: IResolvers = {
    Query: {
        hello(_, { name }){
            return name ? `Hola, ${name}!` : "Hola, Gente!";
        },
        getCartoons(){
            return CartoonDataSource;
        }
    }
}



export default resolver;