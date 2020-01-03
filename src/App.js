import React,{Component} from 'react';
import './App.css';
import './lunbo/';
import {HashRouter,route,router,Link} from 'react-router-dom';
function App (){
  return(
    <HashRouter>
      <div className="Dh">
        <ul  className="Dhu">
          <li className="Dhs s"><Link className="Dha a" to="Fx">发现音乐</Link></li>
          <li className="Dhs"><Link className="Dha" to="Wd">我的音乐</Link></li>
          <li className="Dhs"><Link className="Dha" to="Py">朋友</Link></li>
          <li className="Dhs"><Link className="Dha" to="Sc">商城</Link></li>
          <li className="Dhs"><Link className="Dha" to="Yy">音乐人</Link></li>
          <li className="Dhs"><Link className="Dha" to="Xz">下载客户端</Link></li>
        </ul>
      </div>
      <div>

      </div>

      <div>

      </div>
    </HashRouter>

  );
}
export default App;