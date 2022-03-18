export const undefinedArray = [null, undefined, ""];

export function getFromSession(key: string): {
  success: boolean,
  result?: any;
} {
  const result = localStorage.getItem(key);
  if (undefinedArray.indexOf(result) === -1) {
    return {
      success: true,
      result
    };
  }
  return {
    success: false
  };
}

export function setLocalItem (key: string, value: string) {
  if (key !== "" && value !== "") {
    localStorage.setItem(key, value);
  }
}

export const clearLocalStorage = () => {
  localStorage.clear();
};