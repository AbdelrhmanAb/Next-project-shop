import axios from "axios";
import { number } from "framer-motion";

export  interface Tpost {
  id: number;
  title: string;
  body: string;
  [key: string]: unknown;
}

export const postsList = async (): Promise<Tpost[]> => {

  try {

    const res = await axios.get(
      "http://localhost:3000/api/posts",
      {
        timeout: 8000,
      }
    );


    return res.data.Data;

  } catch (err) {

    console.log("Fetch failed:", err);

    throw new Error(`Fetch failed: ${err}`);
  }
};


export const getPostById = async(id:string)=>{

    // console.log('id ==========>> '+id);

   const post =await axios.get(`http://localhost:3000/api/posts/${id}`);
  
  //  console.log(' ====================================')
    // console.log(post.data.post );
    
    return post.data


    // console.log(post );
}


