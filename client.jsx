// 노드의 모듈을 불러온다
const React = require('react');
const ReactDom = require('react-dom');

const WordRelay = require('./WordRelay');

// jsx문법을 사용하면 jsx확장자로 사용하는 것이 좋다. -> 리액트 전용파일임을 알게 해준다.
ReactDom.render(<WordRelay />, document.querySelector("#root"))