/* <div id='parent'>
    <div id='children'>
        <div id='child1'> <h1>This is H1 Tag</h1></div>
        <div id='child2'><h2>This is H2 Tag</h2> </div>
    </div>
</div> */

const parent=React.createElement(
    'div',
    {id:'parent'},
    React.createElement('div',{id:'children'},[
        React.createElement('div',{id:'child1'},'This is H1 Tag'),
        React.createElement('div',{id:'child2'},'This is H3 Tag')
 ])
);
 const root=ReactDOM.createRoot(document.getElementById('root'));
 root.render(parent)