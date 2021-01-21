import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Get your GOLDEN TICKET today!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        {/*Gonna put the <li> element created in CardItem.js here */}
                        <CardItem
                            src="/images/img-9.jpg" 
                            text="Cruise around the spectacular and unique karst landscape of Halong Bay"
                            label='Luxury'
                            path='/services'
                        />
                        <CardItem
                            src="/images/img-2.jpg" 
                            text="Uncover the world’s largest cave: Son Doong"
                            label='Adventure'
                            path='/services'
                        />                                              
                    </ul>
                    <ul className="cards__items">
                        {/*Gonna put the <li> element created in CardItem.js here */}
                        <CardItem
                            src='images/img-3.jpg'
                            text='Set Sail in the Indochinese Peninsula Sea visiting Uncharted Waters'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-4.jpg'
                            text='Explore the hidden Ban Gioc waterfall deep insided the Tay Bac Jungle'
                            label='Adventure'
                            path='/services'
                        />            
                        <CardItem
                            src='images/img-8.jpg'
                            text="Weave through Ho Chi Minh City's bustling streets on the back of a motorcycle"
                            label='Luxury'
                            path='/services'
                        />                                                             
                    </ul>                    
                </div>
            </div>
            
        </div>
    )
}

export default Cards
