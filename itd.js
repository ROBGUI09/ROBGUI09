// ==UserScript==
// @name         Pixel.itd Custom Styler & Space Click
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Apply custom CSS styles and enable spacebar click for a specific button on pixel.итд.com
// @author       ROBGUI09
// @match        *://pixel.xn--d1ah4a.com/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/ROBGUI09/ROBGUI09/refs/heads/main/itd.js
// @downloadURL  https://raw.githubusercontent.com/ROBGUI09/ROBGUI09/refs/heads/main/itd.js
// ==/UserScript==

(function() {
    'use strict';

    // ========== 1. Inject all required CSS styles ==========
    const style = document.createElement('style');
    style.textContent = `
        /* 1. Ucl8QbBG: remove padding and backdrop-filter */
        .Ucl8QbBG {
            padding: 0 !important;
            backdrop-filter: none !important;
            border-radius: 0px !important;
        }

        /* 2. ms1ZA4rl: hide completely */
        .ms1ZA4rl {
            display: none !important;
        }

        ._0DYDGUU9 {
            display: none !important;
        }

        /* 3. bUSeDsPs: remove gap */
        .bUSeDsPs {
            gap: 0 !important;
        }

        /* 4. _0KGR8cRl: hide completely */
        ._0KGR8cRl {
            display: none !important;
        }

        .allmmozZ {
            gap: 0px !important;
        }

        /* 5. m5tH6juu: hide completely (additional hidden element) */
        .m5tH6juu {
            width: 95px !important;
            border-radius: 0px !important;
            font-size: 8px !important;
            height: 18px;
        }

        /* 6. UnF3CfUN: size and border-radius adjustments */
        .UnF3CfUN {
            height: 18px !important;
            width: 18px !important;
            min-width: 18px !important;
            max-width: 18px !important;
            border-radius: 0px !important;
        }

        /* 7. Special style for .UnF3CfUN.OWtRuGkW: dotted border with animation */
        .UnF3CfUN.OWtRuGkW {
            border: 3px dotted;
            background-clip: initial !important;
            animation: borderPulse 1s ease infinite !important;
        }

        /* Keyframes for white-to-black dotted border animation */
        @keyframes borderPulse {
            0% {
                border-color: white;
            }
            50% {
                border-color: black;
            }
            100% {
                border-color: white;
            }
        }
    `;
    document.head.appendChild(style);


    function improvedKeyPress(event) {
        // Only trigger spacebar if not typing in an input/textarea/editable element
        const target = event.target;
        const isEditable = target.isContentEditable ||
                           target.tagName === 'INPUT' ||
                           target.tagName === 'TEXTAREA' ||
                           target.tagName === 'SELECT';

        if ((event.code === 'Space' || event.key === ' ' || event.keyCode === 32) && !isEditable) {
            event.preventDefault();
            const targetButton = document.querySelector('.m5tH6juu');
            if (targetButton) {
                targetButton.click();
            }
        }
    }

    window.addEventListener('keydown', improvedKeyPress);

    // Small console log to confirm script is active
    console.log('[Pixel.itd Custom Script] Loaded with styles and spacebar click on .UnF3CfUN');
})();
