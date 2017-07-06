import React from 'react';
import ReactDOM from 'react-dom';
import RouterList from './routers'
// import { AppContainer } from 'react-hot-loader'
import registerServiceWorker from './registerServiceWorker';
import './reset.css'

/*const renderApp = Component => {
  render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('root')
  )
}

renderApp(RouterList)
// 热更新
if (module.hot) {
  module.hot.accept('./App', () => { renderApp(RouterList) })
}*/

ReactDOM.render(<RouterList />, document.getElementById('root'));
registerServiceWorker();
