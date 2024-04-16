function main() {
  const birthdayString = "25041998"; // Example birthday input
  const birthday = new Birthday(birthdayString);
  const daysUntilNextBirthday = birthday.getDaysUntilNextBirthday();
  console.log(`Days until your next birthday: ${daysUntilNextBirthday}`);
}

main();