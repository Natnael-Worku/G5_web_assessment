const url = 'https://a2sv-backend.onrender.com/';
export const getAllBlogs = async () => {
  
    try {
      const response = await fetch(`${url}api/blogs`, {
        method: 'GET',
        
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
  
    //   const data = await response.json();
      return response.json();
    } catch (error) {
      console.error('Failed to fetch blogs:', error);
      throw error; // Re-throw the error to handle it further up the call stack if needed
    }
  };
  