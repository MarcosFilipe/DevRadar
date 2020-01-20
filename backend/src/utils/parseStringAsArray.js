module.exports = (arrayAsString) => {

    return arrayAsString.split(',').map(t => t.trim());
}
