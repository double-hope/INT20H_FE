import React from 'react';
import * as styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ResetButton } from 'components/primitives/buttons';

const SearchInput = ({id, onChange, value, placeholder, ...props}) => {
  return (
    <div css={styles.inputWrapper}>
        <input 
            type='search'
            id={id}
            onChange={onChange}
            value={value}
            css={styles.input}
            placeholder={placeholder}
            {...props}
        />  
        <ResetButton><FontAwesomeIcon icon={faSearch} /></ResetButton>
       
    </div>
  )
}

export { SearchInput };