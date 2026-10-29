import {site} from "../data/content";
// classic page footer
export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                Copyright &copy; {site.year} {site.name} - All Rights Reserved
            </div>
        </footer>
    );
}