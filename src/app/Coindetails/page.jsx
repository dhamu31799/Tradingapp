import React from 'react'

function page() {
  return (
    <div>

    <div class="results-summary-container">
      <div class="confetti">
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
      </div>
      <div class="results-summary-container__result">
        <div class="heading-tertiary">Your Coin Result</div>
        <div class="result-box">
          <div class="heading-primary">88</div>
          <p class="result">of 100</p>
        </div>
        <div class="result-text-box">
          <div class="heading-secondary">Great</div>
          <p class="paragraph">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      </div>
      <div class="results-summary-container__options">
        <div class="heading-secondary heading-secondary--blue">Summary</div>
        <div class="summary-result-options">
          <div class="result-option result-option-reaction">
            <div class="icon-box">
              <svg viewBox="0 0 20 20" fill="none" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.833 8.333V2.5l-6.666 9.167h5V17.5l6.666-9.167h-5Z" stroke-width="1.25" stroke-linejoin="round" stroke-linecap="round" stroke="#F55"></path>
              </svg>
              <span class="reaction-icon-text">Coin Bonus</span>
            </div>
            <div class="result-box"><span>50</span> / 50</div>
          </div>
          <div class="result-option result-option-memory">
            <div class="icon-box">
              <svg viewBox="0 0 20 20" fill="none" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.833 11.667a2.5 2.5 0 1 0 .834 4.858" stroke-width="1.25" stroke-linejoin="round" stroke-linecap="round" stroke="#FFB21E"></path>
                <path d="M3.553 13.004a3.333 3.333 0 0 1-.728-5.53m.025-.067a2.083 2.083 0 0 1 2.983-2.824m.199.054A2.083 2.083 0 1 1 10 3.75v12.917a1.667 1.667 0 0 1-3.333 0M10 5.833a2.5 2.5 0 0 0 2.5 2.5m1.667 3.334a2.5 2.5 0 1 1-.834 4.858" stroke-width="1.25" stroke-linejoin="round" stroke-linecap="round" stroke="#FFB21E"></path>
                <path d="M16.447 13.004a3.334 3.334 0 0 0 .728-5.53m-.025-.067a2.083 2.083 0 0 0-2.983-2.824M10 3.75a2.085 2.085 0 0 1 2.538-2.033 2.084 2.084 0 0 1 1.43 2.92m-.635 12.03a1.667 1.667 0 0 1-3.333 0" stroke-width="1.25" stroke-linejoin="round" stroke-linecap="round" stroke="#FFB21E"></path>
              </svg>
              <span class="memory-icon-text">Level Coins</span>
            </div>
            <div class="result-box"><span>94</span> / 126</div>
          </div>
          <div class="result-option result-option-verbal">
            <div class="icon-box">
              <svg viewBox="0 0 20 20" fill="none" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 10h5M10 18.333A8.333 8.333 0 1 0 1.667 10c0 1.518.406 2.942 1.115 4.167l-.699 3.75 3.75-.699A8.295 8.295 0 0 0 10 18.333Z" stroke-width="1.25" stroke-linejoin="round" stroke-linecap="round" stroke="#00BB8F"></path>
              </svg>
              <span class="verbal-icon-text">Total Coins</span>
            </div>
            <div class="result-box"><span>66</span> / 100</div>
          </div>
          <div class="result-option result-option-Visual">
            <div class="icon-box">
              <svg viewBox="0 0 20 20" fill="none" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 11.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Z" stroke-width="1.25" stroke-linejoin="round" stroke-linecap="round" stroke="#1125D6"></path>
                <path d="M17.5 10c-1.574 2.492-4.402 5-7.5 5s-5.926-2.508-7.5-5C4.416 7.632 6.66 5 10 5s5.584 2.632 7.5 5Z" stroke-width="1.25" stroke-linejoin="round" stroke-linecap="round" stroke="#1125D6"></path>
              </svg>
              <span class="visual-icon-text">Withdraw Coins</span>
            </div>
            <div class="result-box"><span>72</span> / 100</div>
          </div>
          <div class="summary__cta">
            <button class="btn btn__continue">Continue</button>
          </div>
        </div>
      </div>
    </div>
  

</div>
  )
}

export default page
