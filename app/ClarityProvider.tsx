// components/ClarityProvider.tsx
'use client';

import { useEffect } from 'react';
import Clarity from '@microsoft/clarity';

const ClarityProvider = () => {
    const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;
    useEffect(() => {
        if (clarityId) {
            Clarity.init(clarityId);
        }
    }, []);

    return null; // This component doesn't render anything
};

export default ClarityProvider;
