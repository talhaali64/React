import React from 'react'
import { Carousel } from 'react-bootstrap';
const About = () => {
    return (
        <div className='cont'>
         
            <Carousel fade>
  <Carousel.Item interval={300}>
    <img
     
      src="https://images.pexels.com/photos/2194261/pexels-photo-2194261.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      alt="Cat"
      height="400" 
    />
    <Carousel.Caption>
      <h3>Kitten</h3>
    
    </Carousel.Caption>
  </Carousel.Item >
  <Carousel.Item interval={300}>
    <img
      
      src="https://images.pexels.com/photos/63853/guinea-pig-sea-pig-house-cute-guinea-pig-house-63853.jpeg?auto=compre"
      alt="Guinea Pig"
      height="400" 
    />

    <Carousel.Caption>
      <h3>Guinea Pig</h3>
   
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={300}>
    <img
     
     src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
      alt="Dog"
      height="400" 
    />

    <Carousel.Caption>
      <h3>Dog</h3>
    
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>  <h1 className="text-center">About</h1>
            <p>Organization Name</p>


 <p>Established in 1986, ‘Organization Name’ , Inc. is the biggest strength pet retailer of administrations and answers for the lifetime needs of pets. At ‘Organization Name’ , we cherish pets, and we trust pets improve us as individuals. Consistently with each association, ‘Organization Name’ ‘s enthusiastic partners help convey pet guardians closer to their pets so they can live progressively satisfied lives. This vision impacts all that we improve the situation our clients, the manner in which we bolster our partners, and how we offer back to our networks. </p>

<p >We utilize around 56,000 partners and work in excess of 1,650 pet stores in the United States, Canada and Puerto Rico just as more than 200 in-store ‘Organization Name’ PetsHotel puppy and feline boarding offices. ‘Organization Name’ gives a wide scope of competitively estimated pet sustenance and items and offers one of a kind pet administrations including preparing, pet prepping, boarding, ‘Organization Name’ Doggie Day Camp and in-store pet receptions.</p>

<p >Master veterinarian care is accessible in huge numbers of our stores, where a hospital, works full-benefit pet healing facilities. These in-store pet doctor’s facilities work freely of ‘Organization Name’ and utilize veterinarians who give a full scope of social insurance and crisis administrations. ​</p>

<p c>‘Organization Name’ , together with non-benefits ‘Organization Name’ Charities and ‘Friends Name’ Charities of United States, welcome in excess of 3,700 creature welfare associations to bring adoptable pets into stores so they have the most obvious opportunity conceivable of finding an eternity home. Through this in-store selection program and other mark occasions, ‘Organization Name’ has encouraged in excess of 8 million appropriations – more than some other physical association.</p>
        


        </div>
    )
}

export default About
