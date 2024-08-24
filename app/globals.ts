"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

    body {
        margin: 0;
        padding: 0;
    }

    :root {
        /* --- Colors --- */
        // Basic
        --white: #FFFFFF;
        --black: #000000;

        // Mango
        --mango-900: #FFBE0B;
        --mango-800: #FFC933;
        --mango-700: #FFD35C;
        --mango-600: #FFDE85;
        --mango-500: #FFE9AD;

        // Orange
        --orange-900: #F97316;
        --orange-800: #FB923C;
        --orange-700: #FDBA74;
        --orange-600: #FED7AA;
        --orange-500: #FFEDD5;

        // Pink
        --pink-900: #FF006E;
        --pink-800: #FF338B;
        --pink-700: #FF5CA3;
        --pink-600: #FF85BA;
        --pink-500: #FFADD1;
    
        // Violet
        --violet-900: #4C1D95;
        --violet-800: #5B21B6;
        --violet-700: #6D28D9;
        --violet-600: #7C3AED;
        --violet-500: #8B5CF6;

        // Salmon
        --salmon-900: #E11D48;
        --salmon-800: #F43F5E;
        --salmon-700: #FB7185;
        --salmon-600: #FDA4AF;
        --salmon-500: #FECDD3;

        // Slate
        --slate-900: #0F172A;
        --slate-800: #1E293B;
        --slate-700: #334155;
        --slate-600: #475569;
        --slate-500: #64748B;
        --slate-400: #94A3B8;
        --slate-300: #CBD5E1;
        --slate-200: #E2E8F0;
        --slate-100: #F1F5F9;

        /* --- Width --- */
        --max-width: 1200px;
        --outer-border-radius: 1rem;
        --inner-border-radius: calc(var(--outer-border-radius) - padding);
        --padding: 0.5rem;
        
    }
`;
