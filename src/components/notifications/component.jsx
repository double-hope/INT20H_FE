import React from 'react';
import * as styles from './styles';
import { Navigation, NotificationIcon } from 'components/primitives';
import { ReactComponent as Icon } from 'assets/svgs/standing1.svg'

const Notifications = () => {

  return (
    <div>
        <Navigation />
        <NotificationIcon />
        <div css={styles.wrapper}>
            <div css={styles.content}>
                <div css={styles.zIndex}>
                    <h2>My team</h2>
                    <div css={styles.notifications}>
                        <h4>New!</h4>
                        <div css={styles.messages}>
                            <div css={styles.message}>
                                <p>Your application was approved! Coglatulations!
                            Your application was approved! Coglatulations!</p>
                                <span>12/12/23</span>
                            </div> 
                            <div css={styles.message}>
                                <p>Your application was approved! Coglatulations!
                            Your application was approved! Coglatulations!</p>
                                <span>12/10/23</span>
                            </div> 
                            <div css={styles.message}>
                                <p>Your application was approved! Coglatulations!
                            Your application was approved! Coglatulations!</p>
                                <span>12/8/23</span>
                            </div> 
                            <div css={styles.message}>
                                <p>Your application was approved! Coglatulations!
                            Your application was approved! Coglatulations!</p>
                                <span>12/7/23</span>
                            </div> 
                            <div css={styles.message}>
                                <p>Your application was approved! Coglatulations!
                            Your application was approved! Coglatulations!</p>
                                <span>12/6/23</span>
                            </div> 
                            <div css={styles.message}>
                                <p>Your application was approved! Coglatulations!
                            Your application was approved! Coglatulations!</p>
                                <span>12/6/23</span>
                            </div> 
                        </div>
                    </div>
                    
                </div>
                <Icon css={styles.icon} />
            </div>
        </div>
    </div>
  )
}

export { Notifications };