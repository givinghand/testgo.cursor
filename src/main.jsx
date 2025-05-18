import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Disable right-click context menu
document.addEventListener('contextmenu', event => event.preventDefault());

// Optional: You might also want to alert the user, though this is often more annoying.
// document.addEventListener('contextmenu', event => {
//   event.preventDefault();
//   alert("Right-click is disabled on this site.");
// });

// e.g., if using React:
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )