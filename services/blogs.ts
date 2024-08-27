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
  
export const fetchSingleBlog = async (blogId: string) => {
  // const url = `https://a2sv-backend.onrender.com/api/blogs/${blogId}`;
  
  try {
      const response = await fetch(`${url}api/blogs/${blogId}`, {
          method: 'GET', // Specify the request method
          // headers: {
          //     'Content-Type': 'application/json', // Set the content type
          //     // Add any additional headers if needed, such as authorization
          // }
      });

      if (!response.ok) {
          // Handle non-2xx HTTP responses
          throw new Error(`HTTP error! Status: ${response.status}`);
      }


      return response.json();

  } catch (error) {
      // Handle any errors that occur during fetch or response processing
      console.error('Failed to fetch single blog:', error);
      return null; // Return null or handle the error as needed
  }
};