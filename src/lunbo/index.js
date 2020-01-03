import React,{Component} from 'react';
class AwesomeProject extends Component {// 初始化模拟数据

constructor(props) {
super(props);

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => {r1 !== r2}});
this.state = {
dataSource: ds,
load:false,
text:''
};
}

//耗时操作放在这里面
componentDidMount(){
    this.getNet();
    }

    getNet(){
        ('http://119.3.153.161:3000/banner')
        .then((response) => response.json())//取数据
        .then((responseText) => {//处理数据
        //通过setState()方法重新渲染界
        console.log(responseText)
        this.setState({
        //改变加载ListView
        load: true,
        //设置数据源刷新界面
        dataSource: this.state.dataSource.cloneWithRows(responseText.results),
        })

        })
        .catch((error) => {
        console.warn(error);
        }).done();

}
