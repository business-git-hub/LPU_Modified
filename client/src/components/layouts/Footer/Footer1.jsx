import React from 'react'
import { ArrowRight, GraduationCap } from 'lucide-react';
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 
export default function Footer1() {
    return (
        <footer className="bg-blue-900 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12">
                <div className="animate-fade-in-up">
                    <div className="flex items-center space-x-3 mb-6 hover-scale">
                        <GraduationCap className="w-8 h-8" />
                        <span className="font-bold text-xl gradient-text">Academia University</span>
                    </div>
                    <p className="text-blue-200 leading-relaxed">
                        Empowering minds, shaping futures since 1890. Join us in our mission to create positive change through education and innovation.
                    </p>
                </div>
                {[
                    {
                        title: 'Quick Links',
                        items: ['Programs', 'Admissions', 'Campus Life', 'Research']
                    },
                    {
                        title: 'Contact',
                        items: ['123 University Ave', 'Collegetown, ST 12345', 'contact@academia.edu', '(555) 123-4567']
                    },
                    {
                        title: 'Connect',
                        items: ['Facebook', 'Twitter', 'LinkedIn', 'Instagram']
                    }
                ].map((section, index) => (
                    <div
                        key={section.title}
                        className="animate-fade-in-up"
                        style={{ animationDelay: `${(index + 1) * 200}ms` }}
                    >
                        <h4 className="font-semibold text-lg mb-6 gradient-text">{section.title}</h4>
                        <ul className="space-y-4">
                            {section.items.map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-blue-200 hover:text-white transition-colors flex items-center group">
                                        <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </footer>
    )
}
    {/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */} 