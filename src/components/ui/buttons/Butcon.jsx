import { IconButton } from '@radix-ui/themes';

const Butcon = ({ onClick, isChecked, checkedIcon, uncheckedIcon }) => {
    return (
        <IconButton variant="ghost" color="red" onClick={onClick}>
            {isChecked ? checkedIcon : uncheckedIcon}
        </IconButton>
    )
}

export default Butcon