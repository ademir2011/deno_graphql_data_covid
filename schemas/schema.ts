import { gql } from "https://deno.land/x/oak_graphql/mod.ts";

const schema = (gql as any)`
    type Coronadata {
        city: String
        city_ibge_code: String
        confirmed: Int
        confirmed_per_100k_inhabitants: Float
        date: String
        death_rate: Float
        deaths: Int
        estimated_population_2019: Int
        is_last: Boolean
        order_for_place: Int
        place_type: String
        state: String
    }

    type Query {
        coronadados(estado: String, cidade: String, data: String): [Coronadata]
    } 
`;

export { schema };
