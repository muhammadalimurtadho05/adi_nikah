<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adi Developer</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:wght@400;600&display=swap" rel="stylesheet">
    <style>
        /* Integrasi Google Fonts */
        .font-pacifico {
            font-family: 'Pacifico', cursive;
        }
        .font-poppins {
            font-family: 'Poppins', sans-serif;
        }
    </style>
</head>
<body class="bg-gray-100">

    <!-- Navbar -->
    <nav class="bg-white shadow">
        <div class="max-w-7xl mx-auto px-4 py-4">
            <div class="flex justify-between items-center">
                <div class="text-xl font-bold">Adi Developer</div>
                <div>
                    <a href="#" class="text-gray-700 hover:text-blue-500 px-4">Home</a>
                    <a href="#" class="text-gray-700 hover:text-blue-500 px-4">Tentang</a>
                    <a href="#" class="text-gray-700 hover:text-blue-500 px-4">Kontak</a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <header class="bg-blue-500 text-white py-20">
        <div class="max-w-7xl mx-auto text-center">
            <h1 class="text-4xl font-bold">Selamat Datang di Adi Developer</h1>
            <p class="mt-4 text-lg">Nikmati Ngentod Dengan Halal</p>
            <a href="#" class="mt-6 inline-block bg-white text-blue-500 font-semibold py-2 px-4 rounded">
                Baca Selengkapnya
            </a>
        </div>
    </header>

    <!-- Content Section -->
    <section class="py-20">
        <div class="max-w-7xl mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-10">Kisah Terbaru</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
                <div class="bg-white p-3 rounded-lg shadow">
                    <!-- Carousel Container -->
                    <div class="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
                        <div id="carousel" class="relative flex transition-transform duration-700 ease-in-out">
                            <div class="min-w-full h-64 bg-cover bg-center" style="background-image: url('img/gambar1.jpg');"></div>
                            <div class="min-w-full h-64 bg-cover bg-center" style="background-image: url('img/gambar2.jpg');"></div>
                            <div class="min-w-full h-64 bg-cover bg-center" style="background-image: url('img/gambar3.jpg');"></div>
                        </div>
                    </div>
                </div>
                <div class="">
                    <header class="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-10">
                        <div class="max-w-7xl mx-auto text-center">
                            <h1 class="text-4xl font-pacifico tracking-wide">
                            Solusi Digital Penikahan Impian
                            </h1>
                            <p class="mt-4 text-lg font-poppins">
                                Tempat di mana setiap cerita memiliki tempat untuk berkembang.
                            </p>
                            <a href="#" class="mt-6 inline-block bg-white text-blue-500 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-300 transition duration-300">
                                Mulai Membaca
                            </a>
                        </div>
                    </header>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                <div class="bg-white p-6 rounded-lg shadow">
                    <h3 class="text-xl font-semibold">Kisah Cinta Pertama</h3>
                    <p class="mt-2">Sebuah kisah yang tak terlupakan tentang cinta pertama yang penuh kenangan.</p>
                    <a href="#" class="mt-4 inline-block text-blue-500">Baca Selengkapnya</a>
                </div>
                <div class="bg-white p-6 rounded-lg shadow">
                    <h3 class="text-xl font-semibold">Cinta Sejati</h3>
                    <p class="mt-2">Cinta sejati adalah ketika dua hati saling melengkapi satu sama lain.</p>
                    <a href="#" class="mt-4 inline-block text-blue-500">Baca Selengkapnya</a>
                </div>
                <div class="bg-white p-6 rounded-lg shadow">
                    <h3 class="text-xl font-semibold">Cinta yang Hilang</h3>
                    <p class="mt-2">Kisah tentang kehilangan dan bagaimana cinta bisa mengubah segalanya.</p>
                    <a href="#" class="mt-4 inline-block text-blue-500">Baca Selengkapnya</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-6">
        <div class="max-w-7xl mx-auto text-center">
            <p>&copy; 2024 Adi Developer.</p>
        </div>
    </footer>

    <!-- JavaScript -->
    <script>
        const carousel = document.getElementById('carousel');
        const slides = carousel.children;
        const totalSlides = slides.length;

        let currentIndex = 0;

        const updateCarousel = () => {
            const offset = currentIndex * -100;
            carousel.style.transform = `translateX(${offset}%)`;
        };

        const showNextSlide = () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateCarousel();
        };

        // Auto-slide every 3 seconds
        setInterval(showNextSlide, 3000);
    </script>
</body>
</html>
