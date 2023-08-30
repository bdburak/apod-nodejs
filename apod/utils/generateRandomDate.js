function generateRandomDate() {
    var start = new Date('1998-01-05');
    var end = Date.now();
    return new Date(
      start.getTime() + Math.random() * (end - start.getTime()),
    ).toISOString().split('T')[0];
}

module.exports = { generateRandomDate};