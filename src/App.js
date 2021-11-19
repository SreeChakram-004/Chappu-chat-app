import {ChatEngine} from 'react-chat-engine';
import ChatFeed from "./components/ChatFeed.jsx";
import LoginForm from "./components/LoginForm.jsx";


import "./App.css";

function App() {
  if (!localStorage.getItem('username')) return <LoginForm />;
  return (
    <ChatEngine
			height='100vh'
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem("password")}
			projectID='f4a36dfd-497c-4cb1-ad14-28f3e78fa3f0'
      renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps} />}
		/>
  );
}

export default App;
