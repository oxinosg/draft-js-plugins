(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[231],{8884:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plugin/inline-toolbar",function(){return n(3891)}])},5721:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var o=n(2322),r=(n(2784),n(6277)),i=(n(3977),n(7465)),l=n.n(i);function s(e){var t=e.code,n=e.className,i=e.name,s=(0,r.Z)(l().root,n),a=i?l().name:l().hiddenName,c=(0,r.Z)(l().code,"language-".concat(i&&i.endsWith("css")?"css":"js"));return(0,o.jsxs)("div",{className:s,children:[(0,o.jsx)("div",{className:a,children:i}),(0,o.jsx)("pre",{className:c,children:(0,o.jsx)("code",{children:t})})]})}},4799:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var o=n(2322),r=(n(2784),n(6277)),i=(n(3977),n(5373)),l=n.n(i);function s(e){var t=e.code,n=e.className,i=(0,r.Z)(l().root,n);return(0,o.jsx)("span",{className:i,children:(0,o.jsx)("code",{dangerouslySetInnerHTML:{__html:t}})})}},6744:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var o=n(2322),r=n(8476),i=n.n(r),l=n(2784),s=n(2587),a=n(1497),c=n(6351),u=n(6895);function d(e){var t=e.children,n=e.filePath;return(0,l.useEffect)((function(){i().highlightAll()}),[]),(0,o.jsxs)("div",{children:[(0,o.jsx)(a.Z,{}),(0,o.jsx)(c.Z,{}),t,(0,o.jsx)(u.Z,{filePath:n}),(0,o.jsx)(s.Z,{})]})}},3891:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ue}});var o=n(2322),r=n(2784),i=n(7619),l=n(5721),s=n(6769),a=n(4705),c=n(7012),u=n(138),d=n(9481),f=n.n(d);function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function b(e,t,n){return t&&m(e.prototype,t),n&&m(e,n),e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){g(e,t,n[t])}))}return e}function E(e,t){return!t||"object"!==w(t)&&"function"!==typeof t?p(e):t}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},j=function(e){function t(){var e;return h(this,t),g(p(e=E(this,v(t).apply(this,arguments))),"onWindowClick",(function(){return e.props.onOverrideContent(void 0)})),e}return y(t,e),b(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){window.addEventListener("click",e.onWindowClick)}))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.onWindowClick)}},{key:"render",value:function(){var e=this,t=[u.gS,u.oV,u.R8];return(0,o.jsx)("div",{children:t.map((function(t,n){return(0,o.jsx)(t,x({},e.props),n)}))})}}]),t}(r.Component),C=function(e){function t(){var e;return h(this,t),g(p(e=E(this,v(t).apply(this,arguments))),"onMouseDown",(function(e){return e.preventDefault()})),g(p(e),"onClick",(function(){return e.props.onOverrideContent(j)})),e}return y(t,e),b(t,[{key:"render",value:function(){return(0,o.jsx)("div",{onMouseDown:this.onMouseDown,className:f().headlineButtonWrapper,children:(0,o.jsx)("button",{onClick:this.onClick,className:f().headlineButton,children:"H"})})}}]),t}(r.Component),_=(0,c.C)(),T=_.InlineToolbar,L=[_],k="In this editor a toolbar shows up once you select part of the text \u2026",B=function(e){function t(){var e;return h(this,t),g(p(e=E(this,v(t).apply(this,arguments))),"state",{editorState:(0,a.bf)(k)}),g(p(e),"onChange",(function(t){e.setState({editorState:t})})),g(p(e),"focus",(function(){e.editor.focus()})),e}return y(t,e),b(t,[{key:"componentDidMount",value:function(){this.setState({editorState:(0,a.bf)(k)})}},{key:"render",value:function(){var e=this;return(0,o.jsxs)("div",{className:f().editor,onClick:this.focus,children:[(0,o.jsx)(a.ZP,{editorKey:"CustomInlineToolbarEditor",editorState:this.state.editorState,onChange:this.onChange,plugins:L,ref:function(t){e.editor=t}}),(0,o.jsx)(T,{children:function(e){return(0,o.jsxs)("div",{children:[(0,o.jsx)(u.n3,x({},e)),(0,o.jsx)(u.BI,x({},e)),(0,o.jsx)(u.tg,x({},e)),(0,o.jsx)(u.Ed,x({},e)),(0,o.jsx)(c.Z,x({},e)),(0,o.jsx)(C,x({},e)),(0,o.jsx)(u.cU,x({},e)),(0,o.jsx)(u.pu,x({},e)),(0,o.jsx)(u.YC,x({},e)),(0,o.jsx)(u.Ou,x({},e))]})}})]})}}]),t}(r.Component),I=n(443),O=n.n(I),P=n(5627),M=n.n(P),Z=n(5254),N=n.n(Z);function H(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function z(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function W(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t){return!t||"object"!==K(t)&&"function"!==typeof t?H(e):t}function U(e,t){return(U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var K=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},V=(0,c.C)({theme:{buttonStyles:M(),toolbarStyles:N()}}),F=V.InlineToolbar,q=[V],Y="In this editor a toolbar with a lot more options shows up once you select part of the text \u2026",G=function(e){function t(){var e;return z(this,t),D(H(e=A(this,R(t).apply(this,arguments))),"state",{editorState:(0,a.bf)(Y)}),D(H(e),"onChange",(function(t){e.setState({editorState:t})})),D(H(e),"focus",(function(){e.editor.focus()})),e}var n,r,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&U(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.setState({editorState:(0,a.bf)(Y)})}},{key:"render",value:function(){var e=this;return(0,o.jsxs)("div",{className:O().editor,onClick:this.focus,children:[(0,o.jsx)(a.ZP,{editorState:this.state.editorState,onChange:this.onChange,plugins:q,ref:function(t){e.editor=t}}),(0,o.jsx)(F,{})]})}}])&&W(n.prototype,r),i&&W(n,i),t}(r.Component),J=n(3338),Q=n.n(J),X=function(){var e=(0,r.useMemo)((function(){var e=(0,c.C)();return[[e],e.InlineToolbar]}),[]),t=e[0],n=e[1],i=(0,r.useState)((function(){return(0,a.bf)("")})),l=i[0],s=i[1];(0,r.useEffect)((function(){s((0,a.bf)("In this editor a toolbar shows up once you select part of the text \u2026"))}),[]);var u=(0,r.useRef)(null);return(0,o.jsxs)("div",{className:Q().editor,onClick:function(){var e;null===(e=u.current)||void 0===e||e.focus()},children:[(0,o.jsx)(a.ZP,{editorKey:"SimpleInlineToolbarEditor",editorState:l,onChange:function(e){s(e)},plugins:t,ref:function(e){u.current=e}}),(0,o.jsx)(n,{})]})},$=n(397),ee=n(4799),te=n(6744),ne=n(7390),oe=n.n(ne);function re(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ie(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function le(e){return(le=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function se(e,t){return!t||"object"!==ce(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ae(e,t){return(ae=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ce=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},ue=function(e){function t(){return re(this,t),se(this,le(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ae(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){return(0,o.jsxs)(te.Z,{filePath:"packages/docs/pages/plugin/inline-toolbar/index.js",children:[(0,o.jsxs)(s.Z,{children:[(0,o.jsx)($.Z,{level:2,children:"InlineToolbar"}),(0,o.jsx)($.Z,{level:3,children:"Supported Environment"}),(0,o.jsxs)("ul",{className:oe().list,children:[(0,o.jsx)("li",{className:oe().listEntry,children:"Desktop: Yes"}),(0,o.jsx)("li",{className:oe().listEntry,children:"Mobile: No"}),(0,o.jsx)("li",{className:oe().listEntry,children:"Screen-reader: No"})]})]}),(0,o.jsxs)(i.Z,{children:[(0,o.jsx)($.Z,{level:2,children:"Getting Started"}),(0,o.jsx)(l.Z,{code:"npm install @draft-js-plugins/editor"}),(0,o.jsx)(l.Z,{code:"npm install @draft-js-plugins/inline-toolbar"}),(0,o.jsx)(l.Z,{code:"// It is important to import the Editor which accepts plugins.\nimport Editor from '@draft-js-plugins/editor';\nimport createInlineToolbarPlugin from '@draft-js-plugins/inline-toolbar';\nimport React from 'react';\n\n// Creates an Instance. At this step, a configuration object can be passed in\n// as an argument.\nconst inlineToolbarPlugin = createInlineToolbarPlugin();\n\n// The Editor accepts an array of plugins. In this case, only the inlineToolbarPlugin\n// is passed in, although it is possible to pass in multiple plugins.\nconst MyEditor = ({ editorState, onChange }) => (\n  <Editor\n    editorState={editorState}\n    onChange={onChange}\n    plugins={[inlineToolbarPlugin]}\n  />\n);\n\nexport default MyEditor;\n",name:"gettingStarted.js"}),(0,o.jsx)($.Z,{level:3,children:"Importing the default styles"}),(0,o.jsxs)("p",{children:["The plugin ships with a default styling available at this location in the installed package: \xa0",(0,o.jsx)(ee.Z,{code:"node_modules/@draft-js-plugins/inline-toolbar/lib/plugin.css"})]}),(0,o.jsx)($.Z,{level:4,children:"Webpack Usage"}),(0,o.jsxs)("ul",{className:oe().list,children:[(0,o.jsxs)("li",{className:oe().listEntry,children:["1. Install Webpack loaders: \xa0",(0,o.jsx)(ee.Z,{code:"npm i style-loader css-loader --save-dev"})]}),(0,o.jsxs)("li",{className:oe().listEntry,children:["2. Add the below section to Webpack config (if your config already has a loaders array, simply add the below loader object to your existing list.",(0,o.jsx)(l.Z,{code:"module.exports = {\n  module: {\n    loaders: [\n      {\n        test: /plugin\\.css$/,\n        loaders: ['style-loader', 'css'],\n      },\n    ],\n  },\n};\n",className:oe().guideCodeBlock})]}),(0,o.jsxs)("li",{className:oe().listEntry,children:["3. Add the below import line to your component to tell Webpack to inject the style to your component.",(0,o.jsx)(l.Z,{code:"import '@draft-js-plugins/inline-toolbar/lib/plugin.css';",className:oe().guideCodeBlock})]}),(0,o.jsx)("li",{className:oe().listEntry,children:"4. Restart Webpack."})]})]}),(0,o.jsxs)(s.Z,{children:[(0,o.jsx)($.Z,{level:2,children:"Simple Inline Toolbar Example"}),(0,o.jsx)(X,{}),(0,o.jsx)(l.Z,{code:"import React, {\n  ReactElement,\n  useEffect,\n  useMemo,\n  useRef,\n  useState,\n} from 'react';\nimport { EditorState } from 'draft-js';\nimport Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';\nimport createInlineToolbarPlugin from '@draft-js-plugins/inline-toolbar';\nimport editorStyles from './editorStyles.module.css';\n\nconst text =\n  'In this editor a toolbar shows up once you select part of the text \u2026';\n\nconst SimpleInlineToolbarEditor = (): ReactElement => {\n  const [plugins, InlineToolbar] = useMemo(() => {\n    const inlineToolbarPlugin = createInlineToolbarPlugin();\n    return [[inlineToolbarPlugin], inlineToolbarPlugin.InlineToolbar];\n  }, []);\n\n  const [editorState, setEditorState] = useState(() =>\n    createEditorStateWithText('')\n  );\n\n  useEffect(() => {\n    // fixing issue with SSR https://github.com/facebook/draft-js/issues/2332#issuecomment-761573306\n    setEditorState(createEditorStateWithText(text));\n  }, []);\n\n  const editor = useRef<Editor | null>(null);\n\n  const onChange = (value: EditorState): void => {\n    setEditorState(value);\n  };\n\n  const focus = (): void => {\n    editor.current?.focus();\n  };\n\n  return (\n    <div className={editorStyles.editor} onClick={focus}>\n      <Editor\n        editorKey=\"SimpleInlineToolbarEditor\"\n        editorState={editorState}\n        onChange={onChange}\n        plugins={plugins}\n        ref={(element) => {\n          editor.current = element;\n        }}\n      />\n      <InlineToolbar />\n    </div>\n  );\n};\n\nexport default SimpleInlineToolbarEditor;\n",name:"SimpleInlineToolbarEditor.js"}),(0,o.jsx)(l.Z,{code:".editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n",name:"editorStyles.css"})]}),(0,o.jsxs)(s.Z,{children:[(0,o.jsx)($.Z,{level:2,children:"Custom Inline Toolbar Example"}),(0,o.jsx)(B,{}),(0,o.jsx)(l.Z,{code:"/* eslint-disable react/no-multi-comp */\nimport React, { Component } from 'react';\n\nimport Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';\n\nimport createInlineToolbarPlugin, {\n  Separator,\n} from '@draft-js-plugins/inline-toolbar';\nimport {\n  ItalicButton,\n  BoldButton,\n  UnderlineButton,\n  CodeButton,\n  HeadlineOneButton,\n  HeadlineTwoButton,\n  HeadlineThreeButton,\n  UnorderedListButton,\n  OrderedListButton,\n  BlockquoteButton,\n  CodeBlockButton,\n} from '@draft-js-plugins/buttons';\nimport editorStyles from './editorStyles.module.css';\n\nclass HeadlinesPicker extends Component {\n  componentDidMount() {\n    setTimeout(() => {\n      window.addEventListener('click', this.onWindowClick);\n    });\n  }\n\n  componentWillUnmount() {\n    window.removeEventListener('click', this.onWindowClick);\n  }\n\n  onWindowClick = () =>\n    // Call `onOverrideContent` again with `undefined`\n    // so the toolbar can show its regular content again.\n    this.props.onOverrideContent(undefined);\n\n  render() {\n    const buttons = [HeadlineOneButton, HeadlineTwoButton, HeadlineThreeButton];\n    return (\n      <div>\n        {buttons.map((Button, i) => (\n          // eslint-disable-next-line react/no-array-index-key\n          <Button key={i} {...this.props} />\n        ))}\n      </div>\n    );\n  }\n}\n\nclass HeadlinesButton extends Component {\n  // When using a click event inside overridden content, mouse down\n  // events needs to be prevented so the focus stays in the editor\n  // and the toolbar remains visible  onMouseDown = (event) => event.preventDefault()\n  onMouseDown = (event) => event.preventDefault();\n\n  onClick = () =>\n    // A button can call `onOverrideContent` to replace the content\n    // of the toolbar. This can be useful for displaying sub\n    // menus or requesting additional information from the user.\n    this.props.onOverrideContent(HeadlinesPicker);\n\n  render() {\n    return (\n      <div\n        onMouseDown={this.onMouseDown}\n        className={editorStyles.headlineButtonWrapper}\n      >\n        <button onClick={this.onClick} className={editorStyles.headlineButton}>\n          H\n        </button>\n      </div>\n    );\n  }\n}\n\nconst inlineToolbarPlugin = createInlineToolbarPlugin();\nconst { InlineToolbar } = inlineToolbarPlugin;\nconst plugins = [inlineToolbarPlugin];\nconst text =\n  'In this editor a toolbar shows up once you select part of the text \u2026';\n\nexport default class CustomInlineToolbarEditor extends Component {\n  state = {\n    editorState: createEditorStateWithText(text),\n  };\n\n  componentDidMount() {\n    // fixing issue with SSR https://github.com/facebook/draft-js/issues/2332#issuecomment-761573306\n    // eslint-disable-next-line react/no-did-mount-set-state\n    this.setState({\n      editorState: createEditorStateWithText(text),\n    });\n  }\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div className={editorStyles.editor} onClick={this.focus}>\n        <Editor\n          editorKey=\"CustomInlineToolbarEditor\"\n          editorState={this.state.editorState}\n          onChange={this.onChange}\n          plugins={plugins}\n          ref={(element) => {\n            this.editor = element;\n          }}\n        />\n        <InlineToolbar>\n          {\n            // may be use React.Fragment instead of div to improve perfomance after React 16\n            (externalProps) => (\n              <div>\n                <BoldButton {...externalProps} />\n                <ItalicButton {...externalProps} />\n                <UnderlineButton {...externalProps} />\n                <CodeButton {...externalProps} />\n                <Separator {...externalProps} />\n                <HeadlinesButton {...externalProps} />\n                <UnorderedListButton {...externalProps} />\n                <OrderedListButton {...externalProps} />\n                <BlockquoteButton {...externalProps} />\n                <CodeBlockButton {...externalProps} />\n              </div>\n            )\n          }\n        </InlineToolbar>\n      </div>\n    );\n  }\n}\n",name:"CustomInlineToolbarEditor.js"}),(0,o.jsx)(l.Z,{code:".editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n\n.headlineButtonWrapper {\n  display: inline-block;\n}\n\n.headlineButton {\n  background: #fbfbfb;\n  color: #888;\n  font-size: 18px;\n  border: 0;\n  padding-top: 5px;\n  vertical-align: bottom;\n  height: 34px;\n  width: 36px;\n}\n\n.headlineButton:hover,\n.headlineButton:focus {\n  background: #f3f3f3;\n}\n",name:"editorStyles.css"})]}),(0,o.jsxs)(s.Z,{children:[(0,o.jsx)($.Z,{level:2,children:"Themed Inline Toolbar Example"}),(0,o.jsx)(G,{}),(0,o.jsx)(l.Z,{code:"import React, { Component } from 'react';\n\nimport Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';\n\nimport createInlineToolbarPlugin from '@draft-js-plugins/inline-toolbar';\nimport editorStyles from './editorStyles.module.css';\nimport buttonStyles from './buttonStyles.module.css';\nimport toolbarStyles from './toolbarStyles.module.css';\n\nconst inlineToolbarPlugin = createInlineToolbarPlugin({\n  theme: { buttonStyles, toolbarStyles },\n});\nconst { InlineToolbar } = inlineToolbarPlugin;\nconst plugins = [inlineToolbarPlugin];\nconst text =\n  'In this editor a toolbar with a lot more options shows up once you select part of the text \u2026';\n\nexport default class ThemedInlineToolbarEditor extends Component {\n  state = {\n    editorState: createEditorStateWithText(text),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  componentDidMount() {\n    // fixing issue with SSR https://github.com/facebook/draft-js/issues/2332#issuecomment-761573306\n    // eslint-disable-next-line react/no-did-mount-set-state\n    this.setState({\n      editorState: createEditorStateWithText(text),\n    });\n  }\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div className={editorStyles.editor} onClick={this.focus}>\n        <Editor\n          editorState={this.state.editorState}\n          onChange={this.onChange}\n          plugins={plugins}\n          ref={(element) => {\n            this.editor = element;\n          }}\n        />\n        <InlineToolbar />\n      </div>\n    );\n  }\n}\n",name:"ThemedInlineToolbarEditor.js"}),(0,o.jsx)(l.Z,{code:".editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n",name:"editorStyles.css"})]})]})}}])&&ie(n.prototype,r),a&&ie(n,a),t}(r.Component)},7465:function(e){e.exports={root:"Code_root__32MsM",name:"Code_name__Asuq_",hiddenName:"Code_hiddenName__3h9eQ"}},9481:function(e){e.exports={editor:"editorStyles_editor__3ocb0",headlineButtonWrapper:"editorStyles_headlineButtonWrapper__2O9uZ",headlineButton:"editorStyles_headlineButton__FfZC1"}},3338:function(e){e.exports={editor:"editorStyles_editor__1ufHm"}},5627:function(e){e.exports={buttonWrapper:"buttonStyles_buttonWrapper__3Yr1W",button:"buttonStyles_button__3Qfji",active:"buttonStyles_active__1pxfh"}},443:function(e){e.exports={editor:"editorStyles_editor__3RUD6"}},5254:function(e){e.exports={toolbar:"toolbarStyles_toolbar__1POhO"}},5373:function(e){e.exports={root:"InlineCode_root__1EGp7"}},7390:function(e){e.exports={root:"styles_root__3qZZl",param:"styles_param__2Tn5n",paramName:"styles_paramName__3eRJF",subParams:"styles_subParams__L918N",subParam:"styles_subParam__13_-5",subParamName:"styles_subParamName__3yCJd",list:"styles_list__3jaAM",listEntry:"styles_listEntry__2aPRg",guideCodeBlock:"styles_guideCodeBlock__6UoIb"}},138:function(e,t,n){"use strict";n.d(t,{xM:function(){return E},f9:function(){return x},qA:function(){return S},Tj:function(){return w},YC:function(){return v},n3:function(){return u},Ou:function(){return y},Ed:function(){return d},gS:function(){return p},R8:function(){return m},oV:function(){return h},BI:function(){return c},pu:function(){return g},tg:function(){return f},cU:function(){return b}});var o=n(2784),r=n(1503),i=n(6277);function l(e){var t=e.blockType,n=e.children;return function(e){var l=e.theme,s=function(){if(!e.getEditorState)return!1;var n=e.getEditorState();return n.getCurrentContent().getBlockForKey(n.getSelection().getStartKey()).getType()===t}()?(0,i.Z)(l.button,l.active):l.button;return o.createElement("div",{className:l.buttonWrapper,onMouseDown:function(e){e.preventDefault()}},o.createElement("button",{className:s,onClick:function(n){n.preventDefault(),e.setEditorState(r.RichUtils.toggleBlockType(e.getEditorState(),t))},type:"button",children:n}))}}function s(e){var t=e.style,n=e.children;return function(e){var l=e.theme,s=e.getEditorState&&e.getEditorState().getCurrentInlineStyle().has(t)?(0,i.Z)(l.button,l.active):l.button;return o.createElement("div",{className:l.buttonWrapper,onMouseDown:function(e){e.preventDefault()}},o.createElement("button",{className:s,onClick:function(n){n.preventDefault(),e.setEditorState(r.RichUtils.toggleInlineStyle(e.getEditorState(),t))},type:"button",children:n}))}}function a(e){var t=e.alignment,n=e.children;return function(e){var r=e.theme,l=e.alignment===t?(0,i.Z)(r.button,r.active):r.button;return o.createElement("div",{className:r.buttonWrapper,onMouseDown:function(e){e.preventDefault()}},o.createElement("button",{className:l,onClick:function(n){n.preventDefault(),e.setAlignment({alignment:t})},type:"button",children:n}))}}var c=s({style:"ITALIC",children:o.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),o.createElement("path",{d:"M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"}))}),u=s({style:"BOLD",children:o.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"}),o.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}),d=s({style:"CODE",children:o.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),o.createElement("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"}))}),f=s({style:"UNDERLINE",children:o.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),o.createElement("path",{d:"M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"}))}),p=l({blockType:"header-one",children:"H1"}),h=l({blockType:"header-two",children:"H2"}),m=l({blockType:"header-three",children:"H3"}),b=l({blockType:"unordered-list-item",children:o.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"}),o.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}))}),g=l({blockType:"ordered-list-item",children:o.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"}),o.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}),v=l({blockType:"blockquote",children:o.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"}),o.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}),y=l({blockType:"code-block",children:o.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),o.createElement("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"}))}),x=a({alignment:"default",children:o.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M3,21 L21,21 L21,19 L3,19 L3,21 Z M3,3 L3,5 L21,5 L21,3 L3,3 Z M3,7 L3,17 L17,17 L17,7 L3,7 Z"}),o.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}),E=a({alignment:"center",children:o.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M3,21 L21,21 L21,19 L3,19 L3,21 Z M3,3 L3,5 L21,5 L21,3 L3,3 Z M5,7 L5,17 L19,17 L19,7 L5,7 Z"}),o.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}),S=a({alignment:"left",children:o.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M21,15 L15,15 L15,17 L21,17 L21,15 Z M21,7 L15,7 L15,9 L21,9 L21,7 Z M15,13 L21,13 L21,11 L15,11 L15,13 Z M3,21 L21,21 L21,19 L3,19 L3,21 Z M3,3 L3,5 L21,5 L21,3 L3,3 Z M3,7 L3,17 L13,17 L13,7 L3,7 Z"}),o.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))}),w=a({alignment:"right",children:o.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M9,15 L3,15 L3,17 L9,17 L9,15 Z M9,7 L3,7 L3,9 L9,9 L9,7 Z M3,13 L9,13 L9,11 L3,11 L3,13 Z M3,21 L21,21 L21,19 L3,19 L3,21 Z M3,3 L3,5 L21,5 L21,3 L3,3 Z M11,7 L11,17 L21,17 L21,7 L11,7 Z"}),o.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))});s({style:"SUBSCRIPT",children:o.createElement("div",null,"x",o.createElement("sub",null,"2"))}),s({style:"SUPERSCRIPT",children:o.createElement("div",null,"x",o.createElement("sup",null,"2"))})},7012:function(e,t,n){"use strict";n.d(t,{Z:function(){return u},C:function(){return f}});var o=n(2784),r=n(2367),i=n(1503),l=n(138);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var c=function(e){var t,n;function r(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))||this).state={isVisible:!1,position:void 0,overrideContent:void 0},t.toolbar=null,t.onOverrideContent=function(e){t.setState({overrideContent:e})},t.onSelectionChanged=function(){setTimeout((function(){if(t.toolbar){var e=t.props.store.getItem("getEditorRef")();if(e){for(var n=e.refs&&e.refs.editor?e.refs.editor:e.editor;-1===n.className.indexOf("DraftEditor-root");)n=n.parentNode;var o=n.getBoundingClientRect(),r=n.ownerDocument&&n.ownerDocument.defaultView,l=(0,i.getVisibleSelectionRect)(r||window);if(l){var s={top:n.offsetTop-t.toolbar.offsetHeight+(l.top-o.top)-5,left:n.offsetLeft+(l.left-o.left)+l.width/2};t.setState({position:s})}}}}))},t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,a(t,n);var l=r.prototype;return l.UNSAFE_componentWillMount=function(){this.props.store.subscribeToItem("selection",this.onSelectionChanged)},l.componentWillUnmount=function(){this.props.store.unsubscribeFromItem("selection",this.onSelectionChanged)},l.getStyle=function(){var e=this.props.store,t=this.state,n=t.overrideContent,o=t.position,r=e.getItem("getEditorState")().getSelection(),i=!r.isCollapsed()&&r.getHasFocus()||n,l=s({},o);return i?(l.visibility="visible",l.transform="translate(-50%) scale(1)",l.transition="transform 0.15s cubic-bezier(.3,1.2,.2,1)"):(l.transform="translate(-50%) scale(0)",l.visibility="hidden"),l},l.render=function(){var e=this,t=this.props,n=t.theme,r=t.store,i=this.state.overrideContent,l={theme:n.buttonStyles,getEditorState:r.getItem("getEditorState"),setEditorState:r.getItem("setEditorState"),onOverrideContent:this.onOverrideContent};return o.createElement("div",{className:n.toolbarStyles.toolbar,style:this.getStyle(),ref:function(t){e.toolbar=t}},i?o.createElement(i,l):this.props.children(l))},r}(o.Component);c.defaultProps={children:function(e){return o.createElement("div",null,o.createElement(l.BI,e),o.createElement(l.n3,e),o.createElement(l.tg,e),o.createElement(l.Ed,e))}};function u(e){var t=e.className,n=void 0===t?"s1o2cezu":t;return o.createElement("div",{className:n})}var d={buttonStyles:{buttonWrapper:"bpsgbes",button:"b181v2oy",active:"a9immln"},toolbarStyles:{toolbar:"tukdd6b"}},f=function(e){void 0===e&&(e={});var t=(0,r.MT)({isVisible:!1}),n=e.theme,i=void 0===n?d:n;return{initialize:function(e){var n=e.getEditorState,o=e.setEditorState,r=e.getEditorRef;t.updateItem("getEditorState",n),t.updateItem("setEditorState",o),t.updateItem("getEditorRef",r)},onChange:function(e){return t.updateItem("selection",e.getSelection()),e},InlineToolbar:function(e){return o.createElement(c,s({},e,{store:t,theme:i}))}}}},2367:function(e,t,n){"use strict";n.d(t,{MT:function(){return i},ZP:function(){return s},$m:function(){return l}});var o=n(1503);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function i(e){void 0===e&&(e={});var t=e,n={};return{subscribeToItem:function(e,t){n[e]=n[e]||[],n[e].push(t)},unsubscribeFromItem:function(e,t){var o=n[e];o&&(n[e]=o.filter((function(e){return e!==t})))},updateItem:function(e,o){var i;t=r({},t,((i={})[e]=o,i));var l=n[e];l&&l.forEach((function(n){return n(t[e])}))},getItem:function(e){return t[e]}}}function l(e,t,n){for(var o,r,i=t.getText();null!==(o=e.exec(i));)o.index===e.lastIndex&&(e.lastIndex+=1),n(r=o.index,r+o[0].length)}var s={decodeOffsetKey:function(e){var t=e.split("-"),n=t[0],o=t[1],r=t[2];return{blockKey:n,decoratorKey:parseInt(o,10),leafKey:parseInt(r,10)}},createLinkAtSelection:function(e,t){var n=e.getCurrentContent().createEntity("LINK","MUTABLE",{url:t}).getLastCreatedEntityKey(),r=o.RichUtils.toggleLink(e,e.getSelection(),n);return o.EditorState.forceSelection(r,e.getSelection())},removeLinkAtSelection:function(e){var t=e.getSelection();return o.RichUtils.toggleLink(e,t,null)},collapseToEnd:function(e){var t=e.getSelection();return o.EditorState.forceSelection(e,t.merge({anchorKey:t.getEndKey(),focusKey:t.getEndKey(),anchorOffset:t.getEndOffset(),focusOffset:t.getEndOffset()}))},getCurrentEntityKey:function(e){var t=e.getSelection(),n=t.getAnchorKey(),o=e.getCurrentContent().getBlockForKey(n),r=t.getAnchorOffset(),i=t.getIsBackward()?r-1:r;return o.getEntityAt(i)},getCurrentEntity:function(e){var t=e.getCurrentContent(),n=this.getCurrentEntityKey(e);return n?t.getEntity(n):null},hasEntity:function(e,t){var n=this.getCurrentEntity(e);return Boolean(n&&n.getType()===t)}}}},function(e){e.O(0,[774,140,476,939,888,179],(function(){return t=8884,e(e.s=t);var t}));var t=e.O();_N_E=t}]);