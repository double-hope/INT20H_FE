import { ContentLayout } from 'components/layout'
import { Navigation, NotificationIcon } from 'components/primitives'
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
            <NotificationIcon />
        </div>
    )
}

export { Home }