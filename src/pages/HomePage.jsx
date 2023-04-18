import { Component } from 'react'
import { userService } from '../services/user.service'
import { BitcoinService } from '../services/bitcoin.service'
import { useEffect } from 'react'
import { useState } from 'react'

export function HomePage(props) {
    
    const [user, setUser] = useState(null)
    const [rate, setRate] = useState(null)

    useEffect(() =>{
        getCurrUser()
        getRate()
    },[])

    async function getRate() {
        const rate = await BitcoinService.getRate()
        setRate( rate )
    }

    async function getCurrUser() {
        // const loggedIn = await userService.getLoggedUser()
        const loggedIn = {name: 'tester', coins: 100}
        setUser( loggedIn )
    }
    function onSignup() {
        userService.signup('test')
    }
        if (!user) return <div>loading</div>
        return (
            <section className='user-info-card'>
                {/* <button onClick={onSignup}>signup</button> */}
                {/* <div>{user}</div> */}
                <div className='user-info'>Username: {user.name}</div>
                <div className='user-info'>Coins: {user.coins}</div>
                <div className='user-info'>Your bit coins: {(rate*user.coins).toFixed(5)}</div>
            </section>
        )
    }
