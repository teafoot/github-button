import { LitElement, html, css } from 'lit'

class GithubButton extends LitElement {
  static get styles () {
    return css`
      * {
        margin: 0;
        padding: 0;
        
        /* --icon-color: purple; */
      }

      :host {
        /* button are inline element */
        display: inline-block;
        min-width: 16px;
        min-height: 16px;
      }
      
      button {
        /* reset */
        border: none;
        background: none;
        color: inherit;
        outline: inherit;
        line-height: 0;
        cursor: pointer;

        width: 100%;
        height: 100%;
      }

      svg {
        display: inline-block;
        outline: none;

        fill: var(--icon-color, #000);
      }

      .hidden {
        display: none !important;
      }

      svg path,
      svg rect,
      svg g,
      svg polygon {
        pointer-events: none;
      }

      button:focus .animation-revolution,
      button:hover .animation-revolution {
        animation: revolution 1.3s ease-in-out infinite forwards;
      }

      @keyframes revolution {
        0% {
          opacity: 1;
          transform: rotate(0deg);
        }
        50% {
          opacity: .9;
          transform: rotate(180deg);
        }
        100% {
          opacity: 1;
          transform: rotate(0deg);
        }
      }
    `
  }

  static get properties () {
    return {
      link: String
    }
  }

  #handleClick (event) {
    const schema = 
      this.renderRoot.querySelector('button svg:not(.hidden)').id
    const schemas = ['auto', 'light', 'dark', 'dim']
    const position = schemas.indexOf(schema)
    const nextSchema = schemas[((position + 1) % 4)]

    // this.#dispatchSchemeEvent(nextSchema)
    this.#setDocumentAttribute(nextSchema)

    this.renderRoot.querySelector(`#${schema}`)
      .classList.toggle('hidden')
    this.renderRoot.querySelector(`#${nextSchema}`)
      .classList.toggle('hidden')
  }

  render () {
    return html`
      <button id="btn"
        title="github link"
        aria-label="github link"
        @click=${this.#handleClick}>

        <svg width="120" height="120" viewBox="0 0 120 120"
          class="animation-move" role="img" aria-hidden="true" focusable="false">
          <defs id="defs2">
            <clipPath clipPathUnits="userSpaceOnUse" id="clipPath870">
              <path d="M 0,551.986 H 530.973 V 0 H 0 Z" id="path868" />
            </clipPath>
          </defs>
          <g id="layer1" transform="matrix(10.017076,0,0,10.017076,-3.6084323,-3.6084326)" style="stroke-width:0.0998295">
            <g id="g872-3" transform="matrix(0.35277777,0,0,-0.35277777,6.3494708,0.74526667)" style="stroke-width:0.0998295">
              <path d="m 0,0 c -8.995,0 -16.288,-7.293 -16.288,-16.29 0,-7.197 4.667,-13.302 11.14,-15.457 0.815,-0.149 1.112,0.354 1.112,0.786 0,0.386 -0.014,1.411 -0.022,2.77 -4.531,-0.984 -5.487,2.184 -5.487,2.184 -0.741,1.881 -1.809,2.382 -1.809,2.382 -1.479,1.011 0.112,0.991 0.112,0.991 1.635,-0.116 2.495,-1.679 2.495,-1.679 1.453,-2.489 3.813,-1.77 4.741,-1.354 0.148,1.053 0.568,1.771 1.034,2.178 -3.617,0.411 -7.42,1.809 -7.42,8.051 0,1.778 0.635,3.232 1.677,4.371 -0.168,0.412 -0.727,2.068 0.159,4.311 0,0 1.368,0.438 4.48,-1.67 1.299,0.361 2.693,0.542 4.078,0.548 1.383,-0.006 2.777,-0.187 4.078,-0.548 3.11,2.108 4.475,1.67 4.475,1.67 0.889,-2.243 0.33,-3.899 0.162,-4.311 1.044,-1.139 1.675,-2.593 1.675,-4.371 0,-6.258 -3.809,-7.635 -7.438,-8.038 0.585,-0.503 1.106,-1.497 1.106,-3.017 0,-2.177 -0.02,-3.934 -0.02,-4.468 0,-0.436 0.293,-0.943 1.12,-0.784 6.468,2.159 11.131,8.26 11.131,15.455 C 16.291,-7.293 8.997,0 0,0" style="fill:#1b1817;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.0998295" id="path874-6" />
            </g>
          </g>
        </svg>

        <!-- svg id attribute is the value used to trigger schemas -->
        <svg id="auto" class="animation-bigger" viewBox="0 0 24 24"
          role="img" aria-hidden="true" focusable="false">
          <g>
            <path d="M0,0h24v24H0V0z" fill="none" shape-rendering="geometricPrecision"/>
          </g>
          <g>
            <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8c0-4.41,3.59-8,8-8 s8,3.59,8,8C20,16.41,16.41,20,12,20z M11.01,6L6.88,17h1.9l1-2.81h4.44L15.21,17h1.9L12.98,6H11.01z M10.35,12.59l1.6-4.55h0.09 l1.6,4.55H10.35z"shape-rendering="geometricPrecision" />
          </g>
        </svg>

        <svg id="dim" class="hidden" viewBox="0 0 24 24"
         role="img" aria-hidden="true" focusable="false" >
          <g>
            <rect fill="none" height="24" width="24" x="0" shape-rendering="geometricPrecision"/>
          </g>
          <g>
            <g>
              <polygon points="19,9 20.25,6.25 23,5 20.25,3.75 19,1 17.75,3.75 15,5 17.75,6.25" shape-rendering="geometricPrecision" >
                <animate attributeName="opacity" values="1;0.7;1" dur="1s" repeatCount="indefinite" />
              </polygon>
              <polygon points="19,15 17.75,17.75 15,19 17.75,20.25 19,23 20.25,20.25 23,19 20.25,17.75" shape-rendering="geometricPrecision" >
                <animate attributeName="opacity" values="1;0.7;1" dur="2s" repeatCount="indefinite" />
              </polygon>
              <path d="M11.5,9.5L9,4L6.5,9.5L1,12l5.5,2.5L9,20l2.5-5.5L17,12L11.5,9.5z M9.99,12.99L9,15.17l-0.99-2.18L5.83,12l2.18-0.99 L9,8.83l0.99,2.18L12.17,12L9.99,12.99z" shape-rendering="geometricPrecision">
                <animate attributeName="opacity" values="1;0.7;1" dur="4s" repeatCount="indefinite" />
              </path>
            </g>
          </g>
        </svg>

      </button>
    `
  }
}

customElements.define('github-button', GithubButton)
