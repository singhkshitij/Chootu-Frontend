import validator from 'validator';

function CustomUrlValidator(customURL) {
    if (validator.isAlphanumeric(customURL) || customURL === "") {
        return true;
    }
    return false;
}

export default CustomUrlValidator;