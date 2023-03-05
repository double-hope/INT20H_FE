import * as styles from './styles';
import { LinkColorEnum, LinkShapeEnum, LinkSizeEnum, LinkSizeToRadius, LinkValueToColor } from 'common/enums';
import { motion } from 'framer-motion';

const Link = ({text, href, color, size, shape, stretched, extraStyles, ...props}) => {
  return (
    <motion.a css={[styles.link(LinkValueToColor[color], LinkSizeToRadius[size]), extraStyles]} 
                  href={href} 
                  link-stretched={`${stretched}`} 
                  link-color={color} 
                  link-size={size} 
                  link-shape={shape}
                  {...props}
                >
      {text}
    </motion.a>
  )
}

Link.defaultProps = {
  size: LinkSizeEnum.DEFAULT,
  color: LinkColorEnum.PRIMARY,
  shape: LinkShapeEnum.ROUNDED
}

export { Link };
