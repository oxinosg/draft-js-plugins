(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[651],{1597:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plugin/focus",function(){return n(224)}])},5721:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var o=n(2322),r=(n(2784),n(6277)),i=(n(3977),n(7465)),s=n.n(i);function a(e){var t=e.code,n=e.className,i=e.name,a=(0,r.Z)(s().root,n),c=i?s().name:s().hiddenName,l=(0,r.Z)(s().code,"language-".concat(i&&i.endsWith("css")?"css":"js"));return(0,o.jsxs)("div",{className:a,children:[(0,o.jsx)("div",{className:c,children:i}),(0,o.jsx)("pre",{className:l,children:(0,o.jsx)("code",{children:t})})]})}},4799:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var o=n(2322),r=(n(2784),n(6277)),i=(n(3977),n(5373)),s=n.n(i);function a(e){var t=e.code,n=e.className,i=(0,r.Z)(s().root,n);return(0,o.jsx)("span",{className:i,children:(0,o.jsx)("code",{dangerouslySetInnerHTML:{__html:t}})})}},6744:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var o=n(2322),r=n(8476),i=n.n(r),s=n(2784),a=n(2587),c=n(1497),l=n(6351),u=n(6895);function d(e){var t=e.children,n=e.filePath;return(0,s.useEffect)((function(){i().highlightAll()}),[]),(0,o.jsxs)("div",{children:[(0,o.jsx)(c.Z,{}),(0,o.jsx)(l.Z,{}),t,(0,o.jsx)(u.Z,{filePath:n}),(0,o.jsx)(a.Z,{})]})}},224:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return q}});var o=n(2322),r=n(2784),i=n(7619),s=n(5721),a=n(6769),c=n(1503),l=n(4705),u=n(5597);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){d(e,t,n[t])}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=r.forwardRef((function(e,t){e.block,e.blockProps,e.customStyleMap,e.customStyleFn,e.decorator,e.forceSelection,e.offsetKey,e.selection,e.tree,e.contentState,e.blockStyleFn,e.preventScroll;var n=e.style,r=p(e,["block","blockProps","customStyleMap","customStyleFn","decorator","forceSelection","offsetKey","selection","tree","contentState","blockStyleFn","preventScroll","style"]);return(0,o.jsx)("div",f({ref:t},r,{style:f({width:200,height:80,backgroundColor:"#9bc0c7"},n)}))}));g.displayName="ColorBlock";var y=function(e){var t=void 0===e?{}:e,n=t.decorator?t.decorator(g):g;return{blockRendererFn:function(e,t){var o=t.getEditorState;if("atomic"===e.getType()&&"colorBlock"===o().getCurrentContent().getEntity(e.getEntityAt(0)).getType())return{component:n,editable:!1};return null}}},m=n(4836),h=n.n(m);function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function S(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return!t||"object"!==_(t)&&"function"!==typeof t?b(e):t}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var _=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},w=(0,u.Z)(),E=[w,y({decorator:(0,l.lM)(w.decorator)})],K={entityMap:{0:{type:"colorBlock",mutability:"IMMUTABLE",data:{}}},blocks:[{key:"9gm3s",text:"This is a simple example. Focus the block by clicking on it and change alignment via the toolbar.",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}},{key:"ov7r",text:" ",type:"atomic",depth:0,inlineStyleRanges:[],entityRanges:[{offset:0,length:1,key:0}],data:{}},{key:"e23a8",text:"More text here to demonstrate how inline left/right alignment works \u2026",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}}]},O=function(e){function t(){var e;return v(this,t),k(b(e=j(this,x(t).apply(this,arguments))),"state",{editorState:c.EditorState.createWithContent((0,c.convertFromRaw)(K))}),k(b(e),"onChange",(function(t){e.setState({editorState:t})})),k(b(e),"focus",(function(){e.editor.focus()})),e}var n,r,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this;return(0,o.jsx)("div",{className:h().editor,onClick:this.focus,children:(0,o.jsx)(l.ZP,{editorState:this.state.editorState,onChange:this.onChange,plugins:E,ref:function(t){e.editor=t}})})}}])&&S(n.prototype,r),i&&S(n,i),t}(r.Component),B=n(397),P=n(4799),N=n(6744),Z=n(7847),R=n.n(Z);function F(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function A(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e,t){return!t||"object"!==W(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var W=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},q=function(e){function t(){return F(this,t),M(this,T(t).apply(this,arguments))}var n,r,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){return(0,o.jsxs)(N.Z,{filePath:"packages/docs/pages/plugin/focus/index.js",children:[(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(B.Z,{level:2,children:"Focus"}),(0,o.jsx)(B.Z,{level:3,children:"Prerequisite"}),(0,o.jsx)("p",{children:"This plugin exposes a decorator for blocks of the type `atomic`. You can use it in combination with any kind of plugin that manages a Draft.js block e.g. image or video. Keep in mind the plugin must accept a decorator for the block. The `Simple Focus Example` further down contains an example plugin rendering a colored div."}),(0,o.jsx)(B.Z,{level:3,children:"Usage"}),(0,o.jsx)("p",{children:"Select (via mouse or keyboard) a block."}),(0,o.jsx)(B.Z,{level:3,children:"Supported Environment"}),(0,o.jsxs)("ul",{className:R().list,children:[(0,o.jsx)("li",{className:R().listEntry,children:"Desktop: Yes"}),(0,o.jsx)("li",{className:R().listEntry,children:"Mobile: Yes"}),(0,o.jsx)("li",{className:R().listEntry,children:"Screen-reader: No"})]})]}),(0,o.jsxs)(i.Z,{children:[(0,o.jsx)(B.Z,{level:2,children:"Getting Started"}),(0,o.jsx)(s.Z,{code:"npm install @draft-js-plugins/editor"}),(0,o.jsx)(s.Z,{code:"npm install @draft-js-plugins/focus"}),(0,o.jsx)(B.Z,{level:3,children:"Importing the default styles"}),(0,o.jsxs)("p",{children:["The plugin ships with a default styling available at this location in the installed package: \xa0",(0,o.jsx)(P.Z,{code:"node_modules/@draft-js-plugins/focus/lib/plugin.css"})]}),(0,o.jsx)(B.Z,{level:4,children:"Webpack Usage"}),(0,o.jsxs)("ul",{className:R().list,children:[(0,o.jsxs)("li",{className:R().listEntry,children:["1. Install Webpack loaders: \xa0",(0,o.jsx)(P.Z,{code:"npm i style-loader css-loader --save-dev"})]}),(0,o.jsxs)("li",{className:R().listEntry,children:["2. Add the below section to Webpack config (if your config already has a loaders array, simply add the below loader object to your existing list.",(0,o.jsx)(s.Z,{code:"module.exports = {\n  module: {\n    loaders: [\n      {\n        test: /plugin\\.css$/,\n        loaders: ['style-loader', 'css'],\n      },\n    ],\n  },\n};\n",className:R().guideCodeBlock})]}),(0,o.jsxs)("li",{className:R().listEntry,children:["3. Add the below import line to your component to tell Webpack to inject the style to your component.",(0,o.jsx)(s.Z,{code:"import '@draft-js-plugins/focus/lib/plugin.css';",className:R().guideCodeBlock})]}),(0,o.jsx)("li",{className:R().listEntry,children:"4. Restart Webpack."})]})]}),(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(B.Z,{level:2,children:"Configuration Parameters"}),(0,o.jsxs)("div",{className:R().param,children:[(0,o.jsx)("span",{className:R().paramName,children:"theme"}),(0,o.jsx)("span",{children:"Object of CSS classes with the following keys:"}),(0,o.jsxs)("div",{className:R().subParams,children:[(0,o.jsxs)("div",{className:R().subParam,children:[(0,o.jsx)("span",{className:R().subParamName,children:"focused:"}),"CSS class for the focused item."]}),(0,o.jsxs)("div",{className:R().subParam,children:[(0,o.jsx)("span",{className:R().subParamName,children:"unfocused:"}),"CSS class for the unfocused item."]})]})]})]}),(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(B.Z,{level:2,children:"Simple Focus Example"}),(0,o.jsx)(O,{}),(0,o.jsx)(s.Z,{code:"import React, { Component } from 'react';\nimport { convertFromRaw, EditorState } from 'draft-js';\n\nimport Editor, { composeDecorators } from '@draft-js-plugins/editor';\n\nimport createFocusPlugin from '@draft-js-plugins/focus';\nimport createColorBlockPlugin from './colorBlockPlugin';\nimport editorStyles from './editorStyles.module.css';\n\nconst focusPlugin = createFocusPlugin();\n\nconst decorator = composeDecorators(focusPlugin.decorator);\n\nconst colorBlockPlugin = createColorBlockPlugin({ decorator });\nconst plugins = [focusPlugin, colorBlockPlugin];\n\n/* eslint-disable */\nconst initialState = {\n  entityMap: {\n    0: {\n      type: 'colorBlock',\n      mutability: 'IMMUTABLE',\n      data: {},\n    },\n  },\n  blocks: [\n    {\n      key: '9gm3s',\n      text:\n        'This is a simple example. Focus the block by clicking on it and change alignment via the toolbar.',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n    {\n      key: 'ov7r',\n      text: ' ',\n      type: 'atomic',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [\n        {\n          offset: 0,\n          length: 1,\n          key: 0,\n        },\n      ],\n      data: {},\n    },\n    {\n      key: 'e23a8',\n      text:\n        'More text here to demonstrate how inline left/right alignment works \u2026',\n      type: 'unstyled',\n      depth: 0,\n      inlineStyleRanges: [],\n      entityRanges: [],\n      data: {},\n    },\n  ],\n};\n/* eslint-enable */\n\nexport default class CustomImageEditor extends Component {\n  state = {\n    editorState: EditorState.createWithContent(convertFromRaw(initialState)),\n  };\n\n  onChange = (editorState) => {\n    this.setState({\n      editorState,\n    });\n  };\n\n  focus = () => {\n    this.editor.focus();\n  };\n\n  render() {\n    return (\n      <div className={editorStyles.editor} onClick={this.focus}>\n        <Editor\n          editorState={this.state.editorState}\n          onChange={this.onChange}\n          plugins={plugins}\n          ref={(element) => {\n            this.editor = element;\n          }}\n        />\n      </div>\n    );\n  }\n}\n",name:"SimpleFocusEditor.js"}),(0,o.jsx)(s.Z,{code:"import React from 'react';\n\nconst ColorBlock = React.forwardRef(\n  (\n    {\n      block, // eslint-disable-line no-unused-vars\n      blockProps, // eslint-disable-line no-unused-vars\n      customStyleMap, // eslint-disable-line no-unused-vars\n      customStyleFn, // eslint-disable-line no-unused-vars\n      decorator, // eslint-disable-line no-unused-vars\n      forceSelection, // eslint-disable-line no-unused-vars\n      offsetKey, // eslint-disable-line no-unused-vars\n      selection, // eslint-disable-line no-unused-vars\n      tree, // eslint-disable-line no-unused-vars\n      contentState, // eslint-disable-line no-unused-vars\n      blockStyleFn, // eslint-disable-line no-unused-vars\n      preventScroll, // eslint-disable-line no-unused-vars\n      style,\n      ...elementProps\n    },\n    ref\n  ) => (\n    <div\n      ref={ref}\n      {...elementProps}\n      style={{ width: 200, height: 80, backgroundColor: '#9bc0c7', ...style }}\n    />\n  )\n);\n\nconst createColorBlockPlugin = (config = {}) => {\n  const component = config.decorator\n    ? config.decorator(ColorBlock)\n    : ColorBlock;\n  return {\n    blockRendererFn: (block, { getEditorState }) => {\n      if (block.getType() === 'atomic') {\n        const contentState = getEditorState().getCurrentContent();\n        const entity = contentState.getEntity(block.getEntityAt(0));\n        const type = entity.getType();\n        if (type === 'colorBlock') {\n          return {\n            component,\n            editable: false,\n          };\n        }\n      }\n      return null;\n    },\n  };\n};\nColorBlock.displayName = 'ColorBlock';\nexport default createColorBlockPlugin;\n",name:"colorBlockPlugin.js"}),(0,o.jsx)(s.Z,{code:".editor {\n  box-sizing: border-box;\n  border: 1px solid #ddd;\n  cursor: text;\n  padding: 16px;\n  border-radius: 2px;\n  margin-bottom: 2em;\n  box-shadow: inset 0px 1px 8px -3px #ABABAB;\n  background: #fefefe;\n}\n\n.editor :global(.public-DraftEditor-content) {\n  min-height: 140px;\n}\n\n.options {\n  margin-bottom: 20px;\n}\n",name:"editorStyles.css"})]})]})}}])&&A(n.prototype,r),c&&A(n,c),t}(r.Component)},7465:function(e){e.exports={root:"Code_root__32MsM",name:"Code_name__Asuq_",hiddenName:"Code_hiddenName__3h9eQ"}},4836:function(e){e.exports={editor:"editorStyles_editor__2mo65",options:"editorStyles_options__3m5Bx"}},5373:function(e){e.exports={root:"InlineCode_root__1EGp7"}},7847:function(e){e.exports={root:"styles_root__17GJY",param:"styles_param__U8q04",paramBig:"styles_paramBig__3etsF",paramName:"styles_paramName__3YZJT",subParams:"styles_subParams__3cYYn",subParam:"styles_subParam__E1uNk",subParamName:"styles_subParamName__1RSzj",list:"styles_list__1TvAl",listEntry:"styles_listEntry__2B_3K",guideCodeBlock:"styles_guideCodeBlock__3CTZ2"}},5597:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var o=n(1503),r=n(6670),i=n(2358),s=n.n(i),a=n(2784),c=n(6277);function l(e){var t=function(e,t,n){var r=t.getStartKey(),i=[];return e.getBlockMap().forEach((function(e,t){i.push(e),t===r&&i.push(n)})),e.merge({blockMap:o.BlockMapBuilder.createFromArray(i),selectionBefore:t,selectionAfter:t.merge({anchorKey:n.getKey(),anchorOffset:n.getLength(),focusKey:n.getKey(),focusOffset:n.getLength(),isBackward:!1})})}(e.getCurrentContent(),e.getSelection(),new o.ContentBlock({key:(0,o.genKey)(),type:"unstyled",text:"",characterList:(0,r.List)()})),n=t.merge({selectionAfter:t.getSelectionAfter().set("hasFocus",!0)});return o.EditorState.push(e,n,"insert-fragment")}var u=function(e,t,n,r){var i=e(),a=i.getSelection().getAnchorKey(),c="up"===n?i.getCurrentContent().getBlockBefore(a):i.getCurrentContent().getBlockAfter(a);if((!c||c.get("key")!==a)&&c){var l=s().encode(c.getKey(),0,0),u=document.querySelectorAll('[data-offset-key="'+l+'"]')[0],d=window.getSelection(),f=document.createRange();f.setStart(u,0),f.setEnd(u,0),d.removeAllRanges(),d.addRange(f);var p="up"===n?c.getLength():0;r.preventDefault(),t(o.EditorState.forceSelection(i,new o.SelectionState({anchorKey:c.getKey(),anchorOffset:p,focusKey:c.getKey(),focusOffset:p,isBackward:!1})))}};function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var f=function(e){var t=e.theme,n=e.blockKeyStore;return function(e){var o=a.forwardRef((function(o,r){(0,a.useEffect)((function(){return n.add(o.block.getKey()),function(){n.remove(o.block.getKey())}}),[]);var i=o.blockProps,s=o.className,l=i.isFocused?(0,c.Z)(s,t.focused):(0,c.Z)(s,t.unfocused);return a.createElement(e,d({},o,{ref:r,onClick:function(e){e.preventDefault(),o.blockProps.isFocused||o.blockProps.setFocusToBlock()},className:l}))}));return o.displayName="BlockFocus("+function(e){var t=e.WrappedComponent||e;return t.displayName||t.name||"Component"}(e)+")",o.WrappedComponent=e.WrappedComponent||e,o}};var p=function(e,t,n){return e.getBlockMap().keySeq().skipUntil((function(e){return e===t})).takeUntil((function(e){return e===n})).concat([n])},g=function(e,t){return function(e){var t=e.getSelection(),n=e.getCurrentContent();return p(n,t.getStartKey(),t.getEndKey())}(e).includes(t)};var y={unfocused:"uz5k6rs",focused:"f1vn2c6d"},m=function(e,t){var n=e.getSelection();if(n.getAnchorKey()!==n.getFocusKey())return!1;var o=e.getCurrentContent().getBlockForKey(n.getAnchorKey());return t.includes(o.getKey())},h=["backspace","backspace-word","backspace-to-start-of-line","delete","delete-word","delete-to-end-of-block"];function b(e){return o.EditorState.set(e,{selection:e.getSelection(),forceSelection:!0,nativelyRenderedContent:null,inlineStyleOverride:null})}var v=function(e){void 0===e&&(e={});var t,n,i=function(){var e=(0,r.List)();return{add:function(t){return e=e.push(t)},remove:function(t){return e=e.filter((function(e){return e!==t}))},includes:function(t){return e.includes(t)},getAll:function(){return e}}}(),a=e.theme?e.theme:y;return{handleReturn:function(e,t,n){var o=n.setEditorState;return m(t,i)?(o(l(t)),"handled"):"not-handled"},handleKeyCommand:function(e,t,n,r){var s=r.setEditorState;if(h.includes(e)&&m(t,i)){var a=t.getSelection().getStartKey(),c=function(e,t){var n=e.getCurrentContent(),r=n.getKeyBefore(t),i=n.getBlockForKey(r);if(void 0===i){var s=new o.SelectionState({anchorKey:t,anchorOffset:0,focusKey:t,focusOffset:1});n=o.Modifier.removeRange(n,s,"backward"),n=o.Modifier.setBlockType(n,s,"unstyled");var a=o.EditorState.push(e,n,"remove-range"),c=new o.SelectionState({anchorKey:t,anchorOffset:0,focusKey:t,focusOffset:0});return o.EditorState.forceSelection(a,c)}var l=new o.SelectionState({anchorKey:r,anchorOffset:i.getLength(),focusKey:t,focusOffset:1});n=o.Modifier.removeRange(n,l,"backward");var u=o.EditorState.push(e,n,"remove-range"),d=new o.SelectionState({anchorKey:r,anchorOffset:i.getLength(),focusKey:r,focusOffset:i.getLength()});return o.EditorState.forceSelection(u,d)}(t,a);if(c!==t)return s(c),"handled"}return"not-handled"},onChange:function(e){var o=e.getCurrentContent();if(!o.equals(n))return n=o,e;n=o;var r=e.getSelection();if(t&&r.equals(t))return t=e.getSelection(),e;var s=i.getAll();if(t&&p(o,t.getStartKey(),t.getEndKey()).some((function(e){return s.includes(e)})))return t=r,b(e);return p(o,r.getStartKey(),r.getEndKey()).some((function(e){return s.includes(e)}))?(t=r,b(e)):e},keyBindingFn:function(e,t){var n=t.getEditorState,o=t.setEditorState,r=n();if(m(r,i)&&(37===e.keyCode&&u(n,o,"up",e),39===e.keyCode&&u(n,o,"down",e),38===e.keyCode&&u(n,o,"up",e),40===e.keyCode))u(n,o,"down",e);else if(!e.shiftKey){if(37===e.keyCode){var s=r.getSelection(),a=s.getAnchorKey(),c=r.getCurrentContent().getBlockBefore(a);c&&0===s.getAnchorOffset()&&i.includes(c.getKey())&&u(n,o,"up",e)}if(39===e.keyCode){var l=r.getSelection(),d=l.getFocusKey(),f=r.getCurrentContent().getBlockForKey(d),p=r.getCurrentContent().getBlockAfter(d),g="atomic"!==f.getType()&&f.getLength()===l.getFocusOffset();p&&g&&i.includes(p.getKey())&&u(n,o,"down",e)}if(38===e.keyCode){var y=r.getSelection().getAnchorKey(),h=r.getCurrentContent().getBlockBefore(y);h&&i.includes(h.getKey())&&u(n,o,"up",e)}if(40===e.keyCode){var b=r.getSelection().getAnchorKey(),v=r.getCurrentContent().getBlockAfter(b);v&&i.includes(v.getKey())&&u(n,o,"down",e)}}},blockRendererFn:function(e,t){var n=t.getEditorState,r=t.setEditorState;if("atomic"===e.getType()){var i=n();return{props:{isFocused:i.getSelection().getHasFocus()&&g(i,e.getKey()),isCollapsedSelection:i.getSelection().isCollapsed(),setFocusToBlock:function(){!function(e,t,n){var r=e(),i=s().encode(n.getKey(),0,0),a=document.querySelectorAll('[data-offset-key="'+i+'"]')[0],c=window.getSelection(),l=document.createRange();l.setStart(a,0),l.setEnd(a,0),c.removeAllRanges(),c.addRange(l),t(o.EditorState.forceSelection(r,new o.SelectionState({anchorKey:n.getKey(),anchorOffset:0,focusKey:n.getKey(),focusOffset:0,isBackward:!1})))}(n,r,e)}}}}},decorator:f({theme:a,blockKeyStore:i})}}}},function(e){e.O(0,[774,140,476,939,888,179],(function(){return t=1597,e(e.s=t);var t}));var t=e.O();_N_E=t}]);