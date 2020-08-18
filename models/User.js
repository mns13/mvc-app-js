let User = function(data){
  this.data = data;
  this.errors = [];
}

User.prototype.validate = function(){
  if(this.data.username == ""){
    this.errors.push("Enter a username");
  }
  if(this.data.email == ""){
    this.errors.push("Enter email");
  }
  if(this.data.password == ""){
    this.errors.push("Enter the password");
  }
}

User.prototype.register = function(){
  // Validate Data
  this.validate();
  // Only if there are no validation errors
  // then save the user data into a database

}

module.exports = User;