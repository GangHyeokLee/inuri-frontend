let isInitialized = false;

export const initializeIamport = () => {
    const IMP = window.IMP;
    if(typeof window !== 'undefined' && window.IMP && !isInitialized){
        IMP.init(process.env.NEXT_PUBLIC_PAYMENT_IMP);
        isInitialized = true;
    }

    return IMP;
}