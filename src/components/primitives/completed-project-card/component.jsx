import * as styles from './styles';
import { ButtonColorEnum, ButtonSizeEnum } from 'common/enums';
import { Button } from '../buttons';


const CompletedProjectCard = ({name, details, portfolio}) => {
  return (
    <div css={styles.card}>
        <div css={styles.content}>
            {name}
            <Button text='More details' color={ButtonColorEnum.DARK} size={ButtonSizeEnum.SMALL} onClick={details} />
            <Button text='Add to portfolio' color={ButtonColorEnum.LIGHT} size={ButtonSizeEnum.SMALL} onClick={portfolio} />
        </div>        
    </div>
  )
}

export { CompletedProjectCard };
