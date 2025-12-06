const API_BASE = 'https://localhost:5001/api';

function getUserId() {
    return Number(localStorage.getItem('userId') || '0');
}

function setUser(user) {
    localStorage.setItem('userId', user.userId);
    localStorage.setItem('username', user.username);
}

function requireUser() {
    const id = getUserId();
    if (!id) {
        alert('Please login first.');
        window.location.href = 'login.html';
    }
    return id;
}
