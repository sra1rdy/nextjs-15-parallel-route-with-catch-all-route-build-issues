import {ReactNode} from 'react';

interface LayoutProps {
    params: Promise<{slug: string}>;
    legacy: ReactNode;
    modern: ReactNode;
}

const Layout = async (props: LayoutProps) => {
    const {legacy, modern} = props;

    return (
        <div>
            {/* eslint-disable-next-line no-constant-condition */}
            {false ? legacy : modern}
        </div>
    );
};

export default Layout;
