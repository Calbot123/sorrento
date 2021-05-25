import '../styles/Apartment.css'
import { Banner } from './Banner'
import BannerImage from '../banners/apartment-banner-image.jpg'

export function Pricing( props ){
    return(
        <div className="pricing">
            <Banner image={BannerImage} text="Sorrento Apartment" />
            <h2>Pricing</h2>
            <div className= "content">
            <p>Winter</p>
            <li>The pricing is for 2 people.</li>
            <li>1st June - August 31st</li>
            <li>The apartment is strictly non-smoking</li>
            <li>$200 per night</li>
            <p>Summer</p>                                                                                           
            <li>Terms and Conditions</li>
            <li>1st September - December 18th</li>
            <li>1st February - 31st May</li>
            <li>Total amount is payable upon booking.</li>
            <li>$220 per night</li>
            <li>A full refund will be given prior to 30 days cancellation</li>                                                                                                          
            <li>50% refund will be given after 30 days of cancellation.</li>                                                                                                            
            <li>In the event of a weekly or monthly booking the apartment will be serviced weekly unless by prior arrangement.</li>
            <li>Weekly Price     $1,250</li>
            <li>Monthly Price $5,400</li>                                                                              
            <li>BOOK NOW</li> 

            </div>
        </div>
    )
}
export default Pricing