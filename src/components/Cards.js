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
                            src="/images/img-9.jpg" 
                            text="Explore the deep insided the Amazon Jungle"
                            label='Luxury'
                            path='/service'
                        />                                              
                    </ul>
                    <ul className="cards__items">
                        {/*Gonna put the <li> element created in CardItem.js here */}
                        <CardItem
                            src="/images/img-9.jpg" 
                            text="Explore the hidden waterfall deep insided the Amazon Jungle"
                            label='Adventure'
                            path='/service'
                        />
                        <CardItem
                            src="/images/img-2.jpg" 
                            text="Explore the hidden waterfall deep insided the Amazon Jungle"
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
