import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        {/*Gonna put the <li> element created in CardItem.js here */}
                        <CardItem
                            src="/images/img-9.jpg" 
                            text="Explore the hidden waterfall deep insided the Amazon Jungle"
                            label='Adventure'
                            path='/service'
                        />
                        <CardItem
                            src="/images/img-2.jpg" 
                            text="Travel through the Islands of Bali in a Private Cruise"
                            label='Luxury'
                            path='/service'
                        />                                              
                    </ul>
                    <ul className="cards__items">
                        {/*Gonna put the <li> element created in CardItem.js here */}
                        <CardItem
                            src='images/img-3.jpg'
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Adventure'
                            path='/service'
                        />
                        <CardItem
                            src='images/img-4.jpg'
                            text='Experience Football on Top of the Himilayan Mountains'
                            label='Luxury'
                            path='/service'
                        />            
                        <CardItem
                            src='images/img-8.jpg'
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Luxury'
                            path='/service'
                        />                                                             
                    </ul>                    
                </div>
            </div>
            
        </div>
    )
}

export default Cards
