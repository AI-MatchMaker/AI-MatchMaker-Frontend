<template>
    <div>
        <section
            class="py-20 px-6 bg-custom lg:px-24 flex flex-col justify-center items-center lg:flex-row lg:justify-between">
            <div class="pt-10 pb-16 w-full lg:w-3/5">
                <h1
                    class=" py-4 animate-fadeIn text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-700 font-poetsen text-center lg:text-left">
                    Find Right AI Solutions
                </h1>
                <div class="animate-fadeIn pt-12 pb-20">
                    <p class="text-2xl mb-4 font-light text-theme-white font-lora text-center lg:text-left">
                        Discover the Perfect AI Tools for Your Needs
                    </p>
                    <p class="text-2xl font-light text-theme-white font-lora text-center lg:text-left">
                        Tailored Guidance Every Step of the Way
                    </p>
                </div>
                <div class="button-enter-active flex justify-center lg:justify-start">
                    <button
                        class="bg-blue-500 hover:bg-blue-600 text-xl text-white font-bold py-6 px-20 rounded shadow-lg hover:shadow">
                        Explore Now
                    </button>
                </div>
            </div>
            <div class="min-w-96 pl-4 lg:flex-1 flex justify-center pt-10 lg:pt-0">
                <img class="w-full" src="../assets/icon/clip-new-technologies.png">
            </div>
        </section>

        <section class=" bg-white py-16 px-6 lg:px-24">
            <h1 class="font-poetsen text-center text-4xl py-10">
                Our Explore our key offerings
            </h1>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div v-for="item in features" :key="item.title" class="p-10 text-center">
                    <h2 class="text-2xl font-semibold py-5">{{ item.title }}</h2>
                    <p class="text-lg text-gray-700">{{ item.content }}</p>
                </div>
            </div>
        </section>
        <section class="bg-theme-blue py-24 px-10 lg:px-40">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20">
                <div v-for="item in items" :key="item.title"
                    class="bg-white p-6 md:px-10 md:py-14 rounded-2xl shadow-xl transform duration-500 hover:scale-105 flex flex-col space-y-3 text-center border-8 border-gray-400 hover:border-theme-blue-2 cursor-pointer transition-all">
                    <div class="flex justify-center items-center h-32">
                        <img :src="`/src/assets/icon/${item.icon}.png`" class="h-full w-auto">
                    </div>
                    <h2 class="text-xl md:text-2xl font-lora text-gray-900">{{ item.title }}</h2>
                    <p class="text-md md:text-lg text-gray-600">{{ item.content }}</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const items = [
    { title: 'Vision', content: 'Our vision is to empower every user to harness the full potential of AI technologies seamlessly.', icon: 'telescope' },
    { title: 'Mission', content: 'To simplify and personalize the journey towards effective AI adoption, ensuring every solution aligns with our clients\' unique objectives.', icon: 'target' },
    { title: 'Values', content: 'We champion innovation, provide clarity in AI technology, and build trust with reliable, tailored solutions.', icon: 'sprout' }
];


const features = [
    { title: 'AI Use Case Discovery', content: 'Pinpoint precise AI applications within your business landscape and quantify their potential to streamline your operations.' },
    { title: 'Premier AI Solution Library', content: 'Dive into a world of leading-edge AI technologies, equipped with detailed features and best practices for informed decision-making.' },
    { title: 'Personalized AI Matching', content: 'Tailor the perfect AI solution stack to fit your specific business needs, constraints, and goals.' },
    { title: 'AI Vendor Evaluation & Selection', content: 'Engage with a wide array of AI vendors, backed by expert benchmarking and procurement strategies to ensure you partner with the best.' }
];

</script>

<style>
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateX(20px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.border-animation {
    transition: border-width 0.5s ease-in-out, transform 0.5s ease-in-out;
}

.bg-custom {
    background-image: url('../assets/BG_3-1.jpg');
}
</style>
