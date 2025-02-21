export const SeriesCard = (props) => {
        const {name, id, img_url, rating, genre, cast, description, watch_url} = props.curValue


         const btn_style = {
          padding:"1.2rem",
          border:"none",
          fontSize:"1.6rem",
          backgroundColor:"var(--bnt-hover-bg-color)",
          color:"var(--bg-color)"
        
         };

        return (
          <li className="card">
            <div>
              <img src={img_url}
                alt={name}
                width="400"
                height="400" />
            </div>
            <div className="card-content">
            <h2>Name:{name}</h2>
            <h3>rating:{rating}</h3>
            <p>Summary:{description} </p>
            <p>Genre:{genre}</p>
            <p>Cast:{cast}</p>
            <a href={watch_url} target="_blank">
              <button style={btn_style}>Watch Now</button>
            </a>
            </div>
          </li>
        );
      }
      