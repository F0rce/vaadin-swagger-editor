import { css } from "lit";

export const swaggerUIStyle = css`
  .swagger-ui {
    color: #3b4151;
    font-family: sans-serif;
  }
  .swagger-ui html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    line-height: 1.15;
  }
  .swagger-ui body {
    margin: 0;
  }
  .swagger-ui article,
  .swagger-ui aside,
  .swagger-ui footer,
  .swagger-ui header,
  .swagger-ui nav,
  .swagger-ui section {
    display: block;
  }
  .swagger-ui h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  .swagger-ui figcaption,
  .swagger-ui figure,
  .swagger-ui main {
    display: block;
  }
  .swagger-ui figure {
    margin: 1em 40px;
  }
  .swagger-ui hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }
  .swagger-ui pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  .swagger-ui a {
    -webkit-text-decoration-skip: objects;
    background-color: transparent;
  }
  .swagger-ui abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }
  .swagger-ui b,
  .swagger-ui strong {
    font-weight: inherit;
    font-weight: bolder;
  }
  .swagger-ui code,
  .swagger-ui kbd,
  .swagger-ui samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  .swagger-ui dfn {
    font-style: italic;
  }
  .swagger-ui mark {
    background-color: #ff0;
    color: #000;
  }
  .swagger-ui small {
    font-size: 80%;
  }
  .swagger-ui sub,
  .swagger-ui sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  .swagger-ui sub {
    bottom: -0.25em;
  }
  .swagger-ui sup {
    top: -0.5em;
  }
  .swagger-ui audio,
  .swagger-ui video {
    display: inline-block;
  }
  .swagger-ui audio:not([controls]) {
    display: none;
    height: 0;
  }
  .swagger-ui img {
    border-style: none;
  }
  .swagger-ui svg:not(:root) {
    overflow: hidden;
  }
  .swagger-ui button,
  .swagger-ui input,
  .swagger-ui optgroup,
  .swagger-ui select,
  .swagger-ui textarea {
    font-family: sans-serif;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }
  .swagger-ui button,
  .swagger-ui input {
    overflow: visible;
  }
  .swagger-ui button,
  .swagger-ui select {
    text-transform: none;
  }
  .swagger-ui [type="reset"],
  .swagger-ui [type="submit"],
  .swagger-ui button,
  .swagger-ui html [type="button"] {
    -webkit-appearance: button;
  }
  .swagger-ui [type="button"]::-moz-focus-inner,
  .swagger-ui [type="reset"]::-moz-focus-inner,
  .swagger-ui [type="submit"]::-moz-focus-inner,
  .swagger-ui button::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  .swagger-ui [type="button"]:-moz-focusring,
  .swagger-ui [type="reset"]:-moz-focusring,
  .swagger-ui [type="submit"]:-moz-focusring,
  .swagger-ui button:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  .swagger-ui fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  .swagger-ui legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }
  .swagger-ui progress {
    display: inline-block;
    vertical-align: baseline;
  }
  .swagger-ui textarea {
    overflow: auto;
  }
  .swagger-ui [type="checkbox"],
  .swagger-ui [type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }
  .swagger-ui [type="number"]::-webkit-inner-spin-button,
  .swagger-ui [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
  .swagger-ui [type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }
  .swagger-ui [type="search"]::-webkit-search-cancel-button,
  .swagger-ui [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  .swagger-ui ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }
  .swagger-ui details,
  .swagger-ui menu {
    display: block;
  }
  .swagger-ui summary {
    display: list-item;
  }
  .swagger-ui canvas {
    display: inline-block;
  }
  .swagger-ui [hidden],
  .swagger-ui template {
    display: none;
  }
  .swagger-ui .debug * {
    outline: 1px solid gold;
  }
  .swagger-ui .debug-white * {
    outline: 1px solid #fff;
  }
  .swagger-ui .debug-black * {
    outline: 1px solid #000;
  }
  .swagger-ui .debug-grid {
    background: transparent
      url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTRDOTY4N0U2N0VFMTFFNjg2MzZDQjkwNkQ4MjgwMEIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTRDOTY4N0Q2N0VFMTFFNjg2MzZDQjkwNkQ4MjgwMEIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NjcyQkQ3NjY3QzUxMUU2QjJCQ0UyNDA4MTAwMjE3MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NjcyQkQ3NzY3QzUxMUU2QjJCQ0UyNDA4MTAwMjE3MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsBS+GMAAAAjSURBVHjaYvz//z8DLsD4gcGXiYEAGBIKGBne//fFpwAgwAB98AaF2pjlUQAAAABJRU5ErkJggg==)
      repeat 0 0;
  }
  .swagger-ui .debug-grid-16 {
    background: transparent
      url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODYyRjhERDU2N0YyMTFFNjg2MzZDQjkwNkQ4MjgwMEIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODYyRjhERDQ2N0YyMTFFNjg2MzZDQjkwNkQ4MjgwMEIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NjcyQkQ3QTY3QzUxMUU2QjJCQ0UyNDA4MTAwMjE3MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NjcyQkQ3QjY3QzUxMUU2QjJCQ0UyNDA4MTAwMjE3MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvCS01IAAABMSURBVHjaYmR4/5+BFPBfAMFm/MBgx8RAGWCn1AAmSg34Q6kBDKMGMDCwICeMIemF/5QawEipAWwUhwEjMDvbAWlWkvVBwu8vQIABAEwBCph8U6c0AAAAAElFTkSuQmCC)
      repeat 0 0;
  }
  .swagger-ui .debug-grid-8-solid {
    background: #fff
      url(data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAAAAD/4QMxaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzExMSA3OS4xNTgzMjUsIDIwMTUvMDkvMTAtMDE6MTA6MjAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkIxMjI0OTczNjdCMzExRTZCMkJDRTI0MDgxMDAyMTcxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkIxMjI0OTc0NjdCMzExRTZCMkJDRTI0MDgxMDAyMTcxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjEyMjQ5NzE2N0IzMTFFNkIyQkNFMjQwODEwMDIxNzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjEyMjQ5NzI2N0IzMTFFNkIyQkNFMjQwODEwMDIxNzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAbGhopHSlBJiZBQi8vL0JHPz4+P0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHAR0pKTQmND8oKD9HPzU/R0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0f/wAARCAAIAAgDASIAAhEBAxEB/8QAWQABAQAAAAAAAAAAAAAAAAAAAAYBAQEAAAAAAAAAAAAAAAAAAAIEEAEBAAMBAAAAAAAAAAAAAAABADECA0ERAAEDBQAAAAAAAAAAAAAAAAARITFBUWESIv/aAAwDAQACEQMRAD8AoOnTV1QTD7JJshP3vSM3P//Z)
      repeat 0 0;
  }
  .swagger-ui .debug-grid-16-solid {
    background: #fff
      url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzY3MkJEN0U2N0M1MTFFNkIyQkNFMjQwODEwMDIxNzEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzY3MkJEN0Y2N0M1MTFFNkIyQkNFMjQwODEwMDIxNzEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NjcyQkQ3QzY3QzUxMUU2QjJCQ0UyNDA4MTAwMjE3MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NjcyQkQ3RDY3QzUxMUU2QjJCQ0UyNDA4MTAwMjE3MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pve6J3kAAAAzSURBVHjaYvz//z8D0UDsMwMjSRoYP5Gq4SPNbRjVMEQ1fCRDg+in/6+J1AJUxsgAEGAA31BAJMS0GYEAAAAASUVORK5CYII=)
      repeat 0 0;
  }
  .swagger-ui .border-box,
  .swagger-ui a,
  .swagger-ui article,
  .swagger-ui body,
  .swagger-ui code,
  .swagger-ui dd,
  .swagger-ui div,
  .swagger-ui dl,
  .swagger-ui dt,
  .swagger-ui fieldset,
  .swagger-ui footer,
  .swagger-ui form,
  .swagger-ui h1,
  .swagger-ui h2,
  .swagger-ui h3,
  .swagger-ui h4,
  .swagger-ui h5,
  .swagger-ui h6,
  .swagger-ui header,
  .swagger-ui html,
  .swagger-ui input[type="email"],
  .swagger-ui input[type="number"],
  .swagger-ui input[type="password"],
  .swagger-ui input[type="tel"],
  .swagger-ui input[type="text"],
  .swagger-ui input[type="url"],
  .swagger-ui legend,
  .swagger-ui li,
  .swagger-ui main,
  .swagger-ui ol,
  .swagger-ui p,
  .swagger-ui pre,
  .swagger-ui section,
  .swagger-ui table,
  .swagger-ui td,
  .swagger-ui textarea,
  .swagger-ui th,
  .swagger-ui tr,
  .swagger-ui ul {
    box-sizing: border-box;
  }
  .swagger-ui .aspect-ratio {
    height: 0;
    position: relative;
  }
  .swagger-ui .aspect-ratio--16x9 {
    padding-bottom: 56.25%;
  }
  .swagger-ui .aspect-ratio--9x16 {
    padding-bottom: 177.77%;
  }
  .swagger-ui .aspect-ratio--4x3 {
    padding-bottom: 75%;
  }
  .swagger-ui .aspect-ratio--3x4 {
    padding-bottom: 133.33%;
  }
  .swagger-ui .aspect-ratio--6x4 {
    padding-bottom: 66.6%;
  }
  .swagger-ui .aspect-ratio--4x6 {
    padding-bottom: 150%;
  }
  .swagger-ui .aspect-ratio--8x5 {
    padding-bottom: 62.5%;
  }
  .swagger-ui .aspect-ratio--5x8 {
    padding-bottom: 160%;
  }
  .swagger-ui .aspect-ratio--7x5 {
    padding-bottom: 71.42%;
  }
  .swagger-ui .aspect-ratio--5x7 {
    padding-bottom: 140%;
  }
  .swagger-ui .aspect-ratio--1x1 {
    padding-bottom: 100%;
  }
  .swagger-ui .aspect-ratio--object {
    bottom: 0;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 100;
  }
  @media screen and (min-width: 30em) {
    .swagger-ui .aspect-ratio-ns {
      height: 0;
      position: relative;
    }
    .swagger-ui .aspect-ratio--16x9-ns {
      padding-bottom: 56.25%;
    }
    .swagger-ui .aspect-ratio--9x16-ns {
      padding-bottom: 177.77%;
    }
    .swagger-ui .aspect-ratio--4x3-ns {
      padding-bottom: 75%;
    }
    .swagger-ui .aspect-ratio--3x4-ns {
      padding-bottom: 133.33%;
    }
    .swagger-ui .aspect-ratio--6x4-ns {
      padding-bottom: 66.6%;
    }
    .swagger-ui .aspect-ratio--4x6-ns {
      padding-bottom: 150%;
    }
    .swagger-ui .aspect-ratio--8x5-ns {
      padding-bottom: 62.5%;
    }
    .swagger-ui .aspect-ratio--5x8-ns {
      padding-bottom: 160%;
    }
    .swagger-ui .aspect-ratio--7x5-ns {
      padding-bottom: 71.42%;
    }
    .swagger-ui .aspect-ratio--5x7-ns {
      padding-bottom: 140%;
    }
    .swagger-ui .aspect-ratio--1x1-ns {
      padding-bottom: 100%;
    }
    .swagger-ui .aspect-ratio--object-ns {
      bottom: 0;
      height: 100%;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      width: 100%;
      z-index: 100;
    }
  }
  @media screen and (min-width: 30em) and (max-width: 60em) {
    .swagger-ui .aspect-ratio-m {
      height: 0;
      position: relative;
    }
    .swagger-ui .aspect-ratio--16x9-m {
      padding-bottom: 56.25%;
    }
    .swagger-ui .aspect-ratio--9x16-m {
      padding-bottom: 177.77%;
    }
    .swagger-ui .aspect-ratio--4x3-m {
      padding-bottom: 75%;
    }
    .swagger-ui .aspect-ratio--3x4-m {
      padding-bottom: 133.33%;
    }
    .swagger-ui .aspect-ratio--6x4-m {
      padding-bottom: 66.6%;
    }
    .swagger-ui .aspect-ratio--4x6-m {
      padding-bottom: 150%;
    }
    .swagger-ui .aspect-ratio--8x5-m {
      padding-bottom: 62.5%;
    }
    .swagger-ui .aspect-ratio--5x8-m {
      padding-bottom: 160%;
    }
    .swagger-ui .aspect-ratio--7x5-m {
      padding-bottom: 71.42%;
    }
    .swagger-ui .aspect-ratio--5x7-m {
      padding-bottom: 140%;
    }
    .swagger-ui .aspect-ratio--1x1-m {
      padding-bottom: 100%;
    }
    .swagger-ui .aspect-ratio--object-m {
      bottom: 0;
      height: 100%;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      width: 100%;
      z-index: 100;
    }
  }
  @media screen and (min-width: 60em) {
    .swagger-ui .aspect-ratio-l {
      height: 0;
      position: relative;
    }
    .swagger-ui .aspect-ratio--16x9-l {
      padding-bottom: 56.25%;
    }
    .swagger-ui .aspect-ratio--9x16-l {
      padding-bottom: 177.77%;
    }
    .swagger-ui .aspect-ratio--4x3-l {
      padding-bottom: 75%;
    }
    .swagger-ui .aspect-ratio--3x4-l {
      padding-bottom: 133.33%;
    }
    .swagger-ui .aspect-ratio--6x4-l {
      padding-bottom: 66.6%;
    }
    .swagger-ui .aspect-ratio--4x6-l {
      padding-bottom: 150%;
    }
    .swagger-ui .aspect-ratio--8x5-l {
      padding-bottom: 62.5%;
    }
    .swagger-ui .aspect-ratio--5x8-l {
      padding-bottom: 160%;
    }
    .swagger-ui .aspect-ratio--7x5-l {
      padding-bottom: 71.42%;
    }
    .swagger-ui .aspect-ratio--5x7-l {
      padding-bottom: 140%;
    }
    .swagger-ui .aspect-ratio--1x1-l {
      padding-bottom: 100%;
    }
    .swagger-ui .aspect-ratio--object-l {
      bottom: 0;
      height: 100%;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      width: 100%;
      z-index: 100;
    }
  }
  .swagger-ui img {
    max-width: 100%;
  }
  .swagger-ui .cover {
    background-size: cover !important;
  }
  .swagger-ui .contain {
    background-size: contain !important;
  }
  @media screen and (min-width: 30em) {
    .swagger-ui .cover-ns {
      background-size: cover !important;
    }
    .swagger-ui .contain-ns {
      background-size: contain !important;
    }
  }
  @media screen and (min-width: 30em) and (max-width: 60em) {
    .swagger-ui .cover-m {
      background-size: cover !important;
    }
    .swagger-ui .contain-m {
      background-size: contain !important;
    }
  }
  @media screen and (min-width: 60em) {
    .swagger-ui .cover-l {
      background-size: cover !important;
    }
    .swagger-ui .contain-l {
      background-size: contain !important;
    }
  }
  .swagger-ui .bg-center {
    background-position: 50%;
    background-repeat: no-repeat;
  }
  .swagger-ui .bg-top {
    background-position: top;
    background-repeat: no-repeat;
  }
  .swagger-ui .bg-right {
    background-position: 100%;
    background-repeat: no-repeat;
  }
  .swagger-ui .bg-bottom {
    background-position: bottom;
    background-repeat: no-repeat;
  }
  .swagger-ui .bg-left {
    background-position: 0;
    background-repeat: no-repeat;
  }
  @media screen and (min-width: 30em) {
    .swagger-ui .bg-center-ns {
      background-position: 50%;
      background-repeat: no-repeat;
    }
    .swagger-ui .bg-top-ns {
      background-position: top;
      background-repeat: no-repeat;
    }
    .swagger-ui .bg-right-ns {
      background-position: 100%;
      background-repeat: no-repeat;
    }
    .swagger-ui .bg-bottom-ns {
      background-position: bottom;
      background-repeat: no-repeat;
    }
    .swagger-ui .bg-left-ns {
      background-position: 0;
      background-repeat: no-repeat;
    }
  }
  @media screen and (min-width: 30em) and (max-width: 60em) {
    .swagger-ui .bg-center-m {
      background-position: 50%;
      background-repeat: no-repeat;
    }
    .swagger-ui .bg-top-m {
      background-position: top;
      background-repeat: no-repeat;
    }
    .swagger-ui .bg-right-m {
      background-position: 100%;
      background-repeat: no-repeat;
    }
    .swagger-ui .bg-bottom-m {
      background-position: bottom;
      background-repeat: no-repeat;
    }
    .swagger-ui .bg-left-m {
      background-position: 0;
      background-repeat: no-repeat;
    }
  }
  @media screen and (min-width: 60em) {
    .swagger-ui .bg-center-l {
      background-position: 50%;
      background-repeat: no-repeat;
    }
    .swagger-ui .bg-top-l {
      background-position: top;
      background-repeat: no-repeat;
    }
    .swagger-ui .bg-right-l {
      background-position: 100%;
      background-repeat: no-repeat;
    }
    .swagger-ui .bg-bottom-l {
      background-position: bottom;
      background-repeat: no-repeat;
    }
    .swagger-ui .bg-left-l {
      background-position: 0;
      background-repeat: no-repeat;
    }
  }
  .swagger-ui .outline {
    outline: 1px solid;
  }
  .swagger-ui .outline-transparent {
    outline: 1px solid transparent;
  }
  .swagger-ui .outline-0 {
    outline: 0;
  }
  @media screen and (min-width: 30em) {
    .swagger-ui .outline-ns {
      outline: 1px solid;
    }
    .swagger-ui .outline-transparent-ns {
      outline: 1px solid transparent;
    }
    .swagger-ui .outline-0-ns {
      outline: 0;
    }
  }
  @media screen and (min-width: 30em) and (max-width: 60em) {
    .swagger-ui .outline-m {
      outline: 1px solid;
    }
    .swagger-ui .outline-transparent-m {
      outline: 1px solid transparent;
    }
    .swagger-ui .outline-0-m {
      outline: 0;
    }
  }
  @media screen and (min-width: 60em) {
    .swagger-ui .outline-l {
      outline: 1px solid;
    }
    .swagger-ui .outline-transparent-l {
      outline: 1px solid transparent;
    }
    .swagger-ui .outline-0-l {
      outline: 0;
    }
  }
  .swagger-ui .ba {
    border-style: solid;
    border-width: 1px;
  }
  .swagger-ui .bt {
    border-top-style: solid;
    border-top-width: 1px;
  }
  .swagger-ui .br {
    border-right-style: solid;
    border-right-width: 1px;
  }
  .swagger-ui .bb {
    border-bottom-style: solid;
    border-bottom-width: 1px;
  }
  .swagger-ui .bl {
    border-left-style: solid;
    border-left-width: 1px;
  }
  .swagger-ui .bn {
    border-style: none;
    border-width: 0;
  }
  @media screen and (min-width: 30em) {
    .swagger-ui .ba-ns {
      border-style: solid;
      border-width: 1px;
    }
    .swagger-ui .bt-ns {
      border-top-style: solid;
      border-top-width: 1px;
    }
    .swagger-ui .br-ns {
      border-right-style: solid;
      border-right-width: 1px;
    }
    .swagger-ui .bb-ns {
      border-bottom-style: solid;
      border-bottom-width: 1px;
    }
    .swagger-ui .bl-ns {
      border-left-style: solid;
      border-left-width: 1px;
    }
    .swagger-ui .bn-ns {
      border-style: none;
      border-width: 0;
    }
  }
  @media screen and (min-width: 30em) and (max-width: 60em) {
    .swagger-ui .ba-m {
      border-style: solid;
      border-width: 1px;
    }
    .swagger-ui .bt-m {
      border-top-style: solid;
      border-top-width: 1px;
    }
    .swagger-ui .br-m {
      border-right-style: solid;
      border-right-width: 1px;
    }
    .swagger-ui .bb-m {
      border-bottom-style: solid;
      border-bottom-width: 1px;
    }
    .swagger-ui .bl-m {
      border-left-style: solid;
      border-left-width: 1px;
    }
    .swagger-ui .bn-m {
      border-style: none;
      border-width: 0;
    }
  }
  @media screen and (min-width: 60em) {
    .swagger-ui .ba-l {
      border-style: solid;
      border-width: 1px;
    }
    .swagger-ui .bt-l {
      border-top-style: solid;
      border-top-width: 1px;
    }
    .swagger-ui .br-l {
      border-right-style: solid;
      border-right-width: 1px;
    }
    .swagger-ui .bb-l {
      border-bottom-style: solid;
      border-bottom-width: 1px;
    }
    .swagger-ui .bl-l {
      border-left-style: solid;
      border-left-width: 1px;
    }
    .swagger-ui .bn-l {
      border-style: none;
      border-width: 0;
    }
  }
  .swagger-ui .b--black {
    border-color: #000;
  }
  .swagger-ui .b--near-black {
    border-color: #111;
  }
  .swagger-ui .b--dark-gray {
    border-color: #333;
  }
  .swagger-ui .b--mid-gray {
    border-color: #555;
  }
  .swagger-ui .b--gray {
    border-color: #777;
  }
  .swagger-ui .b--silver {
    border-color: #999;
  }
  .swagger-ui .b--light-silver {
    border-color: #aaa;
  }
  .swagger-ui .b--moon-gray {
    border-color: #ccc;
  }
  .swagger-ui .b--light-gray {
    border-color: #eee;
  }
  .swagger-ui .b--near-white {
    border-color: #f4f4f4;
  }
  .swagger-ui .b--white {
    border-color: #fff;
  }
  .swagger-ui .b--white-90 {
    border-color: hsla(0, 0%, 100%, 0.9);
  }
  .swagger-ui .b--white-80 {
    border-color: hsla(0, 0%, 100%, 0.8);
  }
  .swagger-ui .b--white-70 {
    border-color: hsla(0, 0%, 100%, 0.7);
  }
  .swagger-ui .b--white-60 {
    border-color: hsla(0, 0%, 100%, 0.6);
  }
  .swagger-ui .b--white-50 {
    border-color: hsla(0, 0%, 100%, 0.5);
  }
  .swagger-ui .b--white-40 {
    border-color: hsla(0, 0%, 100%, 0.4);
  }
  .swagger-ui .b--white-30 {
    border-color: hsla(0, 0%, 100%, 0.3);
  }
  .swagger-ui .b--white-20 {
    border-color: hsla(0, 0%, 100%, 0.2);
  }
  .swagger-ui .b--white-10 {
    border-color: hsla(0, 0%, 100%, 0.1);
  }
  .swagger-ui .b--white-05 {
    border-color: hsla(0, 0%, 100%, 0.05);
  }
  .swagger-ui .b--white-025 {
    border-color: hsla(0, 0%, 100%, 0.025);
  }
  .swagger-ui .b--white-0125 {
    border-color: hsla(0, 0%, 100%, 0.013);
  }
  .swagger-ui .b--black-90 {
    border-color: rgba(0, 0, 0, 0.9);
  }
  .swagger-ui .b--black-80 {
    border-color: rgba(0, 0, 0, 0.8);
  }
  .swagger-ui .b--black-70 {
    border-color: rgba(0, 0, 0, 0.7);
  }
  .swagger-ui .b--black-60 {
    border-color: rgba(0, 0, 0, 0.6);
  }
  .swagger-ui .b--black-50 {
    border-color: rgba(0, 0, 0, 0.5);
  }
  .swagger-ui .b--black-40 {
    border-color: rgba(0, 0, 0, 0.4);
  }
  .swagger-ui .b--black-30 {
    border-color: rgba(0, 0, 0, 0.3);
  }
  .swagger-ui .b--black-20 {
    border-color: rgba(0, 0, 0, 0.2);
  }
  .swagger-ui .b--black-10 {
    border-color: rgba(0, 0, 0, 0.1);
  }
  .swagger-ui .b--black-05 {
    border-color: rgba(0, 0, 0, 0.05);
  }
  .swagger-ui .b--black-025 {
    border-color: rgba(0, 0, 0, 0.025);
  }
  .swagger-ui .b--black-0125 {
    border-color: rgba(0, 0, 0, 0.013);
  }
  .swagger-ui .b--dark-red {
    border-color: #e7040f;
  }
  .swagger-ui .b--red {
    border-color: #ff4136;
  }
  .swagger-ui .b--light-red {
    border-color: #ff725c;
  }
  .swagger-ui .b--orange {
    border-color: #ff6300;
  }
  .swagger-ui .b--gold {
    border-color: #ffb700;
  }
  .swagger-ui .b--yellow {
    border-color: gold;
  }
  .swagger-ui .b--light-yellow {
    border-color: #fbf1a9;
  }
  .swagger-ui .b--purple {
    border-color: #5e2ca5;
  }
  .swagger-ui .b--light-purple {
    border-color: #a463f2;
  }
  .swagger-ui .b--dark-pink {
    border-color: #d5008f;
  }
  .swagger-ui .b--hot-pink {
    border-color: #ff41b4;
  }
  .swagger-ui .b--pink {
    border-color: #ff80cc;
  }
  .swagger-ui .b--light-pink {
    border-color: #ffa3d7;
  }
  .swagger-ui .b--dark-green {
    border-color: #137752;
  }
  .swagger-ui .b--green {
    border-color: #19a974;
  }
  .swagger-ui .b--light-green {
    border-color: #9eebcf;
  }
  .swagger-ui .b--navy {
    border-color: #001b44;
  }
  .swagger-ui .b--dark-blue {
    border-color: #00449e;
  }
  .swagger-ui .b--blue {
    border-color: #357edd;
  }
  .swagger-ui .b--light-blue {
    border-color: #96ccff;
  }
  .swagger-ui .b--lightest-blue {
    border-color: #cdecff;
  }
  .swagger-ui .b--washed-blue {
    border-color: #f6fffe;
  }
  .swagger-ui .b--washed-green {
    border-color: #e8fdf5;
  }
  .swagger-ui .b--washed-yellow {
    border-color: #fffceb;
  }
  .swagger-ui .b--washed-red {
    border-color: #ffdfdf;
  }
  .swagger-ui .b--transparent {
    border-color: transparent;
  }
  .swagger-ui .b--inherit {
    border-color: inherit;
  }
  .swagger-ui .br0 {
    border-radius: 0;
  }
  .swagger-ui .br1 {
    border-radius: 0.125rem;
  }
  .swagger-ui .br2 {
    border-radius: 0.25rem;
  }
  .swagger-ui .br3 {
    border-radius: 0.5rem;
  }
  .swagger-ui .br4 {
    border-radius: 1rem;
  }
  .swagger-ui .br-100 {
    border-radius: 100%;
  }
  .swagger-ui .br-pill {
    border-radius: 9999px;
  }
  .swagger-ui .br--bottom {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  .swagger-ui .br--top {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  .swagger-ui .br--right {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
  .swagger-ui .br--left {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
  @media screen and (min-width: 30em) {
    .swagger-ui .br0-ns {
      border-radius: 0;
    }
    .swagger-ui .br1-ns {
      border-radius: 0.125rem;
    }
    .swagger-ui .br2-ns {
      border-radius: 0.25rem;
    }
    .swagger-ui .br3-ns {
      border-radius: 0.5rem;
    }
    .swagger-ui .br4-ns {
      border-radius: 1rem;
    }
    .swagger-ui .br-100-ns {
      border-radius: 100%;
    }
    .swagger-ui .br-pill-ns {
      border-radius: 9999px;
    }
    .swagger-ui .br--bottom-ns {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
    .swagger-ui .br--top-ns {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
    .swagger-ui .br--right-ns {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
    }
    .swagger-ui .br--left-ns {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }
  }
  @media screen and (min-width: 30em) and (max-width: 60em) {
    .swagger-ui .br0-m {
      border-radius: 0;
    }
    .swagger-ui .br1-m {
      border-radius: 0.125rem;
    }
    .swagger-ui .br2-m {
      border-radius: 0.25rem;
    }
    .swagger-ui .br3-m {
      border-radius: 0.5rem;
    }
    .swagger-ui .br4-m {
      border-radius: 1rem;
    }
    .swagger-ui .br-100-m {
      border-radius: 100%;
    }
    .swagger-ui .br-pill-m {
      border-radius: 9999px;
    }
    .swagger-ui .br--bottom-m {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
    .swagger-ui .br--top-m {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
    .swagger-ui .br--right-m {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
    }
    .swagger-ui .br--left-m {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }
  }
  @media screen and (min-width: 60em) {
    .swagger-ui .br0-l {
      border-radius: 0;
    }
    .swagger-ui .br1-l {
      border-radius: 0.125rem;
    }
    .swagger-ui .br2-l {
      border-radius: 0.25rem;
    }
    .swagger-ui .br3-l {
      border-radius: 0.5rem;
    }
    .swagger-ui .br4-l {
      border-radius: 1rem;
    }
    .swagger-ui .br-100-l {
      border-radius: 100%;
    }
    .swagger-ui .br-pill-l {
      border-radius: 9999px;
    }
    .swagger-ui .br--bottom-l {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
    .swagger-ui .br--top-l {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
    .swagger-ui .br--right-l {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
    }
    .swagger-ui .br--left-l {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }
  }
  .swagger-ui .b--dotted {
    border-style: dotted;
  }
  .swagger-ui .b--dashed {
    border-style: dashed;
  }
  .swagger-ui .b--solid {
    border-style: solid;
  }
  .swagger-ui .b--none {
    border-style: none;
  }
  @media screen and (min-width: 30em) {
    .swagger-ui .b--dotted-ns {
      border-style: dotted;
    }
    .swagger-ui .b--dashed-ns {
      border-style: dashed;
    }
    .swagger-ui .b--solid-ns {
      border-style: solid;
    }
    .swagger-ui .b--none-ns {
      border-style: none;
    }
  }
  @media screen and (min-width: 30em) and (max-width: 60em) {
    .swagger-ui .b--dotted-m {
      border-style: dotted;
    }
    .swagger-ui .b--dashed-m {
      border-style: dashed;
    }
    .swagger-ui .b--solid-m {
      border-style: solid;
    }
    .swagger-ui .b--none-m {
      border-style: none;
    }
  }
  @media screen and (min-width: 60em) {
    .swagger-ui .b--dotted-l {
      border-style: dotted;
    }
    .swagger-ui .b--dashed-l {
      border-style: dashed;
    }
    .swagger-ui .b--solid-l {
      border-style: solid;
    }
    .swagger-ui .b--none-l {
      border-style: none;
    }
  }
  .swagger-ui .bw0 {
    border-width: 0;
  }
  .swagger-ui .bw1 {
    border-width: 0.125rem;
  }
  .swagger-ui .bw2 {
    border-width: 0.25rem;
  }
  .swagger-ui .bw3 {
    border-width: 0.5rem;
  }
  .swagger-ui .bw4 {
    border-width: 1rem;
  }
  .swagger-ui .bw5 {
    border-width: 2rem;
  }
  .swagger-ui .bt-0 {
    border-top-width: 0;
  }
  .swagger-ui .br-0 {
    border-right-width: 0;
  }
  .swagger-ui .bb-0 {
    border-bottom-width: 0;
  }
  .swagger-ui .bl-0 {
    border-left-width: 0;
  }
  @media screen and (min-width: 30em) {
    .swagger-ui .bw0-ns {
      border-width: 0;
    }
    .swagger-ui .bw1-ns {
      border-width: 0.125rem;
    }
    .swagger-ui .bw2-ns {
      border-width: 0.25rem;
    }
    .swagger-ui .bw3-ns {
      border-width: 0.5rem;
    }
    .swagger-ui .bw4-ns {
      border-width: 1rem;
    }
    .swagger-ui .bw5-ns {
      border-width: 2rem;
    }
    .swagger-ui .bt-0-ns {
      border-top-width: 0;
    }
    .swagger-ui .br-0-ns {
      border-right-width: 0;
    }
    .swagger-ui .bb-0-ns {
      border-bottom-width: 0;
    }
    .swagger-ui .bl-0-ns {
      border-left-width: 0;
    }
  }
  @media screen and (min-width: 30em) and (max-width: 60em) {
    .swagger-ui .bw0-m {
      border-width: 0;
    }
    .swagger-ui .bw1-m {
      border-width: 0.125rem;
    }
    .swagger-ui .bw2-m {
      border-width: 0.25rem;
    }
    .swagger-ui .bw3-m {
      border-width: 0.5rem;
    }
    .swagger-ui .bw4-m {
      border-width: 1rem;
    }
    .swagger-ui .bw5-m {
      border-width: 2rem;
    }
    .swagger-ui .bt-0-m {
      border-top-width: 0;
    }
    .swagger-ui .br-0-m {
      border-right-width: 0;
    }
    .swagger-ui .bb-0-m {
      border-bottom-width: 0;
    }
    .swagger-ui .bl-0-m {
      border-left-width: 0;
    }
  }
  @media screen and (min-width: 60em) {
    .swagger-ui .bw0-l {
      border-width: 0;
    }
    .swagger-ui .bw1-l {
      border-width: 0.125rem;
    }
    .swagger-ui .bw2-l {
      border-width: 0.25rem;
    }
    .swagger-ui .bw3-l {
      border-width: 0.5rem;
    }
    .swagger-ui .bw4-l {
      border-width: 1rem;
    }
    .swagger-ui .bw5-l {
      border-width: 2rem;
    }
    .swagger-ui .bt-0-l {
      border-top-width: 0;
    }
    .swagger-ui .br-0-l {
      border-right-width: 0;
    }
    .swagger-ui .bb-0-l {
      border-bottom-width: 0;
    }
    .swagger-ui .bl-0-l {
      border-left-width: 0;
    }
  }
  .swagger-ui .shadow-1 {
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);
  }
  .swagger-ui .shadow-2 {
    box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2);
  }
  .swagger-ui .shadow-3 {
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
  }
  .swagger-ui .shadow-4 {
    box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
  }
  .swagger-ui .shadow-5 {
    box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);
  }
  @media screen and (min-width: 30em) {
    .swagger-ui .shadow-1-ns {
      box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);
    }
    .swagger-ui .shadow-2-ns {
      box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2);
    }
    .swagger-ui .shadow-3-ns {
      box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
    }
    .swagger-ui .shadow-4-ns {
      box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
    }
    .swagger-ui .shadow-5-ns {
      box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);
    }
  }
  @media screen and (min-width: 30em) and (max-width: 60em) {
    .swagger-ui .shadow-1-m {
      box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);
    }
    .swagger-ui .shadow-2-m {
      box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2);
    }
    .swagger-ui .shadow-3-m {
      box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
    }
    .swagger-ui .shadow-4-m {
      box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
    }
    .swagger-ui .shadow-5-m {
      box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);
    }
  }
  @media screen and (min-width: 60em) {
    .swagger-ui .shadow-1-l {
      box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);
    }
    .swagger-ui .shadow-2-l {
      box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2);
    }
    .swagger-ui .shadow-3-l {
      box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
    }
    .swagger-ui .shadow-4-l {
      box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
    }
    .swagger-ui .shadow-5-l {
      box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);
    }
  }
  .swagger-ui .pre {
    overflow-x: auto;
    overflow-y: hidden;
    overflow: scroll;
  }
  .swagger-ui .top-0 {
    top: 0;
  }
  .swagger-ui .right-0 {
    right: 0;
  }
  .swagger-ui .bottom-0 {
    bottom: 0;
  }
  .swagger-ui .left-0 {
    left: 0;
  }
  .swagger-ui .top-1 {
    top: 1rem;
  }
  .swagger-ui .right-1 {
    right: 1rem;
  }
  .swagger-ui .bottom-1 {
    bottom: 1rem;
  }
  .swagger-ui .left-1 {
    left: 1rem;
  }
  .swagger-ui .top-2 {
    top: 2rem;
  }
  .swagger-ui .right-2 {
    right: 2rem;
  }
  .swagger-ui .bottom-2 {
    bottom: 2rem;
  }
  .swagger-ui .left-2 {
    left: 2rem;
  }
  .swagger-ui .top--1 {
    top: -1rem;
  }
  .swagger-ui .right--1 {
    right: -1rem;
  }
  .swagger-ui .bottom--1 {
    bottom: -1rem;
  }
  .swagger-ui .left--1 {
    left: -1rem;
  }
  .swagger-ui .top--2 {
    top: -2rem;
  }
  .swagger-ui .right--2 {
    right: -2rem;
  }
  .swagger-ui .bottom--2 {
    bottom: -2rem;
  }
  .swagger-ui .left--2 {
    left: -2rem;
  }
  .swagger-ui .absolute--fill {
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
  }
  @media screen and (min-width: 30em) {
    .swagger-ui .top-0-ns {
      top: 0;
    }
    .swagger-ui .left-0-ns {
      left: 0;
    }
    .swagger-ui .right-0-ns {
      right: 0;
    }
    .swagger-ui .bottom-0-ns {
      bottom: 0;
    }
    .swagger-ui .top-1-ns {
      top: 1rem;
    }
    .swagger-ui .left-1-ns {
      left: 1rem;
    }
    .swagger-ui .right-1-ns {
      right: 1rem;
    }
    .swagger-ui .bottom-1-ns {
      bottom: 1rem;
    }
    .swagger-ui .top-2-ns {
      top: 2rem;
    }
    .swagger-ui .left-2-ns {
      left: 2rem;
    }
    .swagger-ui .right-2-ns {
      right: 2rem;
    }
    .swagger-ui .bottom-2-ns {
      bottom: 2rem;
    }
    .swagger-ui .top--1-ns {
      top: -1rem;
    }
    .swagger-ui .right--1-ns {
      right: -1rem;
    }
    .swagger-ui .bottom--1-ns {
      bottom: -1rem;
    }
    .swagger-ui .left--1-ns {
      left: -1rem;
    }
    .swagger-ui .top--2-ns {
      top: -2rem;
    }
    .swagger-ui .right--2-ns {
      right: -2rem;
    }
    .swagger-ui .bottom--2-ns {
      bottom: -2rem;
    }
    .swagger-ui .left--2-ns {
      left: -2rem;
    }
    .swagger-ui .absolute--fill-ns {
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
    }
  }
  @media screen and (min-width: 30em) and (max-width: 60em) {
    .swagger-ui .top-0-m {
      top: 0;
    }
    .swagger-ui .left-0-m {
      left: 0;
    }
    .swagger-ui .right-0-m {
      right: 0;
    }
    .swagger-ui .bottom-0-m {
      bottom: 0;
    }
    .swagger-ui .top-1-m {
      top: 1rem;
    }
    .swagger-ui .left-1-m {
      left: 1rem;
    }
    .swagger-ui .right-1-m {
      right: 1rem;
    }
    .swagger-ui .bottom-1-m {
      bottom: 1rem;
    }
    .swagger-ui .top-2-m {
      top: 2rem;
    }
    .swagger-ui .left-2-m {
      left: 2rem;
    }
    .swagger-ui .right-2-m {
      right: 2rem;
    }
    .swagger-ui .bottom-2-m {
      bottom: 2rem;
    }
    .swagger-ui .top--1-m {
      top: -1rem;
    }
    .swagger-ui .right--1-m {
      right: -1rem;
    }
    .swagger-ui .bottom--1-m {
      bottom: -1rem;
    }
    .swagger-ui .left--1-m {
      left: -1rem;
    }
    .swagger-ui .top--2-m {
      top: -2rem;
    }
    .swagger-ui .right--2-m {
      right: -2rem;
    }
    .swagger-ui .bottom--2-m {
      bottom: -2rem;
    }
    .swagger-ui .left--2-m {
      left: -2rem;
    }
    .swagger-ui .absolute--fill-m {
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
    }
  }
  @media screen and (min-width: 60em) {
    .swagger-ui .top-0-l {
      top: 0;
    }
    .swagger-ui .left-0-l {
      left: 0;
    }
    .swagger-ui .right-0-l {
      right: 0;
    }
    .swagger-ui .bottom-0-l {
      bottom: 0;
    }
    .swagger-ui .top-1-l {
      top: 1rem;
    }
    .swagger-ui .left-1-l {
      left: 1rem;
    }
    .swagger-ui .right-1-l {
      right: 1rem;
    }
    .swagger-ui .bottom-1-l {
      bottom: 1rem;
    }
    .swagger-ui .top-2-l {
      top: 2rem;
    }
    .swagger-ui .left-2-l {
      left: 2rem;
    }
    .swagger-ui .right-2-l {
      right: 2rem;
    }
    .swagger-ui .bottom-2-l {
      bottom: 2rem;
    }
    .swagger-ui .top--1-l {
      top: -1rem;
    }
    .swagger-ui .right--1-l {
      right: -1rem;
    }
    .swagger-ui .bottom--1-l {
      bottom: -1rem;
    }
    .swagger-ui .left--1-l {
      left: -1rem;
    }
    .swagger-ui .top--2-l {
      top: -2rem;
    }
    .swagger-ui .right--2-l {
      right: -2rem;
    }
    .swagger-ui .bottom--2-l {
      bottom: -2rem;
    }
    .swagger-ui .left--2-l {
      left: -2rem;
    }
    .swagger-ui .absolute--fill-l {
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
    }
  }
  .swagger-ui .cf:after,
  .swagger-ui .cf:before {
    content: " ";
    display: table;
  }
  .swagger-ui .cf:after {
    clear: both;
  }
  .swagger-ui .cf {
    *zoom: 1;
  }
  .swagger-ui .cl {
    clear: left;
  }
  .swagger-ui .cr {
    clear: right;
  }
  .swagger-ui .cb {
    clear: both;
  }
  .swagger-ui .cn {
    clear: none;
  }
  @media screen and (min-width: 30em) {
    .swagger-ui .cl-ns {
      clear: left;
    }
    .swagger-ui .cr-ns {
      clear: right;
    }
    .swagger-ui .cb-ns {
      clear: both;
    }
    .swagger-ui .cn-ns {
      clear: none;
    }
  }
  @media screen and (min-width: 30em) and (max-width: 60em) {
    .swagger-ui .cl-m {
      clear: left;
    }
    .swagger-ui .cr-m {
      clear: right;
    }
    .swagger-ui .cb-m {
      clear: both;
    }
    .swagger-ui .cn-m {
      clear: none;
    }
  }
  @media screen and (min-width: 60em) {
    .swagger-ui .cl-l {
      clear: left;
    }
    .swagger-ui .cr-l {
      clear: right;
    }
    .swagger-ui .cb-l {
      clear: both;
    }
    .swagger-ui .cn-l {
      clear: none;
    }
  }
  .swagger-ui .flex {
    display: flex;
  }
  .swagger-ui .inline-flex {
    display: inline-flex;
  }
  .swagger-ui .flex-auto {
    flex: 1 1 auto;
    min-height: 0;
    min-width: 0;
  }
  .swagger-ui .flex-none {
    flex: none;
  }
  .swagger-ui .flex-column {
    flex-direction: column;
  }
  .swagger-ui .flex-row {
    flex-direction: row;
  }
  .swagger-ui .flex-wrap {
    flex-wrap: wrap;
  }
  .swagger-ui .flex-nowrap {
    flex-wrap: nowrap;
  }
  .swagger-ui .flex-wrap-reverse {
    flex-wrap: wrap-reverse;
  }
  .swagger-ui .flex-column-reverse {
    flex-direction: column-reverse;
  }
  .swagger-ui .flex-row-reverse {
    flex-direction: row-reverse;
  }
  .swagger-ui .items-start {
    align-items: flex-start;
  }
  .swagger-ui .items-end {
    align-items: flex-end;
  }
  .swagger-ui .items-center {
    align-items: center;
  }
  .swagger-ui .items-baseline {
    align-items: baseline;
  }
  .swagger-ui .items-stretch {
    align-items: stretch;
  }
  .swagger-ui .self-start {
    align-self: flex-start;
  }
  .swagger-ui .self-end {
    align-self: flex-end;
  }
  .swagger-ui .self-center {
    align-self: center;
  }
  .swagger-ui .self-baseline {
    align-self: baseline;
  }
  .swagger-ui .self-stretch {
    align-self: stretch;
  }
  .swagger-ui .justify-start {
    justify-content: flex-start;
  }
  .swagger-ui .justify-end {
    justify-content: flex-end;
  }
  .swagger-ui .justify-center {
    justify-content: center;
  }
  .swagger-ui .justify-between {
    justify-content: space-between;
  }
  .swagger-ui .justify-around {
    justify-content: space-around;
  }
  .swagger-ui .content-start {
    align-content: flex-start;
  }
  .swagger-ui .content-end {
    align-content: flex-end;
  }
  .swagger-ui .content-center {
    align-content: center;
  }
  .swagger-ui .content-between {
    align-content: space-between;
  }
  .swagger-ui .content-around {
    align-content: space-around;
  }
  .swagger-ui .content-stretch {
    align-content: stretch;
  }
  .swagger-ui .order-0 {
    order: 0;
  }
  .swagger-ui .order-1 {
    order: 1;
  }
  .swagger-ui .order-2 {
    order: 2;
  }
  .swagger-ui .order-3 {
    order: 3;
  }
  .swagger-ui .order-4 {
    order: 4;
  }
  .swagger-ui .order-5 {
    order: 5;
  }
  .swagger-ui .order-6 {
    order: 6;
  }
  .swagger-ui .order-7 {
    order: 7;
  }
  .swagger-ui .order-8 {
    order: 8;
  }
  .swagger-ui .order-last {
    order: 99999;
  }
  .swagger-ui .flex-grow-0 {
    flex-grow: 0;
  }
  .swagger-ui .flex-grow-1 {
    flex-grow: 1;
  }
  .swagger-ui .flex-shrink-0 {
    flex-shrink: 0;
  }
  .swagger-ui .flex-shrink-1 {
    flex-shrink: 1;
  }
  @media screen and (min-width: 30em) {
    .swagger-ui .flex-ns {
      display: flex;
    }
    .swagger-ui .inline-flex-ns {
      display: inline-flex;
    }
    .swagger-ui .flex-auto-ns {
      flex: 1 1 auto;
      min-height: 0;
      min-width: 0;
    }
    .swagger-ui .flex-none-ns {
      flex: none;
    }
    .swagger-ui .flex-column-ns {
      flex-direction: column;
    }
    .swagger-ui .flex-row-ns {
      flex-direction: row;
    }
    .swagger-ui .flex-wrap-ns {
      flex-wrap: wrap;
    }
    .swagger-ui .flex-nowrap-ns {
      flex-wrap: nowrap;
    }
    .swagger-ui .flex-wrap-reverse-ns {
      flex-wrap: wrap-reverse;
    }
    .swagger-ui .flex-column-reverse-ns {
      flex-direction: column-reverse;
    }
    .swagger-ui .flex-row-reverse-ns {
      flex-direction: row-reverse;
    }
    .swagger-ui .items-start-ns {
      align-items: flex-start;
    }
    .swagger-ui .items-end-ns {
      align-items: flex-end;
    }
    .swagger-ui .items-center-ns {
      align-items: center;
    }
    .swagger-ui .items-baseline-ns {
      align-items: baseline;
    }
    .swagger-ui .items-stretch-ns {
      align-items: stretch;
    }
    .swagger-ui .self-start-ns {
      align-self: flex-start;
    }
    .swagger-ui .self-end-ns {
      align-self: flex-end;
    }
    .swagger-ui .self-center-ns {
      align-self: center;
    }
    .swagger-ui .self-baseline-ns {
      align-self: baseline;
    }
    .swagger-ui .self-stretch-ns {
      align-self: stretch;
    }
    .swagger-ui .justify-start-ns {
      justify-content: flex-start;
    }
    .swagger-ui .justify-end-ns {
      justify-content: flex-end;
    }
    .swagger-ui .justify-center-ns {
      justify-content: center;
    }
    .swagger-ui .justify-between-ns {
      justify-content: space-between;
    }
    .swagger-ui .justify-around-ns {
      justify-content: space-around;
    }
    .swagger-ui .content-start-ns {
      align-content: flex-start;
    }
    .swagger-ui .content-end-ns {
      align-content: flex-end;
    }
    .swagger-ui .content-center-ns {
      align-content: center;
    }
    .swagger-ui .content-between-ns {
      align-content: space-between;
    }
    .swagger-ui .content-around-ns {
      align-content: space-around;
    }
    .swagger-ui .content-stretch-ns {
      align-content: stretch;
    }
    .swagger-ui .order-0-ns {
      order: 0;
    }
    .swagger-ui .order-1-ns {
      order: 1;
    }
    .swagger-ui .order-2-ns {
      order: 2;
    }
    .swagger-ui .order-3-ns {
      order: 3;
    }
    .swagger-ui .order-4-ns {
      order: 4;
    }
    .swagger-ui .order-5-ns {
      order: 5;
    }
    .swagger-ui .order-6-ns {
      order: 6;
    }
    .swagger-ui .order-7-ns {
      order: 7;
    }
    .swagger-ui .order-8-ns {
      order: 8;
    }
    .swagger-ui .order-last-ns {
      order: 99999;
    }
    .swagger-ui .flex-grow-0-ns {
      flex-grow: 0;
    }
    .swagger-ui .flex-grow-1-ns {
      flex-grow: 1;
    }
    .swagger-ui .flex-shrink-0-ns {
      flex-shrink: 0;
    }
    .swagger-ui .flex-shrink-1-ns {
      flex-shrink: 1;
    }
  }
  @media screen and (min-width: 30em) and (max-width: 60em) {
    .swagger-ui .flex-m {
      display: flex;
    }
    .swagger-ui .inline-flex-m {
      display: inline-flex;
    }
    .swagger-ui .flex-auto-m {
      flex: 1 1 auto;
      min-height: 0;
      min-width: 0;
    }
    .swagger-ui .flex-none-m {
      flex: none;
    }
    .swagger-ui .flex-column-m {
      flex-direction: column;
    }
    .swagger-ui .flex-row-m {
      flex-direction: row;
    }
    .swagger-ui .flex-wrap-m {
      flex-wrap: wrap;
    }
    .swagger-ui .flex-nowrap-m {
      flex-wrap: nowrap;
    }
    .swagger-ui .flex-wrap-reverse-m {
      flex-wrap: wrap-reverse;
    }
    .swagger-ui .flex-column-reverse-m {
      flex-direction: column-reverse;
    }
    .swagger-ui .flex-row-reverse-m {
      flex-direction: row-reverse;
    }
    .swagger-ui .items-start-m {
      align-items: flex-start;
    }
    .swagger-ui .items-end-m {
      align-items: flex-end;
    }
    .swagger-ui .items-center-m {
      align-items: center;
    }
    .swagger-ui .items-baseline-m {
      align-items: baseline;
    }
    .swagger-ui .items-stretch-m {
      align-items: stretch;
    }
    .swagger-ui .self-start-m {
      align-self: flex-start;
    }
    .swagger-ui .self-end-m {
      align-self: flex-end;
    }
    .swagger-ui .self-center-m {
      align-self: center;
    }
    .swagger-ui .self-baseline-m {
      align-self: baseline;
    }
    .swagger-ui .self-stretch-m {
      align-self: stretch;
    }
    .swagger-ui .justify-start-m {
      justify-content: flex-start;
    }
    .swagger-ui .justify-end-m {
      justify-content: flex-end;
    }
    .swagger-ui .justify-center-m {
      justify-content: center;
    }
    .swagger-ui .justify-between-m {
      justify-content: space-between;
    }
    .swagger-ui .justify-around-m {
      justify-content: space-around;
    }
    .swagger-ui .content-start-m {
      align-content: flex-start;
    }
    .swagger-ui .content-end-m {
      align-content: flex-end;
    }
    .swagger-ui .content-center-m {
      align-content: center;
    }
    .swagger-ui .content-between-m {
      align-content: space-between;
    }
    .swagger-ui .content-around-m {
      align-content: space-around;
    }
    .swagger-ui .content-stretch-m {
      align-content: stretch;
    }
    .swagger-ui .order-0-m {
      order: 0;
    }
    .swagger-ui .order-1-m {
      order: 1;
    }
    .swagger-ui .order-2-m {
      order: 2;
    }
    .swagger-ui .order-3-m {
      order: 3;
    }
    .swagger-ui .order-4-m {
      order: 4;
    }
    .swagger-ui .order-5-m {
      order: 5;
    }
    .swagger-ui .order-6-m {
      order: 6;
    }
    .swagger-ui .order-7-m {
      order: 7;
    }
    .swagger-ui .order-8-m {
      order: 8;
    }
    .swagger-ui .order-last-m {
      order: 99999;
    }
    .swagger-ui .flex-grow-0-m {
      flex-grow: 0;
    }
    .swagger-ui .flex-grow-1-m {
      flex-grow: 1;
    }
    .swagger-ui .flex-shrink-0-m {
      flex-shrink: 0;
    }
    .swagger-ui .flex-shrink-1-m {
      flex-shrink: 1;
    }
  }
  @media screen and (min-width: 60em) {
    .swagger-ui .flex-l {
      display: flex;
    }
    .swagger-ui .inline-flex-l {
      display: inline-flex;
    }
    .swagger-ui .flex-auto-l {
      flex: 1 1 auto;
      min-height: 0;
      min-width: 0;
    }
    .swagger-ui .flex-none-l {
      flex: none;
    }
    .swagger-ui .flex-column-l {
      flex-direction: column;
    }
    .swagger-ui .flex-row-l {
      flex-direction: row;
    }
    .swagger-ui .flex-wrap-l {
      flex-wrap: wrap;
    }
    .swagger-ui .flex-nowrap-l {
      flex-wrap: nowrap;
    }
    .swagger-ui .flex-wrap-reverse-l {
      flex-wrap: wrap-reverse;
    }
    .swagger-ui .flex-column-reverse-l {
      flex-direction: column-reverse;
    }
    .swagger-ui .flex-row-reverse-l {
      flex-direction: row-reverse;
    }
    .swagger-ui .items-start-l {
      align-items: flex-start;
    }
    .swagger-ui .items-end-l {
      align-items: flex-end;
    }
    .swagger-ui .items-center-l {
      align-items: center;
    }
    .swagger-ui .items-baseline-l {
      align-items: baseline;
    }
    .swagger-ui .items-stretch-l {
      align-items: stretch;
    }
    .swagger-ui .self-start-l {
      align-self: flex-start;
    }
    .swagger-ui .self-end-l {
      align-self: flex-end;
    }
    .swagger-ui .self-center-l {
      align-self: center;
    }
    .swagger-ui .self-baseline-l {
      align-self: baseline;
    }
    .swagger-ui .self-stretch-l {
      align-self: stretch;
    }
    .swagger-ui .justify-start-l {
      justify-content: flex-start;
    }
    .swagger-ui .justify-end-l {
      justify-content: flex-end;
    }
    .swagger-ui .justify-center-l {
      justify-content: center;
    }
    .swagger-ui .justify-between-l {
      justify-content: space-between;
    }
    .swagger-ui .justify-around-l {
      justify-content: space-around;
    }
    .swagger-ui .content-start-l {
      align-content: flex-start;
    }
    .swagger-ui .content-end-l {
      align-content: flex-end;
    }
    .swagger-ui .content-center-l {
      align-content: center;
    }
    .swagger-ui .content-between-l {
      align-content: space-between;
    }
    .swagger-ui .content-around-l {
      align-content: space-around;
    }
    .swagger-ui .content-stretch-l {
      align-content: stretch;
    }
    .swagger-ui .order-0-l {
      order: 0;
    }
    .swagger-ui .order-1-l {
      order: 1;
    }
    .swagger-ui .order-2-l {
      order: 2;
    }
    .swagger-ui .order-3-l {
      order: 3;
    }
    .swagger-ui .order-4-l {
      order: 4;
    }
    .swagger-ui .order-5-l {
      order: 5;
    }
    .swagger-ui .order-6-l {
      order: 6;
    }
    .swagger-ui .order-7-l {
      order: 7;
    }
    .swagger-ui .order-8-l {
      order: 8;
    }
    .swagger-ui .order-last-l {
      order: 99999;
    }
    .swagger-ui .flex-grow-0-l {
      flex-grow: 0;
    }
    .swagger-ui .flex-grow-1-l {
      flex-grow: 1;
    }
    .swagger-ui .flex-shrink-0-l {
      flex-shrink: 0;
    }
    .swagger-ui .flex-shrink-1-l {
      flex-shrink: 1;
    }
  }
  .swagger-ui .dn {
    display: none;
  }
  .swagger-ui .di {
    display: inline;
  }
  .swagger-ui .db {
    display: block;
  }
  .swagger-ui .dib {
    display: inline-block;
  }
  .swagger-ui .dit {
    display: inline-table;
  }
  .swagger-ui .dt {
    display: table;
  }
  .swagger-ui .dtc {
    display: table-cell;
  }
  .swagger-ui .dt-row {
    display: table-row;
  }
  .swagger-ui .dt-row-group {
    display: table-row-group;
  }
  .swagger-ui .dt-column {
    display: table-column;
  }
  .swagger-ui .dt-column-group {
    display: table-column-group;
  }
  .swagger-ui .dt--fixed {
    table-layout: fixed;
    width: 100%;
  }
  @media screen and (min-width: 30em) {
    .swagger-ui .dn-ns {
      display: none;
    }
    .swagger-ui .di-ns {
      display: inline;
    }
    .swagger-ui .db-ns {
      display: block;
    }
    .swagger-ui .dib-ns {
      display: inline-block;
    }
    .swagger-ui .dit-ns {
      display: inline-table;
    }
    .swagger-ui .dt-ns {
      display: table;
    }
    .swagger-ui .dtc-ns {
      display: table-cell;
    }
    .swagger-ui .dt-row-ns {
      display: table-row;
    }
    .swagger-ui .dt-row-group-ns {
      display: table-row-group;
    }
    .swagger-ui .dt-column-ns {
      display: table-column;
    }
    .swagger-ui .dt-column-group-ns {
      display: table-column-group;
    }
    .swagger-ui .dt--fixed-ns {
      table-layout: fixed;
      width: 100%;
    }
  }
  @media screen and (min-width: 30em) and (max-width: 60em) {
    .swagger-ui .dn-m {
      display: none;
    }
    .swagger-ui .di-m {
      display: inline;
    }
    .swagger-ui .db-m {
      display: block;
    }
    .swagger-ui .dib-m {
      display: inline-block;
    }
    .swagger-ui .dit-m {
      display: inline-table;
    }
    .swagger-ui .dt-m {
      display: table;
    }
    .swagger-ui .dtc-m {
      display: table-cell;
    }
    .swagger-ui .dt-row-m {
      display: table-row;
    }
    .swagger-ui .dt-row-group-m {
      display: table-row-group;
    }
    .swagger-ui .dt-column-m {
      display: table-column;
    }
    .swagger-ui .dt-column-group-m {
      display: table-column-group;
    }
    .swagger-ui .dt--fixed-m {
      table-layout: fixed;
      width: 100%;
    }
  }
  @media screen and (min-width: 60em) {
    .swagger-ui .dn-l {
      display: none;
    }
    .swagger-ui .di-l {
      display: inline;
    }
    .swagger-ui .db-l {
      display: block;
    }
    .swagger-ui .dib-l {
      display: inline-block;
    }
    .swagger-ui .dit-l {
      display: inline-table;
    }
    .swagger-ui .dt-l {
      display: table;
    }
    .swagger-ui .dtc-l {
      display: table-cell;
    }
    .swagger-ui .dt-row-l {
      display: table-row;
    }
    .swagger-ui .dt-row-group-l {
      display: table-row-group;
    }
    .swagger-ui .dt-column-l {
      display: table-column;
    }
    .swagger-ui .dt-column-group-l {
      display: table-column-group;
    }
    .swagger-ui .dt--fixed-l {
      table-layout: fixed;
      width: 100%;
    }
  }
  .swagger-ui .fl {
    _display: inline;
    float: left;
  }
  .swagger-ui .fr {
    _display: inline;
    float: right;
  }
  .swagger-ui .fn {
    float: none;
  }
  @media screen and (min-width: 30em) {
    .swagger-ui .fl-ns {
      _display: inline;
      float: left;
    }
    .swagger-ui .fr-ns {
      _display: inline;
      float: right;
    }
    .swagger-ui .fn-ns {
      float: none;
    }
  }
  @media screen and (min-width: 30em) and (max-width: 60em) {
    .swagger-ui .fl-m {
      _display: inline;
      float: left;
    }
    .swagger-ui .fr-m {
      _display: inline;
      float: right;
    }
    .swagger-ui .fn-m {
      float: none;
    }
  }
  @media screen and (min-width: 60em) {
    .swagger-ui .fl-l {
      _display: inline;
      float: left;
    }
    .swagger-ui .fr-l {
      _display: inline;
      float: right;
    }
    .swagger-ui .fn-l {
      float: none;
    }
  }
  .swagger-ui .sans-serif {
    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
      helvetica, helvetica neue, ubuntu, roboto, noto, segoe ui, arial,
      sans-serif;
  }
  .swagger-ui .serif {
    font-family: georgia, serif;
  }
  .swagger-ui .system-sans-serif {
    font-family: sans-serif;
  }
  .swagger-ui .system-serif {
    font-family: serif;
  }
  .swagger-ui .code,
  .swagger-ui code {
    font-family: Consolas, monaco, monospace;
  }
  .swagger-ui .courier {
    font-family: Courier Next, courier, monospace;
  }
  .swagger-ui .helvetica {
    font-family: helvetica neue, helvetica, sans-serif;
  }
  .swagger-ui .avenir {
    font-family: avenir next, avenir, sans-serif;
  }
  .swagger-ui .athelas {
    font-family: athelas, georgia, serif;
  }
  .swagger-ui .georgia {
    font-family: georgia, serif;
  }
  .swagger-ui .times {
    font-family: times, serif;
  }
  .swagger-ui .bodoni {
    font-family: Bodoni MT, serif;
  }
  .swagger-ui .calisto {
    font-family: Calisto MT, serif;
  }
  .swagger-ui .garamond {
    font-family: garamond, serif;
  }
  .swagger-ui .baskerville {
    font-family: baskerville, serif;
  }
  .swagger-ui .i {
    font-style: italic;
  }
  .swagger-ui .fs-normal {
    font-style: normal;
  }
  @media screen and (min-width: 30em) {
    .swagger-ui .i-ns {
      font-style: italic;
    }
    .swagger-ui .fs-normal-ns {
      font-style: normal;
    }
  }
  @media screen and (min-width: 30em) and (max-width: 60em) {
    .swagger-ui .i-m {
      font-style: italic;
    }
    .swagger-ui .fs-normal-m {
      font-style: normal;
    }
  }
  @media screen and (min-width: 60em) {
    .swagger-ui .i-l {
      font-style: italic;
    }
    .swagger-ui .fs-normal-l {
      font-style: normal;
    }
  }
  .swagger-ui .normal {
    font-weight: 400;
  }
  .swagger-ui .b {
    font-weight: 700;
  }
  .swagger-ui .fw1 {
    font-weight: 100;
  }
  .swagger-ui .fw2 {
    font-weight: 200;
  }
  .swagger-ui .fw3 {
    font-weight: 300;
  }
  .swagger-ui .fw4 {
    font-weight: 400;
  }
  .swagger-ui .fw5 {
    font-weight: 500;
  }
  .swagger-ui .fw6 {
    font-weight: 600;
  }
  .swagger-ui .fw7 {
    font-weight: 700;
  }
  .swagger-ui .fw8 {
    font-weight: 800;
  }
  .swagger-ui .fw9 {
    font-weight: 900;
  }
  @media screen and (min-width: 30em) {
    .swagger-ui .normal-ns {
      font-weight: 400;
    }
    .swagger-ui .b-ns {
      font-weight: 700;
    }
    .swagger-ui .fw1-ns {
      font-weight: 100;
    }
    .swagger-ui .fw2-ns {
      font-weight: 200;
    }
    .swagger-ui .fw3-ns {
      font-weight: 300;
    }
    .swagger-ui .fw4-ns {
      font-weight: 400;
    }
    .swagger-ui .fw5-ns {
      font-weight: 500;
    }
    .swagger-ui .fw6-ns {
      font-weight: 600;
    }
    .swagger-ui .fw7-ns {
      font-weight: 700;
    }
    .swagger-ui .fw8-ns {
      font-weight: 800;
    }
    .swagger-ui .fw9-ns {
      font-weight: 900;
    }
  }
  @media screen and (min-width: 30em) and (max-width: 60em) {
    .swagger-ui .normal-m {
      font-weight: 400;
    }
    .swagger-ui .b-m {
      font-weight: 700;
    }
    .swagger-ui .fw1-m {
      font-weight: 100;
    }
    .swagger-ui .fw2-m {
      font-weight: 200;
    }
    .swagger-ui .fw3-m {
      font-weight: 300;
    }
    .swagger-ui .fw4-m {
      font-weight: 400;
    }
    .swagger-ui .fw5-m {
      font-weight: 500;
    }
    .swagger-ui .fw6-m {
      font-weight: 600;
    }
    .swagger-ui .fw7-m {
      font-weight: 700;
    }
    .swagger-ui .fw8-m {
      font-weight: 800;
    }
    .swagger-ui .fw9-m {
      font-weight: 900;
    }
  }
  @media screen and (min-width: 60em) {
    .swagger-ui .normal-l {
      font-weight: 400;
    }
    .swagger-ui .b-l {
      font-weight: 700;
    }
    .swagger-ui .fw1-l {
      font-weight: 100;
    }
    .swagger-ui .fw2-l {
      font-weight: 200;
    }
    .swagger-ui .fw3-l {
      font-weight: 300;
    }
    .swagger-ui .fw4-l {
      font-weight: 400;
    }
    .swagger-ui .fw5-l {
      font-weight: 500;
    }
    .swagger-ui .fw6-l {
      font-weight: 600;
    }
    .swagger-ui .fw7-l {
      font-weight: 700;
    }
    .swagger-ui .fw8-l {
      font-weight: 800;
    }
    .swagger-ui .fw9-l {
      font-weight: 900;
    }
  }
  .swagger-ui .input-reset {
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  .swagger-ui .button-reset::-moz-focus-inner,
  .swagger-ui .input-reset::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  .swagger-ui .h1 {
    height: 1rem;
  }
  .swagger-ui .h2 {
    height: 2rem;
  }
  .swagger-ui .h3 {
    height: 4rem;
  }
  .swagger-ui .h4 {
    height: 8rem;
  }
  .swagger-ui .h5 {
    height: 16rem;
  }
  .swagger-ui .h-25 {
    height: 25%;
  }
  .swagger-ui .h-50 {
    height: 50%;
  }
  .swagger-ui .h-75 {
    height: 75%;
  }
  .swagger-ui .h-100 {
    height: 100%;
  }
  .swagger-ui .min-h-100 {
    min-height: 100%;
  }
  .swagger-ui .vh-25 {
    height: 25vh;
  }
  .swagger-ui .vh-50 {
    height: 50vh;
  }
  .swagger-ui .vh-75 {
    height: 75vh;
  }
  .swagger-ui .vh-100 {
    height: 100vh;
  }
  .swagger-ui .min-vh-100 {
    min-height: 100vh;
  }
  .swagger-ui .h-auto {
    height: auto;
  }
  .swagger-ui .h-inherit {
    height: inherit;
  }
  @media screen and (min-width: 30em) {
    .swagger-ui .h1-ns {
      height: 1rem;
    }
    .swagger-ui .h2-ns {
      height: 2rem;
    }
    .swagger-ui .h3-ns {
      height: 4rem;
    }
    .swagger-ui .h4-ns {
      height: 8rem;
    }
    .swagger-ui .h5-ns {
      height: 16rem;
    }
    .swagger-ui .h-25-ns {
      height: 25%;
    }
    .swagger-ui .h-50-ns {
      height: 50%;
    }
    .swagger-ui .h-75-ns {
      height: 75%;
    }
    .swagger-ui .h-100-ns {
      height: 100%;
    }
    .swagger-ui .min-h-100-ns {
      min-height: 100%;
    }
    .swagger-ui .vh-25-ns {
      height: 25vh;
    }
    .swagger-ui .vh-50-ns {
      height: 50vh;
    }
    .swagger-ui .vh-75-ns {
      height: 75vh;
    }
    .swagger-ui .vh-100-ns {
      height: 100vh;
    }
    .swagger-ui .min-vh-100-ns {
      min-height: 100vh;
    }
    .swagger-ui .h-auto-ns {
      height: auto;
    }
    .swagger-ui .h-inherit-ns {
      height: inherit;
    }
  }
  @media screen and (min-width: 30em) and (max-width: 60em) {
    .swagger-ui .h1-m {
      height: 1rem;
    }
    .swagger-ui .h2-m {
      height: 2rem;
    }
    .swagger-ui .h3-m {
      height: 4rem;
    }
    .swagger-ui .h4-m {
      height: 8rem;
    }
    .swagger-ui .h5-m {
      height: 16rem;
    }
    .swagger-ui .h-25-m {
      height: 25%;
    }
    .swagger-ui .h-50-m {
      height: 50%;
    }
    .swagger-ui .h-75-m {
      height: 75%;
    }
    .swagger-ui .h-100-m {
      height: 100%;
    }
    .swagger-ui .min-h-100-m {
      min-height: 100%;
    }
    .swagger-ui .vh-25-m {
      height: 25vh;
    }
    .swagger-ui .vh-50-m {
      height: 50vh;
    }
    .swagger-ui .vh-75-m {
      height: 75vh;
    }
    .swagger-ui .vh-100-m {
      height: 100vh;
    }
    .swagger-ui .min-vh-100-m {
      min-height: 100vh;
    }
    .swagger-ui .h-auto-m {
      height: auto;
    }
    .swagger-ui .h-inherit-m {
      height: inherit;
    }
  }
  @media screen and (min-width: 60em) {
    .swagger-ui .h1-l {
      height: 1rem;
    }
    .swagger-ui .h2-l {
      height: 2rem;
    }
    .swagger-ui .h3-l {
      height: 4rem;
    }
    .swagger-ui .h4-l {
      height: 8rem;
    }
    .swagger-ui .h5-l {
      height: 16rem;
    }
    .swagger-ui .h-25-l {
      height: 25%;
    }
    .swagger-ui .h-50-l {
      height: 50%;
    }
    .swagger-ui .h-75-l {
      height: 75%;
    }
    .swagger-ui .h-100-l {
      height: 100%;
    }
    .swagger-ui .min-h-100-l {
      min-height: 100%;
    }
    .swagger-ui .vh-25-l {
      height: 25vh;
    }
    .swagger-ui .vh-50-l {
      height: 50vh;
    }
    .swagger-ui .vh-75-l {
      height: 75vh;
    }
    .swagger-ui .vh-100-l {
      height: 100vh;
    }
    .swagger-ui .min-vh-100-l {
      min-height: 100vh;
    }
    .swagger-ui .h-auto-l {
      height: auto;
    }
    .swagger-ui .h-inherit-l {
      height: inherit;
    }
  }
  .swagger-ui .tracked {
    letter-spacing: 0.1em;
  }
  .swagger-ui .tracked-tight {
    letter-spacing: -0.05em;
  }
  .swagger-ui .tracked-mega {
    letter-spacing: 0.25em;
  }
  @media screen and (min-width: 30em) {
    .swagger-ui .tracked-ns {
      letter-spacing: 0.1em;
    }
    .swagger-ui .tracked-tight-ns {
      letter-spacing: -0.05em;
    }
    .swagger-ui .tracked-mega-ns {
      letter-spacing: 0.25em;
    }
  }
  @media screen and (min-width: 30em) and (max-width: 60em) {
    .swagger-ui .tracked-m {
      letter-spacing: 0.1em;
    }
    .swagger-ui .tracked-tight-m {
      letter-spacing: -0.05em;
    }
    .swagger-ui .tracked-mega-m {
      letter-spacing: 0.25em;
    }
  }
  @media screen and (min-width: 60em) {
    .swagger-ui .tracked-l {
      letter-spacing: 0.1em;
    }
    .swagger-ui .tracked-tight-l {
      letter-spacing: -0.05em;
    }
    .swagger-ui .tracked-mega-l {
      letter-spacing: 0.25em;
    }
  }
  .swagger-ui .lh-solid {
    line-height: 1;
  }
  .swagger-ui .lh-title {
    line-height: 1.25;
  }
  .swagger-ui .lh-copy {
    line-height: 1.5;
  }
  @media screen and (min-width: 30em) {
    .swagger-ui .lh-solid-ns {
      line-height: 1;
    }
    .swagger-ui .lh-title-ns {
      line-height: 1.25;
    }
    .swagger-ui .lh-copy-ns {
      line-height: 1.5;
    }
  }
  @media screen and (min-width: 30em) and (max-width: 60em) {
    .swagger-ui .lh-solid-m {
      line-height: 1;
    }
    .swagger-ui .lh-title-m {
      line-height: 1.25;
    }
    .swagger-ui .lh-copy-m {
      line-height: 1.5;
    }
  }
  @media screen and (min-width: 60em) {
    .swagger-ui .lh-solid-l {
      line-height: 1;
    }
    .swagger-ui .lh-title-l {
      line-height: 1.25;
    }
    .swagger-ui .lh-copy-l {
      line-height: 1.5;
    }
  }
  .swagger-ui .link {
    text-decoration: none;
  }
  .swagger-ui .link,
  .swagger-ui .link:active,
  .swagger-ui .link:focus,
  .swagger-ui .link:hover,
  .swagger-ui .link:link,
  .swagger-ui .link:visited {
    transition: color 0.15s ease-in;
  }
  .swagger-ui .link:focus {
    outline: 1px dotted currentColor;
  }
  .swagger-ui .list {
    list-style-type: none;
  }
  .swagger-ui .mw-100 {
    max-width: 100%;
  }
  .swagger-ui .mw1 {
    max-width: 1rem;
  }
  .swagger-ui .mw2 {
    max-width: 2rem;
  }
  .swagger-ui .mw3 {
    max-width: 4rem;
  }
  .swagger-ui .mw4 {
    max-width: 8rem;
  }
  .swagger-ui .mw5 {
    max-width: 16rem;
  }
  .swagger-ui .mw6 {
    max-width: 32rem;
  }
  .swagger-ui .mw7 {
    max-width: 48rem;
  }
  .swagger-ui .mw8 {
    max-width: 64rem;
  }
  .swagger-ui .mw9 {
    max-width: 96rem;
  }
  .swagger-ui .mw-none {
    max-width: none;
  }
  @media screen and (min-width: 30em) {
    .swagger-ui .mw-100-ns {
      max-width: 100%;
    }
    .swagger-ui .mw1-ns {
      max-width: 1rem;
    }
    .swagger-ui .mw2-ns {
      max-width: 2rem;
    }
    .swagger-ui .mw3-ns {
      max-width: 4rem;
    }
    .swagger-ui .mw4-ns {
      max-width: 8rem;
    }
    .swagger-ui .mw5-ns {
      max-width: 16rem;
    }
    .swagger-ui .mw6-ns {
      max-width: 32rem;
    }
    .swagger-ui .mw7-ns {
      max-width: 48rem;
    }
    .swagger-ui .mw8-ns {
      max-width: 64rem;
    }
    .swagger-ui .mw9-ns {
      max-width: 96rem;
    }
    .swagger-ui .mw-none-ns {
      max-width: none;
    }
  }
  @media screen and (min-width: 30em) and (max-width: 60em) {
    .swagger-ui .mw-100-m {
      max-width: 100%;
    }
    .swagger-ui .mw1-m {
      max-width: 1rem;
    }
    .swagger-ui .mw2-m {
      max-width: 2rem;
    }
    .swagger-ui .mw3-m {
      max-width: 4rem;
    }
    .swagger-ui .mw4-m {
      max-width: 8rem;
    }
    .swagger-ui .mw5-m {
      max-width: 16rem;
    }
    .swagger-ui .mw6-m {
      max-width: 32rem;
    }
    .swagger-ui .mw7-m {
      max-width: 48rem;
    }
    .swagger-ui .mw8-m {
      max-width: 64rem;
    }
    .swagger-ui .mw9-m {
      max-width: 96rem;
    }
    .swagger-ui .mw-none-m {
      max-width: none;
    }
  }
  @media screen and (min-width: 60em) {
    .swagger-ui .mw-100-l {
      max-width: 100%;
    }
    .swagger-ui .mw1-l {
      max-width: 1rem;
    }
    .swagger-ui .mw2-l {
      max-width: 2rem;
    }
    .swagger-ui .mw3-l {
      max-width: 4rem;
    }
    .swagger-ui .mw4-l {
      max-width: 8rem;
    }
    .swagger-ui .mw5-l {
      max-width: 16rem;
    }
    .swagger-ui .mw6-l {
      max-width: 32rem;
    }
    .swagger-ui .mw7-l {
      max-width: 48rem;
    }
    .swagger-ui .mw8-l {
      max-width: 64rem;
    }
    .swagger-ui .mw9-l {
      max-width: 96rem;
    }
    .swagger-ui .mw-none-l {
      max-width: none;
    }
  }
  .swagger-ui .w1 {
    width: 1rem;
  }
  .swagger-ui .w2 {
    width: 2rem;
  }
  .swagger-ui .w3 {
    width: 4rem;
  }
  .swagger-ui .w4 {
    width: 8rem;
  }
  .swagger-ui .w5 {
    width: 16rem;
  }
  .swagger-ui .w-10 {
    width: 10%;
  }
  .swagger-ui .w-20 {
    width: 20%;
  }
  .swagger-ui .w-25 {
    width: 25%;
  }
  .swagger-ui .w-30 {
    width: 30%;
  }
  .swagger-ui .w-33 {
    width: 33%;
  }
  .swagger-ui .w-34 {
    width: 34%;
  }
  .swagger-ui .w-40 {
    width: 40%;
  }
  .swagger-ui .w-50 {
    width: 50%;
  }
  .swagger-ui .w-60 {
    width: 60%;
  }
  .swagger-ui .w-70 {
    width: 70%;
  }
  .swagger-ui .w-75 {
    width: 75%;
  }
  .swagger-ui .w-80 {
    width: 80%;
  }
  .swagger-ui .w-90 {
    width: 90%;
  }
  .swagger-ui .w-100 {
    width: 100%;
  }
  .swagger-ui .w-third {
    width: 33.3333333333%;
  }
  .swagger-ui .w-two-thirds {
    width: 66.6666666667%;
  }
  .swagger-ui .w-auto {
    width: auto;
  }
  @media screen and (min-width: 30em) {
    .swagger-ui .w1-ns {
      width: 1rem;
    }
    .swagger-ui .w2-ns {
      width: 2rem;
    }
    .swagger-ui .w3-ns {
      width: 4rem;
    }
    .swagger-ui .w4-ns {
      width: 8rem;
    }
    .swagger-ui .w5-ns {
      width: 16rem;
    }
    .swagger-ui .w-10-ns {
      width: 10%;
    }
    .swagger-ui .w-20-ns {
      width: 20%;
    }
    .swagger-ui .w-25-ns {
      width: 25%;
    }
    .swagger-ui .w-30-ns {
      width: 30%;
    }
    .swagger-ui .w-33-ns {
      width: 33%;
    }
    .swagger-ui .w-34-ns {
      width: 34%;
    }
    .swagger-ui .w-40-ns {
      width: 40%;
    }
    .swagger-ui .w-50-ns {
      width: 50%;
    }
    .swagger-ui .w-60-ns {
      width: 60%;
    }
    .swagger-ui .w-70-ns {
      width: 70%;
    }
    .swagger-ui .w-75-ns {
      width: 75%;
    }
    .swagger-ui .w-80-ns {
      width: 80%;
    }
    .swagger-ui .w-90-ns {
      width: 90%;
    }
    .swagger-ui .w-100-ns {
      width: 100%;
    }
    .swagger-ui .w-third-ns {
      width: 33.3333333333%;
    }
    .swagger-ui .w-two-thirds-ns {
      width: 66.6666666667%;
    }
    .swagger-ui .w-auto-ns {
      width: auto;
    }
  }
  @media screen and (min-width: 30em) and (max-width: 60em) {
    .swagger-ui .w1-m {
      width: 1rem;
    }
    .swagger-ui .w2-m {
      width: 2rem;
    }
    .swagger-ui .w3-m {
      width: 4rem;
    }
    .swagger-ui .w4-m {
      width: 8rem;
    }
    .swagger-ui .w5-m {
      width: 16rem;
    }
    .swagger-ui .w-10-m {
      width: 10%;
    }
    .swagger-ui .w-20-m {
      width: 20%;
    }
    .swagger-ui .w-25-m {
      width: 25%;
    }
    .swagger-ui .w-30-m {
      width: 30%;
    }
    .swagger-ui .w-33-m {
      width: 33%;
    }
    .swagger-ui .w-34-m {
      width: 34%;
    }
    .swagger-ui .w-40-m {
      width: 40%;
    }
    .swagger-ui .w-50-m {
      width: 50%;
    }
    .swagger-ui .w-60-m {
      width: 60%;
    }
    .swagger-ui .w-70-m {
      width: 70%;
    }
    .swagger-ui .w-75-m {
      width: 75%;
    }
    .swagger-ui .w-80-m {
      width: 80%;
    }
    .swagger-ui .w-90-m {
      width: 90%;
    }
    .swagger-ui .w-100-m {
      width: 100%;
    }
    .swagger-ui .w-third-m {
      width: 33.3333333333%;
    }
    .swagger-ui .w-two-thirds-m {
      width: 66.6666666667%;
    }
    .swagger-ui .w-auto-m {
      width: auto;
    }
  }
  @media screen and (min-width: 60em) {
    .swagger-ui .w1-l {
      width: 1rem;
    }
    .swagger-ui .w2-l {
      width: 2rem;
    }
    .swagger-ui .w3-l {
      width: 4rem;
    }
    .swagger-ui .w4-l {
      width: 8rem;
    }
    .swagger-ui .w5-l {
      width: 16rem;
    }
    .swagger-ui .w-10-l {
      width: 10%;
    }
    .swagger-ui .w-20-l {
      width: 20%;
    }
    .swagger-ui .w-25-l {
      width: 25%;
    }
    .swagger-ui .w-30-l {
      width: 30%;
    }
    .swagger-ui .w-33-l {
      width: 33%;
    }
    .swagger-ui .w-34-l {
      width: 34%;
    }
    .swagger-ui .w-40-l {
      width: 40%;
    }
    .swagger-ui .w-50-l {
      width: 50%;
    }
    .swagger-ui .w-60-l {
      width: 60%;
    }
    .swagger-ui .w-70-l {
      width: 70%;
    }
    .swagger-ui .w-75-l {
      width: 75%;
    }
    .swagger-ui .w-80-l {
      width: 80%;
    }
    .swagger-ui .w-90-l {
      width: 90%;
    }
    .swagger-ui .w-100-l {
      width: 100%;
    }
    .swagger-ui .w-third-l {
      width: 33.3333333333%;
    }
    .swagger-ui .w-two-thirds-l {
      width: 66.6666666667%;
    }
    .swagger-ui .w-auto-l {
      width: auto;
    }
  }
  .swagger-ui .overflow-visible {
    overflow: visible;
  }
  .swagger-ui .overflow-hidden {
    overflow: hidden;
  }
  .swagger-ui .overflow-scroll {
    overflow: scroll;
  }
  .swagger-ui .overflow-auto {
    overflow: auto;
  }
  .swagger-ui .overflow-x-visible {
    overflow-x: visible;
  }
  .swagger-ui .overflow-x-hidden {
    overflow-x: hidden;
  }
  .swagger-ui .overflow-x-scroll {
    overflow-x: scroll;
  }
  .swagger-ui .overflow-x-auto {
    overflow-x: auto;
  }
  .swagger-ui .overflow-y-visible {
    overflow-y: visible;
  }
  .swagger-ui .overflow-y-hidden {
    overflow-y: hidden;
  }
  .swagger-ui .overflow-y-scroll {
    overflow-y: scroll;
  }
  .swagger-ui .overflow-y-auto {
    overflow-y: auto;
  }
  @media screen and (min-width: 30em) {
    .swagger-ui .overflow-visible-ns {
      overflow: visible;
    }
    .swagger-ui .overflow-hidden-ns {
      overflow: hidden;
    }
    .swagger-ui .overflow-scroll-ns {
      overflow: scroll;
    }
    .swagger-ui .overflow-auto-ns {
      overflow: auto;
    }
    .swagger-ui .overflow-x-visible-ns {
      overflow-x: visible;
    }
    .swagger-ui .overflow-x-hidden-ns {
      overflow-x: hidden;
    }
    .swagger-ui .overflow-x-scroll-ns {
      overflow-x: scroll;
    }
    .swagger-ui .overflow-x-auto-ns {
      overflow-x: auto;
    }
    .swagger-ui .overflow-y-visible-ns {
      overflow-y: visible;
    }
    .swagger-ui .overflow-y-hidden-ns {
      overflow-y: hidden;
    }
    .swagger-ui .overflow-y-scroll-ns {
      overflow-y: scroll;
    }
    .swagger-ui .overflow-y-auto-ns {
      overflow-y: auto;
    }
  }
  @media screen and (min-width: 30em) and (max-width: 60em) {
    .swagger-ui .overflow-visible-m {
      overflow: visible;
    }
    .swagger-ui .overflow-hidden-m {
      overflow: hidden;
    }
    .swagger-ui .overflow-scroll-m {
      overflow: scroll;
    }
    .swagger-ui .overflow-auto-m {
      overflow: auto;
    }
    .swagger-ui .overflow-x-visible-m {
      overflow-x: visible;
    }
    .swagger-ui .overflow-x-hidden-m {
      overflow-x: hidden;
    }
    .swagger-ui .overflow-x-scroll-m {
      overflow-x: scroll;
    }
    .swagger-ui .overflow-x-auto-m {
      overflow-x: auto;
    }
    .swagger-ui .overflow-y-visible-m {
      overflow-y: visible;
    }
    .swagger-ui .overflow-y-hidden-m {
      overflow-y: hidden;
    }
    .swagger-ui .overflow-y-scroll-m {
      overflow-y: scroll;
    }
    .swagger-ui .overflow-y-auto-m {
      overflow-y: auto;
    }
  }
  @media screen and (min-width: 60em) {
    .swagger-ui .overflow-visible-l {
      overflow: visible;
    }
    .swagger-ui .overflow-hidden-l {
      overflow: hidden;
    }
    .swagger-ui .overflow-scroll-l {
      overflow: scroll;
    }
    .swagger-ui .overflow-auto-l {
      overflow: auto;
    }
    .swagger-ui .overflow-x-visible-l {
      overflow-x: visible;
    }
    .swagger-ui .overflow-x-hidden-l {
      overflow-x: hidden;
    }
    .swagger-ui .overflow-x-scroll-l {
      overflow-x: scroll;
    }
    .swagger-ui .overflow-x-auto-l {
      overflow-x: auto;
    }
    .swagger-ui .overflow-y-visible-l {
      overflow-y: visible;
    }
    .swagger-ui .overflow-y-hidden-l {
      overflow-y: hidden;
    }
    .swagger-ui .overflow-y-scroll-l {
      overflow-y: scroll;
    }
    .swagger-ui .overflow-y-auto-l {
      overflow-y: auto;
    }
  }
  .swagger-ui .static {
    position: static;
  }
  .swagger-ui .relative {
    position: relative;
  }
  .swagger-ui .absolute {
    position: absolute;
  }
  .swagger-ui .fixed {
    position: fixed;
  }
  @media screen and (min-width: 30em) {
    .swagger-ui .static-ns {
      position: static;
    }
    .swagger-ui .relative-ns {
      position: relative;
    }
    .swagger-ui .absolute-ns {
      position: absolute;
    }
    .swagger-ui .fixed-ns {
      position: fixed;
    }
  }
  @media screen and (min-width: 30em) and (max-width: 60em) {
    .swagger-ui .static-m {
      position: static;
    }
    .swagger-ui .relative-m {
      position: relative;
    }
    .swagger-ui .absolute-m {
      position: absolute;
    }
    .swagger-ui .fixed-m {
      position: fixed;
    }
  }
  @media screen and (min-width: 60em) {
    .swagger-ui .static-l {
      position: static;
    }
    .swagger-ui .relative-l {
      position: relative;
    }
    .swagger-ui .absolute-l {
      position: absolute;
    }
    .swagger-ui .fixed-l {
      position: fixed;
    }
  }
  .swagger-ui .o-100 {
    opacity: 1;
  }
  .swagger-ui .o-90 {
    opacity: 0.9;
  }
  .swagger-ui .o-80 {
    opacity: 0.8;
  }
  .swagger-ui .o-70 {
    opacity: 0.7;
  }
  .swagger-ui .o-60 {
    opacity: 0.6;
  }
  .swagger-ui .o-50 {
    opacity: 0.5;
  }
  .swagger-ui .o-40 {
    opacity: 0.4;
  }
  .swagger-ui .o-30 {
    opacity: 0.3;
  }
  .swagger-ui .o-20 {
    opacity: 0.2;
  }
  .swagger-ui .o-10 {
    opacity: 0.1;
  }
  .swagger-ui .o-05 {
    opacity: 0.05;
  }
  .swagger-ui .o-025 {
    opacity: 0.025;
  }
  .swagger-ui .o-0 {
    opacity: 0;
  }
  .swagger-ui .rotate-45 {
    transform: rotate(45deg);
  }
  .swagger-ui .rotate-90 {
    transform: rotate(90deg);
  }
  .swagger-ui .rotate-135 {
    transform: rotate(135deg);
  }
  .swagger-ui .rotate-180 {
    transform: rotate(180deg);
  }
  .swagger-ui .rotate-225 {
    transform: rotate(225deg);
  }
  .swagger-ui .rotate-270 {
    transform: rotate(270deg);
  }
  .swagger-ui .rotate-315 {
    transform: rotate(315deg);
  }
  @media screen and (min-width: 30em) {
    .swagger-ui .rotate-45-ns {
      transform: rotate(45deg);
    }
    .swagger-ui .rotate-90-ns {
      transform: rotate(90deg);
    }
    .swagger-ui .rotate-135-ns {
      transform: rotate(135deg);
    }
    .swagger-ui .rotate-180-ns {
      transform: rotate(180deg);
    }
    .swagger-ui .rotate-225-ns {
      transform: rotate(225deg);
    }
    .swagger-ui .rotate-270-ns {
      transform: rotate(270deg);
    }
    .swagger-ui .rotate-315-ns {
      transform: rotate(315deg);
    }
  }
  @media screen and (min-width: 30em) and (max-width: 60em) {
    .swagger-ui .rotate-45-m {
      transform: rotate(45deg);
    }
    .swagger-ui .rotate-90-m {
      transform: rotate(90deg);
    }
    .swagger-ui .rotate-135-m {
      transform: rotate(135deg);
    }
    .swagger-ui .rotate-180-m {
      transform: rotate(180deg);
    }
    .swagger-ui .rotate-225-m {
      transform: rotate(225deg);
    }
    .swagger-ui .rotate-270-m {
      transform: rotate(270deg);
    }
    .swagger-ui .rotate-315-m {
      transform: rotate(315deg);
    }
  }
  @media screen and (min-width: 60em) {
    .swagger-ui .rotate-45-l {
      transform: rotate(45deg);
    }
    .swagger-ui .rotate-90-l {
      transform: rotate(90deg);
    }
    .swagger-ui .rotate-135-l {
      transform: rotate(135deg);
    }
    .swagger-ui .rotate-180-l {
      transform: rotate(180deg);
    }
    .swagger-ui .rotate-225-l {
      transform: rotate(225deg);
    }
    .swagger-ui .rotate-270-l {
      transform: rotate(270deg);
    }
    .swagger-ui .rotate-315-l {
      transform: rotate(315deg);
    }
  }
  .swagger-ui .black-90 {
    color: rgba(0, 0, 0, 0.9);
  }
  .swagger-ui .black-80 {
    color: rgba(0, 0, 0, 0.8);
  }
  .swagger-ui .black-70 {
    color: rgba(0, 0, 0, 0.7);
  }
  .swagger-ui .black-60 {
    color: rgba(0, 0, 0, 0.6);
  }
  .swagger-ui .black-50 {
    color: rgba(0, 0, 0, 0.5);
  }
  .swagger-ui .black-40 {
    color: rgba(0, 0, 0, 0.4);
  }
  .swagger-ui .black-30 {
    color: rgba(0, 0, 0, 0.3);
  }
  .swagger-ui .black-20 {
    color: rgba(0, 0, 0, 0.2);
  }
  .swagger-ui .black-10 {
    color: rgba(0, 0, 0, 0.1);
  }
  .swagger-ui .black-05 {
    color: rgba(0, 0, 0, 0.05);
  }
  .swagger-ui .white-90 {
    color: hsla(0, 0%, 100%, 0.9);
  }
  .swagger-ui .white-80 {
    color: hsla(0, 0%, 100%, 0.8);
  }
  .swagger-ui .white-70 {
    color: hsla(0, 0%, 100%, 0.7);
  }
  .swagger-ui .white-60 {
    color: hsla(0, 0%, 100%, 0.6);
  }
  .swagger-ui .white-50 {
    color: hsla(0, 0%, 100%, 0.5);
  }
  .swagger-ui .white-40 {
    color: hsla(0, 0%, 100%, 0.4);
  }
  .swagger-ui .white-30 {
    color: hsla(0, 0%, 100%, 0.3);
  }
  .swagger-ui .white-20 {
    color: hsla(0, 0%, 100%, 0.2);
  }
  .swagger-ui .white-10 {
    color: hsla(0, 0%, 100%, 0.1);
  }
  .swagger-ui .black {
    color: #000;
  }
  .swagger-ui .near-black {
    color: #111;
  }
  .swagger-ui .dark-gray {
    color: #333;
  }
  .swagger-ui .mid-gray {
    color: #555;
  }
  .swagger-ui .gray {
    color: #777;
  }
  .swagger-ui .silver {
    color: #999;
  }
  .swagger-ui .light-silver {
    color: #aaa;
  }
  .swagger-ui .moon-gray {
    color: #ccc;
  }
  .swagger-ui .light-gray {
    color: #eee;
  }
  .swagger-ui .near-white {
    color: #f4f4f4;
  }
  .swagger-ui .white {
    color: #fff;
  }
  .swagger-ui .dark-red {
    color: #e7040f;
  }
  .swagger-ui .red {
    color: #ff4136;
  }
  .swagger-ui .light-red {
    color: #ff725c;
  }
  .swagger-ui .orange {
    color: #ff6300;
  }
  .swagger-ui .gold {
    color: #ffb700;
  }
  .swagger-ui .yellow {
    color: gold;
  }
  .swagger-ui .light-yellow {
    color: #fbf1a9;
  }
  .swagger-ui .purple {
    color: #5e2ca5;
  }
  .swagger-ui .light-purple {
    color: #a463f2;
  }
  .swagger-ui .dark-pink {
    color: #d5008f;
  }
  .swagger-ui .hot-pink {
    color: #ff41b4;
  }
  .swagger-ui .pink {
    color: #ff80cc;
  }
  .swagger-ui .light-pink {
    color: #ffa3d7;
  }
  .swagger-ui .dark-green {
    color: #137752;
  }
  .swagger-ui .green {
    color: #19a974;
  }
  .swagger-ui .light-green {
    color: #9eebcf;
  }
  .swagger-ui .navy {
    color: #001b44;
  }
  .swagger-ui .dark-blue {
    color: #00449e;
  }
  .swagger-ui .blue {
    color: #357edd;
  }
  .swagger-ui .light-blue {
    color: #96ccff;
  }
  .swagger-ui .lightest-blue {
    color: #cdecff;
  }
  .swagger-ui .washed-blue {
    color: #f6fffe;
  }
  .swagger-ui .washed-green {
    color: #e8fdf5;
  }
  .swagger-ui .washed-yellow {
    color: #fffceb;
  }
  .swagger-ui .washed-red {
    color: #ffdfdf;
  }
  .swagger-ui .color-inherit {
    color: inherit;
  }
  .swagger-ui .bg-black-90 {
    background-color: rgba(0, 0, 0, 0.9);
  }
  .swagger-ui .bg-black-80 {
    background-color: rgba(0, 0, 0, 0.8);
  }
  .swagger-ui .bg-black-70 {
    background-color: rgba(0, 0, 0, 0.7);
  }
  .swagger-ui .bg-black-60 {
    background-color: rgba(0, 0, 0, 0.6);
  }
  .swagger-ui .bg-black-50 {
    background-color: rgba(0, 0, 0, 0.5);
  }
  .swagger-ui .bg-black-40 {
    background-color: rgba(0, 0, 0, 0.4);
  }
  .swagger-ui .bg-black-30 {
    background-color: rgba(0, 0, 0, 0.3);
  }
  .swagger-ui .bg-black-20 {
    background-color: rgba(0, 0, 0, 0.2);
  }
  .swagger-ui .bg-black-10 {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .swagger-ui .bg-black-05 {
    background-color: rgba(0, 0, 0, 0.05);
  }
  .swagger-ui .bg-white-90 {
    background-color: hsla(0, 0%, 100%, 0.9);
  }
  .swagger-ui .bg-white-80 {
    background-color: hsla(0, 0%, 100%, 0.8);
  }
  .swagger-ui .bg-white-70 {
    background-color: hsla(0, 0%, 100%, 0.7);
  }
  .swagger-ui .bg-white-60 {
    background-color: hsla(0, 0%, 100%, 0.6);
  }
  .swagger-ui .bg-white-50 {
    background-color: hsla(0, 0%, 100%, 0.5);
  }
  .swagger-ui .bg-white-40 {
    background-color: hsla(0, 0%, 100%, 0.4);
  }
  .swagger-ui .bg-white-30 {
    background-color: hsla(0, 0%, 100%, 0.3);
  }
  .swagger-ui .bg-white-20 {
    background-color: hsla(0, 0%, 100%, 0.2);
  }
  .swagger-ui .bg-white-10 {
    background-color: hsla(0, 0%, 100%, 0.1);
  }
  .swagger-ui .bg-black {
    background-color: #000;
  }
  .swagger-ui .bg-near-black {
    background-color: #111;
  }
  .swagger-ui .bg-dark-gray {
    background-color: #333;
  }
  .swagger-ui .bg-mid-gray {
    background-color: #555;
  }
  .swagger-ui .bg-gray {
    background-color: #777;
  }
  .swagger-ui .bg-silver {
    background-color: #999;
  }
  .swagger-ui .bg-light-silver {
    background-color: #aaa;
  }
  .swagger-ui .bg-moon-gray {
    background-color: #ccc;
  }
  .swagger-ui .bg-light-gray {
    background-color: #eee;
  }
  .swagger-ui .bg-near-white {
    background-color: #f4f4f4;
  }
  .swagger-ui .bg-white {
    background-color: #fff;
  }
  .swagger-ui .bg-transparent {
    background-color: transparent;
  }
  .swagger-ui .bg-dark-red {
    background-color: #e7040f;
  }
  .swagger-ui .bg-red {
    background-color: #ff4136;
  }
  .swagger-ui .bg-light-red {
    background-color: #ff725c;
  }
  .swagger-ui .bg-orange {
    background-color: #ff6300;
  }
  .swagger-ui .bg-gold {
    background-color: #ffb700;
  }
  .swagger-ui .bg-yellow {
    background-color: gold;
  }
  .swagger-ui .bg-light-yellow {
    background-color: #fbf1a9;
  }
  .swagger-ui .bg-purple {
    background-color: #5e2ca5;
  }
  .swagger-ui .bg-light-purple {
    background-color: #a463f2;
  }
  .swagger-ui .bg-dark-pink {
    background-color: #d5008f;
  }
  .swagger-ui .bg-hot-pink {
    background-color: #ff41b4;
  }
  .swagger-ui .bg-pink {
    background-color: #ff80cc;
  }
  .swagger-ui .bg-light-pink {
    background-color: #ffa3d7;
  }
  .swagger-ui .bg-dark-green {
    background-color: #137752;
  }
  .swagger-ui .bg-green {
    background-color: #19a974;
  }
  .swagger-ui .bg-light-green {
    background-color: #9eebcf;
  }
  .swagger-ui .bg-navy {
    background-color: #001b44;
  }
  .swagger-ui .bg-dark-blue {
    background-color: #00449e;
  }
  .swagger-ui .bg-blue {
    background-color: #357edd;
  }
  .swagger-ui .bg-light-blue {
    background-color: #96ccff;
  }
  .swagger-ui .bg-lightest-blue {
    background-color: #cdecff;
  }
  .swagger-ui .bg-washed-blue {
    background-color: #f6fffe;
  }
  .swagger-ui .bg-washed-green {
    background-color: #e8fdf5;
  }
  .swagger-ui .bg-washed-yellow {
    background-color: #fffceb;
  }
  .swagger-ui .bg-washed-red {
    background-color: #ffdfdf;
  }
  .swagger-ui .bg-inherit {
    background-color: inherit;
  }
  .swagger-ui .hover-black:focus,
  .swagger-ui .hover-black:hover {
    color: #000;
  }
  .swagger-ui .hover-near-black:focus,
  .swagger-ui .hover-near-black:hover {
    color: #111;
  }
  .swagger-ui .hover-dark-gray:focus,
  .swagger-ui .hover-dark-gray:hover {
    color: #333;
  }
  .swagger-ui .hover-mid-gray:focus,
  .swagger-ui .hover-mid-gray:hover {
    color: #555;
  }
  .swagger-ui .hover-gray:focus,
  .swagger-ui .hover-gray:hover {
    color: #777;
  }
  .swagger-ui .hover-silver:focus,
  .swagger-ui .hover-silver:hover {
    color: #999;
  }
  .swagger-ui .hover-light-silver:focus,
  .swagger-ui .hover-light-silver:hover {
    color: #aaa;
  }
  .swagger-ui .hover-moon-gray:focus,
  .swagger-ui .hover-moon-gray:hover {
    color: #ccc;
  }
  .swagger-ui .hover-light-gray:focus,
  .swagger-ui .hover-light-gray:hover {
    color: #eee;
  }
  .swagger-ui .hover-near-white:focus,
  .swagger-ui .hover-near-white:hover {
    color: #f4f4f4;
  }
  .swagger-ui .hover-white:focus,
  .swagger-ui .hover-white:hover {
    color: #fff;
  }
  .swagger-ui .hover-black-90:focus,
  .swagger-ui .hover-black-90:hover {
    color: rgba(0, 0, 0, 0.9);
  }
  .swagger-ui .hover-black-80:focus,
  .swagger-ui .hover-black-80:hover {
    color: rgba(0, 0, 0, 0.8);
  }
  .swagger-ui .hover-black-70:focus,
  .swagger-ui .hover-black-70:hover {
    color: rgba(0, 0, 0, 0.7);
  }
  .swagger-ui .hover-black-60:focus,
  .swagger-ui .hover-black-60:hover {
    color: rgba(0, 0, 0, 0.6);
  }
  .swagger-ui .hover-black-50:focus,
  .swagger-ui .hover-black-50:hover {
    color: rgba(0, 0, 0, 0.5);
  }
  .swagger-ui .hover-black-40:focus,
  .swagger-ui .hover-black-40:hover {
    color: rgba(0, 0, 0, 0.4);
  }
  .swagger-ui .hover-black-30:focus,
  .swagger-ui .hover-black-30:hover {
    color: rgba(0, 0, 0, 0.3);
  }
  .swagger-ui .hover-black-20:focus,
  .swagger-ui .hover-black-20:hover {
    color: rgba(0, 0, 0, 0.2);
  }
  .swagger-ui .hover-black-10:focus,
  .swagger-ui .hover-black-10:hover {
    color: rgba(0, 0, 0, 0.1);
  }
  .swagger-ui .hover-white-90:focus,
  .swagger-ui .hover-white-90:hover {
    color: hsla(0, 0%, 100%, 0.9);
  }
  .swagger-ui .hover-white-80:focus,
  .swagger-ui .hover-white-80:hover {
    color: hsla(0, 0%, 100%, 0.8);
  }
  .swagger-ui .hover-white-70:focus,
  .swagger-ui .hover-white-70:hover {
    color: hsla(0, 0%, 100%, 0.7);
  }
  .swagger-ui .hover-white-60:focus,
  .swagger-ui .hover-white-60:hover {
    color: hsla(0, 0%, 100%, 0.6);
  }
  .swagger-ui .hover-white-50:focus,
  .swagger-ui .hover-white-50:hover {
    color: hsla(0, 0%, 100%, 0.5);
  }
  .swagger-ui .hover-white-40:focus,
  .swagger-ui .hover-white-40:hover {
    color: hsla(0, 0%, 100%, 0.4);
  }
  .swagger-ui .hover-white-30:focus,
  .swagger-ui .hover-white-30:hover {
    color: hsla(0, 0%, 100%, 0.3);
  }
  .swagger-ui .hover-white-20:focus,
  .swagger-ui .hover-white-20:hover {
    color: hsla(0, 0%, 100%, 0.2);
  }
  .swagger-ui .hover-white-10:focus,
  .swagger-ui .hover-white-10:hover {
    color: hsla(0, 0%, 100%, 0.1);
  }
  .swagger-ui .hover-inherit:focus,
  .swagger-ui .hover-inherit:hover {
    color: inherit;
  }
  .swagger-ui .hover-bg-black:focus,
  .swagger-ui .hover-bg-black:hover {
    background-color: #000;
  }
  .swagger-ui .hover-bg-near-black:focus,
  .swagger-ui .hover-bg-near-black:hover {
    background-color: #111;
  }
  .swagger-ui .hover-bg-dark-gray:focus,
  .swagger-ui .hover-bg-dark-gray:hover {
    background-color: #333;
  }
  .swagger-ui .hover-bg-mid-gray:focus,
  .swagger-ui .hover-bg-mid-gray:hover {
    background-color: #555;
  }
  .swagger-ui .hover-bg-gray:focus,
  .swagger-ui .hover-bg-gray:hover {
    background-color: #777;
  }
  .swagger-ui .hover-bg-silver:focus,
  .swagger-ui .hover-bg-silver:hover {
    background-color: #999;
  }
  .swagger-ui .hover-bg-light-silver:focus,
  .swagger-ui .hover-bg-light-silver:hover {
    background-color: #aaa;
  }
  .swagger-ui .hover-bg-moon-gray:focus,
  .swagger-ui .hover-bg-moon-gray:hover {
    background-color: #ccc;
  }
  .swagger-ui .hover-bg-light-gray:focus,
  .swagger-ui .hover-bg-light-gray:hover {
    background-color: #eee;
  }
  .swagger-ui .hover-bg-near-white:focus,
  .swagger-ui .hover-bg-near-white:hover {
    background-color: #f4f4f4;
  }
  .swagger-ui .hover-bg-white:focus,
  .swagger-ui .hover-bg-white:hover {
    background-color: #fff;
  }
  .swagger-ui .hover-bg-transparent:focus,
  .swagger-ui .hover-bg-transparent:hover {
    background-color: transparent;
  }
  .swagger-ui .hover-bg-black-90:focus,
  .swagger-ui .hover-bg-black-90:hover {
    background-color: rgba(0, 0, 0, 0.9);
  }
  .swagger-ui .hover-bg-black-80:focus,
  .swagger-ui .hover-bg-black-80:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  .swagger-ui .hover-bg-black-70:focus,
  .swagger-ui .hover-bg-black-70:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
  .swagger-ui .hover-bg-black-60:focus,
  .swagger-ui .hover-bg-black-60:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
  .swagger-ui .hover-bg-black-50:focus,
  .swagger-ui .hover-bg-black-50:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
  .swagger-ui .hover-bg-black-40:focus,
  .swagger-ui .hover-bg-black-40:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
  .swagger-ui .hover-bg-black-30:focus,
  .swagger-ui .hover-bg-black-30:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
  .swagger-ui .hover-bg-black-20:focus,
  .swagger-ui .hover-bg-black-20:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  .swagger-ui .hover-bg-black-10:focus,
  .swagger-ui .hover-bg-black-10:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .swagger-ui .hover-bg-white-90:focus,
  .swagger-ui .hover-bg-white-90:hover {
    background-color: hsla(0, 0%, 100%, 0.9);
  }
  .swagger-ui .hover-bg-white-80:focus,
  .swagger-ui .hover-bg-white-80:hover {
    background-color: hsla(0, 0%, 100%, 0.8);
  }
  .swagger-ui .hover-bg-white-70:focus,
  .swagger-ui .hover-bg-white-70:hover {
    background-color: hsla(0, 0%, 100%, 0.7);
  }
  .swagger-ui .hover-bg-white-60:focus,
  .swagger-ui .hover-bg-white-60:hover {
    background-color: hsla(0, 0%, 100%, 0.6);
  }
  .swagger-ui .hover-bg-white-50:focus,
  .swagger-ui .hover-bg-white-50:hover {
    background-color: hsla(0, 0%, 100%, 0.5);
  }
  .swagger-ui .hover-bg-white-40:focus,
  .swagger-ui .hover-bg-white-40:hover {
    background-color: hsla(0, 0%, 100%, 0.4);
  }
  .swagger-ui .hover-bg-white-30:focus,
  .swagger-ui .hover-bg-white-30:hover {
    background-color: hsla(0, 0%, 100%, 0.3);
  }
  .swagger-ui .hover-bg-white-20:focus,
  .swagger-ui .hover-bg-white-20:hover {
    background-color: hsla(0, 0%, 100%, 0.2);
  }
  .swagger-ui .hover-bg-white-10:focus,
  .swagger-ui .hover-bg-white-10:hover {
    background-color: hsla(0, 0%, 100%, 0.1);
  }
  .swagger-ui .hover-dark-red:focus,
  .swagger-ui .hover-dark-red:hover {
    color: #e7040f;
  }
  .swagger-ui .hover-red:focus,
  .swagger-ui .hover-red:hover {
    color: #ff4136;
  }
  .swagger-ui .hover-light-red:focus,
  .swagger-ui .hover-light-red:hover {
    color: #ff725c;
  }
  .swagger-ui .hover-orange:focus,
  .swagger-ui .hover-orange:hover {
    color: #ff6300;
  }
  .swagger-ui .hover-gold:focus,
  .swagger-ui .hover-gold:hover {
    color: #ffb700;
  }
  .swagger-ui .hover-yellow:focus,
  .swagger-ui .hover-yellow:hover {
    color: gold;
  }
  .swagger-ui .hover-light-yellow:focus,
  .swagger-ui .hover-light-yellow:hover {
    color: #fbf1a9;
  }
  .swagger-ui .hover-purple:focus,
  .swagger-ui .hover-purple:hover {
    color: #5e2ca5;
  }
  .swagger-ui .hover-light-purple:focus,
  .swagger-ui .hover-light-purple:hover {
    color: #a463f2;
  }
  .swagger-ui .hover-dark-pink:focus,
  .swagger-ui .hover-dark-pink:hover {
    color: #d5008f;
  }
  .swagger-ui .hover-hot-pink:focus,
  .swagger-ui .hover-hot-pink:hover {
    color: #ff41b4;
  }
  .swagger-ui .hover-pink:focus,
  .swagger-ui .hover-pink:hover {
    color: #ff80cc;
  }
  .swagger-ui .hover-light-pink:focus,
  .swagger-ui .hover-light-pink:hover {
    color: #ffa3d7;
  }
  .swagger-ui .hover-dark-green:focus,
  .swagger-ui .hover-dark-green:hover {
    color: #137752;
  }
  .swagger-ui .hover-green:focus,
  .swagger-ui .hover-green:hover {
    color: #19a974;
  }
  .swagger-ui .hover-light-green:focus,
  .swagger-ui .hover-light-green:hover {
    color: #9eebcf;
  }
  .swagger-ui .hover-navy:focus,
  .swagger-ui .hover-navy:hover {
    color: #001b44;
  }
  .swagger-ui .hover-dark-blue:focus,
  .swagger-ui .hover-dark-blue:hover {
    color: #00449e;
  }
  .swagger-ui .hover-blue:focus,
  .swagger-ui .hover-blue:hover {
    color: #357edd;
  }
  .swagger-ui .hover-light-blue:focus,
  .swagger-ui .hover-light-blue:hover {
    color: #96ccff;
  }
  .swagger-ui .hover-lightest-blue:focus,
  .swagger-ui .hover-lightest-blue:hover {
    color: #cdecff;
  }
  .swagger-ui .hover-washed-blue:focus,
  .swagger-ui .hover-washed-blue:hover {
    color: #f6fffe;
  }
  .swagger-ui .hover-washed-green:focus,
  .swagger-ui .hover-washed-green:hover {
    color: #e8fdf5;
  }
  .swagger-ui .hover-washed-yellow:focus,
  .swagger-ui .hover-washed-yellow:hover {
    color: #fffceb;
  }
  .swagger-ui .hover-washed-red:focus,
  .swagger-ui .hover-washed-red:hover {
    color: #ffdfdf;
  }
  .swagger-ui .hover-bg-dark-red:focus,
  .swagger-ui .hover-bg-dark-red:hover {
    background-color: #e7040f;
  }
  .swagger-ui .hover-bg-red:focus,
  .swagger-ui .hover-bg-red:hover {
    background-color: #ff4136;
  }
  .swagger-ui .hover-bg-light-red:focus,
  .swagger-ui .hover-bg-light-red:hover {
    background-color: #ff725c;
  }
  .swagger-ui .hover-bg-orange:focus,
  .swagger-ui .hover-bg-orange:hover {
    background-color: #ff6300;
  }
  .swagger-ui .hover-bg-gold:focus,
  .swagger-ui .hover-bg-gold:hover {
    background-color: #ffb700;
  }
  .swagger-ui .hover-bg-yellow:focus,
  .swagger-ui .hover-bg-yellow:hover {
    background-color: gold;
  }
  .swagger-ui .hover-bg-light-yellow:focus,
  .swagger-ui .hover-bg-light-yellow:hover {
    background-color: #fbf1a9;
  }
  .swagger-ui .hover-bg-purple:focus,
  .swagger-ui .hover-bg-purple:hover {
    background-color: #5e2ca5;
  }
  .swagger-ui .hover-bg-light-purple:focus,
  .swagger-ui .hover-bg-light-purple:hover {
    background-color: #a463f2;
  }
  .swagger-ui .hover-bg-dark-pink:focus,
  .swagger-ui .hover-bg-dark-pink:hover {
    background-color: #d5008f;
  }
  .swagger-ui .hover-bg-hot-pink:focus,
  .swagger-ui .hover-bg-hot-pink:hover {
    background-color: #ff41b4;
  }
  .swagger-ui .hover-bg-pink:focus,
  .swagger-ui .hover-bg-pink:hover {
    background-color: #ff80cc;
  }
  .swagger-ui .hover-bg-light-pink:focus,
  .swagger-ui .hover-bg-light-pink:hover {
    background-color: #ffa3d7;
  }
  .swagger-ui .hover-bg-dark-green:focus,
  .swagger-ui .hover-bg-dark-green:hover {
    background-color: #137752;
  }
  .swagger-ui .hover-bg-green:focus,
  .swagger-ui .hover-bg-green:hover {
    background-color: #19a974;
  }
  .swagger-ui .hover-bg-light-green:focus,
  .swagger-ui .hover-bg-light-green:hover {
    background-color: #9eebcf;
  }
  .swagger-ui .hover-bg-navy:focus,
  .swagger-ui .hover-bg-navy:hover {
    background-color: #001b44;
  }
  .swagger-ui .hover-bg-dark-blue:focus,
  .swagger-ui .hover-bg-dark-blue:hover {
    background-color: #00449e;
  }
  .swagger-ui .hover-bg-blue:focus,
  .swagger-ui .hover-bg-blue:hover {
    background-color: #357edd;
  }
  .swagger-ui .hover-bg-light-blue:focus,
  .swagger-ui .hover-bg-light-blue:hover {
    background-color: #96ccff;
  }
  .swagger-ui .hover-bg-lightest-blue:focus,
  .swagger-ui .hover-bg-lightest-blue:hover {
    background-color: #cdecff;
  }
  .swagger-ui .hover-bg-washed-blue:focus,
  .swagger-ui .hover-bg-washed-blue:hover {
    background-color: #f6fffe;
  }
  .swagger-ui .hover-bg-washed-green:focus,
  .swagger-ui .hover-bg-washed-green:hover {
    background-color: #e8fdf5;
  }
  .swagger-ui .hover-bg-washed-yellow:focus,
  .swagger-ui .hover-bg-washed-yellow:hover {
    background-color: #fffceb;
  }
  .swagger-ui .hover-bg-washed-red:focus,
  .swagger-ui .hover-bg-washed-red:hover {
    background-color: #ffdfdf;
  }
  .swagger-ui .hover-bg-inherit:focus,
  .swagger-ui .hover-bg-inherit:hover {
    background-color: inherit;
  }
  .swagger-ui .pa0 {
    padding: 0;
  }
  .swagger-ui .pa1 {
    padding: 0.25rem;
  }
  .swagger-ui .pa2 {
    padding: 0.5rem;
  }
  .swagger-ui .pa3 {
    padding: 1rem;
  }
  .swagger-ui .pa4 {
    padding: 2rem;
  }
  .swagger-ui .pa5 {
    padding: 4rem;
  }
  .swagger-ui .pa6 {
    padding: 8rem;
  }
  .swagger-ui .pa7 {
    padding: 16rem;
  }
  .swagger-ui .pl0 {
    padding-left: 0;
  }
  .swagger-ui .pl1 {
    padding-left: 0.25rem;
  }
  .swagger-ui .pl2 {
    padding-left: 0.5rem;
  }
  .swagger-ui .pl3 {
    padding-left: 1rem;
  }
  .swagger-ui .pl4 {
    padding-left: 2rem;
  }
  .swagger-ui .pl5 {
    padding-left: 4rem;
  }
  .swagger-ui .pl6 {
    padding-left: 8rem;
  }
  .swagger-ui .pl7 {
    padding-left: 16rem;
  }
  .swagger-ui .pr0 {
    padding-right: 0;
  }
  .swagger-ui .pr1 {
    padding-right: 0.25rem;
  }
  .swagger-ui .pr2 {
    padding-right: 0.5rem;
  }
  .swagger-ui .pr3 {
    padding-right: 1rem;
  }
  .swagger-ui .pr4 {
    padding-right: 2rem;
  }
  .swagger-ui .pr5 {
    padding-right: 4rem;
  }
  .swagger-ui .pr6 {
    padding-right: 8rem;
  }
  .swagger-ui .pr7 {
    padding-right: 16rem;
  }
  .swagger-ui .pb0 {
    padding-bottom: 0;
  }
  .swagger-ui .pb1 {
    padding-bottom: 0.25rem;
  }
  .swagger-ui .pb2 {
    padding-bottom: 0.5rem;
  }
  .swagger-ui .pb3 {
    padding-bottom: 1rem;
  }
  .swagger-ui .pb4 {
    padding-bottom: 2rem;
  }
  .swagger-ui .pb5 {
    padding-bottom: 4rem;
  }
  .swagger-ui .pb6 {
    padding-bottom: 8rem;
  }
  .swagger-ui .pb7 {
    padding-bottom: 16rem;
  }
  .swagger-ui .pt0 {
    padding-top: 0;
  }
  .swagger-ui .pt1 {
    padding-top: 0.25rem;
  }
  .swagger-ui .pt2 {
    padding-top: 0.5rem;
  }
  .swagger-ui .pt3 {
    padding-top: 1rem;
  }
  .swagger-ui .pt4 {
    padding-top: 2rem;
  }
  .swagger-ui .pt5 {
    padding-top: 4rem;
  }
  .swagger-ui .pt6 {
    padding-top: 8rem;
  }
  .swagger-ui .pt7 {
    padding-top: 16rem;
  }
  .swagger-ui .pv0 {
    padding-bottom: 0;
    padding-top: 0;
  }
  .swagger-ui .pv1 {
    padding-bottom: 0.25rem;
    padding-top: 0.25rem;
  }
  .swagger-ui .pv2 {
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
  }
  .swagger-ui .pv3 {
    padding-bottom: 1rem;
    padding-top: 1rem;
  }
  .swagger-ui .pv4 {
    padding-bottom: 2rem;
    padding-top: 2rem;
  }
  .swagger-ui .pv5 {
    padding-bottom: 4rem;
    padding-top: 4rem;
  }
  .swagger-ui .pv6 {
    padding-bottom: 8rem;
    padding-top: 8rem;
  }
  .swagger-ui .pv7 {
    padding-bottom: 16rem;
    padding-top: 16rem;
  }
  .swagger-ui .ph0 {
    padding-left: 0;
    padding-right: 0;
  }
  .swagger-ui .ph1 {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }
  .swagger-ui .ph2 {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  .swagger-ui .ph3 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .swagger-ui .ph4 {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .swagger-ui .ph5 {
    padding-left: 4rem;
    padding-right: 4rem;
  }
  .swagger-ui .ph6 {
    padding-left: 8rem;
    padding-right: 8rem;
  }
  .swagger-ui .ph7 {
    padding-left: 16rem;
    padding-right: 16rem;
  }
  .swagger-ui .ma0 {
    margin: 0;
  }
  .swagger-ui .ma1 {
    margin: 0.25rem;
  }
  .swagger-ui .ma2 {
    margin: 0.5rem;
  }
  .swagger-ui .ma3 {
    margin: 1rem;
  }
  .swagger-ui .ma4 {
    margin: 2rem;
  }
  .swagger-ui .ma5 {
    margin: 4rem;
  }
  .swagger-ui .ma6 {
    margin: 8rem;
  }
  .swagger-ui .ma7 {
    margin: 16rem;
  }
  .swagger-ui .ml0 {
    margin-left: 0;
  }
  .swagger-ui .ml1 {
    margin-left: 0.25rem;
  }
  .swagger-ui .ml2 {
    margin-left: 0.5rem;
  }
  .swagger-ui .ml3 {
    margin-left: 1rem;
  }
  .swagger-ui .ml4 {
    margin-left: 2rem;
  }
  .swagger-ui .ml5 {
    margin-left: 4rem;
  }
  .swagger-ui .ml6 {
    margin-left: 8rem;
  }
  .swagger-ui .ml7 {
    margin-left: 16rem;
  }
  .swagger-ui .mr0 {
    margin-right: 0;
  }
  .swagger-ui .mr1 {
    margin-right: 0.25rem;
  }
  .swagger-ui .mr2 {
    margin-right: 0.5rem;
  }
  .swagger-ui .mr3 {
    margin-right: 1rem;
  }
  .swagger-ui .mr4 {
    margin-right: 2rem;
  }
  .swagger-ui .mr5 {
    margin-right: 4rem;
  }
  .swagger-ui .mr6 {
    margin-right: 8rem;
  }
  .swagger-ui .mr7 {
    margin-right: 16rem;
  }
  .swagger-ui .mb0 {
    margin-bottom: 0;
  }
  .swagger-ui .mb1 {
    margin-bottom: 0.25rem;
  }
  .swagger-ui .mb2 {
    margin-bottom: 0.5rem;
  }
  .swagger-ui .mb3 {
    margin-bottom: 1rem;
  }
  .swagger-ui .mb4 {
    margin-bottom: 2rem;
  }
  .swagger-ui .mb5 {
    margin-bottom: 4rem;
  }
  .swagger-ui .mb6 {
    margin-bottom: 8rem;
  }
  .swagger-ui .mb7 {
    margin-bottom: 16rem;
  }
  .swagger-ui .mt0 {
    margin-top: 0;
  }
  .swagger-ui .mt1 {
    margin-top: 0.25rem;
  }
  .swagger-ui .mt2 {
    margin-top: 0.5rem;
  }
  .swagger-ui .mt3 {
    margin-top: 1rem;
  }
  .swagger-ui .mt4 {
    margin-top: 2rem;
  }
  .swagger-ui .mt5 {
    margin-top: 4rem;
  }
  .swagger-ui .mt6 {
    margin-top: 8rem;
  }
  .swagger-ui .mt7 {
    margin-top: 16rem;
  }
  .swagger-ui .mv0 {
    margin-bottom: 0;
    margin-top: 0;
  }
  .swagger-ui .mv1 {
    margin-bottom: 0.25rem;
    margin-top: 0.25rem;
  }
  .swagger-ui .mv2 {
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
  }
  .swagger-ui .mv3 {
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  .swagger-ui .mv4 {
    margin-bottom: 2rem;
    margin-top: 2rem;
  }
  .swagger-ui .mv5 {
    margin-bottom: 4rem;
    margin-top: 4rem;
  }
  .swagger-ui .mv6 {
    margin-bottom: 8rem;
    margin-top: 8rem;
  }
  .swagger-ui .mv7 {
    margin-bottom: 16rem;
    margin-top: 16rem;
  }
  .swagger-ui .mh0 {
    margin-left: 0;
    margin-right: 0;
  }
  .swagger-ui .mh1 {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }
  .swagger-ui .mh2 {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  .swagger-ui .mh3 {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  .swagger-ui .mh4 {
    margin-left: 2rem;
    margin-right: 2rem;
  }
  .swagger-ui .mh5 {
    margin-left: 4rem;
    margin-right: 4rem;
  }
  .swagger-ui .mh6 {
    margin-left: 8rem;
    margin-right: 8rem;
  }
  .swagger-ui .mh7 {
    margin-left: 16rem;
    margin-right: 16rem;
  }
  @media screen and (min-width: 30em) {
    .swagger-ui .pa0-ns {
      padding: 0;
    }
    .swagger-ui .pa1-ns {
      padding: 0.25rem;
    }
    .swagger-ui .pa2-ns {
      padding: 0.5rem;
    }
    .swagger-ui .pa3-ns {
      padding: 1rem;
    }
    .swagger-ui .pa4-ns {
      padding: 2rem;
    }
    .swagger-ui .pa5-ns {
      padding: 4rem;
    }
    .swagger-ui .pa6-ns {
      padding: 8rem;
    }
    .swagger-ui .pa7-ns {
      padding: 16rem;
    }
    .swagger-ui .pl0-ns {
      padding-left: 0;
    }
    .swagger-ui .pl1-ns {
      padding-left: 0.25rem;
    }
    .swagger-ui .pl2-ns {
      padding-left: 0.5rem;
    }
    .swagger-ui .pl3-ns {
      padding-left: 1rem;
    }
    .swagger-ui .pl4-ns {
      padding-left: 2rem;
    }
    .swagger-ui .pl5-ns {
      padding-left: 4rem;
    }
    .swagger-ui .pl6-ns {
      padding-left: 8rem;
    }
    .swagger-ui .pl7-ns {
      padding-left: 16rem;
    }
    .swagger-ui .pr0-ns {
      padding-right: 0;
    }
    .swagger-ui .pr1-ns {
      padding-right: 0.25rem;
    }
    .swagger-ui .pr2-ns {
      padding-right: 0.5rem;
    }
    .swagger-ui .pr3-ns {
      padding-right: 1rem;
    }
    .swagger-ui .pr4-ns {
      padding-right: 2rem;
    }
    .swagger-ui .pr5-ns {
      padding-right: 4rem;
    }
    .swagger-ui .pr6-ns {
      padding-right: 8rem;
    }
    .swagger-ui .pr7-ns {
      padding-right: 16rem;
    }
    .swagger-ui .pb0-ns {
      padding-bottom: 0;
    }
    .swagger-ui .pb1-ns {
      padding-bottom: 0.25rem;
    }
    .swagger-ui .pb2-ns {
      padding-bottom: 0.5rem;
    }
    .swagger-ui .pb3-ns {
      padding-bottom: 1rem;
    }
    .swagger-ui .pb4-ns {
      padding-bottom: 2rem;
    }
    .swagger-ui .pb5-ns {
      padding-bottom: 4rem;
    }
    .swagger-ui .pb6-ns {
      padding-bottom: 8rem;
    }
    .swagger-ui .pb7-ns {
      padding-bottom: 16rem;
    }
    .swagger-ui .pt0-ns {
      padding-top: 0;
    }
    .swagger-ui .pt1-ns {
      padding-top: 0.25rem;
    }
    .swagger-ui .pt2-ns {
      padding-top: 0.5rem;
    }
    .swagger-ui .pt3-ns {
      padding-top: 1rem;
    }
    .swagger-ui .pt4-ns {
      padding-top: 2rem;
    }
    .swagger-ui .pt5-ns {
      padding-top: 4rem;
    }
    .swagger-ui .pt6-ns {
      padding-top: 8rem;
    }
    .swagger-ui .pt7-ns {
      padding-top: 16rem;
    }
    .swagger-ui .pv0-ns {
      padding-bottom: 0;
      padding-top: 0;
    }
    .swagger-ui .pv1-ns {
      padding-bottom: 0.25rem;
      padding-top: 0.25rem;
    }
    .swagger-ui .pv2-ns {
      padding-bottom: 0.5rem;
      padding-top: 0.5rem;
    }
    .swagger-ui .pv3-ns {
      padding-bottom: 1rem;
      padding-top: 1rem;
    }
    .swagger-ui .pv4-ns {
      padding-bottom: 2rem;
      padding-top: 2rem;
    }
    .swagger-ui .pv5-ns {
      padding-bottom: 4rem;
      padding-top: 4rem;
    }
    .swagger-ui .pv6-ns {
      padding-bottom: 8rem;
      padding-top: 8rem;
    }
    .swagger-ui .pv7-ns {
      padding-bottom: 16rem;
      padding-top: 16rem;
    }
    .swagger-ui .ph0-ns {
      padding-left: 0;
      padding-right: 0;
    }
    .swagger-ui .ph1-ns {
      padding-left: 0.25rem;
      padding-right: 0.25rem;
    }
    .swagger-ui .ph2-ns {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
    .swagger-ui .ph3-ns {
      padding-left: 1rem;
      padding-right: 1rem;
    }
    .swagger-ui .ph4-ns {
      padding-left: 2rem;
      padding-right: 2rem;
    }
    .swagger-ui .ph5-ns {
      padding-left: 4rem;
      padding-right: 4rem;
    }
    .swagger-ui .ph6-ns {
      padding-left: 8rem;
      padding-right: 8rem;
    }
    .swagger-ui .ph7-ns {
      padding-left: 16rem;
      padding-right: 16rem;
    }
    .swagger-ui .ma0-ns {
      margin: 0;
    }
    .swagger-ui .ma1-ns {
      margin: 0.25rem;
    }
    .swagger-ui .ma2-ns {
      margin: 0.5rem;
    }
    .swagger-ui .ma3-ns {
      margin: 1rem;
    }
    .swagger-ui .ma4-ns {
      margin: 2rem;
    }
    .swagger-ui .ma5-ns {
      margin: 4rem;
    }
    .swagger-ui .ma6-ns {
      margin: 8rem;
    }
    .swagger-ui .ma7-ns {
      margin: 16rem;
    }
    .swagger-ui .ml0-ns {
      margin-left: 0;
    }
    .swagger-ui .ml1-ns {
      margin-left: 0.25rem;
    }
    .swagger-ui .ml2-ns {
      margin-left: 0.5rem;
    }
    .swagger-ui .ml3-ns {
      margin-left: 1rem;
    }
    .swagger-ui .ml4-ns {
      margin-left: 2rem;
    }
    .swagger-ui .ml5-ns {
      margin-left: 4rem;
    }
    .swagger-ui .ml6-ns {
      margin-left: 8rem;
    }
    .swagger-ui .ml7-ns {
      margin-left: 16rem;
    }
    .swagger-ui .mr0-ns {
      margin-right: 0;
    }
    .swagger-ui .mr1-ns {
      margin-right: 0.25rem;
    }
    .swagger-ui .mr2-ns {
      margin-right: 0.5rem;
    }
    .swagger-ui .mr3-ns {
      margin-right: 1rem;
    }
    .swagger-ui .mr4-ns {
      margin-right: 2rem;
    }
    .swagger-ui .mr5-ns {
      margin-right: 4rem;
    }
    .swagger-ui .mr6-ns {
      margin-right: 8rem;
    }
    .swagger-ui .mr7-ns {
      margin-right: 16rem;
    }
    .swagger-ui .mb0-ns {
      margin-bottom: 0;
    }
    .swagger-ui .mb1-ns {
      margin-bottom: 0.25rem;
    }
    .swagger-ui .mb2-ns {
      margin-bottom: 0.5rem;
    }
    .swagger-ui .mb3-ns {
      margin-bottom: 1rem;
    }
    .swagger-ui .mb4-ns {
      margin-bottom: 2rem;
    }
    .swagger-ui .mb5-ns {
      margin-bottom: 4rem;
    }
    .swagger-ui .mb6-ns {
      margin-bottom: 8rem;
    }
    .swagger-ui .mb7-ns {
      margin-bottom: 16rem;
    }
    .swagger-ui .mt0-ns {
      margin-top: 0;
    }
    .swagger-ui .mt1-ns {
      margin-top: 0.25rem;
    }
    .swagger-ui .mt2-ns {
      margin-top: 0.5rem;
    }
    .swagger-ui .mt3-ns {
      margin-top: 1rem;
    }
    .swagger-ui .mt4-ns {
      margin-top: 2rem;
    }
    .swagger-ui .mt5-ns {
      margin-top: 4rem;
    }
    .swagger-ui .mt6-ns {
      margin-top: 8rem;
    }
    .swagger-ui .mt7-ns {
      margin-top: 16rem;
    }
    .swagger-ui .mv0-ns {
      margin-bottom: 0;
      margin-top: 0;
    }
    .swagger-ui .mv1-ns {
      margin-bottom: 0.25rem;
      margin-top: 0.25rem;
    }
    .swagger-ui .mv2-ns {
      margin-bottom: 0.5rem;
      margin-top: 0.5rem;
    }
    .swagger-ui .mv3-ns {
      margin-bottom: 1rem;
      margin-top: 1rem;
    }
    .swagger-ui .mv4-ns {
      margin-bottom: 2rem;
      margin-top: 2rem;
    }
    .swagger-ui .mv5-ns {
      margin-bottom: 4rem;
      margin-top: 4rem;
    }
    .swagger-ui .mv6-ns {
      margin-bottom: 8rem;
      margin-top: 8rem;
    }
    .swagger-ui .mv7-ns {
      margin-bottom: 16rem;
      margin-top: 16rem;
    }
    .swagger-ui .mh0-ns {
      margin-left: 0;
      margin-right: 0;
    }
    .swagger-ui .mh1-ns {
      margin-left: 0.25rem;
      margin-right: 0.25rem;
    }
    .swagger-ui .mh2-ns {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
    .swagger-ui .mh3-ns {
      margin-left: 1rem;
      margin-right: 1rem;
    }
    .swagger-ui .mh4-ns {
      margin-left: 2rem;
      margin-right: 2rem;
    }
    .swagger-ui .mh5-ns {
      margin-left: 4rem;
      margin-right: 4rem;
    }
    .swagger-ui .mh6-ns {
      margin-left: 8rem;
      margin-right: 8rem;
    }
    .swagger-ui .mh7-ns {
      margin-left: 16rem;
      margin-right: 16rem;
    }
  }
  @media screen and (min-width: 30em) and (max-width: 60em) {
    .swagger-ui .pa0-m {
      padding: 0;
    }
    .swagger-ui .pa1-m {
      padding: 0.25rem;
    }
    .swagger-ui .pa2-m {
      padding: 0.5rem;
    }
    .swagger-ui .pa3-m {
      padding: 1rem;
    }
    .swagger-ui .pa4-m {
      padding: 2rem;
    }
    .swagger-ui .pa5-m {
      padding: 4rem;
    }
    .swagger-ui .pa6-m {
      padding: 8rem;
    }
    .swagger-ui .pa7-m {
      padding: 16rem;
    }
    .swagger-ui .pl0-m {
      padding-left: 0;
    }
    .swagger-ui .pl1-m {
      padding-left: 0.25rem;
    }
    .swagger-ui .pl2-m {
      padding-left: 0.5rem;
    }
    .swagger-ui .pl3-m {
      padding-left: 1rem;
    }
    .swagger-ui .pl4-m {
      padding-left: 2rem;
    }
    .swagger-ui .pl5-m {
      padding-left: 4rem;
    }
    .swagger-ui .pl6-m {
      padding-left: 8rem;
    }
    .swagger-ui .pl7-m {
      padding-left: 16rem;
    }
    .swagger-ui .pr0-m {
      padding-right: 0;
    }
    .swagger-ui .pr1-m {
      padding-right: 0.25rem;
    }
    .swagger-ui .pr2-m {
      padding-right: 0.5rem;
    }
    .swagger-ui .pr3-m {
      padding-right: 1rem;
    }
    .swagger-ui .pr4-m {
      padding-right: 2rem;
    }
    .swagger-ui .pr5-m {
      padding-right: 4rem;
    }
    .swagger-ui .pr6-m {
      padding-right: 8rem;
    }
    .swagger-ui .pr7-m {
      padding-right: 16rem;
    }
    .swagger-ui .pb0-m {
      padding-bottom: 0;
    }
    .swagger-ui .pb1-m {
      padding-bottom: 0.25rem;
    }
    .swagger-ui .pb2-m {
      padding-bottom: 0.5rem;
    }
    .swagger-ui .pb3-m {
      padding-bottom: 1rem;
    }
    .swagger-ui .pb4-m {
      padding-bottom: 2rem;
    }
    .swagger-ui .pb5-m {
      padding-bottom: 4rem;
    }
    .swagger-ui .pb6-m {
      padding-bottom: 8rem;
    }
    .swagger-ui .pb7-m {
      padding-bottom: 16rem;
    }
    .swagger-ui .pt0-m {
      padding-top: 0;
    }
    .swagger-ui .pt1-m {
      padding-top: 0.25rem;
    }
    .swagger-ui .pt2-m {
      padding-top: 0.5rem;
    }
    .swagger-ui .pt3-m {
      padding-top: 1rem;
    }
    .swagger-ui .pt4-m {
      padding-top: 2rem;
    }
    .swagger-ui .pt5-m {
      padding-top: 4rem;
    }
    .swagger-ui .pt6-m {
      padding-top: 8rem;
    }
    .swagger-ui .pt7-m {
      padding-top: 16rem;
    }
    .swagger-ui .pv0-m {
      padding-bottom: 0;
      padding-top: 0;
    }
    .swagger-ui .pv1-m {
      padding-bottom: 0.25rem;
      padding-top: 0.25rem;
    }
    .swagger-ui .pv2-m {
      padding-bottom: 0.5rem;
      padding-top: 0.5rem;
    }
    .swagger-ui .pv3-m {
      padding-bottom: 1rem;
      padding-top: 1rem;
    }
    .swagger-ui .pv4-m {
      padding-bottom: 2rem;
      padding-top: 2rem;
    }
    .swagger-ui .pv5-m {
      padding-bottom: 4rem;
      padding-top: 4rem;
    }
    .swagger-ui .pv6-m {
      padding-bottom: 8rem;
      padding-top: 8rem;
    }
    .swagger-ui .pv7-m {
      padding-bottom: 16rem;
      padding-top: 16rem;
    }
    .swagger-ui .ph0-m {
      padding-left: 0;
      padding-right: 0;
    }
    .swagger-ui .ph1-m {
      padding-left: 0.25rem;
      padding-right: 0.25rem;
    }
    .swagger-ui .ph2-m {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
    .swagger-ui .ph3-m {
      padding-left: 1rem;
      padding-right: 1rem;
    }
    .swagger-ui .ph4-m {
      padding-left: 2rem;
      padding-right: 2rem;
    }
    .swagger-ui .ph5-m {
      padding-left: 4rem;
      padding-right: 4rem;
    }
    .swagger-ui .ph6-m {
      padding-left: 8rem;
      padding-right: 8rem;
    }
    .swagger-ui .ph7-m {
      padding-left: 16rem;
      padding-right: 16rem;
    }
    .swagger-ui .ma0-m {
      margin: 0;
    }
    .swagger-ui .ma1-m {
      margin: 0.25rem;
    }
    .swagger-ui .ma2-m {
      margin: 0.5rem;
    }
    .swagger-ui .ma3-m {
      margin: 1rem;
    }
    .swagger-ui .ma4-m {
      margin: 2rem;
    }
    .swagger-ui .ma5-m {
      margin: 4rem;
    }
    .swagger-ui .ma6-m {
      margin: 8rem;
    }
    .swagger-ui .ma7-m {
      margin: 16rem;
    }
    .swagger-ui .ml0-m {
      margin-left: 0;
    }
    .swagger-ui .ml1-m {
      margin-left: 0.25rem;
    }
    .swagger-ui .ml2-m {
      margin-left: 0.5rem;
    }
    .swagger-ui .ml3-m {
      margin-left: 1rem;
    }
    .swagger-ui .ml4-m {
      margin-left: 2rem;
    }
    .swagger-ui .ml5-m {
      margin-left: 4rem;
    }
    .swagger-ui .ml6-m {
      margin-left: 8rem;
    }
    .swagger-ui .ml7-m {
      margin-left: 16rem;
    }
    .swagger-ui .mr0-m {
      margin-right: 0;
    }
    .swagger-ui .mr1-m {
      margin-right: 0.25rem;
    }
    .swagger-ui .mr2-m {
      margin-right: 0.5rem;
    }
    .swagger-ui .mr3-m {
      margin-right: 1rem;
    }
    .swagger-ui .mr4-m {
      margin-right: 2rem;
    }
    .swagger-ui .mr5-m {
      margin-right: 4rem;
    }
    .swagger-ui .mr6-m {
      margin-right: 8rem;
    }
    .swagger-ui .mr7-m {
      margin-right: 16rem;
    }
    .swagger-ui .mb0-m {
      margin-bottom: 0;
    }
    .swagger-ui .mb1-m {
      margin-bottom: 0.25rem;
    }
    .swagger-ui .mb2-m {
      margin-bottom: 0.5rem;
    }
    .swagger-ui .mb3-m {
      margin-bottom: 1rem;
    }
    .swagger-ui .mb4-m {
      margin-bottom: 2rem;
    }
    .swagger-ui .mb5-m {
      margin-bottom: 4rem;
    }
    .swagger-ui .mb6-m {
      margin-bottom: 8rem;
    }
    .swagger-ui .mb7-m {
      margin-bottom: 16rem;
    }
    .swagger-ui .mt0-m {
      margin-top: 0;
    }
    .swagger-ui .mt1-m {
      margin-top: 0.25rem;
    }
    .swagger-ui .mt2-m {
      margin-top: 0.5rem;
    }
    .swagger-ui .mt3-m {
      margin-top: 1rem;
    }
    .swagger-ui .mt4-m {
      margin-top: 2rem;
    }
    .swagger-ui .mt5-m {
      margin-top: 4rem;
    }
    .swagger-ui .mt6-m {
      margin-top: 8rem;
    }
    .swagger-ui .mt7-m {
      margin-top: 16rem;
    }
    .swagger-ui .mv0-m {
      margin-bottom: 0;
      margin-top: 0;
    }
    .swagger-ui .mv1-m {
      margin-bottom: 0.25rem;
      margin-top: 0.25rem;
    }
    .swagger-ui .mv2-m {
      margin-bottom: 0.5rem;
      margin-top: 0.5rem;
    }
    .swagger-ui .mv3-m {
      margin-bottom: 1rem;
      margin-top: 1rem;
    }
    .swagger-ui .mv4-m {
      margin-bottom: 2rem;
      margin-top: 2rem;
    }
    .swagger-ui .mv5-m {
      margin-bottom: 4rem;
      margin-top: 4rem;
    }
    .swagger-ui .mv6-m {
      margin-bottom: 8rem;
      margin-top: 8rem;
    }
    .swagger-ui .mv7-m {
      margin-bottom: 16rem;
      margin-top: 16rem;
    }
    .swagger-ui .mh0-m {
      margin-left: 0;
      margin-right: 0;
    }
    .swagger-ui .mh1-m {
      margin-left: 0.25rem;
      margin-right: 0.25rem;
    }
    .swagger-ui .mh2-m {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
    .swagger-ui .mh3-m {
      margin-left: 1rem;
      margin-right: 1rem;
    }
    .swagger-ui .mh4-m {
      margin-left: 2rem;
      margin-right: 2rem;
    }
    .swagger-ui .mh5-m {
      margin-left: 4rem;
      margin-right: 4rem;
    }
    .swagger-ui .mh6-m {
      margin-left: 8rem;
      margin-right: 8rem;
    }
    .swagger-ui .mh7-m {
      margin-left: 16rem;
      margin-right: 16rem;
    }
  }
  @media screen and (min-width: 60em) {
    .swagger-ui .pa0-l {
      padding: 0;
    }
    .swagger-ui .pa1-l {
      padding: 0.25rem;
    }
    .swagger-ui .pa2-l {
      padding: 0.5rem;
    }
    .swagger-ui .pa3-l {
      padding: 1rem;
    }
    .swagger-ui .pa4-l {
      padding: 2rem;
    }
    .swagger-ui .pa5-l {
      padding: 4rem;
    }
    .swagger-ui .pa6-l {
      padding: 8rem;
    }
    .swagger-ui .pa7-l {
      padding: 16rem;
    }
    .swagger-ui .pl0-l {
      padding-left: 0;
    }
    .swagger-ui .pl1-l {
      padding-left: 0.25rem;
    }
    .swagger-ui .pl2-l {
      padding-left: 0.5rem;
    }
    .swagger-ui .pl3-l {
      padding-left: 1rem;
    }
    .swagger-ui .pl4-l {
      padding-left: 2rem;
    }
    .swagger-ui .pl5-l {
      padding-left: 4rem;
    }
    .swagger-ui .pl6-l {
      padding-left: 8rem;
    }
    .swagger-ui .pl7-l {
      padding-left: 16rem;
    }
    .swagger-ui .pr0-l {
      padding-right: 0;
    }
    .swagger-ui .pr1-l {
      padding-right: 0.25rem;
    }
    .swagger-ui .pr2-l {
      padding-right: 0.5rem;
    }
    .swagger-ui .pr3-l {
      padding-right: 1rem;
    }
    .swagger-ui .pr4-l {
      padding-right: 2rem;
    }
    .swagger-ui .pr5-l {
      padding-right: 4rem;
    }
    .swagger-ui .pr6-l {
      padding-right: 8rem;
    }
    .swagger-ui .pr7-l {
      padding-right: 16rem;
    }
    .swagger-ui .pb0-l {
      padding-bottom: 0;
    }
    .swagger-ui .pb1-l {
      padding-bottom: 0.25rem;
    }
    .swagger-ui .pb2-l {
      padding-bottom: 0.5rem;
    }
    .swagger-ui .pb3-l {
      padding-bottom: 1rem;
    }
    .swagger-ui .pb4-l {
      padding-bottom: 2rem;
    }
    .swagger-ui .pb5-l {
      padding-bottom: 4rem;
    }
    .swagger-ui .pb6-l {
      padding-bottom: 8rem;
    }
    .swagger-ui .pb7-l {
      padding-bottom: 16rem;
    }
    .swagger-ui .pt0-l {
      padding-top: 0;
    }
    .swagger-ui .pt1-l {
      padding-top: 0.25rem;
    }
    .swagger-ui .pt2-l {
      padding-top: 0.5rem;
    }
    .swagger-ui .pt3-l {
      padding-top: 1rem;
    }
    .swagger-ui .pt4-l {
      padding-top: 2rem;
    }
    .swagger-ui .pt5-l {
      padding-top: 4rem;
    }
    .swagger-ui .pt6-l {
      padding-top: 8rem;
    }
    .swagger-ui .pt7-l {
      padding-top: 16rem;
    }
    .swagger-ui .pv0-l {
      padding-bottom: 0;
      padding-top: 0;
    }
    .swagger-ui .pv1-l {
      padding-bottom: 0.25rem;
      padding-top: 0.25rem;
    }
    .swagger-ui .pv2-l {
      padding-bottom: 0.5rem;
      padding-top: 0.5rem;
    }
    .swagger-ui .pv3-l {
      padding-bottom: 1rem;
      padding-top: 1rem;
    }
    .swagger-ui .pv4-l {
      padding-bottom: 2rem;
      padding-top: 2rem;
    }
    .swagger-ui .pv5-l {
      padding-bottom: 4rem;
      padding-top: 4rem;
    }
    .swagger-ui .pv6-l {
      padding-bottom: 8rem;
      padding-top: 8rem;
    }
    .swagger-ui .pv7-l {
      padding-bottom: 16rem;
      padding-top: 16rem;
    }
    .swagger-ui .ph0-l {
      padding-left: 0;
      padding-right: 0;
    }
    .swagger-ui .ph1-l {
      padding-left: 0.25rem;
      padding-right: 0.25rem;
    }
    .swagger-ui .ph2-l {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
    .swagger-ui .ph3-l {
      padding-left: 1rem;
      padding-right: 1rem;
    }
    .swagger-ui .ph4-l {
      padding-left: 2rem;
      padding-right: 2rem;
    }
    .swagger-ui .ph5-l {
      padding-left: 4rem;
      padding-right: 4rem;
    }
    .swagger-ui .ph6-l {
      padding-left: 8rem;
      padding-right: 8rem;
    }
    .swagger-ui .ph7-l {
      padding-left: 16rem;
      padding-right: 16rem;
    }
    .swagger-ui .ma0-l {
      margin: 0;
    }
    .swagger-ui .ma1-l {
      margin: 0.25rem;
    }
    .swagger-ui .ma2-l {
      margin: 0.5rem;
    }
    .swagger-ui .ma3-l {
      margin: 1rem;
    }
    .swagger-ui .ma4-l {
      margin: 2rem;
    }
    .swagger-ui .ma5-l {
      margin: 4rem;
    }
    .swagger-ui .ma6-l {
      margin: 8rem;
    }
    .swagger-ui .ma7-l {
      margin: 16rem;
    }
    .swagger-ui .ml0-l {
      margin-left: 0;
    }
    .swagger-ui .ml1-l {
      margin-left: 0.25rem;
    }
    .swagger-ui .ml2-l {
      margin-left: 0.5rem;
    }
    .swagger-ui .ml3-l {
      margin-left: 1rem;
    }
    .swagger-ui .ml4-l {
      margin-left: 2rem;
    }
    .swagger-ui .ml5-l {
      margin-left: 4rem;
    }
    .swagger-ui .ml6-l {
      margin-left: 8rem;
    }
    .swagger-ui .ml7-l {
      margin-left: 16rem;
    }
    .swagger-ui .mr0-l {
      margin-right: 0;
    }
    .swagger-ui .mr1-l {
      margin-right: 0.25rem;
    }
    .swagger-ui .mr2-l {
      margin-right: 0.5rem;
    }
    .swagger-ui .mr3-l {
      margin-right: 1rem;
    }
    .swagger-ui .mr4-l {
      margin-right: 2rem;
    }
    .swagger-ui .mr5-l {
      margin-right: 4rem;
    }
    .swagger-ui .mr6-l {
      margin-right: 8rem;
    }
    .swagger-ui .mr7-l {
      margin-right: 16rem;
    }
    .swagger-ui .mb0-l {
      margin-bottom: 0;
    }
    .swagger-ui .mb1-l {
      margin-bottom: 0.25rem;
    }
    .swagger-ui .mb2-l {
      margin-bottom: 0.5rem;
    }
    .swagger-ui .mb3-l {
      margin-bottom: 1rem;
    }
    .swagger-ui .mb4-l {
      margin-bottom: 2rem;
    }
    .swagger-ui .mb5-l {
      margin-bottom: 4rem;
    }
    .swagger-ui .mb6-l {
      margin-bottom: 8rem;
    }
    .swagger-ui .mb7-l {
      margin-bottom: 16rem;
    }
    .swagger-ui .mt0-l {
      margin-top: 0;
    }
    .swagger-ui .mt1-l {
      margin-top: 0.25rem;
    }
    .swagger-ui .mt2-l {
      margin-top: 0.5rem;
    }
    .swagger-ui .mt3-l {
      margin-top: 1rem;
    }
    .swagger-ui .mt4-l {
      margin-top: 2rem;
    }
    .swagger-ui .mt5-l {
      margin-top: 4rem;
    }
    .swagger-ui .mt6-l {
      margin-top: 8rem;
    }
    .swagger-ui .mt7-l {
      margin-top: 16rem;
    }
    .swagger-ui .mv0-l {
      margin-bottom: 0;
      margin-top: 0;
    }
    .swagger-ui .mv1-l {
      margin-bottom: 0.25rem;
      margin-top: 0.25rem;
    }
    .swagger-ui .mv2-l {
      margin-bottom: 0.5rem;
      margin-top: 0.5rem;
    }
    .swagger-ui .mv3-l {
      margin-bottom: 1rem;
      margin-top: 1rem;
    }
    .swagger-ui .mv4-l {
      margin-bottom: 2rem;
      margin-top: 2rem;
    }
    .swagger-ui .mv5-l {
      margin-bottom: 4rem;
      margin-top: 4rem;
    }
    .swagger-ui .mv6-l {
      margin-bottom: 8rem;
      margin-top: 8rem;
    }
    .swagger-ui .mv7-l {
      margin-bottom: 16rem;
      margin-top: 16rem;
    }
    .swagger-ui .mh0-l {
      margin-left: 0;
      margin-right: 0;
    }
    .swagger-ui .mh1-l {
      margin-left: 0.25rem;
      margin-right: 0.25rem;
    }
    .swagger-ui .mh2-l {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
    .swagger-ui .mh3-l {
      margin-left: 1rem;
      margin-right: 1rem;
    }
    .swagger-ui .mh4-l {
      margin-left: 2rem;
      margin-right: 2rem;
    }
    .swagger-ui .mh5-l {
      margin-left: 4rem;
      margin-right: 4rem;
    }
    .swagger-ui .mh6-l {
      margin-left: 8rem;
      margin-right: 8rem;
    }
    .swagger-ui .mh7-l {
      margin-left: 16rem;
      margin-right: 16rem;
    }
  }
  .swagger-ui .na1 {
    margin: -0.25rem;
  }
  .swagger-ui .na2 {
    margin: -0.5rem;
  }
  .swagger-ui .na3 {
    margin: -1rem;
  }
  .swagger-ui .na4 {
    margin: -2rem;
  }
  .swagger-ui .na5 {
    margin: -4rem;
  }
  .swagger-ui .na6 {
    margin: -8rem;
  }
  .swagger-ui .na7 {
    margin: -16rem;
  }
  .swagger-ui .nl1 {
    margin-left: -0.25rem;
  }
  .swagger-ui .nl2 {
    margin-left: -0.5rem;
  }
  .swagger-ui .nl3 {
    margin-left: -1rem;
  }
  .swagger-ui .nl4 {
    margin-left: -2rem;
  }
  .swagger-ui .nl5 {
    margin-left: -4rem;
  }
  .swagger-ui .nl6 {
    margin-left: -8rem;
  }
  .swagger-ui .nl7 {
    margin-left: -16rem;
  }
  .swagger-ui .nr1 {
    margin-right: -0.25rem;
  }
  .swagger-ui .nr2 {
    margin-right: -0.5rem;
  }
  .swagger-ui .nr3 {
    margin-right: -1rem;
  }
  .swagger-ui .nr4 {
    margin-right: -2rem;
  }
  .swagger-ui .nr5 {
    margin-right: -4rem;
  }
  .swagger-ui .nr6 {
    margin-right: -8rem;
  }
  .swagger-ui .nr7 {
    margin-right: -16rem;
  }
  .swagger-ui .nb1 {
    margin-bottom: -0.25rem;
  }
  .swagger-ui .nb2 {
    margin-bottom: -0.5rem;
  }
  .swagger-ui .nb3 {
    margin-bottom: -1rem;
  }
  .swagger-ui .nb4 {
    margin-bottom: -2rem;
  }
  .swagger-ui .nb5 {
    margin-bottom: -4rem;
  }
  .swagger-ui .nb6 {
    margin-bottom: -8rem;
  }
  .swagger-ui .nb7 {
    margin-bottom: -16rem;
  }
  .swagger-ui .nt1 {
    margin-top: -0.25rem;
  }
  .swagger-ui .nt2 {
    margin-top: -0.5rem;
  }
  .swagger-ui .nt3 {
    margin-top: -1rem;
  }
  .swagger-ui .nt4 {
    margin-top: -2rem;
  }
  .swagger-ui .nt5 {
    margin-top: -4rem;
  }
  .swagger-ui .nt6 {
    margin-top: -8rem;
  }
  .swagger-ui .nt7 {
    margin-top: -16rem;
  }
  @media screen and (min-width: 30em) {
    .swagger-ui .na1-ns {
      margin: -0.25rem;
    }
    .swagger-ui .na2-ns {
      margin: -0.5rem;
    }
    .swagger-ui .na3-ns {
      margin: -1rem;
    }
    .swagger-ui .na4-ns {
      margin: -2rem;
    }
    .swagger-ui .na5-ns {
      margin: -4rem;
    }
    .swagger-ui .na6-ns {
      margin: -8rem;
    }
    .swagger-ui .na7-ns {
      margin: -16rem;
    }
    .swagger-ui .nl1-ns {
      margin-left: -0.25rem;
    }
    .swagger-ui .nl2-ns {
      margin-left: -0.5rem;
    }
    .swagger-ui .nl3-ns {
      margin-left: -1rem;
    }
    .swagger-ui .nl4-ns {
      margin-left: -2rem;
    }
    .swagger-ui .nl5-ns {
      margin-left: -4rem;
    }
    .swagger-ui .nl6-ns {
      margin-left: -8rem;
    }
    .swagger-ui .nl7-ns {
      margin-left: -16rem;
    }
    .swagger-ui .nr1-ns {
      margin-right: -0.25rem;
    }
    .swagger-ui .nr2-ns {
      margin-right: -0.5rem;
    }
    .swagger-ui .nr3-ns {
      margin-right: -1rem;
    }
    .swagger-ui .nr4-ns {
      margin-right: -2rem;
    }
    .swagger-ui .nr5-ns {
      margin-right: -4rem;
    }
    .swagger-ui .nr6-ns {
      margin-right: -8rem;
    }
    .swagger-ui .nr7-ns {
      margin-right: -16rem;
    }
    .swagger-ui .nb1-ns {
      margin-bottom: -0.25rem;
    }
    .swagger-ui .nb2-ns {
      margin-bottom: -0.5rem;
    }
    .swagger-ui .nb3-ns {
      margin-bottom: -1rem;
    }
    .swagger-ui .nb4-ns {
      margin-bottom: -2rem;
    }
    .swagger-ui .nb5-ns {
      margin-bottom: -4rem;
    }
    .swagger-ui .nb6-ns {
      margin-bottom: -8rem;
    }
    .swagger-ui .nb7-ns {
      margin-bottom: -16rem;
    }
    .swagger-ui .nt1-ns {
      margin-top: -0.25rem;
    }
    .swagger-ui .nt2-ns {
      margin-top: -0.5rem;
    }
    .swagger-ui .nt3-ns {
      margin-top: -1rem;
    }
    .swagger-ui .nt4-ns {
      margin-top: -2rem;
    }
    .swagger-ui .nt5-ns {
      margin-top: -4rem;
    }
    .swagger-ui .nt6-ns {
      margin-top: -8rem;
    }
    .swagger-ui .nt7-ns {
      margin-top: -16rem;
    }
  }
  @media screen and (min-width: 30em) and (max-width: 60em) {
    .swagger-ui .na1-m {
      margin: -0.25rem;
    }
    .swagger-ui .na2-m {
      margin: -0.5rem;
    }
    .swagger-ui .na3-m {
      margin: -1rem;
    }
    .swagger-ui .na4-m {
      margin: -2rem;
    }
    .swagger-ui .na5-m {
      margin: -4rem;
    }
    .swagger-ui .na6-m {
      margin: -8rem;
    }
    .swagger-ui .na7-m {
      margin: -16rem;
    }
    .swagger-ui .nl1-m {
      margin-left: -0.25rem;
    }
    .swagger-ui .nl2-m {
      margin-left: -0.5rem;
    }
    .swagger-ui .nl3-m {
      margin-left: -1rem;
    }
    .swagger-ui .nl4-m {
      margin-left: -2rem;
    }
    .swagger-ui .nl5-m {
      margin-left: -4rem;
    }
    .swagger-ui .nl6-m {
      margin-left: -8rem;
    }
    .swagger-ui .nl7-m {
      margin-left: -16rem;
    }
    .swagger-ui .nr1-m {
      margin-right: -0.25rem;
    }
    .swagger-ui .nr2-m {
      margin-right: -0.5rem;
    }
    .swagger-ui .nr3-m {
      margin-right: -1rem;
    }
    .swagger-ui .nr4-m {
      margin-right: -2rem;
    }
    .swagger-ui .nr5-m {
      margin-right: -4rem;
    }
    .swagger-ui .nr6-m {
      margin-right: -8rem;
    }
    .swagger-ui .nr7-m {
      margin-right: -16rem;
    }
    .swagger-ui .nb1-m {
      margin-bottom: -0.25rem;
    }
    .swagger-ui .nb2-m {
      margin-bottom: -0.5rem;
    }
    .swagger-ui .nb3-m {
      margin-bottom: -1rem;
    }
    .swagger-ui .nb4-m {
      margin-bottom: -2rem;
    }
    .swagger-ui .nb5-m {
      margin-bottom: -4rem;
    }
    .swagger-ui .nb6-m {
      margin-bottom: -8rem;
    }
    .swagger-ui .nb7-m {
      margin-bottom: -16rem;
    }
    .swagger-ui .nt1-m {
      margin-top: -0.25rem;
    }
    .swagger-ui .nt2-m {
      margin-top: -0.5rem;
    }
    .swagger-ui .nt3-m {
      margin-top: -1rem;
    }
    .swagger-ui .nt4-m {
      margin-top: -2rem;
    }
    .swagger-ui .nt5-m {
      margin-top: -4rem;
    }
    .swagger-ui .nt6-m {
      margin-top: -8rem;
    }
    .swagger-ui .nt7-m {
      margin-top: -16rem;
    }
  }
  @media screen and (min-width: 60em) {
    .swagger-ui .na1-l {
      margin: -0.25rem;
    }
    .swagger-ui .na2-l {
      margin: -0.5rem;
    }
    .swagger-ui .na3-l {
      margin: -1rem;
    }
    .swagger-ui .na4-l {
      margin: -2rem;
    }
    .swagger-ui .na5-l {
      margin: -4rem;
    }
    .swagger-ui .na6-l {
      margin: -8rem;
    }
    .swagger-ui .na7-l {
      margin: -16rem;
    }
    .swagger-ui .nl1-l {
      margin-left: -0.25rem;
    }
    .swagger-ui .nl2-l {
      margin-left: -0.5rem;
    }
    .swagger-ui .nl3-l {
      margin-left: -1rem;
    }
    .swagger-ui .nl4-l {
      margin-left: -2rem;
    }
    .swagger-ui .nl5-l {
      margin-left: -4rem;
    }
    .swagger-ui .nl6-l {
      margin-left: -8rem;
    }
    .swagger-ui .nl7-l {
      margin-left: -16rem;
    }
    .swagger-ui .nr1-l {
      margin-right: -0.25rem;
    }
    .swagger-ui .nr2-l {
      margin-right: -0.5rem;
    }
    .swagger-ui .nr3-l {
      margin-right: -1rem;
    }
    .swagger-ui .nr4-l {
      margin-right: -2rem;
    }
    .swagger-ui .nr5-l {
      margin-right: -4rem;
    }
    .swagger-ui .nr6-l {
      margin-right: -8rem;
    }
    .swagger-ui .nr7-l {
      margin-right: -16rem;
    }
    .swagger-ui .nb1-l {
      margin-bottom: -0.25rem;
    }
    .swagger-ui .nb2-l {
      margin-bottom: -0.5rem;
    }
    .swagger-ui .nb3-l {
      margin-bottom: -1rem;
    }
    .swagger-ui .nb4-l {
      margin-bottom: -2rem;
    }
    .swagger-ui .nb5-l {
      margin-bottom: -4rem;
    }
    .swagger-ui .nb6-l {
      margin-bottom: -8rem;
    }
    .swagger-ui .nb7-l {
      margin-bottom: -16rem;
    }
    .swagger-ui .nt1-l {
      margin-top: -0.25rem;
    }
    .swagger-ui .nt2-l {
      margin-top: -0.5rem;
    }
    .swagger-ui .nt3-l {
      margin-top: -1rem;
    }
    .swagger-ui .nt4-l {
      margin-top: -2rem;
    }
    .swagger-ui .nt5-l {
      margin-top: -4rem;
    }
    .swagger-ui .nt6-l {
      margin-top: -8rem;
    }
    .swagger-ui .nt7-l {
      margin-top: -16rem;
    }
  }
  .swagger-ui .collapse {
    border-collapse: collapse;
    border-spacing: 0;
  }
  .swagger-ui .striped--light-silver:nth-child(odd) {
    background-color: #aaa;
  }
  .swagger-ui .striped--moon-gray:nth-child(odd) {
    background-color: #ccc;
  }
  .swagger-ui .striped--light-gray:nth-child(odd) {
    background-color: #eee;
  }
  .swagger-ui .striped--near-white:nth-child(odd) {
    background-color: #f4f4f4;
  }
  .swagger-ui .stripe-light:nth-child(odd) {
    background-color: hsla(0, 0%, 100%, 0.1);
  }
  .swagger-ui .stripe-dark:nth-child(odd) {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .swagger-ui .strike {
    text-decoration: line-through;
  }
  .swagger-ui .underline {
    text-decoration: underline;
  }
  .swagger-ui .no-underline {
    text-decoration: none;
  }
  @media screen and (min-width: 30em) {
    .swagger-ui .strike-ns {
      text-decoration: line-through;
    }
    .swagger-ui .underline-ns {
      text-decoration: underline;
    }
    .swagger-ui .no-underline-ns {
      text-decoration: none;
    }
  }
  @media screen and (min-width: 30em) and (max-width: 60em) {
    .swagger-ui .strike-m {
      text-decoration: line-through;
    }
    .swagger-ui .underline-m {
      text-decoration: underline;
    }
    .swagger-ui .no-underline-m {
      text-decoration: none;
    }
  }
  @media screen and (min-width: 60em) {
    .swagger-ui .strike-l {
      text-decoration: line-through;
    }
    .swagger-ui .underline-l {
      text-decoration: underline;
    }
    .swagger-ui .no-underline-l {
      text-decoration: none;
    }
  }
  .swagger-ui .tl {
    text-align: left;
  }
  .swagger-ui .tr {
    text-align: right;
  }
  .swagger-ui .tc {
    text-align: center;
  }
  .swagger-ui .tj {
    text-align: justify;
  }
  @media screen and (min-width: 30em) {
    .swagger-ui .tl-ns {
      text-align: left;
    }
    .swagger-ui .tr-ns {
      text-align: right;
    }
    .swagger-ui .tc-ns {
      text-align: center;
    }
    .swagger-ui .tj-ns {
      text-align: justify;
    }
  }
  @media screen and (min-width: 30em) and (max-width: 60em) {
    .swagger-ui .tl-m {
      text-align: left;
    }
    .swagger-ui .tr-m {
      text-align: right;
    }
    .swagger-ui .tc-m {
      text-align: center;
    }
    .swagger-ui .tj-m {
      text-align: justify;
    }
  }
  @media screen and (min-width: 60em) {
    .swagger-ui .tl-l {
      text-align: left;
    }
    .swagger-ui .tr-l {
      text-align: right;
    }
    .swagger-ui .tc-l {
      text-align: center;
    }
    .swagger-ui .tj-l {
      text-align: justify;
    }
  }
  .swagger-ui .ttc {
    text-transform: capitalize;
  }
  .swagger-ui .ttl {
    text-transform: lowercase;
  }
  .swagger-ui .ttu {
    text-transform: uppercase;
  }
  .swagger-ui .ttn {
    text-transform: none;
  }
  @media screen and (min-width: 30em) {
    .swagger-ui .ttc-ns {
      text-transform: capitalize;
    }
    .swagger-ui .ttl-ns {
      text-transform: lowercase;
    }
    .swagger-ui .ttu-ns {
      text-transform: uppercase;
    }
    .swagger-ui .ttn-ns {
      text-transform: none;
    }
  }
  @media screen and (min-width: 30em) and (max-width: 60em) {
    .swagger-ui .ttc-m {
      text-transform: capitalize;
    }
    .swagger-ui .ttl-m {
      text-transform: lowercase;
    }
    .swagger-ui .ttu-m {
      text-transform: uppercase;
    }
    .swagger-ui .ttn-m {
      text-transform: none;
    }
  }
  @media screen and (min-width: 60em) {
    .swagger-ui .ttc-l {
      text-transform: capitalize;
    }
    .swagger-ui .ttl-l {
      text-transform: lowercase;
    }
    .swagger-ui .ttu-l {
      text-transform: uppercase;
    }
    .swagger-ui .ttn-l {
      text-transform: none;
    }
  }
  .swagger-ui .f-6,
  .swagger-ui .f-headline {
    font-size: 6rem;
  }
  .swagger-ui .f-5,
  .swagger-ui .f-subheadline {
    font-size: 5rem;
  }
  .swagger-ui .f1 {
    font-size: 3rem;
  }
  .swagger-ui .f2 {
    font-size: 2.25rem;
  }
  .swagger-ui .f3 {
    font-size: 1.5rem;
  }
  .swagger-ui .f4 {
    font-size: 1.25rem;
  }
  .swagger-ui .f5 {
    font-size: 1rem;
  }
  .swagger-ui .f6 {
    font-size: 0.875rem;
  }
  .swagger-ui .f7 {
    font-size: 0.75rem;
  }
  @media screen and (min-width: 30em) {
    .swagger-ui .f-6-ns,
    .swagger-ui .f-headline-ns {
      font-size: 6rem;
    }
    .swagger-ui .f-5-ns,
    .swagger-ui .f-subheadline-ns {
      font-size: 5rem;
    }
    .swagger-ui .f1-ns {
      font-size: 3rem;
    }
    .swagger-ui .f2-ns {
      font-size: 2.25rem;
    }
    .swagger-ui .f3-ns {
      font-size: 1.5rem;
    }
    .swagger-ui .f4-ns {
      font-size: 1.25rem;
    }
    .swagger-ui .f5-ns {
      font-size: 1rem;
    }
    .swagger-ui .f6-ns {
      font-size: 0.875rem;
    }
    .swagger-ui .f7-ns {
      font-size: 0.75rem;
    }
  }
  @media screen and (min-width: 30em) and (max-width: 60em) {
    .swagger-ui .f-6-m,
    .swagger-ui .f-headline-m {
      font-size: 6rem;
    }
    .swagger-ui .f-5-m,
    .swagger-ui .f-subheadline-m {
      font-size: 5rem;
    }
    .swagger-ui .f1-m {
      font-size: 3rem;
    }
    .swagger-ui .f2-m {
      font-size: 2.25rem;
    }
    .swagger-ui .f3-m {
      font-size: 1.5rem;
    }
    .swagger-ui .f4-m {
      font-size: 1.25rem;
    }
    .swagger-ui .f5-m {
      font-size: 1rem;
    }
    .swagger-ui .f6-m {
      font-size: 0.875rem;
    }
    .swagger-ui .f7-m {
      font-size: 0.75rem;
    }
  }
  @media screen and (min-width: 60em) {
    .swagger-ui .f-6-l,
    .swagger-ui .f-headline-l {
      font-size: 6rem;
    }
    .swagger-ui .f-5-l,
    .swagger-ui .f-subheadline-l {
      font-size: 5rem;
    }
    .swagger-ui .f1-l {
      font-size: 3rem;
    }
    .swagger-ui .f2-l {
      font-size: 2.25rem;
    }
    .swagger-ui .f3-l {
      font-size: 1.5rem;
    }
    .swagger-ui .f4-l {
      font-size: 1.25rem;
    }
    .swagger-ui .f5-l {
      font-size: 1rem;
    }
    .swagger-ui .f6-l {
      font-size: 0.875rem;
    }
    .swagger-ui .f7-l {
      font-size: 0.75rem;
    }
  }
  .swagger-ui .measure {
    max-width: 30em;
  }
  .swagger-ui .measure-wide {
    max-width: 34em;
  }
  .swagger-ui .measure-narrow {
    max-width: 20em;
  }
  .swagger-ui .indent {
    margin-bottom: 0;
    margin-top: 0;
    text-indent: 1em;
  }
  .swagger-ui .small-caps {
    font-feature-settings: "smcp";
    font-variant: small-caps;
  }
  .swagger-ui .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  @media screen and (min-width: 30em) {
    .swagger-ui .measure-ns {
      max-width: 30em;
    }
    .swagger-ui .measure-wide-ns {
      max-width: 34em;
    }
    .swagger-ui .measure-narrow-ns {
      max-width: 20em;
    }
    .swagger-ui .indent-ns {
      margin-bottom: 0;
      margin-top: 0;
      text-indent: 1em;
    }
    .swagger-ui .small-caps-ns {
      font-feature-settings: "smcp";
      font-variant: small-caps;
    }
    .swagger-ui .truncate-ns {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  @media screen and (min-width: 30em) and (max-width: 60em) {
    .swagger-ui .measure-m {
      max-width: 30em;
    }
    .swagger-ui .measure-wide-m {
      max-width: 34em;
    }
    .swagger-ui .measure-narrow-m {
      max-width: 20em;
    }
    .swagger-ui .indent-m {
      margin-bottom: 0;
      margin-top: 0;
      text-indent: 1em;
    }
    .swagger-ui .small-caps-m {
      font-feature-settings: "smcp";
      font-variant: small-caps;
    }
    .swagger-ui .truncate-m {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  @media screen and (min-width: 60em) {
    .swagger-ui .measure-l {
      max-width: 30em;
    }
    .swagger-ui .measure-wide-l {
      max-width: 34em;
    }
    .swagger-ui .measure-narrow-l {
      max-width: 20em;
    }
    .swagger-ui .indent-l {
      margin-bottom: 0;
      margin-top: 0;
      text-indent: 1em;
    }
    .swagger-ui .small-caps-l {
      font-feature-settings: "smcp";
      font-variant: small-caps;
    }
    .swagger-ui .truncate-l {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .swagger-ui .overflow-container {
    overflow-y: scroll;
  }
  .swagger-ui .center {
    margin-left: auto;
    margin-right: auto;
  }
  .swagger-ui .mr-auto {
    margin-right: auto;
  }
  .swagger-ui .ml-auto {
    margin-left: auto;
  }
  @media screen and (min-width: 30em) {
    .swagger-ui .center-ns {
      margin-left: auto;
      margin-right: auto;
    }
    .swagger-ui .mr-auto-ns {
      margin-right: auto;
    }
    .swagger-ui .ml-auto-ns {
      margin-left: auto;
    }
  }
  @media screen and (min-width: 30em) and (max-width: 60em) {
    .swagger-ui .center-m {
      margin-left: auto;
      margin-right: auto;
    }
    .swagger-ui .mr-auto-m {
      margin-right: auto;
    }
    .swagger-ui .ml-auto-m {
      margin-left: auto;
    }
  }
  @media screen and (min-width: 60em) {
    .swagger-ui .center-l {
      margin-left: auto;
      margin-right: auto;
    }
    .swagger-ui .mr-auto-l {
      margin-right: auto;
    }
    .swagger-ui .ml-auto-l {
      margin-left: auto;
    }
  }
  .swagger-ui .clip {
    clip: rect(1px 1px 1px 1px);
    clip: rect(1px, 1px, 1px, 1px);
    position: fixed !important;
    _position: absolute !important;
  }
  @media screen and (min-width: 30em) {
    .swagger-ui .clip-ns {
      clip: rect(1px 1px 1px 1px);
      clip: rect(1px, 1px, 1px, 1px);
      position: fixed !important;
      _position: absolute !important;
    }
  }
  @media screen and (min-width: 30em) and (max-width: 60em) {
    .swagger-ui .clip-m {
      clip: rect(1px 1px 1px 1px);
      clip: rect(1px, 1px, 1px, 1px);
      position: fixed !important;
      _position: absolute !important;
    }
  }
  @media screen and (min-width: 60em) {
    .swagger-ui .clip-l {
      clip: rect(1px 1px 1px 1px);
      clip: rect(1px, 1px, 1px, 1px);
      position: fixed !important;
      _position: absolute !important;
    }
  }
  .swagger-ui .ws-normal {
    white-space: normal;
  }
  .swagger-ui .nowrap {
    white-space: nowrap;
  }
  .swagger-ui .pre {
    white-space: pre;
  }
  @media screen and (min-width: 30em) {
    .swagger-ui .ws-normal-ns {
      white-space: normal;
    }
    .swagger-ui .nowrap-ns {
      white-space: nowrap;
    }
    .swagger-ui .pre-ns {
      white-space: pre;
    }
  }
  @media screen and (min-width: 30em) and (max-width: 60em) {
    .swagger-ui .ws-normal-m {
      white-space: normal;
    }
    .swagger-ui .nowrap-m {
      white-space: nowrap;
    }
    .swagger-ui .pre-m {
      white-space: pre;
    }
  }
  @media screen and (min-width: 60em) {
    .swagger-ui .ws-normal-l {
      white-space: normal;
    }
    .swagger-ui .nowrap-l {
      white-space: nowrap;
    }
    .swagger-ui .pre-l {
      white-space: pre;
    }
  }
  .swagger-ui .v-base {
    vertical-align: baseline;
  }
  .swagger-ui .v-mid {
    vertical-align: middle;
  }
  .swagger-ui .v-top {
    vertical-align: top;
  }
  .swagger-ui .v-btm {
    vertical-align: bottom;
  }
  @media screen and (min-width: 30em) {
    .swagger-ui .v-base-ns {
      vertical-align: baseline;
    }
    .swagger-ui .v-mid-ns {
      vertical-align: middle;
    }
    .swagger-ui .v-top-ns {
      vertical-align: top;
    }
    .swagger-ui .v-btm-ns {
      vertical-align: bottom;
    }
  }
  @media screen and (min-width: 30em) and (max-width: 60em) {
    .swagger-ui .v-base-m {
      vertical-align: baseline;
    }
    .swagger-ui .v-mid-m {
      vertical-align: middle;
    }
    .swagger-ui .v-top-m {
      vertical-align: top;
    }
    .swagger-ui .v-btm-m {
      vertical-align: bottom;
    }
  }
  @media screen and (min-width: 60em) {
    .swagger-ui .v-base-l {
      vertical-align: baseline;
    }
    .swagger-ui .v-mid-l {
      vertical-align: middle;
    }
    .swagger-ui .v-top-l {
      vertical-align: top;
    }
    .swagger-ui .v-btm-l {
      vertical-align: bottom;
    }
  }
  .swagger-ui .dim {
    opacity: 1;
    transition: opacity 0.15s ease-in;
  }
  .swagger-ui .dim:focus,
  .swagger-ui .dim:hover {
    opacity: 0.5;
    transition: opacity 0.15s ease-in;
  }
  .swagger-ui .dim:active {
    opacity: 0.8;
    transition: opacity 0.15s ease-out;
  }
  .swagger-ui .glow {
    transition: opacity 0.15s ease-in;
  }
  .swagger-ui .glow:focus,
  .swagger-ui .glow:hover {
    opacity: 1;
    transition: opacity 0.15s ease-in;
  }
  .swagger-ui .hide-child .child {
    opacity: 0;
    transition: opacity 0.15s ease-in;
  }
  .swagger-ui .hide-child:active .child,
  .swagger-ui .hide-child:focus .child,
  .swagger-ui .hide-child:hover .child {
    opacity: 1;
    transition: opacity 0.15s ease-in;
  }
  .swagger-ui .underline-hover:focus,
  .swagger-ui .underline-hover:hover {
    text-decoration: underline;
  }
  .swagger-ui .grow {
    -moz-osx-font-smoothing: grayscale;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform: translateZ(0);
    transition: transform 0.25s ease-out;
  }
  .swagger-ui .grow:focus,
  .swagger-ui .grow:hover {
    transform: scale(1.05);
  }
  .swagger-ui .grow:active {
    transform: scale(0.9);
  }
  .swagger-ui .grow-large {
    -moz-osx-font-smoothing: grayscale;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform: translateZ(0);
    transition: transform 0.25s ease-in-out;
  }
  .swagger-ui .grow-large:focus,
  .swagger-ui .grow-large:hover {
    transform: scale(1.2);
  }
  .swagger-ui .grow-large:active {
    transform: scale(0.95);
  }
  .swagger-ui .pointer:hover {
    cursor: pointer;
  }
  .swagger-ui .shadow-hover {
    cursor: pointer;
    position: relative;
    transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .swagger-ui .shadow-hover:after {
    border-radius: inherit;
    box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.2);
    content: "";
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transition: opacity 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
    width: 100%;
    z-index: -1;
  }
  .swagger-ui .shadow-hover:focus:after,
  .swagger-ui .shadow-hover:hover:after {
    opacity: 1;
  }
  .swagger-ui .bg-animate,
  .swagger-ui .bg-animate:focus,
  .swagger-ui .bg-animate:hover {
    transition: background-color 0.15s ease-in-out;
  }
  .swagger-ui .z-0 {
    z-index: 0;
  }
  .swagger-ui .z-1 {
    z-index: 1;
  }
  .swagger-ui .z-2 {
    z-index: 2;
  }
  .swagger-ui .z-3 {
    z-index: 3;
  }
  .swagger-ui .z-4 {
    z-index: 4;
  }
  .swagger-ui .z-5 {
    z-index: 5;
  }
  .swagger-ui .z-999 {
    z-index: 999;
  }
  .swagger-ui .z-9999 {
    z-index: 9999;
  }
  .swagger-ui .z-max {
    z-index: 2147483647;
  }
  .swagger-ui .z-inherit {
    z-index: inherit;
  }
  .swagger-ui .z-initial {
    z-index: auto;
  }
  .swagger-ui .z-unset {
    z-index: unset;
  }
  .swagger-ui .nested-copy-line-height ol,
  .swagger-ui .nested-copy-line-height p,
  .swagger-ui .nested-copy-line-height ul {
    line-height: 1.5;
  }
  .swagger-ui .nested-headline-line-height h1,
  .swagger-ui .nested-headline-line-height h2,
  .swagger-ui .nested-headline-line-height h3,
  .swagger-ui .nested-headline-line-height h4,
  .swagger-ui .nested-headline-line-height h5,
  .swagger-ui .nested-headline-line-height h6 {
    line-height: 1.25;
  }
  .swagger-ui .nested-list-reset ol,
  .swagger-ui .nested-list-reset ul {
    list-style-type: none;
    margin-left: 0;
    padding-left: 0;
  }
  .swagger-ui .nested-copy-indent p + p {
    margin-bottom: 0;
    margin-top: 0;
    text-indent: 0.1em;
  }
  .swagger-ui .nested-copy-seperator p + p {
    margin-top: 1.5em;
  }
  .swagger-ui .nested-img img {
    display: block;
    max-width: 100%;
    width: 100%;
  }
  .swagger-ui .nested-links a {
    color: #357edd;
    transition: color 0.15s ease-in;
  }
  .swagger-ui .nested-links a:focus,
  .swagger-ui .nested-links a:hover {
    color: #96ccff;
    transition: color 0.15s ease-in;
  }
  .swagger-ui .wrapper {
    box-sizing: border-box;
    margin: 0 auto;
    max-width: 1460px;
    padding: 0 20px;
    width: 100%;
  }
  .swagger-ui .opblock-tag-section {
    display: flex;
    flex-direction: column;
  }
  .swagger-ui .try-out.btn-group {
    display: flex;
    flex: 0.1 2 auto;
    padding: 0;
  }
  .swagger-ui .try-out__btn {
    margin-left: 1.25rem;
  }
  .swagger-ui .opblock-tag {
    align-items: center;
    border-bottom: 1px solid rgba(59, 65, 81, 0.3);
    cursor: pointer;
    display: flex;
    padding: 10px 20px 10px 10px;
    transition: all 0.2s;
  }
  .swagger-ui .opblock-tag:hover {
    background: rgba(0, 0, 0, 0.02);
  }
  .swagger-ui .opblock-tag {
    color: #3b4151;
    font-family: sans-serif;
    font-size: 24px;
    margin: 0 0 5px;
  }
  .swagger-ui .opblock-tag.no-desc span {
    flex: 1;
  }
  .swagger-ui .opblock-tag svg {
    transition: all 0.4s;
  }
  .swagger-ui .opblock-tag small {
    color: #3b4151;
    flex: 2;
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 400;
    padding: 0 10px;
  }
  .swagger-ui .opblock-tag > div {
    flex: 1 1 150px;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  @media (max-width: 640px) {
    .swagger-ui .opblock-tag small,
    .swagger-ui .opblock-tag > div {
      flex: 1;
    }
  }
  .swagger-ui .opblock-tag .info__externaldocs {
    text-align: right;
  }
  .swagger-ui .parameter__type {
    color: #3b4151;
    font-family: monospace;
    font-size: 12px;
    font-weight: 600;
    padding: 5px 0;
  }
  .swagger-ui .parameter-controls {
    margin-top: 0.75em;
  }
  .swagger-ui .examples__title {
    display: block;
    font-size: 1.1em;
    font-weight: 700;
    margin-bottom: 0.75em;
  }
  .swagger-ui .examples__section {
    margin-top: 1.5em;
  }
  .swagger-ui .examples__section-header {
    font-size: 0.9rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  .swagger-ui .examples-select {
    display: inline-block;
    margin-bottom: 0.75em;
  }
  .swagger-ui .examples-select .examples-select-element {
    width: 100%;
  }
  .swagger-ui .examples-select__section-label {
    font-size: 0.9rem;
    font-weight: 700;
    margin-right: 0.5rem;
  }
  .swagger-ui .example__section {
    margin-top: 1.5em;
  }
  .swagger-ui .example__section-header {
    font-size: 0.9rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  .swagger-ui .view-line-link {
    cursor: pointer;
    margin: 0 5px;
    position: relative;
    top: 3px;
    transition: all 0.5s;
    width: 20px;
  }
  .swagger-ui .opblock {
    border: 1px solid #000;
    border-radius: 4px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.19);
    margin: 0 0 15px;
  }
  .swagger-ui .opblock .tab-header {
    display: flex;
    flex: 1;
  }
  .swagger-ui .opblock .tab-header .tab-item {
    cursor: pointer;
    padding: 0 40px;
  }
  .swagger-ui .opblock .tab-header .tab-item:first-of-type {
    padding: 0 40px 0 0;
  }
  .swagger-ui .opblock .tab-header .tab-item.active h4 span {
    position: relative;
  }
  .swagger-ui .opblock .tab-header .tab-item.active h4 span:after {
    background: gray;
    bottom: -15px;
    content: "";
    height: 4px;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    width: 120%;
  }
  .swagger-ui .opblock.is-open .opblock-summary {
    border-bottom: 1px solid #000;
  }
  .swagger-ui .opblock .opblock-section-header {
    align-items: center;
    background: hsla(0, 0%, 100%, 0.8);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    display: flex;
    min-height: 50px;
    padding: 8px 20px;
  }
  .swagger-ui .opblock .opblock-section-header > label {
    align-items: center;
    color: #3b4151;
    display: flex;
    font-family: sans-serif;
    font-size: 12px;
    font-weight: 700;
    margin: 0 0 0 auto;
  }
  .swagger-ui .opblock .opblock-section-header > label > span {
    padding: 0 10px 0 0;
  }
  .swagger-ui .opblock .opblock-section-header h4 {
    color: #3b4151;
    flex: 1;
    font-family: sans-serif;
    font-size: 14px;
    margin: 0;
  }
  .swagger-ui .opblock .opblock-summary-method {
    background: #000;
    border-radius: 3px;
    color: #fff;
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 700;
    min-width: 80px;
    padding: 6px 0;
    text-align: center;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
  }
  .swagger-ui .opblock .opblock-summary-operation-id,
  .swagger-ui .opblock .opblock-summary-path,
  .swagger-ui .opblock .opblock-summary-path__deprecated {
    align-items: center;
    color: #3b4151;
    display: flex;
    font-family: monospace;
    font-size: 16px;
    font-weight: 600;
    padding: 0 10px;
    word-break: break-word;
  }
  @media (max-width: 768px) {
    .swagger-ui .opblock .opblock-summary-operation-id,
    .swagger-ui .opblock .opblock-summary-path,
    .swagger-ui .opblock .opblock-summary-path__deprecated {
      font-size: 12px;
    }
  }
  .swagger-ui .opblock .opblock-summary-path {
    flex-shrink: 0;
    max-width: calc(100% - 110px - 15rem);
  }
  @media (max-width: 640px) {
    .swagger-ui .opblock .opblock-summary-path {
      flex-shrink: 1;
      max-width: 100%;
    }
  }
  .swagger-ui .opblock .opblock-summary-path__deprecated {
    text-decoration: line-through;
  }
  .swagger-ui .opblock .opblock-summary-operation-id {
    font-size: 14px;
  }
  .swagger-ui .opblock .opblock-summary-description {
    color: #3b4151;
    flex: 1 1 auto;
    font-family: sans-serif;
    font-size: 13px;
    word-break: break-word;
  }
  .swagger-ui .opblock .opblock-summary {
    align-items: center;
    cursor: pointer;
    display: flex;
    padding: 5px;
  }
  .swagger-ui .opblock .opblock-summary .view-line-link {
    cursor: pointer;
    margin: 0;
    position: relative;
    top: 2px;
    transition: all 0.5s;
    width: 0;
  }
  .swagger-ui .opblock .opblock-summary:hover .view-line-link {
    margin: 0 5px;
    width: 18px;
  }
  .swagger-ui
    .opblock
    .opblock-summary:hover
    .view-line-link.copy-to-clipboard {
    width: 24px;
  }
  .swagger-ui .opblock.opblock-post {
    background: rgba(73, 204, 144, 0.1);
    border-color: #49cc90;
  }
  .swagger-ui .opblock.opblock-post .opblock-summary-method {
    background: #49cc90;
  }
  .swagger-ui .opblock.opblock-post .opblock-summary {
    border-color: #49cc90;
  }
  .swagger-ui .opblock.opblock-post .tab-header .tab-item.active h4 span:after {
    background: #49cc90;
  }
  .swagger-ui .opblock.opblock-put {
    background: rgba(252, 161, 48, 0.1);
    border-color: #fca130;
  }
  .swagger-ui .opblock.opblock-put .opblock-summary-method {
    background: #fca130;
  }
  .swagger-ui .opblock.opblock-put .opblock-summary {
    border-color: #fca130;
  }
  .swagger-ui .opblock.opblock-put .tab-header .tab-item.active h4 span:after {
    background: #fca130;
  }
  .swagger-ui .opblock.opblock-delete {
    background: rgba(249, 62, 62, 0.1);
    border-color: #f93e3e;
  }
  .swagger-ui .opblock.opblock-delete .opblock-summary-method {
    background: #f93e3e;
  }
  .swagger-ui .opblock.opblock-delete .opblock-summary {
    border-color: #f93e3e;
  }
  .swagger-ui
    .opblock.opblock-delete
    .tab-header
    .tab-item.active
    h4
    span:after {
    background: #f93e3e;
  }
  .swagger-ui .opblock.opblock-get {
    background: rgba(97, 175, 254, 0.1);
    border-color: #61affe;
  }
  .swagger-ui .opblock.opblock-get .opblock-summary-method {
    background: #61affe;
  }
  .swagger-ui .opblock.opblock-get .opblock-summary {
    border-color: #61affe;
  }
  .swagger-ui .opblock.opblock-get .tab-header .tab-item.active h4 span:after {
    background: #61affe;
  }
  .swagger-ui .opblock.opblock-patch {
    background: rgba(80, 227, 194, 0.1);
    border-color: #50e3c2;
  }
  .swagger-ui .opblock.opblock-patch .opblock-summary-method {
    background: #50e3c2;
  }
  .swagger-ui .opblock.opblock-patch .opblock-summary {
    border-color: #50e3c2;
  }
  .swagger-ui
    .opblock.opblock-patch
    .tab-header
    .tab-item.active
    h4
    span:after {
    background: #50e3c2;
  }
  .swagger-ui .opblock.opblock-head {
    background: rgba(144, 18, 254, 0.1);
    border-color: #9012fe;
  }
  .swagger-ui .opblock.opblock-head .opblock-summary-method {
    background: #9012fe;
  }
  .swagger-ui .opblock.opblock-head .opblock-summary {
    border-color: #9012fe;
  }
  .swagger-ui .opblock.opblock-head .tab-header .tab-item.active h4 span:after {
    background: #9012fe;
  }
  .swagger-ui .opblock.opblock-options {
    background: rgba(13, 90, 167, 0.1);
    border-color: #0d5aa7;
  }
  .swagger-ui .opblock.opblock-options .opblock-summary-method {
    background: #0d5aa7;
  }
  .swagger-ui .opblock.opblock-options .opblock-summary {
    border-color: #0d5aa7;
  }
  .swagger-ui
    .opblock.opblock-options
    .tab-header
    .tab-item.active
    h4
    span:after {
    background: #0d5aa7;
  }
  .swagger-ui .opblock.opblock-deprecated {
    background: hsla(0, 0%, 92%, 0.1);
    border-color: #ebebeb;
    opacity: 0.6;
  }
  .swagger-ui .opblock.opblock-deprecated .opblock-summary-method {
    background: #ebebeb;
  }
  .swagger-ui .opblock.opblock-deprecated .opblock-summary {
    border-color: #ebebeb;
  }
  .swagger-ui
    .opblock.opblock-deprecated
    .tab-header
    .tab-item.active
    h4
    span:after {
    background: #ebebeb;
  }
  .swagger-ui .opblock .opblock-schemes {
    padding: 8px 20px;
  }
  .swagger-ui .opblock .opblock-schemes .schemes-title {
    padding: 0 10px 0 0;
  }
  .swagger-ui .filter .operation-filter-input {
    border: 2px solid #d8dde7;
    margin: 20px 0;
    padding: 10px;
    width: 100%;
  }
  .swagger-ui .download-url-wrapper .failed,
  .swagger-ui .filter .failed {
    color: red;
  }
  .swagger-ui .download-url-wrapper .loading,
  .swagger-ui .filter .loading {
    color: #aaa;
  }
  .swagger-ui .model-example {
    margin-top: 1em;
  }
  .swagger-ui .tab {
    display: flex;
    list-style: none;
    padding: 0;
  }
  .swagger-ui .tab li {
    color: #3b4151;
    cursor: pointer;
    font-family: sans-serif;
    font-size: 12px;
    min-width: 60px;
    padding: 0;
  }
  .swagger-ui .tab li:first-of-type {
    padding-left: 0;
    padding-right: 12px;
    position: relative;
  }
  .swagger-ui .tab li:first-of-type:after {
    background: rgba(0, 0, 0, 0.2);
    content: "";
    height: 100%;
    position: absolute;
    right: 6px;
    top: 0;
    width: 1px;
  }
  .swagger-ui .tab li.active {
    font-weight: 700;
  }
  .swagger-ui .tab li button.tablinks {
    background: none;
    border: 0;
    color: inherit;
    font-family: inherit;
    font-weight: inherit;
    padding: 0;
  }
  .swagger-ui .opblock-description-wrapper,
  .swagger-ui .opblock-external-docs-wrapper,
  .swagger-ui .opblock-title_normal {
    color: #3b4151;
    font-family: sans-serif;
    font-size: 12px;
    margin: 0 0 5px;
    padding: 15px 20px;
  }
  .swagger-ui .opblock-description-wrapper h4,
  .swagger-ui .opblock-external-docs-wrapper h4,
  .swagger-ui .opblock-title_normal h4 {
    color: #3b4151;
    font-family: sans-serif;
    font-size: 12px;
    margin: 0 0 5px;
  }
  .swagger-ui .opblock-description-wrapper p,
  .swagger-ui .opblock-external-docs-wrapper p,
  .swagger-ui .opblock-title_normal p {
    color: #3b4151;
    font-family: sans-serif;
    font-size: 14px;
    margin: 0;
  }
  .swagger-ui .opblock-external-docs-wrapper h4 {
    padding-left: 0;
  }
  .swagger-ui .execute-wrapper {
    padding: 20px;
    text-align: right;
  }
  .swagger-ui .execute-wrapper .btn {
    padding: 8px 40px;
    width: 100%;
  }
  .swagger-ui .body-param-options {
    display: flex;
    flex-direction: column;
  }
  .swagger-ui .body-param-options .body-param-edit {
    padding: 10px 0;
  }
  .swagger-ui .body-param-options label {
    padding: 8px 0;
  }
  .swagger-ui .body-param-options label select {
    margin: 3px 0 0;
  }
  .swagger-ui .responses-inner {
    padding: 20px;
  }
  .swagger-ui .responses-inner h4,
  .swagger-ui .responses-inner h5 {
    color: #3b4151;
    font-family: sans-serif;
    font-size: 12px;
    margin: 10px 0 5px;
  }
  .swagger-ui .responses-inner .curl {
    white-space: normal;
  }
  .swagger-ui .response-col_status {
    color: #3b4151;
    font-family: sans-serif;
    font-size: 14px;
  }
  .swagger-ui .response-col_status .response-undocumented {
    color: #909090;
    font-family: monospace;
    font-size: 11px;
    font-weight: 600;
  }
  .swagger-ui .response-col_links {
    color: #3b4151;
    font-family: sans-serif;
    font-size: 14px;
    max-width: 40em;
    padding-left: 2em;
  }
  .swagger-ui .response-col_links .response-undocumented {
    color: #909090;
    font-family: monospace;
    font-size: 11px;
    font-weight: 600;
  }
  .swagger-ui .response-col_links .operation-link {
    margin-bottom: 1.5em;
  }
  .swagger-ui .response-col_links .operation-link .description {
    margin-bottom: 0.5em;
  }
  .swagger-ui .opblock-body .opblock-loading-animation {
    display: block;
    margin: 3em auto;
  }
  .swagger-ui .opblock-body pre.microlight {
    word-wrap: break-word;
    background: #333;
    border-radius: 4px;
    color: #fff;
    font-family: monospace;
    font-size: 12px;
    font-weight: 600;
    -webkit-hyphens: auto;
    hyphens: auto;
    margin: 0;
    padding: 10px;
    white-space: pre-wrap;
    word-break: break-all;
    word-break: break-word;
  }
  .swagger-ui .opblock-body pre.microlight .headerline {
    display: block;
  }
  .swagger-ui .highlight-code {
    position: relative;
  }
  .swagger-ui .highlight-code > .microlight {
    max-height: 400px;
    min-height: 6em;
    overflow-y: auto;
  }
  .swagger-ui .highlight-code > .microlight code {
    white-space: pre-wrap !important;
    word-break: break-all;
  }
  .swagger-ui .curl-command {
    position: relative;
  }
  .swagger-ui .download-contents {
    align-items: center;
    background: #7d8293;
    border-radius: 4px;
    bottom: 10px;
    color: #fff;
    cursor: pointer;
    display: flex;
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 600;
    height: 30px;
    justify-content: center;
    padding: 5px;
    position: absolute;
    right: 10px;
    text-align: center;
  }
  .swagger-ui .scheme-container {
    background: #fff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
    margin: 0 0 20px;
    padding: 30px 0;
  }
  .swagger-ui .scheme-container .schemes {
    align-items: flex-end;
    display: flex;
  }
  .swagger-ui .scheme-container .schemes > label {
    color: #3b4151;
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
    font-size: 12px;
    font-weight: 700;
    margin: -20px 15px 0 0;
  }
  .swagger-ui .scheme-container .schemes > label select {
    min-width: 130px;
    text-transform: uppercase;
  }
  .swagger-ui .loading-container {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 1em;
    min-height: 1px;
    padding: 40px 0 60px;
  }
  .swagger-ui .loading-container .loading {
    position: relative;
  }
  .swagger-ui .loading-container .loading:after {
    color: #3b4151;
    content: "loading";
    font-family: sans-serif;
    font-size: 10px;
    font-weight: 700;
    left: 50%;
    position: absolute;
    text-transform: uppercase;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .swagger-ui .loading-container .loading:before {
    -webkit-animation: rotation 1s linear infinite, opacity 0.5s;
    animation: rotation 1s linear infinite, opacity 0.5s;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border: 2px solid rgba(85, 85, 85, 0.1);
    border-radius: 100%;
    border-top-color: rgba(0, 0, 0, 0.6);
    content: "";
    display: block;
    height: 60px;
    left: 50%;
    margin: -30px;
    opacity: 1;
    position: absolute;
    top: 50%;
    width: 60px;
  }
  @-webkit-keyframes rotation {
    to {
      transform: rotate(1turn);
    }
  }
  @keyframes rotation {
    to {
      transform: rotate(1turn);
    }
  }
  .swagger-ui .response-controls {
    display: flex;
    padding-top: 1em;
  }
  .swagger-ui .response-control-media-type {
    margin-right: 1em;
  }
  .swagger-ui .response-control-media-type--accept-controller select {
    border-color: green;
  }
  .swagger-ui .response-control-media-type__accept-message {
    color: green;
    font-size: 0.7em;
  }
  .swagger-ui .response-control-examples__title,
  .swagger-ui .response-control-media-type__title {
    display: block;
    font-size: 0.7em;
    margin-bottom: 0.2em;
  }
  @-webkit-keyframes blinker {
    50% {
      opacity: 0;
    }
  }
  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
  .swagger-ui .hidden {
    display: none;
  }
  .swagger-ui .no-margin {
    border: none;
    height: auto;
    margin: 0;
    padding: 0;
  }
  .swagger-ui .float-right {
    float: right;
  }
  .swagger-ui .svg-assets {
    height: 0;
    position: absolute;
    width: 0;
  }
  .swagger-ui section h3 {
    color: #3b4151;
    font-family: sans-serif;
  }
  .swagger-ui a.nostyle {
    display: inline;
  }
  .swagger-ui a.nostyle,
  .swagger-ui a.nostyle:visited {
    color: inherit;
    cursor: pointer;
    text-decoration: inherit;
  }
  .swagger-ui .fallback {
    color: #aaa;
    padding: 1em;
  }
  .swagger-ui .version-pragma {
    height: 100%;
    padding: 5em 0;
  }
  .swagger-ui .version-pragma__message {
    display: flex;
    font-size: 1.2em;
    height: 100%;
    justify-content: center;
    line-height: 1.5em;
    padding: 0 0.6em;
    text-align: center;
  }
  .swagger-ui .version-pragma__message > div {
    flex: 1;
    max-width: 55ch;
  }
  .swagger-ui .version-pragma__message code {
    background-color: #dedede;
    padding: 4px 4px 2px;
    white-space: pre;
  }
  .swagger-ui .opblock-link {
    font-weight: 400;
  }
  .swagger-ui .opblock-link.shown {
    font-weight: 700;
  }
  .swagger-ui span.token-string {
    color: #555;
  }
  .swagger-ui span.token-not-formatted {
    color: #555;
    font-weight: 700;
  }
  .swagger-ui .btn {
    background: transparent;
    border: 2px solid gray;
    border-radius: 4px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    color: #3b4151;
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 700;
    padding: 5px 23px;
    transition: all 0.3s;
  }
  .swagger-ui .btn.btn-sm {
    font-size: 12px;
    padding: 4px 23px;
  }
  .swagger-ui .btn[disabled] {
    cursor: not-allowed;
    opacity: 0.3;
  }
  .swagger-ui .btn:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
  .swagger-ui .btn.cancel {
    background-color: transparent;
    border-color: #ff6060;
    color: #ff6060;
    font-family: sans-serif;
  }
  .swagger-ui .btn.authorize {
    background-color: transparent;
    border-color: #49cc90;
    color: #49cc90;
    display: inline;
    line-height: 1;
  }
  .swagger-ui .btn.authorize span {
    float: left;
    padding: 4px 20px 0 0;
  }
  .swagger-ui .btn.authorize svg {
    fill: #49cc90;
  }
  .swagger-ui .btn.execute {
    background-color: #4990e2;
    border-color: #4990e2;
    color: #fff;
  }
  .swagger-ui .btn-group {
    display: flex;
    padding: 30px;
  }
  .swagger-ui .btn-group .btn {
    flex: 1;
  }
  .swagger-ui .btn-group .btn:first-child {
    border-radius: 4px 0 0 4px;
  }
  .swagger-ui .btn-group .btn:last-child {
    border-radius: 0 4px 4px 0;
  }
  .swagger-ui .authorization__btn {
    background: none;
    border: none;
    padding: 0 0 0 10px;
  }
  .swagger-ui .authorization__btn.locked {
    opacity: 1;
  }
  .swagger-ui .authorization__btn.unlocked {
    opacity: 0.4;
  }
  .swagger-ui .model-box-control,
  .swagger-ui .models-control,
  .swagger-ui .opblock-summary-control {
    all: inherit;
    border-bottom: 0;
    cursor: pointer;
    flex: 1;
    padding: 0;
  }
  .swagger-ui .model-box-control:focus,
  .swagger-ui .models-control:focus,
  .swagger-ui .opblock-summary-control:focus {
    outline: auto;
  }
  .swagger-ui .expand-methods,
  .swagger-ui .expand-operation {
    background: none;
    border: none;
  }
  .swagger-ui .expand-methods svg,
  .swagger-ui .expand-operation svg {
    height: 20px;
    width: 20px;
  }
  .swagger-ui .expand-methods {
    padding: 0 10px;
  }
  .swagger-ui .expand-methods:hover svg {
    fill: #404040;
  }
  .swagger-ui .expand-methods svg {
    fill: #707070;
    transition: all 0.3s;
  }
  .swagger-ui button {
    cursor: pointer;
  }
  .swagger-ui button.invalid {
    -webkit-animation: shake 0.4s 1;
    animation: shake 0.4s 1;
    background: #feebeb;
    border-color: #f93e3e;
  }
  .swagger-ui .copy-to-clipboard {
    align-items: center;
    background: #7d8293;
    border: none;
    border-radius: 4px;
    bottom: 10px;
    display: flex;
    height: 30px;
    justify-content: center;
    position: absolute;
    right: 100px;
    width: 30px;
  }
  .swagger-ui .copy-to-clipboard button {
    background: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" aria-hidden="true"><path fill="%23fff" fill-rule="evenodd" d="M4 12h4v1H4v-1zm5-6H4v1h5V6zm2 3V7l-3 3 3 3v-2h5V9h-5zM6.5 8H4v1h2.5V8zM4 11h2.5v-1H4v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H3c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V5H3v9h10v-2zM4 4h8c0-.55-.45-1-1-1h-1c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H5c-.55 0-1 .45-1 1z"/></svg>')
      50% no-repeat;
    border: none;
    flex-grow: 1;
    flex-shrink: 1;
    height: 25px;
  }
  .swagger-ui .curl-command .copy-to-clipboard {
    bottom: 5px;
    height: 20px;
    right: 10px;
    width: 20px;
  }
  .swagger-ui .curl-command .copy-to-clipboard button {
    height: 18px;
  }
  .swagger-ui .opblock .opblock-summary .view-line-link.copy-to-clipboard {
    height: 26px;
    position: unset;
  }
  .swagger-ui select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: #f7f7f7
      url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13.418 7.859a.695.695 0 0 1 .978 0 .68.68 0 0 1 0 .969l-3.908 3.83a.697.697 0 0 1-.979 0l-3.908-3.83a.68.68 0 0 1 0-.969.695.695 0 0 1 .978 0L10 11l3.418-3.141z"/></svg>')
      right 10px center no-repeat;
    background-size: 20px;
    border: 2px solid #41444e;
    border-radius: 4px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25);
    color: #3b4151;
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 700;
    padding: 5px 40px 5px 10px;
  }
  .swagger-ui select[multiple] {
    background: #f7f7f7;
    margin: 5px 0;
    padding: 5px;
  }
  .swagger-ui select.invalid {
    -webkit-animation: shake 0.4s 1;
    animation: shake 0.4s 1;
    background: #feebeb;
    border-color: #f93e3e;
  }
  .swagger-ui .opblock-body select {
    min-width: 230px;
  }
  @media (max-width: 768px) {
    .swagger-ui .opblock-body select {
      min-width: 180px;
    }
  }
  @media (max-width: 640px) {
    .swagger-ui .opblock-body select {
      min-width: 100%;
      width: 100%;
    }
  }
  .swagger-ui label {
    color: #3b4151;
    font-family: sans-serif;
    font-size: 12px;
    font-weight: 700;
    margin: 0 0 5px;
  }
  .swagger-ui input[type="email"],
  .swagger-ui input[type="file"],
  .swagger-ui input[type="password"],
  .swagger-ui input[type="search"],
  .swagger-ui input[type="text"] {
    line-height: 1;
  }
  @media (max-width: 768px) {
    .swagger-ui input[type="email"],
    .swagger-ui input[type="file"],
    .swagger-ui input[type="password"],
    .swagger-ui input[type="search"],
    .swagger-ui input[type="text"] {
      max-width: 175px;
    }
  }
  .swagger-ui input[type="email"],
  .swagger-ui input[type="file"],
  .swagger-ui input[type="password"],
  .swagger-ui input[type="search"],
  .swagger-ui input[type="text"],
  .swagger-ui textarea {
    background: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    margin: 5px 0;
    min-width: 100px;
    padding: 8px 10px;
  }
  .swagger-ui input[type="email"].invalid,
  .swagger-ui input[type="file"].invalid,
  .swagger-ui input[type="password"].invalid,
  .swagger-ui input[type="search"].invalid,
  .swagger-ui input[type="text"].invalid,
  .swagger-ui textarea.invalid {
    -webkit-animation: shake 0.4s 1;
    animation: shake 0.4s 1;
    background: #feebeb;
    border-color: #f93e3e;
  }
  .swagger-ui input[disabled],
  .swagger-ui select[disabled],
  .swagger-ui textarea[disabled] {
    background-color: #fafafa;
    color: #888;
    cursor: not-allowed;
  }
  .swagger-ui select[disabled] {
    border-color: #888;
  }
  .swagger-ui textarea[disabled] {
    background-color: #41444e;
    color: #fff;
  }
  @-webkit-keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }
    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }
    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }
    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }
    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }
    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }
    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
  .swagger-ui textarea {
    background: hsla(0, 0%, 100%, 0.8);
    border: none;
    border-radius: 4px;
    color: #3b4151;
    font-family: monospace;
    font-size: 12px;
    font-weight: 600;
    min-height: 280px;
    outline: none;
    padding: 10px;
    width: 100%;
  }
  .swagger-ui textarea:focus {
    border: 2px solid #61affe;
  }
  .swagger-ui textarea.curl {
    background: #41444e;
    border-radius: 4px;
    color: #fff;
    font-family: monospace;
    font-size: 12px;
    font-weight: 600;
    margin: 0;
    min-height: 100px;
    padding: 10px;
    resize: none;
  }
  .swagger-ui .checkbox {
    color: #303030;
    padding: 5px 0 10px;
    transition: opacity 0.5s;
  }
  .swagger-ui .checkbox label {
    display: flex;
  }
  .swagger-ui .checkbox p {
    color: #3b4151;
    font-family: monospace;
    font-style: italic;
    font-weight: 400 !important;
    font-weight: 600;
    margin: 0 !important;
  }
  .swagger-ui .checkbox input[type="checkbox"] {
    display: none;
  }
  .swagger-ui .checkbox input[type="checkbox"] + label > .item {
    background: #e8e8e8;
    border-radius: 1px;
    box-shadow: 0 0 0 2px #e8e8e8;
    cursor: pointer;
    display: inline-block;
    flex: none;
    height: 16px;
    margin: 0 8px 0 0;
    padding: 5px;
    position: relative;
    top: 3px;
    width: 16px;
  }
  .swagger-ui .checkbox input[type="checkbox"] + label > .item:active {
    transform: scale(0.9);
  }
  .swagger-ui .checkbox input[type="checkbox"]:checked + label > .item {
    background: #e8e8e8
      url('data:image/svg+xml;charset=utf-8,<svg width="10" height="8" viewBox="3 7 10 8" xmlns="http://www.w3.org/2000/svg"><path fill="%2341474E" fill-rule="evenodd" d="M6.333 15 3 11.667l1.333-1.334 2 2L11.667 7 13 8.333z"/></svg>')
      50% no-repeat;
  }
  .swagger-ui .dialog-ux {
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 9999;
  }
  .swagger-ui .dialog-ux .backdrop-ux {
    background: rgba(0, 0, 0, 0.8);
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
  }
  .swagger-ui .dialog-ux .modal-ux {
    background: #fff;
    border: 1px solid #ebebeb;
    border-radius: 4px;
    box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.2);
    left: 50%;
    max-width: 650px;
    min-width: 300px;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    z-index: 9999;
  }
  .swagger-ui .dialog-ux .modal-ux-content {
    max-height: 540px;
    overflow-y: auto;
    padding: 20px;
  }
  .swagger-ui .dialog-ux .modal-ux-content p {
    color: #41444e;
    color: #3b4151;
    font-family: sans-serif;
    font-size: 12px;
    margin: 0 0 5px;
  }
  .swagger-ui .dialog-ux .modal-ux-content h4 {
    color: #3b4151;
    font-family: sans-serif;
    font-size: 18px;
    font-weight: 600;
    margin: 15px 0 0;
  }
  .swagger-ui .dialog-ux .modal-ux-header {
    align-items: center;
    border-bottom: 1px solid #ebebeb;
    display: flex;
    padding: 12px 0;
  }
  .swagger-ui .dialog-ux .modal-ux-header .close-modal {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: none;
    border: none;
    padding: 0 10px;
  }
  .swagger-ui .dialog-ux .modal-ux-header h3 {
    color: #3b4151;
    flex: 1;
    font-family: sans-serif;
    font-size: 20px;
    font-weight: 600;
    margin: 0;
    padding: 0 20px;
  }
  .swagger-ui .model {
    color: #3b4151;
    font-family: monospace;
    font-size: 12px;
    font-weight: 300;
    font-weight: 600;
  }
  .swagger-ui .model .deprecated span,
  .swagger-ui .model .deprecated td {
    color: #a0a0a0 !important;
  }
  .swagger-ui .model .deprecated > td:first-of-type {
    text-decoration: line-through;
  }
  .swagger-ui .model-toggle {
    cursor: pointer;
    display: inline-block;
    font-size: 10px;
    margin: auto 0.3em;
    position: relative;
    top: 6px;
    transform: rotate(90deg);
    transform-origin: 50% 50%;
    transition: transform 0.15s ease-in;
  }
  .swagger-ui .model-toggle.collapsed {
    transform: rotate(0deg);
  }
  .swagger-ui .model-toggle:after {
    background: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>')
      50% no-repeat;
    background-size: 100%;
    content: "";
    display: block;
    height: 20px;
    width: 20px;
  }
  .swagger-ui .model-jump-to-path {
    cursor: pointer;
    position: relative;
  }
  .swagger-ui .model-jump-to-path .view-line-link {
    cursor: pointer;
    position: absolute;
    top: -0.4em;
  }
  .swagger-ui .model-title {
    position: relative;
  }
  .swagger-ui .model-title:hover .model-hint {
    visibility: visible;
  }
  .swagger-ui .model-hint {
    background: rgba(0, 0, 0, 0.7);
    border-radius: 4px;
    color: #ebebeb;
    padding: 0.1em 0.5em;
    position: absolute;
    top: -1.8em;
    visibility: hidden;
    white-space: nowrap;
  }
  .swagger-ui .model p {
    margin: 0 0 1em;
  }
  .swagger-ui .model .property {
    color: #999;
    font-style: italic;
  }
  .swagger-ui .model .property.primitive {
    color: #6b6b6b;
  }
  .swagger-ui .model .external-docs,
  .swagger-ui table.model tr.description {
    color: #666;
    font-weight: 400;
  }
  .swagger-ui table.model tr.description td:first-child,
  .swagger-ui table.model tr.property-row.required td:first-child {
    font-weight: 700;
  }
  .swagger-ui table.model tr.property-row td {
    vertical-align: top;
  }
  .swagger-ui table.model tr.property-row td:first-child {
    padding-right: 0.2em;
  }
  .swagger-ui table.model tr.property-row .star {
    color: red;
  }
  .swagger-ui table.model tr.extension {
    color: #777;
  }
  .swagger-ui table.model tr.extension td:last-child {
    vertical-align: top;
  }
  .swagger-ui table.model tr.external-docs td:first-child {
    font-weight: 700;
  }
  .swagger-ui table.model tr .renderedMarkdown p:first-child {
    margin-top: 0;
  }
  .swagger-ui section.models {
    border: 1px solid rgba(59, 65, 81, 0.3);
    border-radius: 4px;
    margin: 30px 0;
  }
  .swagger-ui section.models .pointer {
    cursor: pointer;
  }
  .swagger-ui section.models.is-open {
    padding: 0 0 20px;
  }
  .swagger-ui section.models.is-open h4 {
    border-bottom: 1px solid rgba(59, 65, 81, 0.3);
    margin: 0 0 5px;
  }
  .swagger-ui section.models h4 {
    align-items: center;
    color: #606060;
    cursor: pointer;
    display: flex;
    font-family: sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 10px 20px 10px 10px;
    transition: all 0.2s;
  }
  .swagger-ui section.models h4 svg {
    transition: all 0.4s;
  }
  .swagger-ui section.models h4 span {
    flex: 1;
  }
  .swagger-ui section.models h4:hover {
    background: rgba(0, 0, 0, 0.02);
  }
  .swagger-ui section.models h5 {
    color: #707070;
    font-family: sans-serif;
    font-size: 16px;
    margin: 0 0 10px;
  }
  .swagger-ui section.models .model-jump-to-path {
    position: relative;
    top: 5px;
  }
  .swagger-ui section.models .model-container {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    margin: 0 20px 15px;
    position: relative;
    transition: all 0.5s;
  }
  .swagger-ui section.models .model-container:hover {
    background: rgba(0, 0, 0, 0.07);
  }
  .swagger-ui section.models .model-container:first-of-type {
    margin: 20px;
  }
  .swagger-ui section.models .model-container:last-of-type {
    margin: 0 20px;
  }
  .swagger-ui section.models .model-container .models-jump-to-path {
    opacity: 0.65;
    position: absolute;
    right: 5px;
    top: 8px;
  }
  .swagger-ui section.models .model-box {
    background: none;
  }
  .swagger-ui .model-box {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    display: inline-block;
    padding: 10px;
  }
  .swagger-ui .model-box .model-jump-to-path {
    position: relative;
    top: 4px;
  }
  .swagger-ui .model-box.deprecated {
    opacity: 0.5;
  }
  .swagger-ui .model-title {
    color: #505050;
    font-family: sans-serif;
    font-size: 16px;
  }
  .swagger-ui .model-title img {
    bottom: 0;
    margin-left: 1em;
    position: relative;
  }
  .swagger-ui .model-deprecated-warning {
    color: #f93e3e;
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 600;
    margin-right: 1em;
  }
  .swagger-ui span > span.model .brace-close {
    padding: 0 0 0 10px;
  }
  .swagger-ui .prop-name {
    display: inline-block;
    margin-right: 1em;
  }
  .swagger-ui .prop-type {
    color: #55a;
  }
  .swagger-ui .prop-enum {
    display: block;
  }
  .swagger-ui .prop-format {
    color: #606060;
  }
  .swagger-ui .servers > label {
    color: #3b4151;
    font-family: sans-serif;
    font-size: 12px;
    margin: -20px 15px 0 0;
  }
  .swagger-ui .servers > label select {
    max-width: 100%;
    min-width: 130px;
    width: 100%;
  }
  .swagger-ui .servers h4.message {
    padding-bottom: 2em;
  }
  .swagger-ui .servers table tr {
    width: 30em;
  }
  .swagger-ui .servers table td {
    display: inline-block;
    max-width: 15em;
    padding-bottom: 10px;
    padding-top: 10px;
    vertical-align: middle;
  }
  .swagger-ui .servers table td:first-of-type {
    padding-right: 1em;
  }
  .swagger-ui .servers table td input {
    height: 100%;
    width: 100%;
  }
  .swagger-ui .servers .computed-url {
    margin: 2em 0;
  }
  .swagger-ui .servers .computed-url code {
    display: inline-block;
    font-size: 16px;
    margin: 0 1em;
    padding: 4px;
  }
  .swagger-ui .servers-title {
    font-size: 12px;
    font-weight: 700;
  }
  .swagger-ui .operation-servers h4.message {
    margin-bottom: 2em;
  }
  .swagger-ui table {
    border-collapse: collapse;
    padding: 0 10px;
    width: 100%;
  }
  .swagger-ui table.model tbody tr td {
    padding: 0;
    vertical-align: top;
  }
  .swagger-ui table.model tbody tr td:first-of-type {
    padding: 0 0 0 2em;
    width: 174px;
  }
  .swagger-ui table.headers td {
    color: #3b4151;
    font-family: monospace;
    font-size: 12px;
    font-weight: 300;
    font-weight: 600;
    vertical-align: middle;
  }
  .swagger-ui table.headers .header-example {
    color: #999;
    font-style: italic;
  }
  .swagger-ui table tbody tr td {
    padding: 10px 0 0;
    vertical-align: top;
  }
  .swagger-ui table tbody tr td:first-of-type {
    min-width: 6em;
    padding: 10px 0;
  }
  .swagger-ui table thead tr td,
  .swagger-ui table thead tr th {
    border-bottom: 1px solid rgba(59, 65, 81, 0.2);
    color: #3b4151;
    font-family: sans-serif;
    font-size: 12px;
    font-weight: 700;
    padding: 12px 0;
    text-align: left;
  }
  .swagger-ui .parameters-col_description {
    margin-bottom: 2em;
    width: 99%;
  }
  .swagger-ui .parameters-col_description input {
    max-width: 340px;
    width: 100%;
  }
  .swagger-ui .parameters-col_description select {
    border-width: 1px;
  }
  .swagger-ui .parameters-col_description .markdown p {
    margin: 0;
  }
  .swagger-ui .parameter__name {
    color: #3b4151;
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 400;
    margin-right: 0.75em;
  }
  .swagger-ui .parameter__name.required {
    font-weight: 700;
  }
  .swagger-ui .parameter__name.required span {
    color: red;
  }
  .swagger-ui .parameter__name.required:after {
    color: rgba(255, 0, 0, 0.6);
    content: "required";
    font-size: 10px;
    padding: 5px;
    position: relative;
    top: -6px;
  }
  .swagger-ui .parameter__extension,
  .swagger-ui .parameter__in {
    color: gray;
    font-family: monospace;
    font-size: 12px;
    font-style: italic;
    font-weight: 600;
  }
  .swagger-ui .parameter__deprecated {
    color: red;
    font-family: monospace;
    font-size: 12px;
    font-style: italic;
    font-weight: 600;
  }
  .swagger-ui .parameter__empty_value_toggle {
    display: block;
    font-size: 13px;
    padding-bottom: 12px;
    padding-top: 5px;
  }
  .swagger-ui .parameter__empty_value_toggle input {
    margin-right: 7px;
  }
  .swagger-ui .parameter__empty_value_toggle.disabled {
    opacity: 0.7;
  }
  .swagger-ui .table-container {
    padding: 20px;
  }
  .swagger-ui .response-col_description {
    width: 99%;
  }
  .swagger-ui .response-col_description .markdown p {
    margin: 0;
  }
  .swagger-ui .response-col_links {
    min-width: 6em;
  }
  .swagger-ui .response__extension {
    color: gray;
    font-family: monospace;
    font-size: 12px;
    font-style: italic;
    font-weight: 600;
  }
  .swagger-ui .topbar {
    background-color: #1b1b1b;
    padding: 10px 0;
  }
  .swagger-ui .topbar .topbar-wrapper,
  .swagger-ui .topbar a {
    align-items: center;
    display: flex;
  }
  .swagger-ui .topbar a {
    color: #fff;
    flex: 1;
    font-family: sans-serif;
    font-size: 1.5em;
    font-weight: 700;
    max-width: 300px;
    text-decoration: none;
  }
  .swagger-ui .topbar a span {
    margin: 0;
    padding: 0 10px;
  }
  .swagger-ui .topbar .download-url-wrapper {
    display: flex;
    flex: 3;
    justify-content: flex-end;
  }
  .swagger-ui .topbar .download-url-wrapper input[type="text"] {
    border: 2px solid #62a03f;
    border-radius: 4px 0 0 4px;
    margin: 0;
    outline: none;
    width: 100%;
  }
  .swagger-ui .topbar .download-url-wrapper .select-label {
    align-items: center;
    color: #f0f0f0;
    display: flex;
    margin: 0;
    max-width: 600px;
    width: 100%;
  }
  .swagger-ui .topbar .download-url-wrapper .select-label span {
    flex: 1;
    font-size: 16px;
    padding: 0 10px 0 0;
    text-align: right;
  }
  .swagger-ui .topbar .download-url-wrapper .select-label select {
    border: 2px solid #62a03f;
    box-shadow: none;
    flex: 2;
    outline: none;
    width: 100%;
  }
  .swagger-ui .topbar .download-url-wrapper .download-url-button {
    background: #62a03f;
    border: none;
    border-radius: 0 4px 4px 0;
    color: #fff;
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 700;
    padding: 4px 30px;
  }
  .swagger-ui .info {
    margin: 50px 0;
  }
  .swagger-ui .info.failed-config {
    margin-left: auto;
    margin-right: auto;
    max-width: 880px;
    text-align: center;
  }
  .swagger-ui .info hgroup.main {
    margin: 0 0 20px;
  }
  .swagger-ui .info hgroup.main a {
    font-size: 12px;
  }
  .swagger-ui .info pre {
    font-size: 14px;
  }
  .swagger-ui .info li,
  .swagger-ui .info p,
  .swagger-ui .info table {
    color: #3b4151;
    font-family: sans-serif;
    font-size: 14px;
  }
  .swagger-ui .info h1,
  .swagger-ui .info h2,
  .swagger-ui .info h3,
  .swagger-ui .info h4,
  .swagger-ui .info h5 {
    color: #3b4151;
    font-family: sans-serif;
  }
  .swagger-ui .info a {
    color: #4990e2;
    font-family: sans-serif;
    font-size: 14px;
    transition: all 0.4s;
  }
  .swagger-ui .info a:hover {
    color: #1f69c0;
  }
  .swagger-ui .info > div {
    margin: 0 0 5px;
  }
  .swagger-ui .info .base-url {
    color: #3b4151;
    font-family: monospace;
    font-size: 12px;
    font-weight: 300 !important;
    font-weight: 600;
    margin: 0;
  }
  .swagger-ui .info .title {
    color: #3b4151;
    font-family: sans-serif;
    font-size: 36px;
    margin: 0;
  }
  .swagger-ui .info .title small {
    background: #7d8492;
    border-radius: 57px;
    display: inline-block;
    font-size: 10px;
    margin: 0 0 0 5px;
    padding: 2px 4px;
    position: relative;
    top: -5px;
    vertical-align: super;
  }
  .swagger-ui .info .title small.version-stamp {
    background-color: #89bf04;
  }
  .swagger-ui .info .title small pre {
    color: #fff;
    font-family: sans-serif;
    margin: 0;
    padding: 0;
  }
  .swagger-ui .auth-btn-wrapper {
    display: flex;
    justify-content: center;
    padding: 10px 0;
  }
  .swagger-ui .auth-btn-wrapper .btn-done {
    margin-right: 1em;
  }
  .swagger-ui .auth-wrapper {
    display: flex;
    flex: 1;
    justify-content: flex-end;
  }
  .swagger-ui .auth-wrapper .authorize {
    margin-left: 10px;
    margin-right: 10px;
    padding-right: 20px;
  }
  .swagger-ui .auth-container {
    border-bottom: 1px solid #ebebeb;
    margin: 0 0 10px;
    padding: 10px 20px;
  }
  .swagger-ui .auth-container:last-of-type {
    border: 0;
    margin: 0;
    padding: 10px 20px;
  }
  .swagger-ui .auth-container h4 {
    margin: 5px 0 15px !important;
  }
  .swagger-ui .auth-container .wrapper {
    margin: 0;
    padding: 0;
  }
  .swagger-ui .auth-container input[type="password"],
  .swagger-ui .auth-container input[type="text"] {
    min-width: 230px;
  }
  .swagger-ui .auth-container .errors {
    background-color: #fee;
    border-radius: 4px;
    color: red;
    color: #3b4151;
    font-family: monospace;
    font-size: 12px;
    font-weight: 600;
    margin: 1em;
    padding: 10px;
  }
  .swagger-ui .auth-container .errors b {
    margin-right: 1em;
    text-transform: capitalize;
  }
  .swagger-ui .scopes h2 {
    color: #3b4151;
    font-family: sans-serif;
    font-size: 14px;
  }
  .swagger-ui .scopes h2 a {
    color: #4990e2;
    cursor: pointer;
    font-size: 12px;
    padding-left: 10px;
    text-decoration: underline;
  }
  .swagger-ui .scope-def {
    padding: 0 0 20px;
  }
  .swagger-ui .errors-wrapper {
    -webkit-animation: scaleUp 0.5s;
    animation: scaleUp 0.5s;
    background: rgba(249, 62, 62, 0.1);
    border: 2px solid #f93e3e;
    border-radius: 4px;
    margin: 20px;
    padding: 10px 20px;
  }
  .swagger-ui .errors-wrapper .error-wrapper {
    margin: 0 0 10px;
  }
  .swagger-ui .errors-wrapper .errors h4 {
    color: #3b4151;
    font-family: monospace;
    font-size: 14px;
    font-weight: 600;
    margin: 0;
  }
  .swagger-ui .errors-wrapper .errors small {
    color: #606060;
  }
  .swagger-ui .errors-wrapper .errors .message {
    white-space: pre-line;
  }
  .swagger-ui .errors-wrapper .errors .message.thrown {
    max-width: 100%;
  }
  .swagger-ui .errors-wrapper .errors .error-line {
    cursor: pointer;
    text-decoration: underline;
  }
  .swagger-ui .errors-wrapper hgroup {
    align-items: center;
    display: flex;
  }
  .swagger-ui .errors-wrapper hgroup h4 {
    color: #3b4151;
    flex: 1;
    font-family: sans-serif;
    font-size: 20px;
    margin: 0;
  }
  @-webkit-keyframes scaleUp {
    0% {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  @keyframes scaleUp {
    0% {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  .swagger-ui .Resizer.vertical.disabled {
    display: none;
  }
  .swagger-ui .markdown p,
  .swagger-ui .markdown pre,
  .swagger-ui .renderedMarkdown p,
  .swagger-ui .renderedMarkdown pre {
    margin: 1em auto;
    word-break: break-all;
    word-break: break-word;
  }
  .swagger-ui .markdown pre,
  .swagger-ui .renderedMarkdown pre {
    background: none;
    color: #000;
    font-weight: 400;
    padding: 0;
    white-space: pre-wrap;
  }
  .swagger-ui .markdown code,
  .swagger-ui .renderedMarkdown code {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    color: #9012fe;
    font-family: monospace;
    font-size: 14px;
    font-weight: 600;
    padding: 5px 7px;
  }
  .swagger-ui .markdown pre > code,
  .swagger-ui .renderedMarkdown pre > code {
    display: block;
  }
`;
