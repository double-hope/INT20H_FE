import { Navigation } from 'components/primitives'
import React from 'react'

const Home = () => {

    const user = {
        name: 'Name',
        role: 'Member'
    }

    return (
        <div>
            <Navigation user={user} />
            
        </div>
    )
}

export { Home }