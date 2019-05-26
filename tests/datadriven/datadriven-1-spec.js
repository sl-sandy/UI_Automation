 'use strict';

var testData = require('../../testdata/data.json');

describe('angularjs homepage todo list', function() {
    beforeEach(function(){
        browser.get('https://angularjs.org');
    });

    it('should add a todo', function() {
        element(by.model('todoList.todoText')).sendKeys('write first protractor test');
        element(by.css('[value="add"]')).click();

        var todoList = element.all(by.repeater('todo in todoList.todos'));
        expect(todoList.count()).toEqual(3);
        expect(todoList.get(2).getText()).toEqual('write first protractor test');

        todoList.get(2).element(by.css('input')).click();
        var completedAmount = element.all(by.css('.done-true'));
        expect(completedAmount.count()).toEqual(2);

        testData.forEach(function (data){
            console.log(data.name);
            console.log(data.todo);
            it('should add a name', function(){
                element(by.model('yourName')).sendKeys(data.name);
                var helloList = element.all(by.xpath("/html/body/div[2]/div[1]/div[2]/div[2]/div/h1"));
                expect(helloList.get(0).getText()).toEqual('Hello '+data.name + '!');
                expect(helloList.count()).toEqual(1);
 
                var todoList = element(by.repeater('todo in todoList.todos').row(0).column('text')).sendKeys(data.todo);
                expect(element(by.model('todoList.todoText')).getText().toEqual(data.todo));
            });
        })
    });
});
