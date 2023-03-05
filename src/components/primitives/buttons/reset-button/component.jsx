import { ResetButtonTypeEnum } from 'common/enums';
import * as styles from './styles';

const ResetButton = ({onClick, type, children, ...props}) => {
  return (
    <button css={styles.button} onClick={onClick} button-type={type} {...props}>
      {children}
    </button>
  )
}

ResetButton.defaultProps = {
  type: ResetButtonTypeEnum.LINE,
}

export { ResetButton };
