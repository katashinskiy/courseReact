
export default (counter = 0, action) => {

    const {type} = action;

    if (type === "INCREMENT") {
        return ++counter;
    }

    return counter
}