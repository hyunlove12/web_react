// node에서 경로를 조작할 수 있게 주는 모듈 -> 노드의 기본 모듈
const path = require('path');

// name : 웹팩이름
module.export = {
    name : 'wordrelay-setting',
    mode : 'development', // 실서비스 : production
    devtool : 'eval', // 빠르게 하겠다?? 무슨의미?
    resolve : {
        extensions : ['.js', '.jsx']
    }
    // entry : 입력
    entry : {
        // client.jsx에서 WordRelay.jsx를 호출하기 때문에 './WordRelay.jsx'를 넣을 필요 없다
        // 확장자도 적을필요 없음 -> resolve의 extensions에 선언되 확장자를 자동으로 검색한다.
        // css, json등의 파일도 넣을 수 있다.
        app : ['./client'],
    },
    // output : 출력
    output : {
        // __dirname -> 현재 폴더
        // 경로시작이 윈도우? 프로젝트단위가 아닌? 헷갈림...
        path : path.join(__dirname, 'dist'),
        filename : 'app.js'
    }

};