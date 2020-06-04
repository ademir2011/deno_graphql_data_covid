import { dadosCorona } from "../controller/api.ts";

const resolvers = {
  Query: {
    coronadados: async (
      _: any,
      { estado, cidade, data }: {
        estado: String;
        cidade: String;
        data: String;
      },
    ) => {
      console.log(estado, cidade, data);
      return await dadosCorona(estado, cidade, data);
    },
  },
};

export {
  resolvers,
};
