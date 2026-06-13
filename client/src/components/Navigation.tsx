import { Menu, X, Home, User, Briefcase, Code2, Zap, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home', icon: Home },
    { label: 'About', href: '#about', icon: User },
    { label: 'Work', href: '#work', icon: Briefcase },
    { label: 'Skills', href: '#skills', icon: Code2 },
    { label: 'Experience', href: '#experience', icon: Zap },
    { label: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container flex items-center justify-between h-16">
        <div className="text-2xl font-bold text-accent">AE</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors group"
                title={item.label}
              >
                <Icon size={18} className="group-hover:scale-110 transition-transform" />
                <span className="hidden lg:inline">{item.label}</span>
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-secondary rounded transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container py-4 flex flex-col gap-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 text-sm font-medium text-foreground hover:text-accent transition-colors p-2 rounded hover:bg-secondary/50"
                  onClick={() => setIsOpen(false)}
                >
                  <Icon size={18} />
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
