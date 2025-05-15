const API_URL = 'http://localhost:3000/counter';

export const fetchCounter = async (): Promise<number> => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.counter;
  } catch (error) {
    console.error('Error fetching counter:', error);
    return 0;
  }
};

export const incrementCounter = async (): Promise<number> => {
  try {
    const response = await fetch(`${API_URL}/increment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data.counter;
  } catch (error) {
    console.error('Error incrementing counter:', error);
    return 0;
  }
};

export const resetCounter = async (): Promise<number> => {
  try {
    const response = await fetch(`${API_URL}/reset`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data.counter;
  } catch (error) {
    console.error('Error resetting counter:', error);
    return 0;
  }
};