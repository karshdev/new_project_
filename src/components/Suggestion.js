import React from 'react'

const Suggestion = () => {
  return (
    <div className="w-[100%] sm:p-12 mt-[15px] sm:mt-0">
      <div class="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden">
    <div class="bg-gray-100 px-6 py-4">
        <h2 class="text-lg font-semibold text-gray-800">Submit Your Suggestion</h2>
    </div>
    <form class="px-6 py-4">
        <div class="mb-4">
            <label for="name" class="block text-gray-700 font-semibold mb-2">Your Name</label>
            <input type="text" id="name" name="name" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="John Doe" />
        </div>
        <div class="mb-4">
            <label for="email" class="block text-gray-700 font-semibold mb-2">Your Email</label>
            <input type="email" id="email" name="email" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="john.doe@example.com" />
        </div>
        <div class="mb-4">
            <label for="suggestion" class="block text-gray-700 font-semibold mb-2">Your Suggestion</label>
            <textarea id="suggestion" name="suggestion" rows="4" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="Type your suggestion here..."></textarea>
        </div>
        <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Submit</button>
    </form>
</div>
    </div>
  );
}

export default Suggestion
