/**
 * 单向数据流，数据不可变，修改数据源前后不再是同一个对象，状态不可变。使得任何修改可追踪，可控，可依赖，可追溯的数据管理
 * 1.创建一个store createStore
 * 2.传入reducer，纯函数，同样的输入返回同样的输出，不修改原始值。这里创建多个reducer，使用combinReducers。传入一个acrion和旧的state，返回一个新的state
 * 3.页面需要connect进行组件的绑定，connect是一个Hoc组件，将redux的store中的数据state和dispatch派发更新的函数进行绑定
 * 4.mapStateToProps和mapDispatchToProps，在配合最外层组件包裹一个Provider组件，就是利用了React的Context，将props通过context直接传递给子孙，不需要层层的传递
 * 5.分别将store中的数据，和派发数据更新的函数通过高阶组件传递给当前页面组件。通过bindActionCreators将创建action和派发更新合并为一个函数
 * 6.dispath(action) 函数主要获得到action通过reducer获取newState，在通知需要state的组件进行更新。更新的时候就会重新渲染组件获取最新的state
 */

/**
 * 
 * @param {*} actionCreators 是一个对象，里面key是最后生成函数的名字，value是生成action的函数
 * @param {*} dispatch 派发更新的函数
 */
function bindActionCreators(actionCreators,dispatch){
    var ret = {};
    for(key in actionCreators){
        ret[key] = function(...args){
            const actionCreator = actionCreators[key];
            const action = actionCreator(...args);
            dispatch(action);
        }
    }
    return ret;
}

function dispatch(action){
    const state = store.getState();

    if(typeof action === 'function'){
        action(store.dispatch,state);
    }
    const newState = store.reducer(state,action);
    store.subscript.forEach(element => element(newState));
}

/**
 * 
 * @param {*} reducers 接受一个reducers对象，按照数据纬度划分多个reducers数据处理中心
 */
function combinReducers(reducers){
    return function(state,action){
        var changed = {}
        for(key in reducers){
            const reducer = reducers[key];
            const data = reducer(state[key],action);
            changed[key] = data;
        }
        return {
            ...state,
            ...changed
        };
    }
}

class Provider extends React.Component {
    static childContextTypes = {
        store: PropTypes.object,
    }
    constructor(props){
        super(props);
        this.state = {
            store: props.store,
        }
    }
    getChildContext(){
        return {store : this.state.store}
    }
    render(){
        return this.props.children
    }
}

/**
 * 将React于redux中的store连起来
 * @param {*} mapStateToProps 获取所需state的对象，并绑定到组件上
 * @param {*} mapDispatchToProps 获取所需的dispatch的对象，并绑定到组件上
 * 返回一个高阶组件，这个组件接受一个组件作为参数，具有subscript的能力，当监听到store的变化，重新获取最新的state和dispatch通过
 * props传给页面组件
 */
import React from 'react';
import PropTypes from 'prop-typps'
function connect(mapStateToProps,mapDispatchToProps){
    return function(WrapComponent){
        return class ConnectComponent extends React.Component{
            static contextTypes = {
                store: PropTypes.object,
            }
            constructor(props,context){
                super(props,context);
                this.state = {
                    props: {},
                }
            }
            componnetDidMount(){
                const { store } = this.context;
                store.subscript(this.update);
            }
            update = ()=>{
                const { store } = this.props;
                const stateProps = mapStateToProps(store.getState());
                const dispatchProps = mapDispatchToProps(store.dispatch);
                this.setState({
                    ...this.state.props,
                    ...stateProps,
                    ...dispatchProps,
                })

            }
            render(){
                return <WrapComponent {...this.state.props}/> 
            }
        }
    }
}

/**
 * 
 * @param {*} reducer 参数为创建好的纯函数reducer
 * 返回一个store，上面挂载getState,subscript,dispatch,reducer函数。以对象的形式返回，并使用Provider组件作为context传给
 * 所需要的子组件
 */

function createStore(reducer){
    var list = [],
    var state = {},
    getState = () => state;
    dispatch = function(action){
        if(typeof action === 'function'){
            action(dispatch,getState)
        }
        state = reducer(action);
        list.forEach(fn => fn())


    }
    subscript = function(fn){
        list.push(fn);
        list = list.filter(l=>l!=fn);
    }
    dispatch();
    return {
        getState,
        dispatch,
        subscript,
    }
}

