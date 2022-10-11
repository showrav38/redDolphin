import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="flex justify-center">
      <div class="w-full max-w-xs">
        <form class="bg-white shadow-md rounded px-8 pb-8 mb-4 my-20">
          <div class="mb-4">
            <label class="block text-grey-darker text-sm font-bold mb-2 pt-2" for="username">
              Username
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div class="mb-4">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
              Email
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="email"
            />
          </div>
          <div class="mb-4">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
              Phone Number
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
              id="whatsappnumber"
              type="text"
              placeholder="Phone Number"
            />
          </div>
          <div class="mb-4">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
              WhatsApp Number
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
              id="phonenumber"
              type="text"
              placeholder="WhatsApp Number"
            />
          </div>
          
          <div class="mb-4">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
              Website URL
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
              id="phonenumber"
              type="text"
              placeholder="Website URL"
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="textbtn font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Submit
            </button>
           
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
