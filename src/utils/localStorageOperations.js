export const saveToLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log('error:', error);
    console.log('error.message:', error.message);
  }
};

export const loadFromLocalStorage = key => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.log('error:', error);
    console.log('error.message:', error.message);
  }
};

export const removeFromLocalStorage = key => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log('error:', error);
    console.log('error.message:', error.message);
  }
};
