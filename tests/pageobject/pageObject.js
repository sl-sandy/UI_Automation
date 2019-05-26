var toDoPage = require('../pageobject/toDoPage.js');  
  
describe('Protractor Test', function() {  
  
  it('should navigate to the AngularJS homepage', function() {  
    toDoPage.go();  
  });  
    
  it('should let you add a new task ', function() {  
   toDoPage.addItem('New Task Item')  
  });  
});  
  
