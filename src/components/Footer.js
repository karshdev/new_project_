import React from 'react'

const Footer = () => {
  return (
    <footer class="bg-gray-900 text-white py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
                <h3 class="text-lg font-semibold mb-4">Company</h3>
                <ul>
                    <li><a href="#" class="text-gray-400 hover:text-white">About Us</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white">Contact Us</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white">Careers</a></li>
                </ul>
            </div>
            <div>
                <h3 class="text-lg font-semibold mb-4">Services</h3>
                <ul>
                    <li><a href="#" class="text-gray-400 hover:text-white">Web Design</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white">Graphic Design</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white">Digital Marketing</a></li>
                </ul>
            </div>
            <div>
                <h3 class="text-lg font-semibold mb-4">Connect With Us</h3>
                <ul>
                    <li><a href="#" class="text-gray-400 hover:text-white">Facebook</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white">Twitter</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white">Instagram</a></li>
                </ul>
            </div>
        </div>
    </div>
</footer>

  )
}

export default Footer
