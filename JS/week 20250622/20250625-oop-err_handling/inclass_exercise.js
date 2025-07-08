const usersJson = '{"users":[{"username":"Ariel"},{"username":"Yoni"}]}';

function processUserData(input, index) {
  try {
    data = JSON.parse(input);
    const { users } = data;
    let user = users[index];
    console.log(user.username.toUpperCase());
  } catch (error) {
    console.error(error);
  }
}

processUserData(usersJson, 1);
