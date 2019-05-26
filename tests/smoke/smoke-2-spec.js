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

        // You wrote your first test, cross it off the list
        todoList.get(2).element(by.css('input')).click();
        var completedAmount = element.all(by.css('.done-true'));
        expect(completedAmount.count()).toEqual(2);
        console.log("smoke-2");
    });

    it('should add a name', function(){
        element(by.model('yourName')).sendKeys('Mikey');
        var helloList = element.all(by.xpath("/html/body/div[2]/div[1]/div[2]/div[2]/div/h1"));
        expect(helloList.get(0).getText()).toEqual('Hello Mikey!');
        expect(helloList.count()).toEqual(1);
    });
});