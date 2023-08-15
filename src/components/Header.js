import PropTypes from 'prop-types';
import Button from './Button'

const onClick = () => {
  console.log("Click")
}

const Header = ({title}) => {
  return (
    <header className='header'>
      <h1 styles={{ color : 'red', backgroundColor: 'black'}}>{title}</h1>
      <Button color='green' text='Add' onClick={onClick}/>
    </header>
  )
}

Header.defaultProps = {
  title: 'Kulindu'
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
