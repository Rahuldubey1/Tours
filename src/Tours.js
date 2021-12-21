import react, {useState, useEffect} from 'react';
import Tour from './Tour'

const Tours = ({ tours,removeTour,unlikedTours,addTours }) =>{    
    const [isSubmit, setIsSubmit] = useState(false);
    const [notLiked, setNotLiked] = useState();
    
    useEffect(() =>{
      setNotLiked(unlikedTours);
      });

    const moveAll = () => {
        console.log(tours)
        setNotLiked(tours);
        setIsSubmit(true);
        console.log(notLiked);
    }
    return (
        <section>
            <div>
                <div className='title'>
                    <h2 className={isSubmit? '' : 'active'}onClick={()=>setIsSubmit(false)}>Ours Tours</h2>
                    <h2 className={isSubmit? 'active' : ''}onClick={()=>setIsSubmit(true)}>Show not interested</h2>
                    <h2 onClick={moveAll}>Move all to not interested</h2>
                </div>
                {isSubmit ? 
                <div>111
                    {notLiked.length>0 ?
                        <div>
                            {notLiked.map((tour) => {
                                return <Tour key={tour.id} {...tour} isSubmit={isSubmit} removeTour={removeTour} addTours={addTours} tours={notLiked}></Tour>;
                            })}  
                        </div>
                        :
                        <div className='no-tour'>
                            <h1>No Tours Found</h1>
                        </div>
                    }
                </div>
                :
                <div>222
                    {tours.length>0 ? 
                        <div>
                            {tours.map((tour) => {
                                return <Tour key={tour.id} {...tour} isSubmit={isSubmit} removeTour={removeTour} addTours={addTours} tours={tours}></Tour>;
                            })}
                        </div>
                        :
                        <div className='no-tour'>
                            <h1>No Tours Found</h1>
                        </div>
                    }  
                </div> 
                }
            </div>
        </section>
    );
};

export default Tours;