(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[43],{8118:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plugin/undo",function(){return e(4096)}])},5721:function(t,n,e){"use strict";e.d(n,{Z:function(){return a}});var o=e(2322),r=(e(2784),e(6277)),i=(e(3977),e(7465)),s=e.n(i);function a(t){var n=t.code,e=t.className,i=t.name,a=(0,r.Z)(s().root,e),d=i?s().name:s().hiddenName,c=(0,r.Z)(s().code,"language-".concat(i&&i.endsWith("css")?"css":"js"));return(0,o.jsxs)("div",{className:a,children:[(0,o.jsx)("div",{className:d,children:i}),(0,o.jsx)("pre",{className:c,children:(0,o.jsx)("code",{children:n})})]})}},4799:function(t,n,e){"use strict";e.d(n,{Z:function(){return a}});var o=e(2322),r=(e(2784),e(6277)),i=(e(3977),e(5373)),s=e.n(i);function a(t){var n=t.code,e=t.className,i=(0,r.Z)(s().root,e);return(0,o.jsx)("span",{className:i,children:(0,o.jsx)("code",{dangerouslySetInnerHTML:{__html:n}})})}},6744:function(t,n,e){"use strict";e.d(n,{Z:function(){return u}});var o=e(2322),r=e(8476),i=e.n(r),s=e(2784),a=e(2587),d=e(1497),c=e(6351),l=e(6895);function u(t){var n=t.children,e=t.filePath;return(0,s.useEffect)((function(){i().highlightAll()}),[]),(0,o.jsxs)("div",{children:[(0,o.jsx)(d.Z,{}),(0,o.jsx)(c.Z,{}),n,(0,o.jsx)(l.Z,{filePath:e}),(0,o.jsx)(a.Z,{})]})}},4096:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return nt}});var o=e(2322),r=e(2784),i=e(7619),s=e(5721),a=e(6769),d=e(1503),c=e(4705),l=e(7699),u=e(2137),p=e.n(u),f=e(6272),m=e.n(f);function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function b(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function y(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function g(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function x(t){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function j(t,n){return!n||"object"!==_(n)&&"function"!==typeof n?h(t):n}function v(t,n){return(v=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}var _=function(t){return t&&"undefined"!==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},S={undo:m().button,redo:m().button},E=(0,l.Z)({undoContent:"Undo",redoContent:"Redo",theme:S}),C=E.UndoButton,N=E.RedoButton,P=[E],k=function(t){function n(){var t;return b(this,n),g(h(t=j(this,x(n).apply(this,arguments))),"state",{editorState:d.EditorState.createEmpty()}),g(h(t),"onChange",(function(n){t.setState({editorState:n})})),g(h(t),"focus",(function(){t.editor.focus()})),t}var e,r,i;return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&v(t,n)}(n,t),e=n,(r=[{key:"render",value:function(){var t=this;return(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:p().editor,onClick:this.focus,children:(0,o.jsx)(c.ZP,{editorState:this.state.editorState,onChange:this.onChange,plugins:P,ref:function(n){t.editor=n}})}),(0,o.jsxs)("div",{className:p().options,children:[(0,o.jsx)(C,{}),(0,o.jsx)(N,{})]})]})}}])&&y(e.prototype,r),i&&y(e,i),n}(r.Component),w=e(2635),Z=e.n(w);function O(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function B(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function U(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function R(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function T(t){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function A(t,n){return!n||"object"!==W(n)&&"function"!==typeof n?O(t):n}function I(t,n){return(I=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}var W=function(t){return t&&"undefined"!==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},M=(0,l.Z)(),q=M.UndoButton,z=M.RedoButton,D=[M],F=function(t){function n(){var t;return B(this,n),R(O(t=A(this,T(n).apply(this,arguments))),"state",{editorState:d.EditorState.createEmpty()}),R(O(t),"onChange",(function(n){t.setState({editorState:n})})),R(O(t),"focus",(function(){t.editor.focus()})),t}var e,r,i;return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&I(t,n)}(n,t),e=n,(r=[{key:"render",value:function(){var t=this;return(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:Z().editor,onClick:this.focus,children:(0,o.jsx)(c.ZP,{editorState:this.state.editorState,onChange:this.onChange,plugins:D,ref:function(n){t.editor=n}})}),(0,o.jsxs)("div",{className:Z().options,children:[(0,o.jsx)(q,{}),(0,o.jsx)(z,{})]})]})}}])&&U(e.prototype,r),i&&U(e,i),n}(r.Component),X=e(397),Y=e(4799),G=e(6744),H=e(2428),L=e.n(H);function Q(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function V(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function J(t){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function $(t,n){return!n||"object"!==tt(n)&&"function"!==typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function K(t,n){return(K=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}var tt=function(t){return t&&"undefined"!==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},nt=function(t){function n(){return Q(this,n),$(this,J(n).apply(this,arguments))}var e,r,d;return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&K(t,n)}(n,t),e=n,(r=[{key:"render",value:function(){return(0,o.jsxs)(G.Z,{filePath:"packages/docs/pages/plugin/undo/index.js",children:[(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(X.Z,{level:2,children:"Undo/Redo"}),(0,o.jsx)(X.Z,{level:3,children:"Supported Environment"}),(0,o.jsxs)("ul",{className:L().list,children:[(0,o.jsx)("li",{className:L().listEntry,children:"Desktop: Yes"}),(0,o.jsx)("li",{className:L().listEntry,children:"Mobile: Yes"}),(0,o.jsx)("li",{className:L().listEntry,children:"Screen-reader: Yes"})]})]}),(0,o.jsxs)(i.Z,{children:[(0,o.jsx)(X.Z,{level:2,children:"Getting Started"}),(0,o.jsx)(s.Z,{code:"npm install @draft-js-plugins/editor"}),(0,o.jsx)(s.Z,{code:"npm install @draft-js-plugins/undo"}),(0,o.jsx)(s.Z,{code:"// It is important to import the Editor which accepts plugins.\nimport Editor from '@draft-js-plugins/editor';\nimport createUndoPlugin from '@draft-js-plugins/undo';\nimport React from 'react';\n\n// Creates an Instance. At this step, a configuration object can be passed in\n// as an argument.\nconst undoPlugin = createUndoPlugin();\nconst { UndoButton, RedoButton } = undoPlugin;\n\n// The Editor accepts an array of plugins. In this case, only the undoPlugin\n// is passed in, although it is possible to pass in multiple plugins.\nconst MyEditor = ({ editorState, onChange }) => (\n  <div>\n    <Editor\n      editorState={editorState}\n      onChange={onChange}\n      plugins={[undoPlugin]}\n    />\n    <UndoButton />\n    <RedoButton />\n  </div>\n);\n\nexport default MyEditor;\n",name:"gettingStarted.js"}),(0,o.jsx)(X.Z,{level:3,children:"Importing the default styles"}),(0,o.jsxs)("p",{children:["The plugin ships with a default styling available at this location in the installed package: \xa0",(0,o.jsx)(Y.Z,{code:"node_modules/@draft-js-plugins/undo/lib/plugin.css"})]}),(0,o.jsx)(X.Z,{level:4,children:"Webpack Usage"}),(0,o.jsxs)("ul",{className:L().list,children:[(0,o.jsxs)("li",{className:L().listEntry,children:["1. Install Webpack loaders: \xa0",(0,o.jsx)(Y.Z,{code:"npm i style-loader css-loader --save-dev"})]}),(0,o.jsxs)("li",{className:L().listEntry,children:["2. Add the below section to Webpack config (if your config already has a loaders array, simply add the below loader object to your existing list.",(0,o.jsx)(s.Z,{code:"module.exports = {\n  module: {\n    loaders: [\n      {\n        test: /plugin\\.css$/,\n        loaders: ['style-loader', 'css'],\n      },\n    ],\n  },\n};\n",className:L().guideCodeBlock})]}),(0,o.jsxs)("li",{className:L().listEntry,children:["3. Add the below import line to your component to tell Webpack to inject the style to your component.",(0,o.jsx)(s.Z,{code:"import '@draft-js-plugins/undo/lib/plugin.css';",className:L().guideCodeBlock})]}),(0,o.jsx)("li",{className:L().listEntry,children:"4. Restart Webpack."})]})]}),(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(X.Z,{level:2,children:"Configuration Parameters"}),(0,o.jsxs)("div",{className:L().param,children:[(0,o.jsx)("span",{className:L().paramName,children:"theme"}),(0,o.jsx)("span",{children:"Object of CSS classes with the following keys."}),(0,o.jsxs)("div",{className:L().subParams,children:[(0,o.jsxs)("div",{className:L().subParam,children:[(0,o.jsx)("span",{className:L().subParamName,children:"undo:"})," CSS class to be applied to undo button."]}),(0,o.jsxs)("div",{className:L().subParam,children:[(0,o.jsx)("span",{className:L().subParamName,children:"redo:"})," CSS class to be applied to redo button."]})]})]}),(0,o.jsxs)("div",{className:L().param,children:[(0,o.jsx)("span",{className:L().paramName,children:"undoContent"}),(0,o.jsx)("span",{children:"Content of undo button. (Default content is \u21ba)"})]}),(0,o.jsxs)("div",{className:L().param,children:[(0,o.jsx)("span",{className:L().paramName,children:"redoContent"}),(0,o.jsx)("span",{children:"Content of redo button. (Default content is \u21bb)"})]})]}),(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(X.Z,{level:2,children:"Simple Example"}),(0,o.jsx)(F,{}),(0,o.jsx)(s.Z,{code:"import React, { Component } from 'react';\nimport { EditorState } from 'draft-js';\nimport Editor from '@draft-js-plugins/editor';\nimport createUndoPlugin from '@draft-js-plugins/undo';\nimport editorStyles from './editorStyles.module.css';\n\nconst undoPlugin = createUndoPlugin();\nconst { UndoButton, RedoButton } = undoPlugin;\nconst plugins = [undoPlugin];\n\nexport default class SimpleUndoEditor extends Component {\n  state = {\n    editorState: EditorState.createEmpty(),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div>\n        <div className={editorStyles.editor} onClick={this.focus}>\n          <Editor\n            editorState={this.state.editorState}\n            onChange={this.onChange}\n            plugins={plugins}\n            ref={(element) => {\n              this.editor = element;\n            }}\n          />\n        </div>\n        <div className={editorStyles.options}>\n          <UndoButton />\n          <RedoButton />\n        </div>\n      </div>\n    );\n  }\n}\n",name:"SimpleUndoEditor.js"}),(0,o.jsx)(s.Z,{code:".editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n\n.options {\n  margin-bottom: 20px;\n}\n",name:"editorStyles.css"})]}),(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(X.Z,{level:2,children:"Themed Undo/Redo Example"}),(0,o.jsx)(k,{}),(0,o.jsx)(s.Z,{code:"import React, { Component } from 'react';\nimport { EditorState } from 'draft-js';\nimport Editor from '@draft-js-plugins/editor';\nimport createUndoPlugin from '@draft-js-plugins/undo';\nimport editorStyles from './editorStyles.module.css';\nimport buttonStyles from './buttonStyles.module.css';\n\nconst theme = {\n  undo: buttonStyles.button,\n  redo: buttonStyles.button,\n};\nconst undoPlugin = createUndoPlugin({\n  undoContent: 'Undo',\n  redoContent: 'Redo',\n  theme,\n});\nconst { UndoButton, RedoButton } = undoPlugin;\nconst plugins = [undoPlugin];\n\nexport default class CustomUndoEditor extends Component {\n  state = {\n    editorState: EditorState.createEmpty(),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div>\n        <div className={editorStyles.editor} onClick={this.focus}>\n          <Editor\n            editorState={this.state.editorState}\n            onChange={this.onChange}\n            plugins={plugins}\n            ref={(element) => {\n              this.editor = element;\n            }}\n          />\n        </div>\n        <div className={editorStyles.options}>\n          <UndoButton />\n          <RedoButton />\n        </div>\n      </div>\n    );\n  }\n}\n",name:"CustomUndoEditor.js"}),(0,o.jsx)(s.Z,{code:".button {\n  border: 1px solid #bbb;\n  height: 40px;\n  color: #888;\n  border-radius: 2px;\n  cursor: pointer;\n  position: relative;\n  background-color: #fff;\n  margin-right: 10px;\n}\n\n.button:focus {\n  background-color: #eee;\n  color: #999;\n  outline: 0; /* reset for :focus */\n}\n\n.button:hover {\n  background-color: #eee;\n  color: #999;\n}\n\n.button:active {\n  background-color: #ddd;\n  color: #777;\n}\n\n.button:disabled {\n  background-color: #F5F5F5;\n  color: #ccc;\n}\n",name:"buttonStyles.css"}),(0,o.jsx)(s.Z,{code:".editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n\n.options {\n  margin-bottom: 20px;\n}\n",name:"editorStyles.css"})]})]})}}])&&V(e.prototype,r),d&&V(e,d),n}(r.Component)},7465:function(t){t.exports={root:"Code_root__32MsM",name:"Code_name__Asuq_",hiddenName:"Code_hiddenName__3h9eQ"}},6272:function(t){t.exports={button:"buttonStyles_button__3Jf9D"}},2137:function(t){t.exports={editor:"editorStyles_editor__1kHXi",options:"editorStyles_options__34ppv"}},2635:function(t){t.exports={editor:"editorStyles_editor__zt7ek",options:"editorStyles_options__3lVqc"}},5373:function(t){t.exports={root:"InlineCode_root__1EGp7"}},2428:function(t){t.exports={root:"styles_root__2WX-F",param:"styles_param__101zg",paramName:"styles_paramName__zQP4M",subParams:"styles_subParams__Lrbp8",subParam:"styles_subParam__1VNGW",subParamName:"styles_subParamName__1hrfI",list:"styles_list__3y1gc",listEntry:"styles_listEntry__37ptC",guideCodeBlock:"styles_guideCodeBlock__YrEqa"}},7699:function(t,n,e){"use strict";e.d(n,{Z:function(){return h}});var o=e(2784),r=e(3980),i=e.n(r),s=e(1503),a=e(6277);function d(){return(d=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t}).apply(this,arguments)}function c(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,l(t,n)}function l(t,n){return(l=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}var u=function(t){function n(){for(var n,e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return(n=t.call.apply(t,[this].concat(o))||this).onClick=function(t){t.stopPropagation(),n.props.store.setEditorState(s.EditorState.undo(n.props.store.getEditorState()))},n}return c(n,t),n.prototype.render=function(){var t=this.props,n=t.theme,e=void 0===n?{}:n,r=t.children,i=t.className,s=(0,a.Z)(e.undo,i);return o.createElement("button",{disabled:!this.props.store||!this.props.store.getEditorState||this.props.store.getEditorState().getUndoStack().isEmpty(),type:"button",onClick:this.onClick,className:s},r)},n}(o.Component);u.propTypes={children:i().node.isRequired,theme:i().any};var p=function(t){function n(){for(var n,e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return(n=t.call.apply(t,[this].concat(o))||this).onClick=function(t){t.stopPropagation(),n.props.store.setEditorState(s.EditorState.redo(n.props.store.getEditorState()))},n}return c(n,t),n.prototype.render=function(){var t=this.props,n=t.theme,e=void 0===n?{}:n,r=t.children,i=t.className,s=(0,a.Z)(e.redo,i);return o.createElement("button",{disabled:!this.props.store||!this.props.store.getEditorState||this.props.store.getEditorState().getRedoStack().isEmpty(),type:"button",onClick:this.onClick,className:s},r)},n}(o.Component);p.propTypes={children:i().node.isRequired,theme:i().any};var f="b1lh9taq",m={redo:f,undo:f},h=function(t){void 0===t&&(t={});var n=t.undoContent?t.undoContent:"\u21ba",e=t.redoContent?t.redoContent:"\u21bb",r={getEditorState:void 0,setEditorState:void 0},i=t.theme?t.theme:m;return{UndoButton:function(t){return o.createElement(u,d({},t,{theme:i,store:r}),n)},RedoButton:function(t){return o.createElement(p,d({},t,{theme:i,store:r}),e)},initialize:function(t){var n=t.getEditorState,e=t.setEditorState;r.getEditorState=n,r.setEditorState=e}}}}},function(t){t.O(0,[774,140,476,939,888,179],(function(){return n=8118,t(t.s=n);var n}));var n=t.O();_N_E=n}]);