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

      button:focus,
      button:hover {
        animation: bigger 1.3s ease-in-out 1 forwards;
      }

      svg {
        display: inline-block;
        outline: none;

        fill: var(--icon-color, #000);
      }

      svg path {
        pointer-events: none;
      }

      @keyframes bigger {
        0% {
          opacity: 1;
          transform: scale(1);
        }
        50% {
          opacity: .9;
          transform: scale(1.05);
        }
        100% {
          opacity: 1;
          transform: scale()
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
    const githubBaseURL = 'https://github.com'
    const githubURL = new URL(this.link, githubBaseURL)
    window.location.href = githubURL
  }

  render () {
    return html`
      <button id="btn"
        title="github link"
        aria-label="github link"
        @click=${this.#handleClick}>

        <svg version="1.1" viewBox="0 0 120 120"
        class="animation-move" role="img" aria-hidden="true" focusable="false" >
          <path d="m59.9947 3.85696c-31.7865 0-57.5586 25.772-57.5586 57.5656 0 25.4328 16.4923 47.0066 39.3666 54.622 2.88005 0.52653 3.92959-1.25097 3.92959-2.77757 0-1.36405-0.04947-4.9862-0.07774-9.78863-16.0117 3.47726-19.39-7.71783-19.39-7.71783-2.61855-6.64708-6.39265-8.41751-6.39265-8.41751-5.22649-3.57268 0.395786-3.502 0.395786-3.502 5.77777 0.40992 8.81684 5.93325 8.81684 5.93325 5.13461 8.79564 13.4744 6.25483 16.7538 4.78477 0.523003-3.72109 2.0072-6.25836 3.65395-7.69662-12.7818-1.45239-26.2208-6.39265-26.2208-28.4506 0-6.2831 2.24396-11.4212 5.92618-15.4462-0.593679-1.45593-2.56907-7.3079 0.561875-15.2342 0 0 4.83424-1.5478 15.8314 5.90145 4.59041-1.2757 9.51653-1.91532 14.4108-1.93652 4.88725 0.0212 9.81336 0.660821 14.4108 1.93652 10.9901-7.44925 15.8138-5.90145 15.8138-5.90145 3.14155 7.92632 1.16616 13.7783 0.57248 15.2342 3.68929 4.025 5.91912 9.16315 5.91912 15.4462 0 22.1145-13.4603 26.9806-26.2844 28.4047 2.06727 1.7775 3.90838 5.2901 3.90838 10.6615 0 7.69309-0.0707 13.902-0.0707 15.789 0 1.54073 1.0354 3.33237 3.95786 2.7705 22.8566-7.62948 39.3347-29.1892 39.3347-54.6149 0-31.7936-25.7756-57.5656-57.5692-57.5656" />
        </svg>

      </button>
    `
  }
}

customElements.define('github-button', GithubButton)
