import "../tours/Tours.css"

const Tours = (props) =>{
  return(
      <>
      {
          props.tours.map(tour => {
              return(
                  <div className="stock-container">
                  <div class="card"> 
                      <h3>{tour.name}</h3>
                      <img src={tour.image} alt="" />                                                                      
                  </div>
                  </div>
              )
              
          })
      }
      </>
      
      
  )
};

export default Tours;