// export const storeData = async (storageKey, value) => {
//   try {
//     const jsonValue = JSON.stringify(value);
//     await localStorage.setItem(storageKey, jsonValue);
//   } catch (error) {
//     console.log("Error save data in local storage");
//   }
// };

// export const getData = (storageKey) => {
//   try {
//     const jsonValue = localStorage.getItem(storageKey);
//     return jsonValue != null ? JSON.parse(jsonValue) : null;
//   } catch (error) {
//     console.log("Error get data in local storage");
//   }
// };
