let token = '6ac76864df4b3a73b807a72f1d626e9341269cd89fac21dc';

export const server_calls = {
    get: async () => {
      const response = await fetch(`https://car-api-francis.herokuapp.com/api/cars`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `Bearer ${token}`
        },
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch data from server");
      }
  
      return await response.json();
    },
    create: async(data: any = {}) => {
      const response = await fetch(`https://car-api-francis.herokuapp.com/api/cars`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `Bearer ${token}`
        },
        body: JSON.stringify(data)
      });
      if (!response.ok){
        throw new Error("Failed to fetch data from server");
      }
  
      return await response.json();
    },
  
    update: async(id:string, data:any = {}) => {
      const response = await fetch(
        `https://car-api-francis.herokuapp.com/api/cars/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": `Bearer ${token}`
          },
          body: JSON.stringify(data),
        }
      );
    },
    delete: async (id: string) => {
      const response = await fetch(
        `https://car-api-francis.herokuapp.com/api/cars/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": `Bearer ${token}`,
          },
        }
      );
    },
  };