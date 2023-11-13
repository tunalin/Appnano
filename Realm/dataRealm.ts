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
    primaryKey: 'product_id',
    properties: {
      product_id: 'string',
      product_name: 'string',
      price: 'double',
      soluong: 'int',
    },
  };

  const realmData = new Realm ({schema: [TaskSchema,CartItemSchema]})

  export default realmData