import { Realm } from "@realm/react";
import realmData from "./dataRealm";


export const addTask = (name: string) => {
  const data = {
    id: new Date().getTime(),
    name,
  }
  return new Promise((resolve: any) => {
    realmData.write(() => {
      realmData.create('historySearch', data);
      resolve();
    })
  })
};

export const deletetask = (idToDelete: number) => {
  return new Promise((resolve: any) => {
    const itemToDelete = realmData.objectForPrimaryKey('historySearch', idToDelete);
    if (itemToDelete) {
      realmData.write(() => {
        realmData.delete(itemToDelete);
        resolve();
      });
    } else {
      console.error(`Không tìm thấy mục với id ${idToDelete} để xóa`);
      resolve();
    }
  });
};

export const addToCart = (product_id: string, product_name: string, price: number, soluong: number) => {
  const existingCartItem: any = realmData.objects('CartItem').filtered(`product_id = '${product_id}'`)[0];
  return new Promise((resolve: any) => {
    realmData.write(() => {
      if (existingCartItem) {
        // Update the existing object
        existingCartItem.soluong += soluong;
      } else {
        // Create a new object
        realmData.create('CartItem', {
          product_id,
          product_name,
          price,
          soluong,
        });
      }
      resolve();
    });
  });
};

export const updateSp = (product_id: string, soluong: number) => {
  if (realmData) {
    const taskToUpdate: any = realmData.objects('CartItem').filtered(`product_id = '${product_id}'`)[0];
    if (taskToUpdate) {
      realmData.write(() => {
        taskToUpdate.soluong = soluong
        console.log("Updated cart item:", taskToUpdate);
      });
    }
  }
};

export const deleteSp = (product_id: string) => {
  return new Promise((resolve, reject) => {
    realmData.write(() => {
      const itemToDelete = realmData.objectForPrimaryKey('CartItem', product_id);
      if (itemToDelete) {
        realmData.delete(itemToDelete);
        resolve('Deleted successfully'); 
      } else {
        reject('Item not found'); 
      }
    });
  });
};

export const deleteAllHistory = () => {
  return new Promise((resolve: any) => {
    const historySearchResults = realmData.objects('historySearch');
    realmData.write(() => {
      realmData.delete(historySearchResults);
    });
    resolve();
  });
}