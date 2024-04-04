import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
import { Header } from '../Header/Header';
import { Suspense } from 'react';

export const AppLayout = () => {
    return (
        <>

            <div style={{ margin: '0 auto', padding: '0 64px' }}>
                <Header />

                <Suspense fallback={null}>
                    <Outlet />
                </Suspense>
                {/* <Toaster position="top-right" reverseOrder={false} /> */}
            </div>
        </>
    );
};