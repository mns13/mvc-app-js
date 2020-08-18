const validator = require("validator");
let User = function(data){
  this.data = data;
  this.errors = [];
}

User.prototype.validate = function(){
  if(this.data.username == ""){
    this.errors.push("Enter a username");
  }
  if(this.data.username != "" && !validator.isAlphanumeric(this.data.username)){
    this.errors.push("Username can only contain numbers and letters!");
  }
  if(this.data.email == ""){
    this.errors.push("Enter email");
  }
  if(this.data.email != "" && !validator.isEmail(this.data.email)){
    this.errors.push("Not Valide Email!")
  }
  if(this.data.password.length > 0 && this.data.password < 6){
    this.errors.push("Password must be at least 6 characters");
  }
  if(this.data.password == ""){
    this.errors.push("Enter the password");
  }
  if(this.data.username.length > 0 && this.data.username < 5){
    this.errors.push("username must be at least 5 characters");
  }
}

User.prototype.register = function(){
  // Validate Data
  this.validate();
  // Only if there are no validation errors
  // then save the user data into a database

}

module.exports = User;