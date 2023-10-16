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

export const addToCart = (id: string, soluong: number, ten: string, gia: number) => {
  const Data = {
    id,
    soluong,
    ten,
    gia,
  }
  return new Promise((resolve: any) => {
    realmData.write(() => {
      // Tạo mới sản phẩm trong giỏ hàng nếu chưa tồn tại.
      realmData.create('CartItem', Data)
      resolve();
    })

  });
};

export const updateSp = (id: string, soluong: number) => {
  if (realmData) {
    const taskToUpdate: any = realmData.objects('CartItem').filtered(`id = '${id}'`)[0];
    if (taskToUpdate) {
      realmData.write(() => {
        taskToUpdate.soluong = soluong
        console.log("Updated cart item:", taskToUpdate);
      });
    }
  }
};

export const deleteSp = (id: string) => {
  return new Promise((resolve, reject) => {
    realmData.write(() => {
      const itemToDelete = realmData.objectForPrimaryKey('CartItem', id);
      if (itemToDelete) {
        realmData.delete(itemToDelete);
        resolve('Deleted successfully'); // Trả về một chuỗi (string) để xác nhận việc xóa thành công
      } else {
        reject('Item not found'); // Trả về một chuỗi (string) để xác nhận lỗi
      }
    });
  });
};

