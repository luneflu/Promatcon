<script>
  import { onMount } from "svelte";
  import ApexTree from "apextree";

  let treeContainer = $state(null);

  const data = {
    id: "root",
    name: "DIREKTUR",
    data: {
      name: "DIREKTUR",
      role: "ADI PRIYADI",
      theme: "primary",
    },
    children: [
      {
        id: "1",
        name: "Secretary",
        data: {
          name: "Secretary",
          role: "",
          theme: "secondary",
        },
        children: [],
      },
      {
        id: "2",
        name: "HR & GA Mgr.",
        data: {
          name: "HR & GA Mgr.",
          role: "",
          theme: "secondary",
        },
        children: [
          {
            id: "2-1",
            name: "HR & GA Staff",
            data: { name: "HR & GA Staff", role: "" },
            children: [],
          },
          {
            id: "2-2",
            name: "GA Operasional",
            data: { name: "GA Operasional", role: "" },
            children: [],
          },
        ],
      },
      {
        id: "3",
        name: "Gas Comp. Sis Mgr.",
        data: {
          name: "Gas Comp. Sis Mgr.",
          role: "",
          theme: "secondary",
        },
        children: [
          {
            id: "3-1",
            name: "Comp. Eng.",
            data: { name: "Comp. Eng.", role: "" },
            children: [],
          },
          {
            id: "3-2",
            name: "Comp. Staff",
            data: { name: "Comp. Staff", role: "" },
            children: [],
          },
          {
            id: "3-3",
            name: "Comp. Mekanik & Operator (SITE)",
            data: { name: "Comp. Mekanik & Operator (SITE)", role: "" },
            children: [],
          },
        ],
      },
      {
        id: "4",
        name: "Finance Mgr.",
        data: {
          name: "Finance Mgr.",
          role: "",
          theme: "secondary",
        },
        children: [
          {
            id: "4-1",
            name: "Finance Staff",
            data: { name: "Finance Staff", role: "" },
            children: [],
          },
        ],
      },
      {
        id: "5",
        name: "HSE Mgr.",
        data: {
          name: "HSE Mgr.",
          role: "",
          theme: "secondary",
        },
        children: [],
      },
      {
        id: "6",
        name: "Workshop Mgr.",
        data: {
          name: "Workshop Mgr.",
          role: "",
          theme: "secondary",
        },
        children: [],
      },
      {
        id: "7",
        name: "Operation Mgr.",
        data: {
          name: "Operation Mgr.",
          role: "",
          theme: "secondary",
        },
        children: [
          {
            id: "7-1",
            name: "Project Eng.",
            data: { name: "Project Eng.", role: "" },
            children: [],
          },
          {
            id: "7-2",
            name: "Project Secretary",
            data: { name: "Project Secretary", role: "" },
            children: [],
          },
        ],
      },
      {
        id: "8",
        name: "Engineer Mgr.",
        data: {
          name: "Engineer Mgr.",
          role: "",
          theme: "secondary",
        },
        children: [
          {
            id: "8-1",
            name: "Engineer",
            data: { name: "Engineer", role: "" },
            children: [],
          },
          {
            id: "8-2",
            name: "Design Eng",
            data: { name: "Design Eng", role: "" },
            children: [],
          },
        ],
      },
      {
        id: "9",
        name: "Project Control",
        data: {
          name: "Project Control",
          role: "",
          theme: "secondary",
        },
        children: [
          {
            id: "9-1",
            name: "PC Staff",
            data: { name: "PC Staff", role: "" },
            children: [],
          },
        ],
      },
      {
        id: "10",
        name: "Proc Purchase Mgr.",
        data: {
          name: "Proc Purchase Mgr.",
          role: "",
          theme: "secondary",
        },
        children: [
          {
            id: "10-1",
            name: "Proc/Purchase Staff",
            data: { name: "Proc/Purchase Staff", role: "" },
            children: [],
          },
        ],
      },
      {
        id: "11",
        name: "Process Eng. Sales Mgr.",
        data: {
          name: "Process Eng. Sales Mgr.",
          role: "",
          theme: "secondary",
        },
        children: [
          {
            id: "11-1",
            name: "Commercial",
            data: { name: "Commercial", role: "" },
            children: [],
          },
        ],
      },
    ],
  };

  const options = {
    height: "auto",
    nodeWidth: 320,
    nodeHeight: 100,
    childrenSpacing: 120,
    siblingSpacing: 50,
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

      return `<div style='background: ${bg}; border: 2px solid ${border}; border-radius: var(--rounded-box, 1rem); padding: 1rem; text-align: center; height: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: center;'>
          <p style='margin: 0 0 0.5rem 0; font-size: 1.1rem; font-weight: bold; color: ${nameColor};'>${content.name || ""}</p>
          <p style='margin: 0; font-size: 1rem; color: ${roleColor}; opacity: 0.9;'>${content.role || ""}</p>
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

      treeContainer.style.height = "100%";
      treeContainer.style.width = "100%";

      const svg = treeContainer.querySelector("svg");
      if (svg) {
        svg.removeAttribute("width");
        svg.removeAttribute("height");
        svg.style.width = "100%";
        svg.style.height = "100%";
        svg.style.minHeight = "100%";
        svg.style.display = "block";
      }

      const watermark = treeContainer.querySelector(
        "[data-apexcharts-watermark]",
      );
      if (watermark) watermark.remove();
    }
  });
</script>

<div class="w-full h-[1000px] overflow-auto flex justify-center items-stretch bg-base-200/50 rounded-box p-4 border border-base-300">
  <div bind:this={treeContainer} class="w-full h-full min-w-max"></div>
</div>
