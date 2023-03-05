import React from 'react';
import * as styles from './styles';

const RoundedInput = ({id, onChange, value, placeholder, ...props}) => {
  return (
    <div css={styles.inputWrapper}>
        <input 
            type='text'
            id={id}
            onChange={onChange}
            value={value}
            css={styles.input}
            placeholder={placeholder}
            {...props}
        />        
    </div>
  )
}

export { RoundedInput };