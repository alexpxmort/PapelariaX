    /**
 *Parte com metodos de CRUD que comunica com a api em SpringBoot
 * 
 */

 import axios from 'axios'

 const request = {
    "URL_DEV":'http://localhost:8080/'
}

let api = axios.create({
  baseURL: request.URL_DEV, 
  withCredentials: false,
  headers: {
    'Access-Control-Allow-Origin' : '*',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    }
  ,
  validateStatus: (status) => status < 500
});


export const createMethod = async (data,path)=>{
   const resp = await fetch(`${request.URL_DEV}api/${path}/create`,
   {
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       method: "POST",
       body: JSON.stringify(data)
   });

  let json = await  resp.json();

  return json;

}

export const updateMethod = async (data,path,id)=>{
  const resp = await api.put(`api/${path}/${id}`,
  data
 );

 return resp.data;
}

  export const getAllMethod = async (path)=>{
    const resp = await api.get(`api/${path}/all`);

   return await resp.data;
    
  };


  export const getByIdMethod = async (path,id)=>{
    const resp = await api.get(`api/${path}/find/${id}`);

    return await resp.data;
  };

  export const deleteMethod = async (path,id)=>{

    const resp = await api.delete(`api/${path}/${id}`);

    return resp.data;

  };