## React v18 >>> React v17

**package.json**

v18

```js
"react": "^18.0.0"
"react-dom": "^18.0.0"
```

v17

```js
"react": "^17.0.2"
"react-dom": "^17.0.2"
```



**index.js**

v18

```js
import ReactDOM from 'react-dom/client'
```

v17

```js
import ReactDOM from 'react-dom';
```



**index.js**

v18

```js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

v17

```js
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```



## 현재 프로젝트 버전 정보

```json
"cra-template": "^1.1.2",
"react": "^17.0.2",
"react-dom": "^17.0.2",
"react-router-dom": "^5.2.0",
"react-scripts": "^5.0.1",
"web-vitals": "^2.1.4"
```



