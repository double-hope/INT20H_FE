import React, { useState } from 'react';
import * as styles from './styles';
import { Button, Navigation, NotificationIcon } from 'components/primitives';
import { ApplicationCard } from 'components/primitives/application-card';
import { ButtonColorEnum, ButtonSizeEnum } from 'common/enums';
import { RequestCard } from 'components/primitives/request-card';
import { ReactComponent as Icon } from 'assets/svgs/flying.svg'

const Activities = () => {

    const [applicationsChecked, setApplicationsChecked] = useState(true);

    const user = {
        name: 'Name',
        role: 'Developer'
    }

    const applications = ['Name of the project', 'Name of the project', 'Name of the project', 'Name of the project']
    const requests = ['Name of the project', 'Name of the project', 'Name of the project', 'Name of the project']

    return (
        <div>
            <Navigation user={user} />
            <NotificationIcon />
            <div css={styles.wrapper}>
                <div css={styles.content}>
                    <div css={styles.zIndex}>
                        <div css={styles.buttons}>
                            <Button text='Applications' size={ButtonSizeEnum.SMALL} onClick={(e) => setApplicationsChecked(true)} color={applicationsChecked ? ButtonColorEnum.PRIMARY : ButtonColorEnum.LIGHT} />
                            <Button text='Requests' size={ButtonSizeEnum.SMALL} onClick={(e) => setApplicationsChecked(false)} color={!applicationsChecked ? ButtonColorEnum.PRIMARY : ButtonColorEnum.LIGHT} />
                        </div>
                        
                        <div css={styles.itemsWrapper}>
                            {applicationsChecked
                                ? <>{applications.map((app, i) => <ApplicationCard key={i} name={app} />)}</> 
                                : <>{requests.map((request, i) => <RequestCard key={i} name={request} />)}</>
                            }
                        </div>
                    </div>
                    <Icon css={styles.icon} />
                </div>
            </div>
        </div>
    )
}

export { Activities };