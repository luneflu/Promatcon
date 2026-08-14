<script lang="ts">
  import {
    createTable,
    FlexRender,
    type ColumnDef, 
    type ColumnFiltersState,
    type PaginationState,
    type SortingState,
  } from '@tanstack/svelte-table';
  import {
    columnFilteringFeature,
    columnVisibilityFeature,
    createCoreRowModel,
    createFilteredRowModel,
    createPaginatedRowModel,
    createSortedRowModel,
    filterFn_equals,
    filterFn_includesString,
    globalFilteringFeature,
    rowPaginationFeature,
    rowSortingFeature,
    sortFn_alphanumeric,
    sortFn_text,
    tableFeatures,
  } from '@tanstack/table-core';

  interface ExperienceItem {
    No: string | number;
    Category: string;
    Client: string;
    'Project Name': string;
    Year: string | number;
  }

  let { data = [] }: { data?: ExperienceItem[] } = $props();

  let globalFilter = $state('');
  let categoryFilter = $state('All');
  let sorting = $state<SortingState>([{ id: 'No', desc: false }]);
  let pagination = $state<PaginationState>({ pageIndex: 0, pageSize: 15 });

  const categories = ['All', 'Compressor', 'Pressure Vessel'];

  let columnFilters = $derived<ColumnFiltersState>(
    categoryFilter === 'All' ? [] : [{ id: 'Category', value: categoryFilter }]
  );

  const columns: ColumnDef<ExperienceItem>[] = [
    {
      accessorKey: 'No',
      header: 'No',
      sortingFn: (rowA, rowB) => {
        const a = parseInt(String(rowA.original.No), 10) || 0;
        const b = parseInt(String(rowB.original.No), 10) || 0;
        return a < b ? -1 : a > b ? 1 : 0;
      },
    },
    {
      accessorKey: 'Category',
      header: 'Category',
      filterFn: 'equals',
    },
    {
      accessorKey: 'Client',
      header: 'Client',
    },
    {
      accessorKey: 'Project Name',
      header: 'Project Name',
    },
    {
      accessorKey: 'Year',
      header: 'Year',
      sortingFn: (rowA, rowB) => {
        const matchA = String(rowA.original.Year).match(/\d{4}/);
        const matchB = String(rowB.original.Year).match(/\d{4}/);
        const a = matchA ? parseInt(matchA[0], 10) : 0;
        const b = matchB ? parseInt(matchB[0], 10) : 0;
        return a < b ? -1 : a > b ? 1 : 0;
      },
    },
  ];

  const features = tableFeatures({
    columnFilteringFeature,
    globalFilteringFeature,
    columnVisibilityFeature,
    rowSortingFeature,
    rowPaginationFeature,
    filterFns: {
      equals: filterFn_equals,
      includesString: filterFn_includesString,
    },
    sortFns: {
      alphanumeric: sortFn_alphanumeric,
      text: sortFn_text,
    },
    filteredRowModel: createFilteredRowModel(),
    sortedRowModel: createSortedRowModel(),
    paginatedRowModel: createPaginatedRowModel(),
  });

  const table = createTable({
    features,
    columns,
    get data() {
      return data;
    },
    getCoreRowModel: createCoreRowModel(),
    state: {
      get globalFilter() {
        return globalFilter;
      },
      get columnFilters() {
        return columnFilters;
      },
      get sorting() {
        return sorting;
      },
      get pagination() {
        return pagination;
      },
    },
    onSortingChange: (updater) => {
      sorting = typeof updater === 'function' ? updater(sorting) : updater;
    },
    onPaginationChange: (updater) => {
      pagination = typeof updater === 'function' ? updater(pagination) : updater;
    },
    onGlobalFilterChange: (updater) => {
      globalFilter = typeof updater === 'function' ? updater(globalFilter) : updater;
    },
  });

  const filteredRowsCount = $derived(table.getFilteredRowModel().rows.length);
  const pageCount = $derived(table.getPageCount() || 1);
  const currentRows = $derived(table.getRowModel().rows);
</script>

{#snippet cellSnippet(cell: any)}
  {#if cell.column.id === 'No'}
    <span class="font-mono text-xs opacity-70">{cell.getValue()}</span>
  {:else if cell.column.id === 'Category'}
    <span class="badge {cell.getValue() === 'Compressor' ? 'badge-info' : 'badge-warning'} badge-sm whitespace-nowrap">
      {cell.getValue()}
    </span>
  {:else if cell.column.id === 'Client'}
    <span class="font-semibold">{cell.getValue()}</span>
  {:else if cell.column.id === 'Project Name'}
    <span class="text-sm">{cell.getValue()}</span>
  {:else if cell.column.id === 'Year'}
    <span class="font-mono text-sm whitespace-nowrap">{cell.getValue()}</span>
  {:else}
    <FlexRender content={cell.column.columnDef.cell} context={cell.getContext()} />
  {/if}
{/snippet}

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
      />
    </div>

    <!-- Category Filter -->
    <div class="join">
      {#each categories as category}
        <button
          class="btn join-item btn-sm {categoryFilter === category ? 'btn-primary' : 'btn-ghost border-base-300'}"
          onclick={() => {
            categoryFilter = category;
            pagination.pageIndex = 0;
          }}
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
        {#each table.getHeaderGroups() as headerGroup}
          <tr class="bg-base-200">
            {#each headerGroup.headers as header}
              <th
                class="cursor-pointer select-none hover:bg-base-300"
                onclick={header.column.getToggleSortingHandler()}
              >
                <FlexRender content={header.column.columnDef.header} context={header.getContext()} />
                {#if header.column.getIsSorted() === 'asc'}
                  ↑
                {:else if header.column.getIsSorted() === 'desc'}
                  ↓
                {/if}
              </th>
            {/each}
          </tr>
        {/each}
      </thead>
      <tbody>
        {#each currentRows as row}
          <tr class="hover">
            {#each row.getVisibleCells() as cell}
              <td>
                {@render cellSnippet(cell)}
              </td>
            {/each}
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
      Showing {filteredRowsCount === 0 ? 0 : pagination.pageIndex * pagination.pageSize + 1} to {Math.min((pagination.pageIndex + 1) * pagination.pageSize, filteredRowsCount)} of {filteredRowsCount} entries
    </span>

    <div class="join">
      <button
        class="join-item btn btn-sm"
        disabled={!table.getCanPreviousPage()}
        onclick={() => table.previousPage()}
      >«</button>
      <button class="join-item btn btn-sm pointer-events-none">
        Page {pagination.pageIndex + 1} of {pageCount}
      </button>
      <button
        class="join-item btn btn-sm"
        disabled={!table.getCanNextPage()}
        onclick={() => table.nextPage()}
      >»</button>
    </div>
  </div>
</div>
