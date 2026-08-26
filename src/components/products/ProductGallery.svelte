<script>
  import { onDestroy } from "svelte";
  import Viewer from "viewerjs";
  import "viewerjs/dist/viewer.css";
  import Fa from "svelte-fa";
  import {
    faRulerCombined,
    faWarehouse,
    faIndustry,
    faPlaneDeparture,
    faAnchor,
    faArrowsUpToLine,
    faLayerGroup,
    faWeightHanging,
    faCogs,
    faCut,
    faBolt,
    faMagnifyingGlassPlus,
  } from "@fortawesome/free-solid-svg-icons";
  import { useTranslations } from "../../i18n/ui";

  let { locale = "en" } = $props();
  const t = useTranslations(locale);

  const gasCompressorImages = [
    {
      title: "Rental Gas Compressor - EMP (1)",
      category: "gas-compressor",
      image: "/images/Gas Compressor/Rental Gas Compressor - EMP (1).webp",
    },
    {
      title: "Rental Gas Compressor - EMP (2)",
      category: "gas-compressor",
      image: "/images/Gas Compressor/Rental Gas Compressor - EMP (2).webp",
    },
    {
      title: "Rental Gas Compressor - EMP (3)",
      category: "gas-compressor",
      image: "/images/Gas Compressor/Rental Gas Compressor - EMP (3).webp",
    },
    {
      title: "Rental Gas Compressor - EMP (4)",
      category: "gas-compressor",
      image: "/images/Gas Compressor/Rental Gas Compressor - EMP (4).webp",
    },
    {
      title: "Rental Gas Compressor - EMP (5)",
      category: "gas-compressor",
      image: "/images/Gas Compressor/Rental Gas Compressor - EMP (5).webp",
    },
    {
      title: "Rental Gas Compressor - EMP (6)",
      category: "gas-compressor",
      image: "/images/Gas Compressor/Rental Gas Compressor - EMP (6).webp",
    },
    {
      title: "Rental Gas Compressor - Tambun (1)",
      category: "gas-compressor",
      image: "/images/Gas Compressor/Rental Gas Compressor - Tambun (1).webp",
    },
    {
      title: "Rental Gas Compressor - Tambun (2)",
      category: "gas-compressor",
      image: "/images/Gas Compressor/Rental Gas Compressor - Tambun (2).webp",
    },
    {
      title: "Rental Gas Compressor - Tambun (3)",
      category: "gas-compressor",
      image: "/images/Gas Compressor/Rental Gas Compressor - Tambun (3).webp",
    },
    {
      title: "Rental Gas Compressor - Tambun (4)",
      category: "gas-compressor",
      image: "/images/Gas Compressor/Rental Gas Compressor - Tambun (4).webp",
    },
    {
      title: "Rental Gas Compressor - Tambun (5)",
      category: "gas-compressor",
      image: "/images/Gas Compressor/Rental Gas Compressor - Tambun (5).webp",
    },
    {
      title: "Rental Gas Compressor - Tambun (6)",
      category: "gas-compressor",
      image: "/images/Gas Compressor/Rental Gas Compressor - Tambun (6).webp",
    },
  ];

  const pressureVesselImages = [
    {
      title: "Dehydration Unit Package - Bambu Besar 001",
      category: "pressure-vessel",
      image:
        "/images/Pressure Vessel/Dehydration Unit Package - Bambu Besar 001.webp",
    },
    {
      title: "Dehydration Unit Package - Bambu Besar 002",
      category: "pressure-vessel",
      image:
        "/images/Pressure Vessel/Dehydration Unit Package - Bambu Besar 002.webp",
    },
    {
      title: "Gas Scrubber - Grissik (1)",
      category: "pressure-vessel",
      image: "/images/Pressure Vessel/Gas Scrubber - Grissik (1).webp",
    },
    {
      title: "Gas Scrubber - Grissik (2)",
      category: "pressure-vessel",
      image: "/images/Pressure Vessel/Gas Scrubber - Grissik (2).webp",
    },
    {
      title: "Gas Scrubber - Grissik (3)",
      category: "pressure-vessel",
      image: "/images/Pressure Vessel/Gas Scrubber - Grissik (3).webp",
    },
    {
      title: "Gas Scrubber - Grissik (4)",
      category: "pressure-vessel",
      image: "/images/Pressure Vessel/Gas Scrubber - Grissik (4).webp",
    },
    {
      title: "Gas Scrubber - Grissik (5)",
      category: "pressure-vessel",
      image: "/images/Pressure Vessel/Gas Scrubber - Grissik (5).webp",
    },
    {
      title: "Hydrocyclone 001",
      category: "pressure-vessel",
      image: "/images/Pressure Vessel/Hydrocyclone 001.webp",
    },
    {
      title: "Hydrocyclone 002",
      category: "pressure-vessel",
      image: "/images/Pressure Vessel/Hydrocyclone 002.webp",
    },
    {
      title: "Hydrocyclone 003",
      category: "pressure-vessel",
      image: "/images/Pressure Vessel/Hydrocyclone 003.webp",
    },
    {
      title: "Knock Out Drum - Sembera 001",
      category: "pressure-vessel",
      image: "/images/Pressure Vessel/Knock Out Drum - Sembera 001.webp",
    },
    {
      title: "LP Test Separator - Salawati 001",
      category: "pressure-vessel",
      image: "/images/Pressure Vessel/LP Test Separator - Salawati 001.webp",
    },
    {
      title: "LP Test Separator - Salawati 002",
      category: "pressure-vessel",
      image: "/images/Pressure Vessel/LP Test Separator - Salawati 002.webp",
    },
    {
      title: "LP Test Separator - Salawati 003",
      category: "pressure-vessel",
      image: "/images/Pressure Vessel/LP Test Separator - Salawati 003.webp",
    },
    {
      title: "LP Test Separator - Salawati 004",
      category: "pressure-vessel",
      image: "/images/Pressure Vessel/LP Test Separator - Salawati 004.webp",
    },
    {
      title: "Nutshell Filter - Prabumulih 001",
      category: "pressure-vessel",
      image: "/images/Pressure Vessel/Nutshell Filter - Prabumulih 001.webp",
    },
    {
      title: "Nutshell Filter - Prabumulih 002",
      category: "pressure-vessel",
      image: "/images/Pressure Vessel/Nutshell Filter - Prabumulih 002.webp",
    },
    {
      title: "Pig Launcher Pig Receiver - Sangasanga 1",
      category: "pressure-vessel",
      image:
        "/images/Pressure Vessel/Pig Launcher Pig Receiver - Sangasanga 1.webp",
    },
    {
      title: "Pig Launcher Pig Receiver - Sangasanga 2",
      category: "pressure-vessel",
      image:
        "/images/Pressure Vessel/Pig Launcher Pig Receiver - Sangasanga 2.webp",
    },
    {
      title: "Pig Launcher Pig Receiver - Sangasanga 3",
      category: "pressure-vessel",
      image:
        "/images/Pressure Vessel/Pig Launcher Pig Receiver - Sangasanga 3.webp",
    },
    {
      title: "Pig Launcher Pig Receiver - Sangasanga 4",
      category: "pressure-vessel",
      image:
        "/images/Pressure Vessel/Pig Launcher Pig Receiver - Sangasanga 4.webp",
    },
    {
      title: "Pig Launcher Pig Receiver - Sangasanga 5",
      category: "pressure-vessel",
      image:
        "/images/Pressure Vessel/Pig Launcher Pig Receiver - Sangasanga 5.webp",
    },
    {
      title: "Separator - MEDCO PROJECT (1)",
      category: "pressure-vessel",
      image: "/images/Pressure Vessel/Separator - MEDCO PROJECT (1).webp",
    },
    {
      title: "Separator - MEDCO PROJECT (2)",
      category: "pressure-vessel",
      image: "/images/Pressure Vessel/Separator - MEDCO PROJECT (2).webp",
    },
    {
      title: "Separator - MEDCO PROJECT (3)",
      category: "pressure-vessel",
      image: "/images/Pressure Vessel/Separator - MEDCO PROJECT (3).webp",
    },
    {
      title: "Separator - MEDCO PROJECT (4)",
      category: "pressure-vessel",
      image: "/images/Pressure Vessel/Separator - MEDCO PROJECT (4).webp",
    },
    {
      title: "Separator - MEDCO PROJECT (5)",
      category: "pressure-vessel",
      image: "/images/Pressure Vessel/Separator - MEDCO PROJECT (5).webp",
    },
  ];

  const products = [...gasCompressorImages, ...pressureVesselImages];

  let activeCategory = $state("gas-compressor");
  let viewer = null;
  let galleryEl = $state(null);

  $effect(() => {
    if (galleryEl && activeCategory !== "workshop-facility") {
      if (viewer) viewer.destroy();

      viewer = new Viewer(galleryEl, {
        filter(image) {
          const card = image.closest(".product-card");
          return card ? card.dataset.category === activeCategory : true;
        },
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

<!-- Tab Header -->
<div
  class="flex border-b border-base-content/10 mb-8 justify-center gap-2 sm:gap-4 overflow-x-auto"
>
  <button
    class="whitespace-nowrap px-4 sm:px-6 py-4 text-sm font-medium cursor-pointer transition-colors {activeCategory ===
    'gas-compressor'
      ? 'text-primary border-b-2 border-primary'
      : 'text-base-content/70 hover:text-primary'}"
    onclick={() => (activeCategory = "gas-compressor")}
  >
    {t("products.tab.gas")}
  </button>
  <button
    class="whitespace-nowrap px-4 sm:px-6 py-4 text-sm font-medium cursor-pointer transition-colors {activeCategory ===
    'pressure-vessel'
      ? 'text-primary border-b-2 border-primary'
      : 'text-base-content/70 hover:text-primary'}"
    onclick={() => (activeCategory = "pressure-vessel")}
  >
    {t("products.tab.vessel")}
  </button>
  <button
    class="whitespace-nowrap px-4 sm:px-6 py-4 text-sm font-medium cursor-pointer transition-colors {activeCategory ===
    'workshop-facility'
      ? 'text-primary border-b-2 border-primary'
      : 'text-base-content/70 hover:text-primary'}"
    onclick={() => (activeCategory = "workshop-facility")}
  >
    {t("products.tab.workshop")}
  </button>
</div>

<!-- Tab 1 & 2: Gallery -->
{#if activeCategory !== "workshop-facility"}
  <div
    bind:this={galleryEl}
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
  >
    {#each products as product}
      <button
        type="button"
        data-category={product.category}
        class="product-card group relative aspect-[4/3] rounded-lg overflow-hidden bg-base-200 border border-base-content/10 cursor-pointer text-left block w-full p-0 {product.category ===
        activeCategory
          ? ''
          : 'hidden'}"
        onclick={() => {
          const visibleImages = products.filter(
            (p) => p.category === activeCategory,
          );
          const visibleIndex = visibleImages.findIndex(
            (p) => p.image === product.image,
          );
          if (visibleIndex !== -1) handleImageClick(visibleIndex);
        }}
      >
        <img
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          alt={product.title}
          src={product.image}
          loading="lazy"
        />
        <div
          class="absolute inset-0 bg-neutral/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none"
        >
          <h3
            class="text-xl font-medium text-neutral-content mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            {product.title}
          </h3>
          <div
            class="mt-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity delay-100"
          >
            <Fa
              icon={faMagnifyingGlassPlus}
              class="w-4 h-4 text-primary-content"
            />
          </div>
        </div>
      </button>
    {/each}
  </div>
{:else}
  <!-- Tab 3: Workshop Facility Section -->
  <div class="space-y-12">
    <!-- Facility & Logistics Overview -->
    <section class="space-y-4">
      <h2
        class="text-2xl font-bold text-base-content border-b border-base-content/10 pb-2 flex items-center gap-2"
      >
        <Fa icon={faWarehouse} class="text-primary text-xl" />
        {t("products.workshop.title")}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          class="card bg-base-100 border border-base-content/10 p-6 shadow-sm"
        >
          <div
            class="flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider"
          >
            <Fa icon={faRulerCombined} />
            <span>{t("products.workshop.area")}</span>
          </div>
          <p class="text-3xl font-extrabold mt-2 text-base-content">8,500 m²</p>
          <p class="text-xs text-base-content/60 mt-1">
            {t("products.workshop.area.desc")}
          </p>
        </div>

        <div
          class="card bg-base-100 border border-base-content/10 p-6 shadow-sm"
        >
          <div
            class="flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider"
          >
            <Fa icon={faWarehouse} />
            <span>{t("products.workshop.roof")}</span>
          </div>
          <p class="text-3xl font-extrabold mt-2 text-base-content">5,000 m²</p>
          <p class="text-xs text-base-content/60 mt-1">
            {t("products.workshop.roof.desc")}
          </p>
        </div>

        <div
          class="card bg-base-100 border border-base-content/10 p-6 shadow-sm"
        >
          <div
            class="flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider"
          >
            <Fa icon={faIndustry} />
            <span>{t("products.workshop.output")}</span>
          </div>
          <p class="text-3xl font-extrabold mt-2 text-base-content">150 Ton</p>
          <p class="text-xs text-base-content/60 mt-1">
            {t("products.workshop.output.desc")}
          </p>
        </div>

        <div
          class="card bg-base-100 border border-base-content/10 p-6 shadow-sm"
        >
          <div
            class="flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-2"
          >
            <Fa icon={faPlaneDeparture} />
            <span>{t("products.workshop.logistics")}</span>
          </div>
          <p
            class="text-base font-bold text-base-content flex items-center gap-2"
          >
            <Fa icon={faPlaneDeparture} class="text-secondary text-xs" />
            {t("products.workshop.airport")}: 35.6 km
            <span class="text-xs font-normal text-base-content/60"
              >(22.1 mi)</span
            >
          </p>
          <p
            class="text-base font-bold text-base-content flex items-center gap-2 mt-1"
          >
            <Fa icon={faAnchor} class="text-secondary text-xs" />
            {t("products.workshop.seaport")}: 61.8 km
            <span class="text-xs font-normal text-base-content/60"
              >(38.4 mi)</span
            >
          </p>
        </div>
      </div>
    </section>

    <!-- Capacity & Fabrication Limits -->
    <section class="space-y-4">
      <h2
        class="text-2xl font-bold text-base-content border-b border-base-content/10 pb-2 flex items-center gap-2"
      >
        <Fa icon={faCogs} class="text-primary text-xl" />
        {t("products.workshop.capacity")}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="card bg-base-200 border border-base-content/10 p-6">
          <div
            class="flex items-center gap-2 text-base-content font-bold text-lg mb-2"
          >
            <Fa icon={faArrowsUpToLine} class="text-secondary" />
            <h3>{t("products.workshop.height")}</h3>
          </div>
          <p class="text-4xl font-black text-secondary">15 m</p>
          <p class="text-sm text-base-content/70 mt-2">
            {t("products.workshop.height.desc")}
          </p>
        </div>

        <div class="card bg-base-200 border border-base-content/10 p-6">
          <div
            class="flex items-center gap-2 text-base-content font-bold text-lg mb-2"
          >
            <Fa icon={faLayerGroup} class="text-secondary" />
            <h3>{t("products.workshop.thickness")}</h3>
          </div>
          <p class="text-4xl font-black text-secondary">60 m</p>
          <p class="text-sm text-base-content/70 mt-2">
            {t("products.workshop.thickness.desc")}
          </p>
        </div>

        <div class="card bg-base-200 border border-base-content/10 p-6">
          <div
            class="flex items-center gap-2 text-base-content font-bold text-lg mb-2"
          >
            <Fa icon={faWeightHanging} class="text-secondary" />
            <h3>{t("products.workshop.fleet")}</h3>
          </div>
          <p class="text-xl font-bold text-base-content">
            20 Ton <span class="text-sm font-normal">{t("products.workshop.fleet.sub")}</span>
          </p>
          <p class="text-sm text-base-content/70 mt-2">
            {t("products.workshop.fleet.desc")}
          </p>
        </div>
      </div>
    </section>

    <!-- Equipment Specifications -->
    <section class="space-y-4">
      <h2
        class="text-2xl font-bold text-base-content border-b border-base-content/10 pb-2 flex items-center gap-2"
      >
        <Fa icon={faCut} class="text-primary text-xl" />
        {t("products.workshop.machinery")}
      </h2>
      <div
        class="overflow-x-auto rounded-box border border-base-content/10 bg-base-100 shadow-sm"
      >
        <table class="table w-full [&_td]:align-middle [&_th]:align-middle">
          <thead class="bg-base-200 text-base-content">
            <tr>
              <th class="w-1/4">{t("products.workshop.machinery.cat")}</th>
              <th class="w-1/3">{t("products.workshop.machinery.model")}</th>
              <th>{t("products.workshop.machinery.spec")}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="font-bold text-primary">
                <div class="flex items-center gap-2">
                  <Fa icon={faCogs} class="text-sm shrink-0" />
                  <span>{t("products.workshop.roll.bend")}</span>
                </div>
              </td>
              <td class="font-semibold">Wills-Rolling</td>
              <td>
                <div class="flex flex-wrap gap-1.5">
                  <span class="badge badge-outline whitespace-nowrap"
                    >{t("products.workshop.roll.bend.thick")} 32mm</span
                  >
                  <span class="badge badge-outline whitespace-nowrap"
                    >{t("products.workshop.roll.bend.width")} 250mm</span
                  >
                </div>
              </td>
            </tr>
            <tr>
              <td class="font-bold text-primary">
                <div class="flex items-center gap-2">
                  <Fa icon={faCogs} class="text-sm shrink-0" />
                  <span>{t("products.workshop.roll.turn")}</span>
                </div>
              </td>
              <td class="font-semibold"
                >60 Ton K-10-2011<br />45 Ton AMT V68698<br />10 Ton</td
              >
              <td
                >{t("products.workshop.roll.turn.desc")}</td
              >
            </tr>
            <tr>
              <td class="font-bold text-primary">
                <div class="flex items-center gap-2">
                  <Fa icon={faCut} class="text-sm shrink-0" />
                  <span>{t("products.workshop.cut")}</span>
                </div>
              </td>
              <td class="font-semibold">Powermax 1650 G3 Series</td>
              <td>550 scph; 9.2 cfm (260 l/min) at 90 psi (6.2 bar)</td>
            </tr>
            <tr>
              <td class="font-bold text-primary">
                <div class="flex items-center gap-2">
                  <Fa icon={faBolt} class="text-sm shrink-0" />
                  <span>{t("products.workshop.weld")}</span>
                </div>
              </td>
              <td class="font-semibold">Lincoln, Miller, Sanrex Fleet</td>
              <td>
                <ul
                  class="list-disc list-inside space-y-1 text-sm text-base-content/80"
                >
                  <li><strong>Lincoln Idealarc DC-1000:</strong> 10 {t("products.workshop.weld.unit")}</li>
                  <li><strong>Miller Gold Star 602:</strong> 3 {t("products.workshop.weld.unit")}</li>
                  <li><strong>Sanrex SD-500 2 CY:</strong> 6 {t("products.workshop.weld.unit")}</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
{/if}
