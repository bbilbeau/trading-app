export function formatPrice(value) {
    return value.toFixed(2);
}

export function formatDate(d) {
    var date = new Date(d);
    return (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear();
}