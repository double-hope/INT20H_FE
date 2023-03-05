import { ContentLayout } from 'components/layout'
import { Navigation, NotificationIcon } from 'components/primitives'
import React from 'react'

const Home = () => {
    return (
        <div>
            <Navigation />
            <ContentLayout />
            <NotificationIcon />
        </div>
    )
}

export { Home }