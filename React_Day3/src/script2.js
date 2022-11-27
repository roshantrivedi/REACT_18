import {createElement} from 'react';
import {createRoot} from 'react-dom/client';
import HeaderComponent from './Component/HeaderComponent';

//Element using React.createElement
// const element = createElement("div", {className:"title"}, [
//     createElement("h3",{key:1},"Hey"),
//     createElement("h4",{key:2},"How"),
//     createElement("h5",{key:3},"You"),
//     createElement("h6",{key:4},"Doin?")
// ]);

// const root = createRoot(document.getElementById("root"));
// root.render(element);

// //Element using JSX
// const element2 = (
//     <div className='title'>
//         <h3>Happy</h3>
//         <h4>Weekends!!</h4>
//     </div>
// );

// const root2 = createRoot(document.getElementById('root2'));
// root2.render(element2);

//Functional Component using JSX
const Element3 = () => {
    return (
        <div className='title'>
            <h3>Football World Cup Updates</h3>
            <h4>Spain 7 : 0 Costa Rica</h4>
            <h4>Argentina 2 : 0 Mexico</h4>
            <hr/>
        </div>
    )
}

const root3 = createRoot(document.getElementById('root3'));
root3.render(<Element3 />);

//Composition of Component
//Element3 is called here in Element4
const Element4 = () => {
    return (
        <div className="composite">
            <h2>Composite Function Example</h2>
            <Element3/>
        </div>
    );
}

const root4 = createRoot(document.getElementById('root4'));
root4.render(<Element4 />);

const root5 = createRoot(document.getElementById('root5'));
root5.render(<HeaderComponent />);
