import collectionData from "../api/collectionData.json"
import { SeriesCard } from "./SeriesCard";

const NetflixSeries = () => {
  return (
    <ul className="grid grid-three--cols">
      {collectionData.map((curValue) => 
      (<SeriesCard key={curValue.id} curValue = {curValue}/>))}
  
    </ul>
  );
}


// import collectionData from "../api/collectionData.json";

// const NetflixSeries = () => {
//   return (
//     <ul>
//       {collectionData.map(({ id, img_url, name, rating, description, genre, cast, watch_url }) => (
//         <li key={id}>
//           <div>
//             <img src={img_url} alt={name} width="400" height="400" />
//             <h2>Name: {name}</h2>
//             <h3>Rating: {rating}</h3>
//             <p>Summary: {description}</p>
//             <p>Genre: {genre}</p>
//             <p>Cast: {cast}</p>
//             <a href={watch_url} target="_blank" rel="noopener noreferrer">
//               <button>Watch Now</button>
//             </a>
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// };




export default NetflixSeries;