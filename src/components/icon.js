import { FaTimes, FaRegCircle, FaPenAlt } from 'react-icons/fa'

const Icon = ({ name }) => {

    switch (name) {
        case 'circle':
            return <FaRegCircle className='icons circle' />
        case 'cross':
            return <FaTimes className='icons cross' />
        default:
            return <FaPenAlt className='icons' />



    }
}

export default Icon;