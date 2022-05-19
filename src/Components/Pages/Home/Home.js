import React from 'react';

const Home = () => {
    return (
        <div className='bg-purple-100 pb-14'>
            <div class="container px-6 py-16 mx-auto ">
                <div class="items-center lg:flex">
                    <div class="w-full lg:w-1/2">
                        <div class="lg:max-w-lg">
                            <h1 class="text-2xl font-semibold text-gray-800 uppercase dark:text-white lg:text-4xl">Manage your Task with us</h1>
                            <p class="mt-2 text-gray-700 dark:text-gray-400">ToDo List App is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom. It is helpful in planning our daily schedules..</p>
                            <button class="w-full px-3 py-2 mt-6 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-purple-600 rounded-md lg:w-auto hover:bg-purple-500 focus:outline-none focus:bg-purple-500">Learn More</button>
                        </div>
                    </div>

                    <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                        <img class="w-96 h-full lg:max-w-2xl" src="https://cdni.iconscout.com/illustration/premium/thumb/todo-list-2839461-2371075.png" alt="Catalogue-pana.svg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;