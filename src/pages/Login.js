import { Link } from "react-router-dom";


function Login() {
  return (
      <div className=" App-header flex flex-col bg-gray-900 align-center">

  <div className="bg-gray-900 grid grid-cols-9 px-10 my-auto">
       

     <div className="flex justify-center items-center col-span-full md:col-span-6">
     <form class="w-1/2 max-w-lg bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
       <div className=" text-white text-4xl text-gray-100 mb-12">Login</div>
 <div class="flex flex-wrap -mx-3 mb-6">
   <div class="w-full px-3">
     <label class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-4" for="grid-id">
       Student ID
     </label>
     <input class="appearance-none block w-full bg-gray-100 text-gray-900 border border-gray-500 rounded-xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-id" type="text" placeholder="10101010">
     </input>
   </div>
 </div>
 <div class="flex flex-wrap -mx-3 mb-6">
   <div class="w-full px-3">
     <label class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-4" for="grid-password">
       Password
     </label>
     <input class="appearance-none block w-full bg-gray-100 text-gray-900 border border-gray-500 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************">
     </input>
     <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
   </div>
 </div>
 <div className="flex justify-end">
  <Link to='/dashboard'>
     <button class="bg-gray-500 ml-auto hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
       Login
     </button>
  </Link>
 </div>
</form>
     </div>
     </div>
      </div>
  ); 
}

export default Login;
