import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const url = 'https://api.unsplash.com/search/photos?client_id=KQP31iEegDQWe3CuZzYJfepLyJSzJ4lw9Nz4QPDlgyI&query=office';

function Gallery () {
  
  const response = useQuery({
    queryKey: ['images'],
    queryFn: async () => {
      const result = await axios.getUri(url);
      return result.data
    },
  });
  console.log(response);
  
    return(
        <h2>Gallery</h2>
    );
}

export default Gallery