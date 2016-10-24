# Harry Potter Quest

Heroku link goes here eventually...

## Getting Started

The instructions below will help you retrieve a copy of the project to run on your local machine through the Terminal application. Please see deployment for notes on how to deploy the project on a live system.  The instructions provided are for macbook users only.

### Prerequisities

You may need to install or update the following software.

Find Terminal - to run program
  1. Open Finder. Finder is available in the Dock.
  2. Select Applications from the side bar menu.  Then unfold the Utilities folder.
  3. Double click on Terminal to initialize.

Install Homebrew - to store program files properly
  1. Open up Terminal.
  2. Run `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
  3. Run `brew doctor`

Install rbenv & ruby-build - to install and compile different versions of Ruby code language
  1. Open up Terminal
  2. Run `brew install ruby-build rbenv`
  3. Run `echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.bash_profile`

Install ruby 2.3.1 - or latest version of Ruby
  1. Close and reopen Terminal. `rbenv install 2.3.1`
  2. After quite some time, run: `rbenv global 2.3.1`
Once you have completed the above installation processes your system should be ready to launch the program!

Install Rails 5 - or latest version
```
gem install rails --version=5.0.0.1
```

Download postgresql
  1. Go to http://postgresapp.com/
  2. Move the app to the /Applications file folder.
  3. Double Click on app to run the program.

Install postgresql using brew
```
brew install postgresql
```

### Deployment

Please complete the following procedure to run the program on a live system:
  1. Open Terminal.
  2. Change your directory to the one that which you have saved this zip file. `$ cd folder_name`
  3. Run `$ bundle install` to install needed gems located in the Gemfile.
  4. First, create the database: `rails db:create`
  5. Next, migrate the database: `rails db:migrate`
  6. Finally, run the test suite to verify that everything is working correctly: `$ rails test`
  7. If the test suite passes, you'll be ready to run the app in a local server: `$ rails server`
  8. You should see `Rails 5.0.0.1 application starting in development on http://localhost:3000` in your Terminal.
  9. Go to localhost:3000 in your web browser to view the application homepage.

## Built With

* Atom

## Authors

* **Julia Donaldson**
* **Robby Helms**
* **Kristine Teichmann**

## Acknowledgments

* The Iron Yard - Durham

* Michael Hartl - RUBY ON RAILS TUTORIAL (RAILS 5)

* Ryan Endacott - Rails File Upload Example
