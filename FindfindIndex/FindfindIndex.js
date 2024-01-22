//Find

function findUserByUsername(arr, username){
    return arr.find(function(user){
        return user.username === username; 
    });
}


//findIndex

function removeUser(arr, username){
    let newArray = arr.findIndex(function(obj){
       return obj.username === username;
    })
        if (newArray !== -1){
            return arr.splice(newArray, 1)[0];
        }
    return undefined;
}
  
//const users = [
//    {username: 'mlewis'},
//    {username: 'akagen'},
//    {username: 'msmith'}
//  ];
//  let newArray = removeUser(users, 'akagen')
//  console.log(newArray)


