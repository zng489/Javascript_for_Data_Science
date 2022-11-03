const isMidi = (link) => {
    // Return False if there is no href attribute.
    if (typeof link.href === 'undenfined') {
        return false 
    }
    return link.href.includes('.mid');
};
