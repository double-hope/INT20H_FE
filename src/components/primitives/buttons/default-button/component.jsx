import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as styles from './styles';
import { faCircleDot } from '@fortawesome/free-solid-svg-icons';
import { ButtonColorEnum, ButtonShapeEnum, ButtonSizeEnum, SizeToRadius, ValueToColor } from 'common/enums';
import { motion } from 'framer-motion';

const Button = ({text, onClick, color, size, shape, circles, stretched, extraStyles, ...props}) => {
  return (
    <motion.button css={[styles.button(ValueToColor[color], SizeToRadius[size]), extraStyles]} 
                  onClick={onClick} 
                  button-stretched={`${stretched}`} 
                  button-color={color} 
                  button-size={size} 
                  button-shape={shape}
                  {...props}
                >
      {circles && <FontAwesomeIcon icon={faCircleDot} />}
      {text}
      {circles && <FontAwesomeIcon icon={faCircleDot} />}
    </motion.button>
  )
}

Button.defaultProps = {
  size: ButtonSizeEnum.DEFAULT,
  color: ButtonColorEnum.PRIMARY,
  shape: ButtonShapeEnum.ROUNDED,
  circles: false
}

export { Button };
