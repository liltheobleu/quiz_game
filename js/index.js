var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QuestionPanel = function (_React$Component) {
  _inherits(QuestionPanel, _React$Component);

  function QuestionPanel(props) {
    _classCallCheck(this, QuestionPanel);

    return _possibleConstructorReturn(this, (QuestionPanel.__proto__ || Object.getPrototypeOf(QuestionPanel)).call(this, props));
  }

  _createClass(QuestionPanel, [{
    key: "render",
    value: function render() {

      if (this.props.activeGame) {
        return React.createElement(
          "div",
          { className: "text-center" },
          React.createElement(
            "p",
            { className: "question-panel" },
            this.props.question
          )
        );
      } else {
        return React.createElement(
          "div",
          { className: "text-center" },
          React.createElement(
            "p",
            { className: "question-panel message" },
            "Game Over"
          ),
          React.createElement(
            "div",
            { className: "hyperlink-button" },
            React.createElement(
              "a",
              { onClick: this.props.resetGame, href: "#" },
              "Restart"
            )
          )
        );
      }
    }
  }]);

  return QuestionPanel;
}(React.Component);

var Option = function (_React$Component2) {
  _inherits(Option, _React$Component2);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "a",
          { href: "#",
            onClick: this.props.triggerProcess,
            className: "option-card" },
          this.props.optionValue
        )
      );
    }
  }]);

  return Option;
}(React.Component);

var StatusDisplay = function (_React$Component3) {
  _inherits(StatusDisplay, _React$Component3);

  function StatusDisplay() {
    _classCallCheck(this, StatusDisplay);

    return _possibleConstructorReturn(this, (StatusDisplay.__proto__ || Object.getPrototypeOf(StatusDisplay)).apply(this, arguments));
  }

  _createClass(StatusDisplay, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "status-display text-center" },
        React.createElement(
          "p",
          null,
          "Correct: ",
          this.props.correct
        ),
        React.createElement(
          "p",
          null,
          "Incorrect: ",
          this.props.incorrect
        )
      );
    }
  }]);

  return StatusDisplay;
}(React.Component);

var GameBoard = function (_React$Component4) {
  _inherits(GameBoard, _React$Component4);

  function GameBoard(props) {
    _classCallCheck(this, GameBoard);

    var _this4 = _possibleConstructorReturn(this, (GameBoard.__proto__ || Object.getPrototypeOf(GameBoard)).call(this, props));

    _this4.processGuess = _this4.processGuess.bind(_this4);
    _this4.resetGame = _this4.resetGame.bind(_this4);

    _this4.state = {
      currentIndex: 0,
      correct: 0,
      incorrect: 0,
      activeGame: true,
      questionsAnswer: [{ // 1
        question: 'Who is John John Florence?',
        options: ["Skater", "Surfer ", "Dancer", "Football player"],
        answer: "Surfer"
      }, { // 2
        question: 'Who is Lil Pump ?',
        options: ['Swimmer', 'Runner', 'Singer', 'President',5],
        answer: 'Singer'
      }, { // 3
        question: 'Who is Donald Trump?',
        options: ['US President', 'Rugby player', 'Actor', 'Tennis player'],
        answer: 'US President'
      }, { // 4
        question: 'Who is Rafael Nadal?',
        options: ['Singer', 'Dancer', 'Actor', 'Tennis player'],
        answer: 'Tennis player'
      }, { // 5
        question: 'Who is Lionel Messi ?',
        options: ['Swimmer', 'Prince of England', 'Football player', 'Cook'],
        answer: 'Football player'
      }, { // 6
        question: 'Vladimir Putin',
        options: ['Rugby player', 'President of Russia', 'Scientist', 'Writer'],
        answer: 'President of Russia'
      }]
    };
    return _this4;
  }

  _createClass(GameBoard, [{
    key: "resetGame",
    value: function resetGame() {
      this.setState({
        currentIndex: 0,
        correct: 0,
        incorrect: 0,
        activeGame: true
      });
    }
  }, {
    key: "processGuess",
    value: function processGuess(e) {

      if (this.state.currentIndex + 1 === this.state.questionsAnswer.length) {
        this.setState({ activeGame: false });

        return;
      }
      // For accomplishing a better readible equality-check.
      // for numbers add parseInt after = in these 2 lines
      var answer = (e.target.textContent);
      var correctAnswer = (this.state.questionsAnswer[this.state.currentIndex]['answer']);

      if (answer === correctAnswer) {
        this.setState({ correct: this.state.correct + 1 });
      } else {
        this.setState({ incorrect: this.state.incorrect + 1 });
      }

      this.setState({ currentIndex: this.state.currentIndex + 1 });
    }
  }, {
    key: "render",
    value: function render() {
      var options = [];

      if (this.state.activeGame) {
        for (var i = 0; i < this.state.questionsAnswer[0].options.length; i++) {
          options.push(React.createElement(Option, { optionValue: this.state.questionsAnswer[this.state.currentIndex].options[i],
            triggerProcess: this.processGuess,
            activeGame: this.state.activeGame }));
        }
      }

      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "offset-lg-2 col-lg-7 col-md-12" },
            React.createElement(QuestionPanel, { activeGame: this.state.activeGame,
              question: this.state.questionsAnswer[this.state.currentIndex].question,
              resetGame: this.resetGame }),
            React.createElement(
              "div",
              { className: this.state.activeGame ? 'visible' : 'hidden' },
              options
            )
          ),
          React.createElement(
            "div",
            { className: "col-lg-3 col-md-12" },
            React.createElement(StatusDisplay, {
              correct: this.state.correct,
              incorrect: this.state.incorrect })
          )
        )
      );
    }
  }]);

  return GameBoard;
}(React.Component);

ReactDOM.render(React.createElement(GameBoard, { className: "game-board" }), document.getElementById('board'));
