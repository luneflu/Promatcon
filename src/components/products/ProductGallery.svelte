<script>
  import { onMount, onDestroy } from "svelte";
  import Viewer from "viewerjs";
  import "viewerjs/dist/viewer.css";

  const gasCompressorImages = [
    { title: "Rental Gas Compressor - EMP (1)", category: "gas-compressor", image: "/images/Gas Compressor/Rental Gas Compressor - EMP (1).webp" },
    { title: "Rental Gas Compressor - EMP (2)", category: "gas-compressor", image: "/images/Gas Compressor/Rental Gas Compressor - EMP (2).webp" },
    { title: "Rental Gas Compressor - EMP (3)", category: "gas-compressor", image: "/images/Gas Compressor/Rental Gas Compressor - EMP (3).webp" },
    { title: "Rental Gas Compressor - EMP (4)", category: "gas-compressor", image: "/images/Gas Compressor/Rental Gas Compressor - EMP (4).webp" },
    { title: "Rental Gas Compressor - EMP (5)", category: "gas-compressor", image: "/images/Gas Compressor/Rental Gas Compressor - EMP (5).webp" },
    { title: "Rental Gas Compressor - EMP (6)", category: "gas-compressor", image: "/images/Gas Compressor/Rental Gas Compressor - EMP (6).webp" },
    { title: "Rental Gas Compressor - Tambun (1)", category: "gas-compressor", image: "/images/Gas Compressor/Rental Gas Compressor - Tambun (1).webp" },
    { title: "Rental Gas Compressor - Tambun (2)", category: "gas-compressor", image: "/images/Gas Compressor/Rental Gas Compressor - Tambun (2).webp" },
    { title: "Rental Gas Compressor - Tambun (3)", category: "gas-compressor", image: "/images/Gas Compressor/Rental Gas Compressor - Tambun (3).webp" },
    { title: "Rental Gas Compressor - Tambun (4)", category: "gas-compressor", image: "/images/Gas Compressor/Rental Gas Compressor - Tambun (4).webp" },
    { title: "Rental Gas Compressor - Tambun (5)", category: "gas-compressor", image: "/images/Gas Compressor/Rental Gas Compressor - Tambun (5).webp" },
    { title: "Rental Gas Compressor - Tambun (6)", category: "gas-compressor", image: "/images/Gas Compressor/Rental Gas Compressor - Tambun (6).webp" }
  ];

  const pressureVesselImages = [
    { title: "Dehydration Unit Package - Bambu Besar 001", category: "pressure-vessel", image: "/images/Pressure Vessel/Dehydration Unit Package - Bambu Besar 001.webp" },
    { title: "Dehydration Unit Package - Bambu Besar 002", category: "pressure-vessel", image: "/images/Pressure Vessel/Dehydration Unit Package - Bambu Besar 002.webp" },
    { title: "Gas Scrubber - Grissik (1)", category: "pressure-vessel", image: "/images/Pressure Vessel/Gas Scrubber - Grissik (1).webp" },
    { title: "Gas Scrubber - Grissik (2)", category: "pressure-vessel", image: "/images/Pressure Vessel/Gas Scrubber - Grissik (2).webp" },
    { title: "Gas Scrubber - Grissik (3)", category: "pressure-vessel", image: "/images/Pressure Vessel/Gas Scrubber - Grissik (3).webp" },
    { title: "Gas Scrubber - Grissik (4)", category: "pressure-vessel", image: "/images/Pressure Vessel/Gas Scrubber - Grissik (4).webp" },
    { title: "Gas Scrubber - Grissik (5)", category: "pressure-vessel", image: "/images/Pressure Vessel/Gas Scrubber - Grissik (5).webp" },
    { title: "Hydrocyclone 001", category: "pressure-vessel", image: "/images/Pressure Vessel/Hydrocyclone 001.webp" },
    { title: "Hydrocyclone 002", category: "pressure-vessel", image: "/images/Pressure Vessel/Hydrocyclone 002.webp" },
    { title: "Hydrocyclone 003", category: "pressure-vessel", image: "/images/Pressure Vessel/Hydrocyclone 003.webp" },
    { title: "Knock Out Drum - Sembera 001", category: "pressure-vessel", image: "/images/Pressure Vessel/Knock Out Drum - Sembera 001.webp" },
    { title: "LP Test Separator - Salawati 001", category: "pressure-vessel", image: "/images/Pressure Vessel/LP Test Separator - Salawati 001.webp" },
    { title: "LP Test Separator - Salawati 002", category: "pressure-vessel", image: "/images/Pressure Vessel/LP Test Separator - Salawati 002.webp" },
    { title: "LP Test Separator - Salawati 003", category: "pressure-vessel", image: "/images/Pressure Vessel/LP Test Separator - Salawati 003.webp" },
    { title: "LP Test Separator - Salawati 004", category: "pressure-vessel", image: "/images/Pressure Vessel/LP Test Separator - Salawati 004.webp" },
    { title: "Nutshell Filter - Prabumulih 001", category: "pressure-vessel", image: "/images/Pressure Vessel/Nutshell Filter - Prabumulih 001.webp" },
    { title: "Nutshell Filter - Prabumulih 002", category: "pressure-vessel", image: "/images/Pressure Vessel/Nutshell Filter - Prabumulih 002.webp" },
    { title: "Pig Launcher Pig Receiver - Sangasanga 1", category: "pressure-vessel", image: "/images/Pressure Vessel/Pig Launcher Pig Receiver - Sangasanga 1.webp" },
    { title: "Pig Launcher Pig Receiver - Sangasanga 2", category: "pressure-vessel", image: "/images/Pressure Vessel/Pig Launcher Pig Receiver - Sangasanga 2.webp" },
    { title: "Pig Launcher Pig Receiver - Sangasanga 3", category: "pressure-vessel", image: "/images/Pressure Vessel/Pig Launcher Pig Receiver - Sangasanga 3.webp" },
    { title: "Pig Launcher Pig Receiver - Sangasanga 4", category: "pressure-vessel", image: "/images/Pressure Vessel/Pig Launcher Pig Receiver - Sangasanga 4.webp" },
    { title: "Pig Launcher Pig Receiver - Sangasanga 5", category: "pressure-vessel", image: "/images/Pressure Vessel/Pig Launcher Pig Receiver - Sangasanga 5.webp" },
    { title: "Separator - MEDCO PROJECT (1)", category: "pressure-vessel", image: "/images/Pressure Vessel/Separator - MEDCO PROJECT (1).webp" },
    { title: "Separator - MEDCO PROJECT (2)", category: "pressure-vessel", image: "/images/Pressure Vessel/Separator - MEDCO PROJECT (2).webp" },
    { title: "Separator - MEDCO PROJECT (3)", category: "pressure-vessel", image: "/images/Pressure Vessel/Separator - MEDCO PROJECT (3).webp" },
    { title: "Separator - MEDCO PROJECT (4)", category: "pressure-vessel", image: "/images/Pressure Vessel/Separator - MEDCO PROJECT (4).webp" },
    { title: "Separator - MEDCO PROJECT (5)", category: "pressure-vessel", image: "/images/Pressure Vessel/Separator - MEDCO PROJECT (5).webp" }
  ];

  const products = [...gasCompressorImages, ...pressureVesselImages];
  
  let activeCategory = $state("gas-compressor");
  let viewer = null;
  let galleryEl = $state(null);
  
  $effect(() => {
    if (galleryEl) {
      if (viewer) viewer.destroy();
      
      viewer = new Viewer(galleryEl, {
        filter(image) {
          const card = image.closest('.product-card');
          return card ? card.dataset.category === activeCategory : true;
        }
      });
    }
  });

  onDestroy(() => {
    if (viewer) {
      viewer.destroy();
    }
  });

  function handleImageClick(index) {
    if (viewer) {
      viewer.show();
      viewer.view(index);
    }
  }
</script>

<div class="flex border-b border-base-content/10 mb-8 justify-center gap-4">
    <button 
        class="whitespace-nowrap px-6 py-4 text-sm font-medium cursor-pointer transition-colors {activeCategory === 'gas-compressor' ? 'text-primary border-b-2 border-primary' : 'text-base-content/70 hover:text-primary'}"
        onclick={() => activeCategory = "gas-compressor"}
    >
        Gas Compressor
    </button>
    <button 
        class="whitespace-nowrap px-6 py-4 text-sm font-medium cursor-pointer transition-colors {activeCategory === 'pressure-vessel' ? 'text-primary border-b-2 border-primary' : 'text-base-content/70 hover:text-primary'}"
        onclick={() => activeCategory = "pressure-vessel"}
    >
        Pressure Vessel
    </button>
</div>

<div bind:this={galleryEl} class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each products as product, i}
        <button 
            type="button"
            data-category={product.category}
            class="product-card group relative aspect-[4/3] rounded-lg overflow-hidden bg-base-200 border border-base-content/10 cursor-pointer text-left block w-full p-0 {product.category === activeCategory ? '' : 'hidden'}"
            onclick={() => {
                const visibleImages = products.filter(p => p.category === activeCategory);
                const visibleIndex = visibleImages.findIndex(p => p.image === product.image);
                if (visibleIndex !== -1) handleImageClick(visibleIndex);
            }}
        >
            <img 
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                alt={product.title} 
                src={product.image}
                loading="lazy"
            />
            <div class="absolute inset-0 bg-neutral/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none">
                <h3 class="text-xl font-medium text-neutral-content mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {product.title}
                </h3>
                <div class="mt-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-primary-content">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </div>
            </div>
        </button>
    {/each}
</div>
