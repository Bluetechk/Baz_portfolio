import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-ink-black relative overflow-hidden">


      {/* Links grid */}
      <div className="container px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div>
            <h4 className="text-[11px] tracking-widest text-foreground font-semibold mb-4">QUICK LINKS</h4>
            <ul className="space-y-2 text-muted-foreground text-xs">
              <li><Link to="/book-keynote" className="hover:text-foreground transition-colors">Book Baz</Link></li>
              <li><Link to="/books" className="hover:text-foreground transition-colors">Books</Link></li>
              <li><Link to="/blog" className="hover:text-foreground transition-colors">Articles</Link></li>
              <li><Link to="/press" className="hover:text-foreground transition-colors">Press Room</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] tracking-widest text-foreground font-semibold mb-4">RESOURCES</h4>
            <ul className="space-y-2 text-muted-foreground text-xs">
              <li><Link to="/blog" className="hover:text-foreground transition-colors">Articles</Link></li>
              <li><Link to="/videos" className="hover:text-foreground transition-colors">Videos</Link></li>
              <li><Link to="/gallery" className="hover:text-foreground transition-colors">Gallery</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] tracking-widest text-foreground font-semibold mb-4">INFORMATION</h4>
            <ul className="space-y-2 text-muted-foreground text-xs">
              <li><Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-foreground transition-colors">Cookie Policy</Link></li>
              <li><Link to="/terms-conditions" className="hover:text-foreground transition-colors">Terms and Conditions</Link></li>
              <li><Link to="/return-refund-policy" className="hover:text-foreground transition-colors">Return & Refund Policy</Link></li>
              <li><Link to="/media-release-policy" className="hover:text-foreground transition-colors">Media Release Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] tracking-widest text-foreground font-semibold mb-4">CONTACT</h4>
            <p className="text-muted-foreground text-xs">infoBazemmanuel.com</p>
            <p className="text-muted-foreground text-xs mt-1">+231 770656789</p>
            <div className="flex items-center gap-3 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><Facebook size={14} /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><Twitter size={14} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><Instagram size={14} /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><Youtube size={14} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><Linkedin size={14} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="pb-8 text-center text-[10px] text-muted-foreground/50 tracking-wider">
        Copyright © Baz Emmanuel Barzon 2025. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
