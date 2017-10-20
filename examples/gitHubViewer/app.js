var appState = {}

// Make a request to get users
function fetchUsers() {
  // $.ajax({
  //   type: "GET",
  //   url: 'https://api.github.com/users',
  //   success: function (response) {
  //     // save users
  //   },
  //   error: function (error) {}
  // })

  // An alternative to jQuery for doing AJAX
  axios.get('https://api.github.com/users')
    .then(function (response) {
      appState.users = response.data
      render(appState)
    })
    .catch(function (error) {
      console.error(error)
    })
}

// Render app based on current state of application
function render(appState) {
  var tableBody = document.querySelector('#usersTable tbody')

  var tableData = appState.users
    .map(function (user) {
      return {
        id: user.id,
        login: user.login,
        type: user.type
      }
    })
    .map(function (user) {
      var row = document.createElement('tr')
      var id = document.createElement('td')
      var login = document.createElement('td')
      var type = document.createElement('td')

      id.innerHTML = user.id
      login.innerHTML = user.login
      type.innerHTML = user.type

      row.appendChild(id)
      row.appendChild(login)
      row.appendChild(type)

      row.addEventListener('click', function () {

        // Alternative to using the for loop below
        var selectedUser = appState.users.filter(function (u) {
          return user.id === u.id
        })[0]

        // var currentUser
        // var selectedUser

        // for (var i = 0; i < appState.users.length; i++) {
        //   currentUser = appState.users[i]

        //   if (currentUser.id === user.id)
        //     selectedUser = currentUser
        // }

        var userAvatar = document.getElementById('userAvatar')

        userAvatar.src = selectedUser.avatar_url
      })

      return row
    })
    .forEach(function (row) {
      tableBody.appendChild(row)
    })

  console.log(tableData)
}


var fetchUsersButton = document.getElementById("fetchUsersButton")

fetchUsersButton.addEventListener('click', fetchUsers)