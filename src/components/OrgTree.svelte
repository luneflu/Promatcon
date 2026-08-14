<script>
  import { onMount } from "svelte";
  import ApexTree from "apextree";

  let treeContainer = $state(null);

  const data = {
    id: "root",
    name: "President Director",
    data: { name: "President Director", role: "Adi Priyadi", theme: "primary" },
    children: [
      {
        id: "1",
        name: "Engineering Director",
        data: {
          name: "Engineering Director",
          role: "Ben Gadjuli",
          theme: "secondary",
        },
        children: [
          {
            id: "1-1",
            name: "Engineering Manager",
            data: { name: "Engineering Manager", role: "Felix Trinaksa" },
            children: [],
          },
        ],
      },
      {
        id: "2",
        name: "Operation Director",
        data: {
          name: "Operation Director",
          role: "Gunarso Sudoro",
          theme: "secondary",
        },
        children: [
          {
            id: "2-1",
            name: "Procurement Manager",
            data: { name: "Procurement Manager", role: "David Martandi" },
            children: [],
          },
          {
            id: "2-2",
            name: "H R D",
            data: { name: "H R D", role: "Suwito" },
            children: [],
          },
        ],
      },
      {
        id: "3",
        name: "Finance Director",
        data: {
          name: "Finance Director",
          role: "Dian Hariyani",
          theme: "secondary",
        },
        children: [
          {
            id: "3-1",
            name: "Finance Manager",
            data: { name: "Finance Manager", role: "Ventje" },
            children: [],
          },
          {
            id: "3-2",
            name: "Marketing Manager",
            data: { name: "Marketing Manager", role: "", theme: "accent" },
            children: [
              {
                id: "m-1",
                name: "Compressor Division",
                data: { name: "Compressor Division", role: "Adi Priyanto" },
                children: [],
              },
              {
                id: "m-2",
                name: "Process Division",
                data: { name: "Process Division", role: "Budi Nainggolan" },
                children: [],
              },
              {
                id: "m-3",
                name: "Chemical Division",
                data: { name: "Chemical Division", role: "Hendro Rahardjo" },
                children: [],
              },
              {
                id: "m-4",
                name: "Civil Division",
                data: { name: "Civil Division", role: "Thomson & Darmawan" },
                children: [],
              },
              {
                id: "m-5",
                name: "Pipe and Fittings Trading",
                data: { name: "Pipe and Fittings Trading", role: "Singgih" },
                children: [],
              },
              {
                id: "m-6",
                name: "Control System Integration",
                data: {
                  name: "Control System Integration",
                  role: "Anhar Djamal",
                },
                children: [],
              },
            ],
          },
        ],
      },
    ],
  };

  const options = {
    width: "100%",
    height: "100%",
    nodeWidth: 200,
    nodeHeight: 60,
    childrenSpacing: 80,
    siblingSpacing: 30,
    direction: "top",
    contentKey: "data",
    groupLeafNodes: true,
    groupLeafNodesSpacing: 15,
    nodeTemplate: (content) => {
      let bg = "oklch(var(--b1))";
      let border = "oklch(var(--b3))";
      let nameColor = "oklch(var(--p))";
      let roleColor = "oklch(var(--bc))";

      if (content.theme === "primary") {
        bg = "oklch(var(--p))";
        border = "oklch(var(--p))";
        nameColor = "oklch(var(--pc))";
        roleColor = "oklch(var(--pc))";
      } else if (content.theme === "secondary") {
        bg = "oklch(var(--s))";
        border = "oklch(var(--s))";
        nameColor = "oklch(var(--sc))";
        roleColor = "oklch(var(--sc))";
      } else if (content.theme === "accent") {
        bg = "oklch(var(--a))";
        border = "oklch(var(--a))";
        nameColor = "oklch(var(--ac))";
        roleColor = "oklch(var(--ac))";
      }

      return `<div style='background: ${bg}; border: 1px solid ${border}; border-radius: var(--rounded-box, 1rem); padding: 0.75rem; text-align: center; height: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: center;'>
          <p style='margin: 0 0 0.25rem 0; font-size: 0.75rem; font-weight: bold; color: ${nameColor};'>${content.name || ""}</p>
          <p style='margin: 0; font-size: 0.875rem; color: ${roleColor}; opacity: 0.9;'>${content.role || ""}</p>
        </div>`;
    },
    enableExpandCollapse: true,
  };

  onMount(() => {
    if (treeContainer) {
      // @ts-ignore - apexTree typings might be off
      const TreeConstructor =
        typeof ApexTree === "function" ? ApexTree : ApexTree.default;
      const tree = new TreeConstructor(treeContainer, options);
      const graph = tree.render(data);

      setTimeout(() => {
        graph.fitScreen();
      }, 100);

      setTimeout(() => {
        const watermark = document.querySelector("[data-apexcharts-watermark]");
        if (watermark) watermark.remove();
      }, 300);
    }
  });
</script>

<div class="w-full overflow-x-auto">
  <div bind:this={treeContainer} class="min-w-[800px] h-full min-h-[600px]"></div>
</div>
