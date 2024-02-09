function getUserType(user) {
    if (user.type === 'user') {
        return 'User';
    }
    else if (user.type === 'admin') {
        return 'Admin';
    }
    else {
        return 'Unknown';
    }
}
