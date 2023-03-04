import { ContentLayout } from 'components/layout'
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
            <ContentLayout />
        </div>
    )
}

export { Home }