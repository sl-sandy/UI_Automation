Steps to run this test framework:

1. Install Ubuntu(I use 16.04)

   please refer to https://tutorials.ubuntu.com/tutorial/tutorial-install-ubuntu-desktop

2. Install nodejs&npm

   sudo apt-get update

   sudo apt-get install nodejs

   sudo apt-get install npm

   nodejs -v

3. Install Protractor&Webdriver-manager

   npm install -g protractor

   webdriver-manager update

   webdriver-manager start

4. Install Git

   sudo apt-get install git-core

5. Configure your own git setting

   git config --global user.name "testuser" git config --global user.email "testuser@example.com"

6. Clone this project

   git clone git@github.com:sl-sandy/UI_Automation.git

7. Enter into root folder(with conf.js in it) of this project then run following command

   protractor conf.js --suite smoke
