<script lang="ts">
  interface ExperienceItem {
    No: string | number;
    Category: string;
    Client: string;
    'Project Name': string;
    Year: string | number;
  }

  type SortKey = keyof ExperienceItem;
  type SortDir = 'asc' | 'desc';

  let { data = [] }: { data?: ExperienceItem[] } = $props();

  const PAGE_SIZE = 15;
  const categories = ['All', 'Compressor', 'Pressure Vessel'];

  let globalFilter = $state('');
  let categoryFilter = $state('All');
  let sortKey = $state<SortKey>('No');
  let sortDir = $state<SortDir>('asc');
  let pageIndex = $state(0);

  function parseNo(v: string | number) { return parseInt(String(v), 10) || 0; }
  function parseYear(v: string | number) { const m = String(v).match(/\d{4}/); return m ? parseInt(m[0], 10) : 0; }

  const filtered = $derived(() => {
    const q = globalFilter.toLowerCase();
    return data.filter(row => {
      if (categoryFilter !== 'All' && row.Category !== categoryFilter) return false;
      if (!q) return true;
      return Object.values(row).some(v => String(v).toLowerCase().includes(q));
    });
  });

  const sorted = $derived(() => {
    return [...filtered()].sort((a, b) => {
      let cmp = 0;
      if (sortKey === 'No') cmp = parseNo(a.No) - parseNo(b.No);
      else if (sortKey === 'Year') cmp = parseYear(a.Year) - parseYear(b.Year);
      else cmp = String(a[sortKey]).localeCompare(String(b[sortKey]));
      return sortDir === 'asc' ? cmp : -cmp;
    });
  });

  const pageCount = $derived(Math.max(1, Math.ceil(filtered().length / PAGE_SIZE)));
  const currentRows = $derived(sorted().slice(pageIndex * PAGE_SIZE, (pageIndex + 1) * PAGE_SIZE));
  const filteredRowsCount = $derived(filtered().length);

  function toggleSort(key: SortKey) {
    if (sortKey === key) sortDir = sortDir === 'asc' ? 'desc' : 'asc';
    else { sortKey = key; sortDir = 'asc'; }
    pageIndex = 0;
  }

  function setCategory(cat: string) { categoryFilter = cat; pageIndex = 0; }
</script>

<div class="space-y-4">
  <!-- Controls -->
  <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
    <!-- Search -->
    <div class="form-control w-full sm:max-w-xs">
      <input
        type="text"
        placeholder="Search projects, clients..."
        class="input input-bordered w-full"
        bind:value={globalFilter}
        oninput={() => { pageIndex = 0; }}
      />
    </div>

    <!-- Category Filter -->
    <div class="join">
      {#each categories as category}
        <button
          class="btn join-item btn-sm {categoryFilter === category ? 'btn-primary' : 'btn-ghost border-base-300'}"
          onclick={() => setCategory(category)}
        >
          {category}
        </button>
      {/each}
    </div>
  </div>

  <!-- Table -->
  <div class="overflow-x-auto rounded-lg border border-base-300">
    <table class="table table-zebra w-full">
      <thead>
        <tr class="bg-base-200">
          {#each (['No', 'Category', 'Client', 'Project Name', 'Year'] as SortKey[]) as col}
            <th
              class="cursor-pointer select-none hover:bg-base-300"
              onclick={() => toggleSort(col)}
            >
              {col}
              {#if sortKey === col}
                {sortDir === 'asc' ? '↑' : '↓'}
              {/if}
            </th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each currentRows as row}
          <tr class="hover">
            <td><span class="font-mono text-xs opacity-70">{row.No}</span></td>
            <td>
              <span class="badge {row.Category === 'Compressor' ? 'badge-info' : 'badge-warning'} badge-sm whitespace-nowrap">
                {row.Category}
              </span>
            </td>
            <td><span class="font-semibold">{row.Client}</span></td>
            <td><span class="text-sm">{row['Project Name']}</span></td>
            <td><span class="font-mono text-sm whitespace-nowrap">{row.Year}</span></td>
          </tr>
        {/each}
        {#if currentRows.length === 0}
          <tr>
            <td colspan="5" class="text-center py-8 text-base-content/50">
              No projects found matching your criteria
            </td>
          </tr>
        {/if}
      </tbody>
    </table>
  </div>

  <!-- Pagination -->
  <div class="flex items-center justify-between">
    <span class="text-sm text-base-content/70">
      Showing {filteredRowsCount === 0 ? 0 : pageIndex * PAGE_SIZE + 1} to {Math.min((pageIndex + 1) * PAGE_SIZE, filteredRowsCount)} of {filteredRowsCount} entries
    </span>

    <div class="join">
      <button
        class="join-item btn btn-sm"
        disabled={pageIndex === 0}
        onclick={() => pageIndex--}
      >«</button>
      <button class="join-item btn btn-sm pointer-events-none">
        Page {pageIndex + 1} of {pageCount}
      </button>
      <button
        class="join-item btn btn-sm"
        disabled={pageIndex >= pageCount - 1}
        onclick={() => pageIndex++}
      >»</button>
    </div>
  </div>
</div>
