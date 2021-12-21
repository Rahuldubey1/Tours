import react, { useState }from "react";

const Tour = ({ id,image,info,price,name,removeTour,isSubmit,addTours,tours}) => {
    console.log(tours.length)
    const [readMore, setReadMore] = useState(false);
    return <article className="single-tour">
        <img src={image} alt={name} />
        <footer>
            {tours.length>0 ? 
                <div>
                    <div className="tour-info">
                        <h4>{name}</h4>
                        <h4 className="tour-price">${price}</h4>
                    </div>
                    <p>{readMore ? info : `${info.substring(0,200)}...`}</p>
                    <button onClick={()=>setReadMore(!readMore)}> 
                        {readMore?'Show less':'Read more'}
                    </button>
                    {isSubmit ? 
                    <button className="delete-btn" onClick={()=>addTours(id)}>Interested</button>
                    :
                    <button className="delete-btn" onClick={()=>removeTour(id)}>Not interested</button>
                    }
                </div>
                :
                <div>
                    <h1>No Tours found</h1>
                </div>
            }
        </footer>
    </article>
};

export default Tour