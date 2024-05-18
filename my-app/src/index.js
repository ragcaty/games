import React from 'react';
import ReactDOM from 'react-dom/client';
import './react-connections-game/src/reset.css';
import './react-connections-game/src/styles.css';
import './react-connections-game/src/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ConnectionApp from './react-connections-game/src/components/App';
import WordleApp from './wordle/src/App';
import Root from './root';
import Crossword from './crossword';
import reportWebVitals from './reportWebVitals';
import { ProSidebarProvider } from 'react-pro-sidebar';

const router = createBrowserRouter([
	{
		path:"/games",
		element: <Root />,
	},
	{
		path:"/games/connections",
		element: <ConnectionApp />,
	},
	{
		path:"/games/crossword",
		element: <Crossword />,
	},
	{
		path:"/games/wordle",
		element: <WordleApp />,
	}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	<ProSidebarProvider>
	<RouterProvider router={router} />
	</ProSidebarProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
