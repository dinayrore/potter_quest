var potterQuest = (function() {
  var backgrounds = {
    initBackground: '../../assets/images/subtle-noise.png',
    welcomeBackground: '../../assets/images/game_title.png'
  }

  var avatars = {
    harry: '../../assets/images/harry_potter_sprite.png'
  }

  /* Game Constructor and Methods */
  function Game() {
    this.elem = $('.game-container')[0];
    this.bounds = this.elem.getBoundingClientRect();
    this.gameSpeed = 75;
    this.state = 'init';
    this.score = 0;
    this.time = 0;
    this.characters = [];
    this.obstacles = [];
    this.typing = {
      phrase: ''
    };
  }

  Game.prototype.init = function() {
    $(this.elem).css({
      'background-image': 'url(' + backgrounds.initBackground + ')'
    });
    this.initEventHandlers(this);
    this.loopHandle = setInterval(function() {
      game.run();
    }, this.gameSpeed);
  }

  Game.prototype.initEventHandlers = function(self) {
    // Start/Play Game button
    $('.game-container').on('click', '.startBtn', function() {
      if (self.state === 'init') {
        $('.game-container').find('.startBtn').hide();
        self.state = 'welcome';
      }
    });
    // Handle key presses
    $('body').keyup(function(event) {
      self.handleKeyUp(event.which);
    });
    $('body').keypress(function(event) {
      self.handleKeyPress(event.which);
    });
  }

  Game.prototype.run = function() {
    this.time++;
    this.checkState();
    this.updateGame();
  }

  Game.prototype.checkState = function() {
    switch (this.state) {
      case 'init':
        // Do nothing.
        break;
      case 'welcome':
        this.runCastle();
        break;
    }
  }

  Game.prototype.runCastle = function() {
    $(this.elem).css({
      'background-image': 'url(' + backgrounds.welcomeBackground + ')',
      'background-size': '100% 100%'
    });
  }

  Game.prototype.handleKeyPress = function(key) {
    console.log(key);
    switch (this.state) {
      case 'init':
        // Do nothing.
        break;
      case 'welcome':
        if (key >= 48 && key <= 220) {
          // Alphanumeric
          var char = String.fromCharCode(key);
          this.typing.phrase += char;
          $('.typing').text(this.typing.phrase).show();
        } else if (key == 8) {
          // Backspace
          console.log('back');
          if (this.typing.phrase.length > 1) {
            this.typing.phrase = this.typing.phrase.substring(0, this.typing.phrase.length - 1);
            $('.typing').text(this.typing.phrase).show();
          } else {
            this.typing.phrase = '';
            $('.typing').hide();
          }
        } else if (key === 13) {
          // Enter
          this.typing.phrase = '';
          $('.typing').hide();
        } else if (key === 32) {
          // Space
          this.typing.phrase += ' ';
          $('.typing').text(this.typing.phrase).show();
        }
        break;
    }
  }

  Game.prototype.handleKeyUp = function(key) {
    var action = this.characters[0].action;
    switch (this.state) {
      case 'init':
        // Do nothing.
        break;
      case 'welcome':
        switch (key) {
          case 37:
            action = (action === 'walk-left') ? 'stop' : 'walk-left';
            break;
          case 38:
            action = (action === 'walk-up') ? 'stop' : 'walk-up';
            break;
          case 39:
            action = (action === 'walk-right') ? 'stop' : 'walk-right';
            break;
          case 40:
            action = (action === 'walk-down') ? 'stop' : 'walk-down';
            break;
        }
        break;
    }
    this.characters[0].action = action;
  }

  Game.prototype.updateGame = function() {
    var allCharacters = this.characters;
    for (var index = 0; index < allCharacters.length; index++) {
      var character = allCharacters[index];
      character.updateCharacter();
    }
    this.checkCollisions();
  }

  Game.prototype.checkCollisions = function() {
    this.checkBorders();
    this.checkObstacles();
  }

  Game.prototype.checkBorders = function() {
    var character = this.characters[0];
    var gameBounds = this.bounds;
    var charBounds = character.bounds;
    var action = character.action;

    if (action === 'walk-left' && charBounds.left < gameBounds.left) {
      character.x = 700;
    }
    if (action === 'walk-right' && charBounds.right > gameBounds.right) {
      character.x = 0;
    }
    if (action === 'walk-up' && charBounds.top < gameBounds.top) {
      character.y = 500;
    }
    if (action === 'walk-down' && charBounds.bottom > gameBounds.bottom) {
      character.y = 0;
    }
  }

  Game.prototype.checkObstacles = function() {
    // Nothing here yet.
  }

  Game.prototype.addCharacter = function(character) {
    this.characters.push(character);
  }

  /* Character Constructor and Methods */
  function Character(name, avatar) {
    this.elem = null;
    this.bounds = null;
    this.name = name;
    this.image = avatar;
    this.x = 0;
    this.y = 0;
    this.backX = 0;
    this.backY = 0;
    this.speed = 10;
    this.action = 'stand';
  }

  Character.prototype.create = function() {
    $('<div>').attr({
      'class': 'character',
      'name': this.name
    }).css({
      'position': 'absolute',
      'left': this.x,
      'top': this.y,
      'height': '120px',
      'width': '60px',
      'background-image': 'url(' + this.image + ')',
      'background-size': '400% 400%',
    }).appendTo($('.game-container'));
    var htmlElem = $('.character').last()[0];
    this.elem = htmlElem;
  }

  Character.prototype.updateCharacter = function() {
    var action = this.action;
    switch (action) {
      case 'stand':
        this.move.stop(this);
        break;
      case 'walk-left':
        this.move.left(this);
        break;
      case 'walk-right':
        this.move.right(this);
        break;
      case 'walk-up':
        this.move.up(this);
        break;
      case 'walk-down':
        this.move.down(this);
        break;
    }
    this.draw(action);
    this.bounds = this.elem.getBoundingClientRect();
  }

  Character.prototype.move = {
    stop: function(self) {
      // Do nothing for now
    },
    left: function(self) {
      self.x -= self.speed;
    },
    right: function(self) {
      self.x += self.speed;
    },
    up: function(self) {
      self.y -= self.speed;
    },
    down: function(self) {
      self.y += self.speed;
    }
  }

  Character.prototype.draw = function(action) {
    var $self = $(this.elem);
    $self.css({
      'left': this.x,
      'top': this.y
    });
    switch (action) {
      case 'walk-left':
        this.backX += 60;
        this.backY = 360;
        break;
      case 'walk-right':
        this.backX += 60;
        this.backY = 240;
        break;
      case 'walk-up':
        this.backX += 60;
        this.backY = 120;
        break;
      case 'walk-down':
        this.backX += 60;
        this.backY = 0;
        break;
    }
    $self.css({
      'background-position': this.backX + 'px ' + this.backY + 'px'
    });
  }

  /* Create new game */
  var game = new Game();
  game.init();

  /* Create main character */
  var harry = new Character('Harry Potter', avatars.harry);
  harry.create(game);
  game.addCharacter(harry);

  return {
    game: game
  }

})();
