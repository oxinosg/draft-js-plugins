(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[326],{7417:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plugin/static-toolbar",function(){return n(6459)}])},5721:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var o=n(2322),r=(n(2784),n(6277)),i=(n(3977),n(7465)),a=n.n(i);function s(t){var e=t.code,n=t.className,i=t.name,s=(0,r.Z)(a().root,n),l=i?a().name:a().hiddenName,c=(0,r.Z)(a().code,"language-".concat(i&&i.endsWith("css")?"css":"js"));return(0,o.jsxs)("div",{className:s,children:[(0,o.jsx)("div",{className:l,children:i}),(0,o.jsx)("pre",{className:c,children:(0,o.jsx)("code",{children:e})})]})}},4799:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var o=n(2322),r=(n(2784),n(6277)),i=(n(3977),n(5373)),a=n.n(i);function s(t){var e=t.code,n=t.className,i=(0,r.Z)(a().root,n);return(0,o.jsx)("span",{className:i,children:(0,o.jsx)("code",{dangerouslySetInnerHTML:{__html:e}})})}},6744:function(t,e,n){"use strict";n.d(e,{Z:function(){return d}});var o=n(2322),r=n(8476),i=n.n(r),a=n(2784),s=n(2587),l=n(1497),c=n(6351),u=n(6895);function d(t){var e=t.children,n=t.filePath;return(0,a.useEffect)((function(){i().highlightAll()}),[]),(0,o.jsxs)("div",{children:[(0,o.jsx)(l.Z,{}),(0,o.jsx)(c.Z,{}),e,(0,o.jsx)(u.Z,{filePath:n}),(0,o.jsx)(s.Z,{})]})}},6459:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return Ot}});var o=n(2322),r=n(2784),i=n(7619),a=n(5721),s=n(6769),l=n(4705),c=n(2367),u=n(138),d=n(3980),p=n.n(d);function f(){return(f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var m=function(t){var e,n;function o(){for(var e,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))||this).state={overrideContent:void 0},e.onOverrideContent=function(t){return e.setState({overrideContent:t})},e.renderDefaultButtons=function(t){return r.createElement("div",null,r.createElement(u.BI,t),r.createElement(u.n3,t),r.createElement(u.tg,t),r.createElement(u.Ed,t))},e}return n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,h(e,n),o.prototype.render=function(){var t=this.props,e=t.theme,n=t.store,o=this.state.overrideContent,i={theme:e.buttonStyles,getEditorState:n.getItem("getEditorState"),setEditorState:n.getItem("setEditorState"),onOverrideContent:this.onOverrideContent};return r.createElement("div",{className:e.toolbarStyles.toolbar},o?r.createElement(o,i):(this.props.children||this.renderDefaultButtons)(i))},o}(r.Component);m.propTypes={children:p().func};function b(t){var e=t.className,n=void 0===e?"s6m29i4":e;return r.createElement("div",{className:n})}var g={buttonStyles:{buttonWrapper:"bi09khh",button:"bc4rxid",active:"akzb7t5"},toolbarStyles:{toolbar:"t16lpgj"}},v=function(t){void 0===t&&(t={});var e=(0,c.MT)(),n=t.theme,o=void 0===n?g:n;return{initialize:function(t){var n=t.getEditorState,o=t.setEditorState;e.updateItem("getEditorState",n),e.updateItem("setEditorState",o)},onChange:function(t){return e.updateItem("selection",t.getSelection()),t},Toolbar:function(t){return r.createElement(m,f({},t,{store:e,theme:o}))}}},x=n(3800),y=n.n(x);function S(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function w(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function E(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function j(t,e,n){return e&&E(t.prototype,e),n&&E(t,n),t}function _(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function C(t){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function k(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&O(t,e)}function L(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),o.forEach((function(e){_(t,e,n[e])}))}return t}function T(t,e){return!e||"object"!==B(e)&&"function"!==typeof e?S(t):e}function O(t,e){return(O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var B=function(t){return t&&"undefined"!==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},P=function(t){function e(){var t;return w(this,e),_(S(t=T(this,C(e).apply(this,arguments))),"onWindowClick",(function(){return t.props.onOverrideContent(void 0)})),t}return k(e,t),j(e,[{key:"componentDidMount",value:function(){var t=this;setTimeout((function(){window.addEventListener("click",t.onWindowClick)}))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.onWindowClick)}},{key:"render",value:function(){var t=this,e=[u.gS,u.oV,u.R8];return(0,o.jsx)("div",{children:e.map((function(e,n){return(0,o.jsx)(e,L({},t.props),n)}))})}}]),e}(r.Component),Z=function(t){function e(){var t;return w(this,e),_(S(t=T(this,C(e).apply(this,arguments))),"onClick",(function(){return t.props.onOverrideContent(P)})),t}return k(e,t),j(e,[{key:"render",value:function(){return(0,o.jsx)("div",{className:y().headlineButtonWrapper,children:(0,o.jsx)("button",{onClick:this.onClick,className:y().headlineButton,children:"H"})})}}]),e}(r.Component),M=v(),N=M.Toolbar,H=[M],z="In this editor a toolbar shows up once you select part of the text \u2026",I=function(t){function e(){var t;return w(this,e),_(S(t=T(this,C(e).apply(this,arguments))),"state",{editorState:(0,l.bf)(z)}),_(S(t),"onChange",(function(e){t.setState({editorState:e})})),_(S(t),"focus",(function(){t.editor.focus()})),t}return k(e,t),j(e,[{key:"componentDidMount",value:function(){this.setState({editorState:(0,l.bf)(z)})}},{key:"render",value:function(){var t=this;return(0,o.jsx)("div",{children:(0,o.jsxs)("div",{className:y().editor,onClick:this.focus,children:[(0,o.jsx)(l.ZP,{editorState:this.state.editorState,onChange:this.onChange,plugins:H,ref:function(e){t.editor=e}}),(0,o.jsx)(N,{children:function(t){return(0,o.jsxs)("div",{children:[(0,o.jsx)(u.n3,L({},t)),(0,o.jsx)(u.BI,L({},t)),(0,o.jsx)(u.tg,L({},t)),(0,o.jsx)(u.Ed,L({},t)),(0,o.jsx)(b,L({},t)),(0,o.jsx)(Z,L({},t)),(0,o.jsx)(u.cU,L({},t)),(0,o.jsx)(u.pu,L({},t)),(0,o.jsx)(u.YC,L({},t)),(0,o.jsx)(u.Ou,L({},t))]})}})]})})}}]),e}(r.Component),W=n(7117),D=n.n(W);function R(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function A(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function K(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function U(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function V(t){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function q(t,e){return!e||"object"!==Y(e)&&"function"!==typeof e?R(t):e}function F(t,e){return(F=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var Y=function(t){return t&&"undefined"!==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},G=v(),X=G.Toolbar,Q=[G],$="The toolbar above the editor can be used for formatting text, as in conventional static editors  \u2026",J=function(t){function e(){var t;return A(this,e),U(R(t=q(this,V(e).apply(this,arguments))),"state",{editorState:(0,l.bf)($)}),U(R(t),"onChange",(function(e){t.setState({editorState:e})})),U(R(t),"focus",(function(){t.editor.focus()})),t}var n,r,i;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&F(t,e)}(e,t),n=e,(r=[{key:"componentDidMount",value:function(){this.setState({editorState:(0,l.bf)($)})}},{key:"render",value:function(){var t=this;return(0,o.jsx)("div",{children:(0,o.jsxs)("div",{className:D().editor,onClick:this.focus,children:[(0,o.jsx)(l.ZP,{editorState:this.state.editorState,onChange:this.onChange,plugins:Q,ref:function(e){t.editor=e}}),(0,o.jsx)(X,{})]})})}}])&&K(n.prototype,r),i&&K(n,i),e}(r.Component),tt=n(6128),et=n.n(tt),nt=n(6357),ot=n.n(nt),rt=n(4697),it=n.n(rt);function at(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function st(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function lt(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function ct(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ut(t){return(ut=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function dt(t,e){return!e||"object"!==ft(e)&&"function"!==typeof e?at(t):e}function pt(t,e){return(pt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var ft=function(t){return t&&"undefined"!==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},ht=v({theme:{buttonStyles:ot(),toolbarStyles:it()}}),mt=ht.Toolbar,bt=[ht],gt="In this editor a toolbar with a lot more options shows up once you select part of the text \u2026",vt=function(t){function e(){var t;return st(this,e),ct(at(t=dt(this,ut(e).apply(this,arguments))),"state",{editorState:(0,l.bf)(gt)}),ct(at(t),"onChange",(function(e){t.setState({editorState:e})})),ct(at(t),"focus",(function(){t.editor.focus()})),t}var n,r,i;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&pt(t,e)}(e,t),n=e,(r=[{key:"componentDidMount",value:function(){this.setState({editorState:(0,l.bf)(gt)})}},{key:"render",value:function(){var t=this;return(0,o.jsx)("div",{children:(0,o.jsxs)("div",{className:et().editor,onClick:this.focus,children:[(0,o.jsx)(l.ZP,{editorState:this.state.editorState,onChange:this.onChange,plugins:bt,ref:function(e){t.editor=e}}),(0,o.jsx)(mt,{})]})})}}])&&lt(n.prototype,r),i&&lt(n,i),e}(r.Component),xt=n(397),yt=n(4799),St=n(6744),wt=n(2129),Et=n.n(wt);function jt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function Ct(t){return(Ct=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function kt(t,e){return!e||"object"!==Tt(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Lt(t,e){return(Lt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var Tt=function(t){return t&&"undefined"!==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},Ot=function(t){function e(){return jt(this,e),kt(this,Ct(e).apply(this,arguments))}var n,r,l;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Lt(t,e)}(e,t),n=e,(r=[{key:"render",value:function(){return(0,o.jsxs)(St.Z,{filePath:"packages/docs/pages/plugin/static-toolbar/index.js",children:[(0,o.jsxs)(s.Z,{children:[(0,o.jsx)(xt.Z,{level:2,children:"Toolbar"}),(0,o.jsx)(xt.Z,{level:3,children:"Supported Environment"}),(0,o.jsxs)("ul",{className:Et().list,children:[(0,o.jsx)("li",{className:Et().listEntry,children:"Desktop: Yes"}),(0,o.jsx)("li",{className:Et().listEntry,children:"Mobile: No"}),(0,o.jsx)("li",{className:Et().listEntry,children:"Screen-reader: No"})]})]}),(0,o.jsxs)(i.Z,{children:[(0,o.jsx)(xt.Z,{level:2,children:"Getting Started"}),(0,o.jsx)(a.Z,{code:"npm install @draft-js-plugins/editor"}),(0,o.jsx)(a.Z,{code:"npm install @draft-js-plugins/static-toolbar"}),(0,o.jsx)(a.Z,{code:"// It is important to import the Editor which accepts plugins.\nimport Editor from '@draft-js-plugins/editor';\nimport createToolbarPlugin from '@draft-js-plugins/static-toolbar';\nimport React from 'react';\n\n// Creates an Instance. At this step, a configuration object can be passed in\n// as an argument.\nconst toolbarPlugin = createToolbarPlugin();\n\n// The Editor accepts an array of plugins. In this case, only the toolbarPlugin\n// is passed in, although it is possible to pass in multiple plugins.\nconst MyEditor = ({ editorState, onChange }) => (\n  <Editor\n    editorState={editorState}\n    onChange={onChange}\n    plugins={[toolbarPlugin]}\n  />\n);\n\nexport default MyEditor;\n",name:"gettingStarted.js"}),(0,o.jsx)(xt.Z,{level:3,children:"Importing the default styles"}),(0,o.jsxs)("p",{children:["The plugin ships with a default styling available at this location in the installed package: \xa0",(0,o.jsx)(yt.Z,{code:"node_modules/@draft-js-plugins/tatic-toolbar/lib/plugin.css"})]}),(0,o.jsx)(xt.Z,{level:4,children:"Webpack Usage"}),(0,o.jsxs)("ul",{className:Et().list,children:[(0,o.jsxs)("li",{className:Et().listEntry,children:["1. Install Webpack loaders: \xa0",(0,o.jsx)(yt.Z,{code:"npm i style-loader css-loader --save-dev"})]}),(0,o.jsxs)("li",{className:Et().listEntry,children:["2. Add the below section to Webpack config (if your config already has a loaders array, simply add the below loader object to your existing list.",(0,o.jsx)(a.Z,{code:"module.exports = {\n  module: {\n    loaders: [\n      {\n        test: /plugin\\.css$/,\n        loaders: ['style-loader', 'css'],\n      },\n    ],\n  },\n};\n",className:Et().guideCodeBlock})]}),(0,o.jsxs)("li",{className:Et().listEntry,children:["3. Add the below import line to your component to tell Webpack to inject the style to your component.",(0,o.jsx)(a.Z,{code:"import '@draft-js-plugins/static-toolbar/lib/plugin.css';",className:Et().guideCodeBlock})]}),(0,o.jsx)("li",{className:Et().listEntry,children:"4. Restart Webpack."})]})]}),(0,o.jsxs)(s.Z,{children:[(0,o.jsx)(xt.Z,{level:2,children:"Simple Static Toolbar Example"}),(0,o.jsx)(J,{}),(0,o.jsx)(a.Z,{code:"import React, { Component } from 'react';\nimport Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';\nimport createToolbarPlugin from '@draft-js-plugins/static-toolbar';\nimport editorStyles from './editorStyles.module.css';\n\nconst staticToolbarPlugin = createToolbarPlugin();\nconst { Toolbar } = staticToolbarPlugin;\nconst plugins = [staticToolbarPlugin];\nconst text =\n  'The toolbar above the editor can be used for formatting text, as in conventional static editors  \u2026';\n\nexport default class SimpleStaticToolbarEditor extends Component {\n  state = {\n    editorState: createEditorStateWithText(text),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  componentDidMount() {\n    // fixing issue with SSR https://github.com/facebook/draft-js/issues/2332#issuecomment-761573306\n    // eslint-disable-next-line react/no-did-mount-set-state\n    this.setState({\n      editorState: createEditorStateWithText(text),\n    });\n  }\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div>\n        <div className={editorStyles.editor} onClick={this.focus}>\n          <Editor\n            editorState={this.state.editorState}\n            onChange={this.onChange}\n            plugins={plugins}\n            ref={(element) => {\n              this.editor = element;\n            }}\n          />\n          <Toolbar />\n        </div>\n      </div>\n    );\n  }\n}\n",name:"SimpleToolbarEditor.js"}),(0,o.jsx)(a.Z,{code:".editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n",name:"editorStyles.css"})]}),(0,o.jsxs)(s.Z,{children:[(0,o.jsx)(xt.Z,{level:2,children:"Custom Static Toolbar Example"}),(0,o.jsx)(I,{}),(0,o.jsx)(a.Z,{code:"/* eslint-disable react/no-multi-comp */\nimport React, { Component } from 'react';\n\nimport Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';\n\nimport createToolbarPlugin, {\n  Separator,\n} from '@draft-js-plugins/static-toolbar';\nimport {\n  ItalicButton,\n  BoldButton,\n  UnderlineButton,\n  CodeButton,\n  HeadlineOneButton,\n  HeadlineTwoButton,\n  HeadlineThreeButton,\n  UnorderedListButton,\n  OrderedListButton,\n  BlockquoteButton,\n  CodeBlockButton,\n} from '@draft-js-plugins/buttons';\nimport editorStyles from './editorStyles.module.css';\n\nclass HeadlinesPicker extends Component {\n  componentDidMount() {\n    setTimeout(() => {\n      window.addEventListener('click', this.onWindowClick);\n    });\n  }\n\n  componentWillUnmount() {\n    window.removeEventListener('click', this.onWindowClick);\n  }\n\n  onWindowClick = () =>\n    // Call `onOverrideContent` again with `undefined`\n    // so the toolbar can show its regular content again.\n    this.props.onOverrideContent(undefined);\n\n  render() {\n    const buttons = [HeadlineOneButton, HeadlineTwoButton, HeadlineThreeButton];\n    return (\n      <div>\n        {buttons.map((Button, i) => (\n          // eslint-disable-next-line\n          <Button key={i} {...this.props} />\n        ))}\n      </div>\n    );\n  }\n}\n\nclass HeadlinesButton extends Component {\n  onClick = () =>\n    // A button can call `onOverrideContent` to replace the content\n    // of the toolbar. This can be useful for displaying sub\n    // menus or requesting additional information from the user.\n    this.props.onOverrideContent(HeadlinesPicker);\n\n  render() {\n    return (\n      <div className={editorStyles.headlineButtonWrapper}>\n        <button onClick={this.onClick} className={editorStyles.headlineButton}>\n          H\n        </button>\n      </div>\n    );\n  }\n}\n\nconst toolbarPlugin = createToolbarPlugin();\nconst { Toolbar } = toolbarPlugin;\nconst plugins = [toolbarPlugin];\nconst text =\n  'In this editor a toolbar shows up once you select part of the text \u2026';\n\nexport default class CustomToolbarEditor extends Component {\n  state = {\n    editorState: createEditorStateWithText(text),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  componentDidMount() {\n    // fixing issue with SSR https://github.com/facebook/draft-js/issues/2332#issuecomment-761573306\n    // eslint-disable-next-line react/no-did-mount-set-state\n    this.setState({\n      editorState: createEditorStateWithText(text),\n    });\n  }\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div>\n        <div className={editorStyles.editor} onClick={this.focus}>\n          <Editor\n            editorState={this.state.editorState}\n            onChange={this.onChange}\n            plugins={plugins}\n            ref={(element) => {\n              this.editor = element;\n            }}\n          />\n          <Toolbar>\n            {\n              // may be use React.Fragment instead of div to improve perfomance after React 16\n              (externalProps) => (\n                <div>\n                  <BoldButton {...externalProps} />\n                  <ItalicButton {...externalProps} />\n                  <UnderlineButton {...externalProps} />\n                  <CodeButton {...externalProps} />\n                  <Separator {...externalProps} />\n                  <HeadlinesButton {...externalProps} />\n                  <UnorderedListButton {...externalProps} />\n                  <OrderedListButton {...externalProps} />\n                  <BlockquoteButton {...externalProps} />\n                  <CodeBlockButton {...externalProps} />\n                </div>\n              )\n            }\n          </Toolbar>\n        </div>\n      </div>\n    );\n  }\n}\n",name:"CustomToolbarEditor.js"}),(0,o.jsx)(a.Z,{code:".editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n\n.headlineButtonWrapper {\n  display: inline-block;\n}\n\n.headlineButton {\n  background: #fbfbfb;\n  color: #888;\n  font-size: 18px;\n  border: 0;\n  padding-top: 5px;\n  vertical-align: bottom;\n  height: 34px;\n  width: 36px;\n}\n\n.headlineButton:hover,\n.headlineButton:focus {\n  background: #f3f3f3;\n}\n",name:"editorStyles.css"})]}),(0,o.jsxs)(s.Z,{children:[(0,o.jsx)(xt.Z,{level:2,children:"Themed Static Toolbar Example"}),(0,o.jsx)(vt,{}),(0,o.jsx)(a.Z,{code:"import React, { Component } from 'react';\n\nimport Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';\n\nimport createToolbarPlugin from '@draft-js-plugins/static-toolbar';\nimport editorStyles from './editorStyles.module.css';\nimport buttonStyles from './buttonStyles.module.css';\nimport toolbarStyles from './toolbarStyles.module.css';\n\nconst toolbarPlugin = createToolbarPlugin({\n  theme: { buttonStyles, toolbarStyles },\n});\nconst { Toolbar } = toolbarPlugin;\nconst plugins = [toolbarPlugin];\nconst text =\n  'In this editor a toolbar with a lot more options shows up once you select part of the text \u2026';\n\nexport default class ThemedToolbarEditor extends Component {\n  state = {\n    editorState: createEditorStateWithText(text),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  componentDidMount() {\n    // fixing issue with SSR https://github.com/facebook/draft-js/issues/2332#issuecomment-761573306\n    // eslint-disable-next-line react/no-did-mount-set-state\n    this.setState({\n      editorState: createEditorStateWithText(text),\n    });\n  }\n\n  render() {\n    return (\n      <div>\n        <div className={editorStyles.editor} onClick={this.focus}>\n          <Editor\n            editorState={this.state.editorState}\n            onChange={this.onChange}\n            plugins={plugins}\n            ref={(element) => {\n              this.editor = element;\n            }}\n          />\n          <Toolbar />\n        </div>\n      </div>\n    );\n  }\n}\n",name:"ThemedToolbarEditor.js"}),(0,o.jsx)(a.Z,{code:".editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n",name:"editorStyles.css"}),(0,o.jsx)(a.Z,{code:".buttonWrapper {\n  display: inline-block;\n}\n\n.button {\n  background: #333;\n  color: #ddd;\n  font-size: 18px;\n  border: 0;\n  padding-top: 5px;\n  vertical-align: bottom;\n  height: 34px;\n  width: 36px;\n  border-radius: 4px;\n}\n\n.button svg {\n  fill: #ddd;\n}\n\n.button:hover, .button:focus {\n  background: #444;\n  outline: 0; /* reset for :focus */\n}\n\n.active {\n  color: #6a9cc9;\n}\n\n.active svg {\n  fill: #6a9cc9;\n}\n",name:"buttonStyles.css"}),(0,o.jsx)(a.Z,{code:".toolbar {\n  border: 1px solid #111;\n  background: #333;\n  border-radius: 4px;\n  box-shadow: 0px 1px 3px 0px rgba(220,220,220,1);\n  z-index: 2;\n  box-sizing: border-box;\n}\n\n.toolbar:after {\n  border-color: rgba(255, 255, 255, 0);\n  border-top-color: #333;\n  border-width: 4px;\n  margin-left: -4px;\n}\n\n.toolbar:before {\n  border-color: rgba(221, 221, 221, 0);\n  border-top-color: #111;\n  border-width: 6px;\n  margin-left: -6px;\n}\n",name:"toolbarStyles.css"})]})]})}}])&&_t(n.prototype,r),l&&_t(n,l),e}(r.Component)},7465:function(t){t.exports={root:"Code_root__32MsM",name:"Code_name__Asuq_",hiddenName:"Code_hiddenName__3h9eQ"}},3800:function(t){t.exports={editor:"editorStyles_editor__dnmvQ",headlineButtonWrapper:"editorStyles_headlineButtonWrapper__2jaYK",headlineButton:"editorStyles_headlineButton__1kO9q"}},7117:function(t){t.exports={editor:"editorStyles_editor__2Ylu9"}},6357:function(t){t.exports={buttonWrapper:"buttonStyles_buttonWrapper__N2VHc",button:"buttonStyles_button__3CWcb",active:"buttonStyles_active__aXnhj"}},6128:function(t){t.exports={editor:"editorStyles_editor__RjTn9"}},4697:function(t){t.exports={toolbar:"toolbarStyles_toolbar__2RO0S"}},5373:function(t){t.exports={root:"InlineCode_root__1EGp7"}},2129:function(t){t.exports={root:"styles_root__21E2l",param:"styles_param__3OSx2",paramName:"styles_paramName__3qGfT",subParams:"styles_subParams__xlDv0",subParam:"styles_subParam__3677q",subParamName:"styles_subParamName__19l4W",list:"styles_list__3tjwu",listEntry:"styles_listEntry__1wEnJ",guideCodeBlock:"styles_guideCodeBlock__a1yFf"}},138:function(t,e,n){"use strict";n.d(e,{xM:function(){return S},f9:function(){return y},qA:function(){return w},Tj:function(){return E},YC:function(){return v},n3:function(){return u},Ou:function(){return x},Ed:function(){return d},gS:function(){return f},R8:function(){return m},oV:function(){return h},BI:function(){return c},pu:function(){return g},tg:function(){return p},cU:function(){return b}});var o=n(2784),r=n(1503),i=n(6277);function a(t){var e=t.blockType,n=t.children;return function(t){var a=t.theme,s=function(){if(!t.getEditorState)return!1;var n=t.getEditorState();return n.getCurrentContent().getBlockForKey(n.getSelection().getStartKey()).getType()===e}()?(0,i.Z)(a.button,a.active):a.button;return o.createElement("div",{className:a.buttonWrapper,onMouseDown:function(t){t.preventDefault()}},o.createElement("button",{className:s,onClick:function(n){n.preventDefault(),t.setEditorState(r.RichUtils.toggleBlockType(t.getEditorState(),e))},type:"button",children:n}))}}function s(t){var e=t.style,n=t.children;return function(t){var a=t.theme,s=t.getEditorState&&t.getEditorState().getCurrentInlineStyle().has(e)?(0,i.Z)(a.button,a.active):a.button;return o.createElement("div",{className:a.buttonWrapper,onMouseDown:function(t){t.preventDefault()}},o.createElement("button",{className:s,onClick:function(n){n.preventDefault(),t.setEditorState(r.RichUtils.toggleInlineStyle(t.getEditorState(),e))},type:"button",children:n}))}}function l(t){var e=t.alignment,n=t.children;return function(t){var r=t.theme,a=t.alignment===e?(0,i.Z)(r.button,r.active):r.button;return o.createElement("div",{className:r.buttonWrapper,onMouseDown:function(t){t.preventDefault()}},o.createElement("button",{className:a,onClick:function(n){n.preventDefault(),t.setAlignment({alignment:e})},type:"button",children:n}))}}var c=s({style:"ITALIC",children:o.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),o.createElement("path",{d:"M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"}))}),u=s({style:"BOLD",children:o.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"}),o.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}),d=s({style:"CODE",children:o.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),o.createElement("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"}))}),p=s({style:"UNDERLINE",children:o.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),o.createElement("path",{d:"M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"}))}),f=a({blockType:"header-one",children:"H1"}),h=a({blockType:"header-two",children:"H2"}),m=a({blockType:"header-three",children:"H3"}),b=a({blockType:"unordered-list-item",children:o.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"}),o.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}))}),g=a({blockType:"ordered-list-item",children:o.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"}),o.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}),v=a({blockType:"blockquote",children:o.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"}),o.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}),x=a({blockType:"code-block",children:o.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),o.createElement("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"}))}),y=l({alignment:"default",children:o.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M3,21 L21,21 L21,19 L3,19 L3,21 Z M3,3 L3,5 L21,5 L21,3 L3,3 Z M3,7 L3,17 L17,17 L17,7 L3,7 Z"}),o.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}),S=l({alignment:"center",children:o.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M3,21 L21,21 L21,19 L3,19 L3,21 Z M3,3 L3,5 L21,5 L21,3 L3,3 Z M5,7 L5,17 L19,17 L19,7 L5,7 Z"}),o.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}),w=l({alignment:"left",children:o.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M21,15 L15,15 L15,17 L21,17 L21,15 Z M21,7 L15,7 L15,9 L21,9 L21,7 Z M15,13 L21,13 L21,11 L15,11 L15,13 Z M3,21 L21,21 L21,19 L3,19 L3,21 Z M3,3 L3,5 L21,5 L21,3 L3,3 Z M3,7 L3,17 L13,17 L13,7 L3,7 Z"}),o.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}),E=l({alignment:"right",children:o.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M9,15 L3,15 L3,17 L9,17 L9,15 Z M9,7 L3,7 L3,9 L9,9 L9,7 Z M3,13 L9,13 L9,11 L3,11 L3,13 Z M3,21 L21,21 L21,19 L3,19 L3,21 Z M3,3 L3,5 L21,5 L21,3 L3,3 Z M11,7 L11,17 L21,17 L21,7 L11,7 Z"}),o.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))});s({style:"SUBSCRIPT",children:o.createElement("div",null,"x",o.createElement("sub",null,"2"))}),s({style:"SUPERSCRIPT",children:o.createElement("div",null,"x",o.createElement("sup",null,"2"))})},2367:function(t,e,n){"use strict";n.d(e,{MT:function(){return i},ZP:function(){return s},$m:function(){return a}});var o=n(1503);function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function i(t){void 0===t&&(t={});var e=t,n={};return{subscribeToItem:function(t,e){n[t]=n[t]||[],n[t].push(e)},unsubscribeFromItem:function(t,e){var o=n[t];o&&(n[t]=o.filter((function(t){return t!==e})))},updateItem:function(t,o){var i;e=r({},e,((i={})[t]=o,i));var a=n[t];a&&a.forEach((function(n){return n(e[t])}))},getItem:function(t){return e[t]}}}function a(t,e,n){for(var o,r,i=e.getText();null!==(o=t.exec(i));)o.index===t.lastIndex&&(t.lastIndex+=1),n(r=o.index,r+o[0].length)}var s={decodeOffsetKey:function(t){var e=t.split("-"),n=e[0],o=e[1],r=e[2];return{blockKey:n,decoratorKey:parseInt(o,10),leafKey:parseInt(r,10)}},createLinkAtSelection:function(t,e){var n=t.getCurrentContent().createEntity("LINK","MUTABLE",{url:e}).getLastCreatedEntityKey(),r=o.RichUtils.toggleLink(t,t.getSelection(),n);return o.EditorState.forceSelection(r,t.getSelection())},removeLinkAtSelection:function(t){var e=t.getSelection();return o.RichUtils.toggleLink(t,e,null)},collapseToEnd:function(t){var e=t.getSelection();return o.EditorState.forceSelection(t,e.merge({anchorKey:e.getEndKey(),focusKey:e.getEndKey(),anchorOffset:e.getEndOffset(),focusOffset:e.getEndOffset()}))},getCurrentEntityKey:function(t){var e=t.getSelection(),n=e.getAnchorKey(),o=t.getCurrentContent().getBlockForKey(n),r=e.getAnchorOffset(),i=e.getIsBackward()?r-1:r;return o.getEntityAt(i)},getCurrentEntity:function(t){var e=t.getCurrentContent(),n=this.getCurrentEntityKey(t);return n?e.getEntity(n):null},hasEntity:function(t,e){var n=this.getCurrentEntity(t);return Boolean(n&&n.getType()===e)}}}},function(t){t.O(0,[774,140,476,939,888,179],(function(){return e=7417,t(t.s=e);var e}));var e=t.O();_N_E=e}]);