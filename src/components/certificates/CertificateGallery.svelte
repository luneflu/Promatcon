<script>
  import { onMount } from "svelte";
  import Viewer from "viewerjs";
  import "viewerjs/dist/viewer.css";
  import { register } from "swiper/element/bundle";
  import Fa from "svelte-fa";
  import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

  const certificates = [
    {
      title: "Sertifikat ASME R",
      images: ["Sertifikat ASME R-1.jpg"],
      img: "Sertifikat ASME R-1.jpg",
    },
    {
      title: "Sertifikat ASME U",
      images: ["Sertifikat ASME U-1.jpg"],
      img: "Sertifikat ASME U-1.jpg",
    },
    {
      title: "Sertifikat HSE",
      images: ["Sertifikat HSE PTG-1.jpg"],
      img: "Sertifikat HSE PTG-1.jpg",
    },
    {
      title: "Sertifikat ISO 2024-2027",
      images: [
        "Sertifikat ISO PTG 2024-2027-1.jpg",
        "Sertifikat ISO PTG 2024-2027-2.jpg",
        "Sertifikat ISO PTG 2024-2027-3.jpg",
      ],
      img: "Sertifikat ISO PTG 2024-2027-1.jpg",
    },
    {
      title: "Sertifikat TKDN Gas Scrubber",
      images: ["Sertifikat TKDN Gas Scrubber-1.jpg"],
      img: "Sertifikat TKDN Gas Scrubber-1.jpg",
    },
    {
      title: "Sertifikat TKDN Pig Launcher-Receiver",
      images: ["Sertifikat TKDN Pig Launcher-Receiver-1.jpg"],
      img: "Sertifikat TKDN Pig Launcher-Receiver-1.jpg",
    },
    {
      title: "Sertifikat TKDN Separator",
      images: ["Sertifikat TKDN Separator-1.jpg"],
      img: "Sertifikat TKDN Separator-1.jpg",
    },
    {
      title: "Sertifikat TKDN Test Separator",
      images: ["Sertifikat TKDN Test Separator-1.jpg"],
      img: "Sertifikat TKDN Test Separator-1.jpg",
    },
    {
      title: "SPDA 2026-2027",
      images: [
        "SPDA PTG 2026-2027-1.jpg",
        "SPDA PTG 2026-2027-2.jpg",
        "SPDA PTG 2026-2027-3.jpg",
        "SPDA PTG 2026-2027-4.jpg",
        "SPDA PTG 2026-2027-5.jpg",
      ],
      img: "SPDA PTG 2026-2027-1.jpg",
    },
  ];

  let swiperEl;
  let viewerContainer;
  let viewer;
  const allImagesList = certificates.flatMap((c) =>
    c.images.map((src) => ({ src, title: c.title }))
  );

  const viewerOptions = {
    url: "data-src",
    toolbar: {
      zoomIn: 1, zoomOut: 1, oneToOne: 1, reset: 1,
      prev: 1, play: { show: 1, size: "large" }, next: 1,
      rotateLeft: 1, rotateRight: 1, flipHorizontal: 1, flipVertical: 1,
    },
  };

  function initViewers() {
    if (viewer) viewer.destroy();
    if (viewerContainer) {
      viewer = new Viewer(viewerContainer, viewerOptions);
    }
  }

  onMount(() => {
    register();

    // Init swiper via JS to support breakpoints object (not JSON string)
    Object.assign(swiperEl, {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      pagination: { clickable: true },
      breakpoints: {
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      },
    });
    swiperEl.initialize();

    initViewers();

    document.addEventListener("astro:page-load", initViewers);
    return () => {
      document.removeEventListener("astro:page-load", initViewers);
      if (viewer) viewer.destroy();
    };
  });

  const prevSlide = () => swiperEl?.swiper?.slidePrev();
  const nextSlide = () => swiperEl?.swiper?.slideNext();
</script>

<div class="relative">
  <div bind:this={viewerContainer} class="hidden">
    {#each allImagesList as item}
      <img
        src={`/images/Legalitas & Certificate Perusahaan/${item.src}`}
        data-src={`/images/Legalitas & Certificate Perusahaan/${item.src}`}
        alt={item.title}
      />
    {/each}
  </div>

  <button
    on:click={prevSlide}
    aria-label="Previous slide"
    class="btn btn-circle btn-sm md:btn-md absolute -left-4 md:-left-6 top-[calc(50%-1.5rem)] -translate-y-1/2 z-10 bg-base-100/80 hover:bg-base-100 border-base-300 shadow-md"
  >
    <Fa icon={faChevronLeft} class="w-4 h-4 md:w-5 md:h-5" />
  </button>

  <button
    on:click={nextSlide}
    aria-label="Next slide"
    class="btn btn-circle btn-sm md:btn-md absolute -right-4 md:-right-6 top-[calc(50%-1.5rem)] -translate-y-1/2 z-10 bg-base-100/80 hover:bg-base-100 border-base-300 shadow-md"
  >
    <Fa icon={faChevronRight} class="w-4 h-4 md:w-5 md:h-5" />
  </button>

  <swiper-container
    bind:this={swiperEl}
    class="w-full pb-12 pt-2 custom-swiper"
    init="false"
  >
    {#each allImagesList as item, i}
      <swiper-slide class="h-auto">
        <div
          class="bg-base-200/50 border-base-300 flex h-full flex-col items-center justify-between gap-4 rounded-lg border p-6 text-center hover:bg-base-200 transition-colors"
        >
          <div
            class="w-full aspect-[1/1.4] relative overflow-hidden rounded border border-base-300 cursor-pointer group"
            on:click={() => {
              if (viewer) {
                viewer.view(i);
              }
            }}
            on:keydown={(e) => {
              if (e.key === "Enter" && viewer) {
                viewer.view(i);
              }
            }}
            role="button"
            tabindex="0"
          >
            <img
              src={`/images/Legalitas & Certificate Perusahaan/${item.src}`}
              alt={item.title}
              class="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div
              class="absolute inset-0 bg-base-300/0 group-hover:bg-base-300/20 transition-colors flex items-center justify-center"
            >
            </div>
          </div>
          <h3 class="text-base-content text-sm font-bold leading-tight">
            {item.title}
          </h3>
        </div>
      </swiper-slide>
    {/each}
  </swiper-container>
</div>

<style>
  .custom-swiper {
    --swiper-pagination-color: var(--fallback-p, oklch(var(--p)));
    --swiper-pagination-bottom: 0px;
  }
  :global(.custom-swiper::part(pagination)) {
    position: relative;
    margin-top: 1rem;
  }
</style>
