/* eslint-disable */
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let arr = [0, 1, 2];
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  let [누른제목, 누른제목변경] = useState(0);
  let [modal, modal변경] = useState(false);
  let [입력값, 입력값변경] = useState('');

  function forUi(){
    var arrayEx = [];
    for(var i = 0; i < 3; i++){
      arrayEx.push(<div>안녕</div>);
    }
    return arrayEx;
  }

  function upview(i) {
    let newCnt = [...따봉];
    newCnt[i] = 따봉[i] + 1;
    따봉변경( newCnt );
  }

  function titleChange(){
    let newArray = [...글제목];
    newArray[0] = '여자 코트 추천';
    글제목변경( newArray );
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div style={ { color : 'blue', fontSize : '30px' } } >개발 Blog</div>
      </div>
      <button onClick={ titleChange }>버튼</button>
      <Profile />
      test
      {
        글제목.map(function(글, i){
          return (
            <div className="list" key={i}>
              <h3 onClick={ ()=>{ 누른제목변경(i) } }>
                { 글 }
                <span onClick={ ()=>{upview(i)} }>👍</span> { 따봉[i] }
              </h3>
              <p>2월 17일 발행</p>
              <hr />
            </div>
          )
        })
      }

      <div className="publish">
        <input onChange={ (e)=>{ 입력값변경(e.target.value) } }  />
        <button onClick={ ()=>{
          var newArray = [...글제목];
          newArray.unshift(입력값);
          글제목변경(newArray);
         } }>저장</button>
      </div>

      {/* <div>{ 입력값 }</div>
      <input onChange={ (e)=>{ 입력값변경(e.target.value) } } /> */}

      <button  onClick={ ()=>{ modal변경(!modal) } }>열고닫기</button>


      {
        modal === true
        ? <Modal 글제목={글제목} 누른제목={누른제목}></Modal>
        : null
      }


    </div>
  );
}
// component 이름의 첫글자를 대문자로 시작해야한다.
// return 안에 무조건 div 하나를 감싸고 html코딩이 들어가야한다.
// 만약 div를 쓰기 싫다면 <> {html코딩} </> 이런식으로 감싸주어도 괜찮다.
function Modal(props) {
  return(
    <div className="modal">
      <h2>{props.글제목[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}


// 옛날 Component 작성법
class Profile extends React.Component {
  constructor() {
    super();
    this.state = { name : 'Seo', age : 30}
  }
  // 아래와 같이 사용 하면, 함수를 사용 할 때 .bind(this)를 입력해줘야 한다.
  // .bind(this) 없이 함수 실행을 할려면, changeName = () => {실행} 이런식으로 사용 하여야 한다.
  // 만약 둘 다 하지 않았을 경우. 페이지는 정상적으로 나오나, 함수를 실행 하였을때 오류가 난다.
  changeName (){
    this.setState({ name : 'Park' })
  }

  render(){
    return(
      <div>
        <h3>프로필입니다.</h3>
        <p>저는 { this.state.name } 입니다.</p>
        <button onClick={ this.changeName.bind(this) } >버튼</button>
      </div>
    )
  }
}

export default App;
