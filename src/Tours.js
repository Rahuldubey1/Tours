import react from 'react';
import Tour from './Tour'

const Tours = (tours,removeTour) =>{
    console.log(tours)
    return (
        <section>
            <div className='title'>
                <h2>Ours Tours</h2>
                <div className='underline'></div>  
            </div>
            <div>
                {tours.tours?.map((tour) => {
                    return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>;
                })}  
            </div>
        </section>
    );
};

export default Tours;