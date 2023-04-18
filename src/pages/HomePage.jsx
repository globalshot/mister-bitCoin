import { Component } from 'react'
import { UserService } from '../services/user.service'
import { BitcoinService } from '../services/bitcoin.service'

export function HomePage(props) {
    state = {
        user: null,
        rate: null
    }
    async componentDidMount() {
        this.getCurrUser()
        const rate = await BitcoinService.getRate()
        this.setState({rate})
    }
    getCurrUser = async () => {
        const user = await UserService.getLoggedUser()
        this.setState({ user })
    }
    onSignup = () => {
        UserService.signup('test')
    }
    render() {
        const { user, rate } = this.state
        if (!user || !rate) return <div>loading</div>
        return (
            <section>
                <button onClick={this.onSignup}>signup</button>
                {/* <div>{user}</div> */}
                <div>name: {user.name}</div>
                <div>coins: {user.coins}</div>
                <div>your bit coins: {(rate*user.coins).toFixed(5)}</div>
            </section>
        )
    }
}
