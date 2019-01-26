import validator from 'validator';

function UrlValidator(URL) {
    if (validator.isURL(URL)) {
        return true;
    }
    return false;
}

export default UrlValidator;