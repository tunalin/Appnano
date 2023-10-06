import Realm from "realm";

 const TaskSchema= {
    name: 'historySearch',
    primaryKey: 'id',
    properties: {
      id: 'int',
      name: 'string',
     
    },
  };

  const CartItemSchema = {
    name: 'CartItem',
    primaryKey: 'id',
    properties: {
      id: 'string',
      ten: 'string',
      gia: 'string',
      soluong: 'int',
    },
  };

  const realmData = new Realm ({schema: [TaskSchema,CartItemSchema]})

  export default realmData