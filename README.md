# Graphql Data Covid

Api simples, **Ainda em desenvolvimento**, que disponibiliza dados atualizados em Graphql referente ao Coronavírus.

# Techs

* Deno - 1.0.5
* Denon - https://deno.land/x/denon
* Graphql - https://deno.land/x/oak_graphql
* Brasil.io - Dados obtidos através da API REST do Brasil IO
  * https://brasil.io/covid19/

# Instalação

```
* git clone https://github.com/ademir2011/deno_graphql_data_covid.git
* deno run --allow-net --unstable --allow-read  server.ts
* http://localhost:3000/graphql
```

# Uso

```
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
```

# Licença / Créditos

Os dados convertidos estão sob a licença Creative Commons Attribution ShareAlike. Caso utilize os dados, **cite a fonte original e quem tratou os dados, como: Fonte: Secretarias de Saúde das Unidades Federativas, dados tratados por Álvaro Justen e colaboradores/Brasil.IO. Caso compartilhe os dados, utilize a mesma licença.**