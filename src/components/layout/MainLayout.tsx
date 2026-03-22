import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return(
        <main>
            <Header />
            {children}
            <Footer />
        </main>
    );
}