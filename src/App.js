import React from 'react';
import Main from './main';
import Header from './header';
import Footer from './footer';
import './style.css'



class App extends React.Component{


render(){
return (
<div class="body">
<Header />
<Main />
<Footer />
</div>
)
}

}

export default App;