import {createGlobalStyle} from 'styled-components'

const ResetCSS = createGlobalStyle`
  *, :after, :before {
    box-sizing: inherit;
    box-sizing: border-box
  }

  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
    cursor: default;
    font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    word-break: break-word
  }

  body, html {
    -webkit-tap-highlight-color: transparent;
    line-height: 1;
    min-width: 320px
  }

  body {
    -webkit-text-decoration-skip: objects;
    text-decoration-skip: objects;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    min-width: 20rem;
    text-rendering: optimizeLegibility
  }

  :focus {
    outline: 0
  }

  :focus:-moz-placeholder {
    opacity: 0
  }

  :focus:-ms-input-placeholder {
    opacity: 0
  }

  blockquote, q {
    quotes: none
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
    text-indent: 0
  }

  th {
    font-weight: inherit
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 400
  }

  audio, video {
    display: inline-block
  }

  img {
    box-sizing: content-box;
    display: block
  }

  a {
    background-color: transparent;
    color: inherit;
    text-decoration: none;
    text-decoration: inherit
  }

  abbr {
    text-decoration: none
  }

  dfn, em, i {
    font-style: inherit
  }

  mark {
    background-color: transparent;
    color: inherit
  }

  sub, sup {
    line-height: 0;
    position: relative
  }

  sub {
    bottom: -.25em
  }

  sup {
    top: -.5em
  }

  button, input, optgroup, select, textarea {
    background-color: transparent;
    border: 0;
    border-radius: 0;
    box-shadow: none;
    color: inherit;
    font-family: inherit;
    font-size: 100%;
    letter-spacing: inherit;
    line-height: 1.15;
    margin: 0;
    padding: .25em .375em
  }

  button, select {
    text-align: left;
    text-transform: none
  }

  [type=button], [type=reset], [type=submit], button {
    -webkit-appearance: none;
    -webkit-appearance: button;
    cursor: pointer
  }

  textarea {
    -webkit-overflow-scrolling: touch;
    overflow-x: hidden;
    overflow-y: auto;
    overflow: auto;
    resize: none;
    resize: vertical
  }

  [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner, button::-moz-focus-inner {
    border: 0;
    padding: 0
  }

  [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring, button:-moz-focusring {
    outline: ButtonText dotted 1px
  }

  [type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button {
    height: auto
  }

  [type=search]::-webkit-search-decoration {
    -webkit-appearance: none
  }

  [type=search] {
    -webkit-appearance: textfield;
    outline: 0;
    outline-offset: -2px
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font-size: inherit;
    font: inherit
  }

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    white-space: normal
  }

  select {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    background: 100%/1em no-repeat;
    border-radius: 0;
    text-transform: none
  }

  select::-ms-expand {
    display: none
  }

  ::-webkit-input-placeholder {
    color: inherit;
    opacity: 1;
    opacity: .54;
    transition: opacity .3s
    will-change: opacity;
  }

  :-moz-placeholder, ::-moz-placeholder {
    color: inherit;
    opacity: 1;
    transition: opacity .3s
    will-change: opacity;
  }

  :-ms-input-placeholder {
    color: rgba(0, 0, 0, .54);
    opacity: 1;
    transition: opacity .3s
    will-change: opacity;
  }

  :focus::-webkit-input-placeholder {
    opacity: 0
  }

  :focus::-moz-placeholder {
    opacity: 0
  }

  svg {
    fill: currentColor
  }

  .disabled, :disabled {
    cursor: not-allowed
  }

  ::-ms-clear {
    display: none
  }

  :-webkit-autofill {
    -webkit-text-fill-color: currentColor;
    box-shadow: inset 0 0 100px #fff
  }

  ::-moz-selection {
    background-color: #004fe4;
    color: #fff
  }

  ::selection {
    background-color: #004fe4;
    color: #fff
  }

  b, strong {
    font-weight: 700;
  }

  blockquote, body, dd, dl, dt, fieldset, figure, form, h1, h2, h3, h4, h5, h6, hr, html, iframe, input, label, legend, li, ol, p, pre, textarea, ul {
    margin: 0;
    padding: 0
  }

  button, dl dl, dl ol, dl ul, input, ol dl, ol ol, ol ul, select, ul dl, ul ol, ul ul {
    margin: 0
  }

  img, video {
    height: auto;
    max-width: 100%
  }

  article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section {
    display: block
  }

  hr {
    box-sizing: content-box;
    color: inherit;
    height: 0;
    overflow: visible
  }

  pre {
    -ms-overflow-style: scrollbar;
    -webkit-overflow-scrolling: touch;
    overflow: auto
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    -webkit-text-decoration: underline dotted currentColor;
    text-decoration: underline dotted currentColor
  }

  progress {
    display: inline-block;
    vertical-align: baseline
  }

  [type=checkbox], [type=radio] {
    box-sizing: border-box;
    padding: 0
  }

  summary {
    display: list-item
  }

  [hidden], dialog:not([open]), template {
    display: none
  }

  a:focus, a:hover, a:visited {
    outline: 0;
    text-decoration: inherit
  }

  :where(iframe,img,input,video,select,textarea) {
    height: auto;
    max-width: 100%
  }

  :after, :before {
    text-decoration: inherit;
    vertical-align: inherit
  }

  nav ol, nav ul {
    list-style: none;
    padding: 0
  }

  audio, canvas, iframe, img, svg, video {
    vertical-align: middle
  }

  audio:not([controls]) {
    display: none;
    height: 0
  }

  svg:not([fill]) {
    fill: currentColor
  }

  svg:not(:root) {
    -webkit-overflow-scrolling: touch;
    overflow: hidden
  }

  button {
    text-transform: none
  }

  button, input {
    overflow: visible
  }

  ::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
    height: auto
  }

  ::-webkit-search-decoration {
    -webkit-appearance: none
  }

  ::-moz-focus-inner {
    border-style: none;
    padding: 0
  }

  :-moz-focusring {
    outline: ButtonText dotted 1px
  }

  :-moz-ui-invalid {
    box-shadow: none
  }

  dialog {
    background-color: #ffffff;
    border: solid;
    color: #000;
    display: block;
    height: -moz-fit-content;
    height: fit-content;
    left: 0;
    margin: auto;
    padding: 1em;
    position: absolute;
    right: 0;
    width: -moz-fit-content;
    width: fit-content
  }

  canvas {
    display: inline-block
  }

  [tabindex], a, area, button, input, label, select, summary, textarea {
    -ms-touch-action: manipulation
  }

  [aria-busy=true] {
    cursor: progress
  }

  [aria-controls] {
    cursor: pointer
  }

  [aria-disabled=true], [disabled] {
    cursor: not-allowed
  }

  [aria-hidden=false][hidden] {
    display: initial
  }

  [aria-hidden=false][hidden]:not(:focus) {
    clip: rect(0, 0, 0, 0);
    position: absolute
  }

  button, input, select, textarea {
    background-color: transparent;
    color: inherit;
    font: inherit;
    letter-spacing: inherit;
    padding: .25em .375em
  }

  select:not([multiple]):not([size]) {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='4'%3E%3Cpath d='M4 0h6L7 4'/%3E%3C/svg%3E");
    background-position: 100%;
    background-repeat: no-repeat
  }

  [type=color], [type=range] {
    border-width: 0;
    padding: 0
  }

  ::-ms-expand {
    display: none
  }

  code, kbd, pre, samp {
    font-family: ui-monospace, Menlo, Consolas, Roboto Mono, "Ubuntu Monospace", Noto Mono, Oxygen Mono, Liberation Mono, monospace, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji
  }

  :where(button,input,select,textarea) {
    background-color: transparent;
    border: .0625rem solid WindowFrame;
    color: inherit;
    font: inherit;
    letter-spacing: inherit;
    padding: .25em .375em
  }

  :where(select) {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='4'%3E%3Cpath d='M4 0h6L7 4'/%3E%3C/svg%3E") 100%/1em no-repeat;
    border-radius: 0;
    padding-right: 1em
  }

  :where(select[multiple]) {
    background-image: none
  }

  :where([type=color i],[type=range i]) {
    border-width: 0;
    padding: 0
  }

  a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {
    border: 0;
    font-size: 100%;
    margin: 0;
    padding: 0;
    vertical-align: baseline
  }

  ol, ul {
    list-style: none
  }

  blockquote:after, blockquote:before, q:after, q:before {
    content: "";
    content: none
  }

  @media (prefers-reduced-motion: reduce) {
    *, :after, :before {
      animation-delay: -1ms !important;
      animation-duration: 1ms !important;
      animation-iteration-count: 1 !important;
      background-attachment: scroll !important;
      scroll-behavior: auto !important;
      transition-delay: 0s !important;
      transition-duration: 0s !important
    }
  }

  @media screen and (device-aspect-ratio: 2/3) {
    input[type=date], input[type=datetime-local], input[type=datetime], input[type=email], input[type=month], input[type=number], input[type=password], input[type=text], input[type=time], input[type=url], input[type=week], select, textarea {
      font-size: 1rem
    }
  }

  @media screen and (device-aspect-ratio: 375/667) {
    input[type=date], input[type=datetime-local], input[type=datetime], input[type=email], input[type=month], input[type=number], input[type=password], input[type=tel], input[type=text], input[type=time], input[type=url], input[type=week], select, textarea {
      font-size: 1rem
    }
  }
`

export default ResetCSS