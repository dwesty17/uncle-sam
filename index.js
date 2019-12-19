const uncleSam = (income, location) => {
    if (location === "San Francisco, CA") {
        return "Too high";
    } else {
        return "Sorry we don't support that location yet";
    }
};

module.exports = { uncleSam };
