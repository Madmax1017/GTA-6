import React from 'react';

const ComingSoon = () => {
    return (
        // Cleaned up: Removed 'opacity-0' and 'pointer-events-none'
        <section className="entrance-message">
            <div className="h-full col-center gap-5 md:gap-10">
                <img src='/assets/images/logo.webp' className='entrance-logo' alt="Logo" />

                <div className="text-wrapper">
                    <h3 className="gradient-title">
                        Coming <br /> November 26th <br /> 2026
                    </h3>
                </div>
                <div className="flex-center gap-10">
                    <img src="/assets/images/ps-logo.svg" className="md:w-32 w-20" alt="PS5" />
                    <img src="/assets/images/x-logo.svg" className="md:w-32 w-20" alt="Xbox" />
                </div>
            </div>
        </section>
    );
};

export default ComingSoon;